---
icon: fa-brands fa-java
date: 2024-11-27
category:
  - java
tag:
  - mapStruct
---

# Java类之间的转换-mapStruct的使用

[前面](./java的多个o.md)说到，在开发中我们会用到很多类。那么这些类之间应该如何做转换？

下面介绍mapStruct

## mapStruct是什么

首先引用[官网](https://mapstruct.org/)的原话:

> MapStruct is a code generator that greatly simplifies the implementation of mappings between Java bean types based on a convention over configuration approach.
> The generated mapping code uses plain method invocations and thus is fast, type-safe and easy to understand.

大概意思是，mapStruct是一个代码生成器，它大大简化了基于约定优于配置的方法在Java bean类型之间进行映射的实现。生成的映射代码使用普通的方法调用，因此速度快、类型安全且易于理解。

## maven引入

maven坐标如下：

```xml
<dependency>
    <groupId>org.mapstruct</groupId>
    <artifactId>mapstruct</artifactId>
    <version>1.5.5.Final</version>
</dependency>
<dependency>
    <groupId>org.mapstruct</groupId>
    <artifactId>mapstruct-processor</artifactId>
    <version>1.5.5.Final</version>
    <scope>provided</scope>
</dependency>
```

## 使用

假设有一个`Blog`的po

定义如下

```java
@Schema(description = "博客实体类")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Blog {
    @Schema(description = "主键id")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Long id;
    @Schema(description = "博客作者id")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Long userId;
    @Schema(description = "博客标题")
    private String title;
    @Schema(description = "博客描述")
    private String description;
    @Schema(description = "博客内容")
    private String content;
    @Schema(description = "博客创建时间戳", defaultValue = "创建博客时的时间戳")
    @JsonFormat(timezone="GMT+8")
    private Timestamp createAt;
}
```

还有一个`BlogResp`的vo

定义如下

```java
@Schema(description = "博客响应")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BlogResp {
    @Schema(description = "主键id")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Long id;
    @Schema(description = "发布博客的用户id")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Long userId;
    @Schema(description = "发布博客的用户昵称")
    private String userName;
    @Schema(description = "发布博客的用户头像")
    private String userAvatar;
    @Schema(description = "博客标题")
    private String title;
    @Schema(description = "博客描述")
    private String description;
    @Schema(description = "博客内容")
    private String content;
    @Schema(description = "博客创建时间戳", defaultValue = "创建博客时的时间戳")
    @JsonFormat(timezone="GMT+8")
    private Timestamp createAt;
}
```

可以看出多了两个属性，分别是`userName`和`userAvatar`，这两个属性需要从`User`表中获取。

那么如何将`Blog`转换为`BlogResp`呢？

我们只需要定义一个接口，用于定义转换规则。

```java
@Mapper(componentModel = "spring")
public interface BlogConvertMapper {
    BlogConvertMapper INSTANCE = Mappers.getMapper(BlogConvertMapper.class);

    /**
     * 将博客实体类转换为博客响应类
     *
     * @param blog         博客实体类
     * @param userAvatar   用户头像
     * @param userNickName 用户昵称
     * @return 博客响应类
     */
    @Mappings({
            @Mapping(target = "userAvatar", source = "userAvatar"),
            @Mapping(target = "userName", source = "userNickName")
    })
    BlogResp toBlogResp(Blog blog, String userAvatar, String userNickName);
}
```

其中`@Mapper`注解用于标识这是一个mapStruct的映射接口，`componentModel = "spring"`表示这个接口是一个spring的bean。

`@Mappings`注解用于定义映射规则，`@Mapping`注解用于定义具体的映射规则。

然后我们就可以在代码中使用这个接口了。

```java
@Autowired
private BlogConvertMapper blogConvertMapper;

public BlogResp convertBlogToResp(Blog blog, String userAvatar, String userNickName) {
    return blogConvertMapper.toBlogResp(blog, userAvatar, userNickName);
}
```

如果没有`componentModel = "spring"`

那么接口使用方式如下

```java
public BlogResp convertBlogToResp(Blog blog, String userAvatar, String userNickName) {
    return BlogConvertMapper.INSTANCE.toBlogResp(blog, userAvatar, userNickName);
}
```

其实加了`componentModel = "spring"`之后，在字节码里面会加上`@Component`，方便我们使用`@Autowired`

以下为字节码

```java
@Component
public class BlogConvertMapperImpl implements BlogConvertMapper {
   public BlogConvertMapperImpl() {
   }

   public BlogResp toBlogResp(Blog blog, String userAvatar, String userNickName) {
      if (blog == null && userAvatar == null && userNickName == null) {
         return null;
      } else {
         BlogResp.BlogRespBuilder blogResp = BlogResp.builder();
         if (blog != null) {
            blogResp.content(blog.getContent());
            blogResp.createAt(blog.getCreateAt());
            blogResp.description(blog.getDescription());
            blogResp.id(blog.getId());
            blogResp.title(blog.getTitle());
            blogResp.userId(blog.getUserId());
         }

         blogResp.userAvatar(userAvatar);
         blogResp.userName(userNickName);
         return blogResp.build();
      }
   }
}

```

## 总结

mapStruct是一个用于Java类之间的转换的工具，它可以自动生成转换代码，使得转换过程更加简单和高效。
