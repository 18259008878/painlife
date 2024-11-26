---
icon: fa-brands fa-java
date: 2024-11-26
category:
  - java
---

# Java的多个o

以下介绍常见的几个o。

## pojo

pojo是Plain Old Java Object的缩写，它是一个简单的Java对象，没有继承任何类，没有实现任何接口，没有使用任何注解，没有包含任何业务逻辑，没有包含任何数据库操作，没有包含任何网络通信，没有包含任何第三方库的依赖。

其实大概意思就是只有data、constructor、getter、setter、toString、equals、hashCode这些方法，没有其他的方法。

## vo

vo是View Object的缩写，它是一个视图对象，用于表示一个视图层的数据。vo通常用于表示一个视图层的数据，例如一个网页的表单数据，或者一个网页的显示数据。vo通常用于作为视图层的参数和返回值。

可以理解为Controller层返回的Resp对象，包含前端想要的数据，过滤掉前端不需要的数据。

## dto

dto是Data Transfer Object的缩写，它是一个数据传输对象，用于在不同的层之间传递数据。dto通常用于表示一个业务实体，或者用于表示一个数据库表中的一条记录。dto通常用于作为数据传输对象（DTO），或者用于作为业务逻辑层的参数和返回值。

理解为dto为各层传输的对象（前端传后端的数据和后端传前端的数据，所以按照现在前后分离的思想来看，vo也可以认为是一种dto）。

## po

po是Persistent Object的缩写，它是一个持久化对象，用于表示一个数据库表中的一条记录。po通常用于表示一个数据库表中的一条记录。po通常用于作为数据传输对象（DTO），或者用于作为业务逻辑层的参数和返回值。

理解为po中的字段和数据库中的字段一一对应。

## pojo、vo、dto、po的区别

pojo、vo、dto、po都是Java中常用的对象类型，它们之间的区别如下：

- pojo：Plain Old Java Object，普通Java对象 只有数据，和getter和setter。
- vo：View Object 显示层对象 专门为前端服务的对象，包含前端想要的数据，过滤掉前端不需要的数据。
- dto：Data Transfer Object，数据传输对象，用于在不同的层之间传递数据。
- po：Persistent Object，持久化对象，其中每个字段都和数据库中的属性一一对应

## 个人理解

这么多个o（还有些没列出来），其实都是根据业务场景来划分的，没有固定的规则，所以大家可以根据自己的业务场景来划分。
个人写只用到vo(Resp), dto(Req), po(entity)。
应当注意的是这些o之间并不是固定的，他们之间可以相互转换。

## 参考资料

[概念POJO、DTO、DAO、PO、BO、VO、QO、ENTITY详解](https://blog.csdn.net/qq_40610003/article/details/109007539)
