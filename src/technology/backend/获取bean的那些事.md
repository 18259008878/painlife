---
icon: fa-brands fa-java
date: 2024-11-27
category:
  - java
tag:
  - Bean
---

# 获取Bean的那些事

## 前言

有一个类获取Bean

```java
@Component
public class ServiceFactory {

    @Autowired
    private ApplicationContext applicationContext;

    /**
     * 根据服务类型获取服务实例
     *
     * @param <T>          服务类型
     * @param serviceClass 服务类名
     * @return 服务实例
     */
    public <T> T getService(Class<T> serviceClass) {
        return applicationContext.getBean(serviceClass);
    }

    /**
     * 根据服务名称获取服务实例
     *
     * @param <T>         服务类型
     * @param serviceName 服务名称
     * @return 服务实例
     */
    public <T> T getService(String serviceName) {
        return (T) applicationContext.getBean(serviceName);
    }
}
```

使用如下

```java
@Autowired
private ServiceFactory serviceFactory;

BlogService blogService = serviceFactory.getService(BlogService.class);
```

然后突然发现有些时候无法获取某个Bean，报错如下

```java
org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean of type 'xxxxx' available
```

## 解决方案

我去检查了一下发现这个Bean确实存在，但是他的方法上加了`@Async`导致了无法获取，于是我去查了一下资料，发现`@Async`会导致Bean被代理，而代理Bean和原始Bean是不一样的，所以无法获取。

所以我的解决方案是通过Bean的名称获取Bean，而不是通过类型获取Bean，这样就可以获取到代理Bean了。
