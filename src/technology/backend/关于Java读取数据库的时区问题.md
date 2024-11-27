---
icon: fa-solid fa-database
date: 2024-11-27
category:
  - 数据库
tag:
  - 时区问题
---

# 关于Java读取数据库的时区问题

## 前言

我的MySQL是通过压缩包安装的，也配置了my.ini文件

配置如下

```ini
default-time_zone='+8:00'
```

可以看到我配置了时区，然后我在数据库中访问时间戳也是正常的，但是当我通过Java访问数据库的时候，时间戳并没有加8个小时，而是显示的是0时区的时间。

## 解决方案

```java
@JsonFormat(timezone="GMT+8")
private Timestamp createAt;
```

在实体类中，将时间戳字段加上这个注解，就可以解决时区问题。
