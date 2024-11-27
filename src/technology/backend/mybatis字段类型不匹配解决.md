---
icon: fa-solid fa-database
date: 2024-11-26
category:
  - MyBatis
tag:
  - MyBatis的字段匹配问题
---

# MyBatis字段类型不匹配解决

## 前言

在开发过程中，我们经常会遇到数据库字段类型与Java实体类属性类型不匹配的问题。

这时，我们需要在MyBatis的xml文件设置resultMap，将数据库字段类型与Java实体类属性类型进行映射。

## 样例

```xml
<resultMap id="userResultMap" type="User">
  <id property="id" column="id" />
  <result property="phone" column="phone" />
  <result property="password" column="pwd" />
  <result property="gender" column="gender" />
  <result property="nickName" column="nickName" />
  <result property="birthday" column="birthday" />
  <result property="avatar" column="avatar" />
</resultMap>
```

然后就可以在select语句中使用resultMap属性了。

```xml
<select id="getUserById" resultMap="userResultMap">
  SELECT * FROM user WHERE id = #{id}
</select>
```

## 注意事项

1. resultMap的id属性必须与select语句的resultMap一致。
2. type属性必须与Java实体类的全限定名一致。（建议加上包名）
3. id标签的property属性必须与Java实体类的属性名一致，column属性必须与数据库字段名一致。
4. result标签的property属性必须与Java实体类的属性名一致，column属性必须与数据库字段名一致。

## 总结

通过设置resultMap，我们可以将数据库字段类型与Java实体类属性类型进行映射，解决字段类型不匹配的问题。
