---
icon: fa-brands fa-java
date: 2024-11-26
category:
  - java
tag:
  - springCache
  - redis
---

# springCache结合redis

## 引入依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
```

## 配置

```yaml
spring:
    data:
        redis:
            port: 6379
            database: 0
            connect-timeout: 5s
            timeout: 5s
    cache:
        type: redis
        redis:
            time-to-live: 3600000
            cache-null-values: false
```

```java
@Configuration
public class CacheConfig {
    // 客制化cacheManager
    @Bean
    public CacheManager cacheManager(RedisConnectionFactory connectionFactory) {
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
                // .entryTtl(Duration.ofMinutes(10))
                .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(StringRedisSerializer.UTF_8))
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(new GenericJackson2JsonRedisSerializer()));

        return RedisCacheManager.builder(connectionFactory)
                .cacheDefaults(config)
                .transactionAware()
                .build();
    }

    // 客制化redisTemplate，使用jackon序列化
    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        GenericJackson2JsonRedisSerializer genericJackson2JsonRedisSerializer = new GenericJackson2JsonRedisSerializer();
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setKeySerializer(StringRedisSerializer.UTF_8);
        redisTemplate.setValueSerializer(genericJackson2JsonRedisSerializer);
        redisTemplate.setHashKeySerializer(StringRedisSerializer.UTF_8);
        redisTemplate.setHashValueSerializer(genericJackson2JsonRedisSerializer);
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        return redisTemplate;
    }
}
```

## 使用

接下来我们就可以愉快的使用装饰器来进行缓存了

```java
@Cacheable(value = "user", key = "#id")
public User getUserById(Long id) {
    return userMapper.selectById(id);
}

@CachePut(value = "user", key = "#user.id")
public User updateUser(User user) {
    userMapper.updateById(user);
    return user;
}

@CacheEvict(value = "user", key = "#id")
public void deleteUser(Long id) {
    userMapper.deleteById(id);
}
```

如果你想编程式缓存，可以使用`CacheManager`来获取`Cache`，然后使用`Cache`的方法。

代码如下

先来一个接口

```java
public interface ICacheService<E> {
    /**
     * 缓存数据
     * 键值为ID
     * @param val 需要缓存的数据
     */
    @Async("AsyncExecutor")
    void cache(E val);

    /**
     * 根据ID获取缓存数据
     * @param id 数据ID
     * @return 缓存数据
     */
    E get(Long id);

    @EventListener
    @Async("AsyncExecutor")
    void clearCache(UpdateEvent event);
}
```

然后具体实现一下

```java
@Service
public class UserCacheService implements ICacheService<User> {
    @Autowired
    private CacheManager cacheManager;

    @Override
    public void cache(User user) {
        Cache cache = cacheManager.getCache("user");
        String key = "userId#" + user.getId();
        cache.put(key, user);
    }

    @Override
    public User get(Long id) {
        Cache cache = cacheManager.getCache("user");
        String key = "userId#" + id;
        return cache.get(key, User.class);
    }

    @Override
    public void clearCache(UpdateEvent event) {
        Cache cache = cacheManager.getCache("user");
        cache.clear();
    }
}
```

使用如下

```java
@Autowired
private UserMapper userMapper;

@Autowired
private ICacheService<User> userCacheService;

public List<User> findAllUsers() {
    List<Long> ids = userMapper.findAllIds();
    List<User> users = new ArrayList<>();
    for (Long id : ids) {
        User user = userCacheService.get(id);
        if (user != null) {
            users.add(user);
        } else {
            user = userMapper.findUserById(id);
            userCacheService.cache(user);
            users.add(user);
        }
    }
    return users;
}
```

这样当我们使用像`selectAll`这样的方法的时候可以逐条缓存起来。

## 总结

通过springCache可以更优雅地实现缓存功能。如果只是简单地缓存实现，那么直接用装饰器就行。即使复杂的功能也不会有太多的代码。
