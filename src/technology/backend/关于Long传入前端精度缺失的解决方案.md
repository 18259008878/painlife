---
icon: fa-brands fa-java
date: 2024-11-27
category:
  - java
tag:
  - Long精度缺失
---

# 关于Long传入前端精度缺失的解决方案

## 前言

在Java中，Long类型是64位有符号整数，最大值为9223372036854775807，最小值为-9223372036854775808。而在JavaScript中，Number类型是64位双精度浮点数，最大值为1.7976931348623157e+308，最小值为5e-324。因此，当Java中的Long类型值超过JavaScript中的Number类型范围时，就会出现精度缺失的问题。

## 解决方案

直接上代码

```java
@JsonFormat(shape = JsonFormat.Shape.STRING)
private Long id;
```

使用@JsonFormat注解，将Long类型转换为字符串类型，这样就可以避免精度缺失的问题了。
