---
icon: fa-solid fa-database
date: 2024-11-26
category:
  - 数据库
  - mybatis
  - 复杂SQL
---

# MyBatis复杂SQL查询

## 一对一查询

这里指的是一个对象中包含一个对象。

这时候我们可以通过`<association>`标签来实现。

举个例子

一个路线项目包含一个地点，地点包含经纬度，地址等信息。

`ResultMap`写法如下

```xml
<!-- RouteItemMapper.xml -->
<resultMap id="routeItemResultMap" type="RouteItem">
    <id property="id" column="id" />
    <result property="order" column="order" />
    <association property="location" column="loc_id" select="com.stu.mapper.LocationMapper.findLocationById" />
</resultMap>

<!-- LocationMapper.xml -->
<resultMap id="locationResultMap" type="Location">
    <id property="id" column="id" />
    <result property="longitude" column="longitude" />
    <result property="latitude" column="latitude" />
    <result property="address" column="address" />
</resultMap>
```

查询的时候直接如下面写即可

```xml
<select id="findRouteItemsByRouteId" resultMap="routeItemResultMap">
    SELECT
        `id`,
        `loc_id`,
        `order`
    FROM
        `route_item`
    WHERE
        `route_id` = #{routeId}
    ORDER BY
        `order`
</select>
```

这时候会根据`loc_id`来查询`Location`对象，并且赋值给`RouteItem`对象的`location`属性。

## 一对多查询

这里指的是一个对象中包含多个对象。

这时候我们可以通过`<collection>`标签来实现。

举个例子

一个路线列表包含多个路线项目

`ResultMap`写法如下

```xml
<!-- RouteListMapper.xml -->
<resultMap id="routeResultMap" type="Route">
    <id property="id" column="id" />
    <result property="name" column="name" />
    <collection property="routeItems" column="id" select="com.stu.mapper.RouteItemMapper.findRouteItemsByRouteId" />
</resultMap>

<!-- RouteItemMapper.xml -->
<resultMap id="routeItemResultMap" type="RouteItem">
    <id property="id" column="id" />
    <result property="order" column="order" />
    <association property="location" column="loc_id" select="com.stu.mapper.LocationMapper.findLocationById" />
</resultMap>
```

查询的时候直接如下面写即可

```xml
<select id="findRouteListById" resultMap="routeResultMap">
    SELECT
        `id`,
        `name`
    FROM
        `route`
    WHERE
        `id` = #{id}
</select>
```

这时候会根据`id`来查询`RouteItem`对象，并且赋值给`Route`对象的`routeItems`属性。

## 分类查询

假设我们有一个父类，几个子类，现在我们要查询父类，并且查询出其子类。

（我这里父类和子类的表是分开的 参见[从面向对象到数据库存储](./从面向对象到数据库存储.md)）

这时候我们可以通过`<discriminator>`标签来实现。

假设一个`Item`类派生出`Spot`, `Hotel`, `Restaurant`

`Item`表中存储了一个`type`字段，用来区分是哪个子类。

`ResultMap`写法如下

```xml
<!-- ItemMapper.xml -->
<resultMap id="itemResultMap" type="Item">
    <id property="id" column="id" />
    <result property="name" column="name" />
    <result property="description" column="desc" />
    <result property="itemType" column="type" />

    <discriminator javaType="String" column="type">
        <case value="SPOT" resultMap="com.stu.mapper.SpotMapper.spotResultMap" />
        <case value="HOTEL" resultMap="com.stu.mapper.HotelMapper.hotelResultMap" />
        <case value="RESTAURANT" resultMap="com.stu.mapper.RestaurantMapper.restaurantResultMap" />
    </discriminator>
</resultMap>

<!-- SpotMapper.xml -->
<!-- 这里的spotResultMap继承了itemResultMap -->
<resultMap id="spotResultMap" type="Spot" extends="com.stu.mapper.ItemMapper.itemResultMap">
    <result property="avgLevel" column="avg_level" />
    <result property="starNumber" column="star_number" />
</resultMap>
```

查询写法如下

```xml
<select id="findItemById" resultMap="itemResultMap">
    SELECT
        `filtered_item`.`id`,
        `filtered_item`.`name`,
        `filtered_item`.`desc`,
        `filtered_item`.`type`,
        `filtered_item`.`loc_id`,
        CASE
            WHEN `filtered_item`.`type` = 'SPOT' THEN `spot`.`avg_level`
            WHEN `filtered_item`.`type` = 'HOTEL' THEN `hotel`.`avg_level`
            WHEN `filtered_item`.`type` = 'RESTAURANT' THEN `restaurant`.`avg_level`
            ELSE NULL
        END AS `avg_level`,
        CASE
            WHEN `filtered_item`.`type` = 'SPOT' THEN `spot`.`star_number`
            WHEN `filtered_item`.`type` = 'HOTEL' THEN `hotel`.`star_number`
            WHEN `filtered_item`.`type` = 'RESTAURANT' THEN `restaurant`.`star_number`
            ELSE NULL
        END AS `star_number`,
        `hotel`.`avg_price` AS `hotel_avg_price`,
        `restaurant`.`avg_price` AS `restaurant_avg_price`,
        `restaurant`.`type` AS `restaurant_type`,
        `restaurant`.`recommend` AS `restaurant_recommend`
    FROM
        (
            SELECT
                `item`.`id`,
                `item`.`name`,
                `item`.`desc`,
                `item`.`type`,
                `item`.`loc_id`
            FROM
                `item`
            WHERE
                `item`.`id` = #{id}
        ) AS `filtered_item`
    LEFT JOIN `spot` ON `filtered_item`.`id` = `spot`.`id`
    LEFT JOIN `hotel` ON `filtered_item`.`id` = `hotel`.`id`
    LEFT JOIN `restaurant` ON `filtered_item`.`id` = `restaurant`.`id`;
</select>
```

## 总结

MyBatis的复杂查询主要通过`<resultMap>`标签来实现，通过`<association>`和`<collection>`标签来关联对象，通过`<discriminator>`标签来实现分类查询。
