---
icon: fa-brands fa-java
date: 2024-11-28
category:
  - java
tag:
  - redis
  - 锁
  - Spring
---

# Redis锁在Spring中的使用

## 工具类

```java
@Component
public class RedisDistributedLock {

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    // 过期时间，单位毫秒
    private static final long LOCK_EXPIRE_TIME = 1000;

    // 使用lua脚本确保原子性
    private static final String LOCK_SCRIPT = "if redis.call('setnx', KEYS[1], ARGV[1]) == 1 then " +
            "redis.call('pexpire', KEYS[1], ARGV[2]); " +
            "return true; " +
            "else return false; " +
            "end";

    private static final String UNLOCK_SCRIPT = "if redis.call('get', KEYS[1]) == ARGV[1] then " +
            "redis.call('del', KEYS[1]); " +
            "return true; " +
            "else return false; " +
            "end";

    public boolean lock(String key, String value) {
        String[] keys = { key };
        String[] args = { value, String.valueOf(LOCK_EXPIRE_TIME) };
        RedisScript<Boolean> script = new DefaultRedisScript<>(LOCK_SCRIPT, Boolean.class);
        Boolean result = redisTemplate.execute(script, Arrays.asList(keys), args);
        return result != null && result;
    }

    public boolean unlock(String key, String value) {
        String[] keys = { key };
        String[] args = { value };
        RedisScript<Boolean> script = new DefaultRedisScript<>(UNLOCK_SCRIPT, Boolean.class);
        Boolean result = redisTemplate.execute(script, Arrays.asList(keys), args);
        return result != null && result;
    }
}
```

这里只是简单演示，所以固定了锁的过期时间。

## 使用

下面展示一个收藏项目的例子

```java
@Transactional(isolation = Isolation.SERIALIZABLE)
public Map<String, Object> starItem(ItemDTO itemDTO) {
    if (itemDTO == null || itemDTO.getUser() == null || itemDTO.getItem() == null
            || itemDTO.getUser().getId() == null || itemDTO.getItem().getId() == null) {
        throw new IllegalArgumentException("参数错误");
    }

    String lockKey = "lock:star:item:" + itemDTO.getItem().getId();
    String lockValue = IdUtil.simpleUUID();

    int retryCount = 5;
    // 轮询
    while (retryCount-- > 0) {
        try {
            if (!redisDistributedLock.lock(lockKey, lockValue)) {
                throw new CannotAcquireLockException("please operate later!!");
            }
            Item item = itemCacheService.get(itemDTO.getItemId());
            if (item == null) {
                item = itemMapper.findItemById(itemDTO.getItemId());
            }

            if (itemMapper.isItemStarredByUser(itemDTO) > 0) {
                return null;
            }

            // 这里简化了逻辑，主要展示锁的使用
            item.setStarNumber(item.getStarNumber() + 1);
            itemMapper.updateStarNumber(item);

            itemMapper.insertItemUsr(itemDTO);
            User newUser = userMapper.findUserById(itemDTO.getUser().getId());
            Item newItem = itemMapper.findItemById(itemDTO.getItem().getId());

            itemCacheService.cache(newItem);
            userCacheService.cache(newUser);

            Map<String, Object> map = Map.of(
                    "user", newUser,
                    "item", newItem);
            return map;
        } catch (PessimisticLockingFailureException e) {
            if (retryCount <= 0) {
                throw e;
            }
            try {
                Thread.sleep((long) (Math.pow(2, 5 - retryCount) * 100)); // 指数退避
            } catch (InterruptedException ie) {
                Thread.currentThread().interrupt();
            }
        } finally {
            redisDistributedLock.unlock(lockKey, lockValue);
        }
    }
    throw new BussinessException("未知错误");
}
```

本机试验1000个用户3s内同时收藏一个项目，没有出现重复收藏的情况。且异常率小于1%。
