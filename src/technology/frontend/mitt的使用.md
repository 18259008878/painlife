---
icon: fa-brands fa-vuejs
date: 2024-11-27
category:
  - Vue
tag:
  - mitt
---

# mitt 的使用

在我开发的飞马旅游中为了让地图的主题跟随项目主题变化而变化，
特引入这个工具，用于监听主题变化，然后触发地图主题变化。

## 安装

```bash
npm install mitt
```

## 使用

先来一个工具类

```js
import mitt from 'mitt';

const emitter = mitt();

export default emitter;

```

然后是事件发起

```js
import emitter from '@/util/eventBus.js';
emitter.emit("theme", { message });
```

最后是事件监听

```js
import emitter from '@/util/eventBus.js';
emitter.on("theme", (data) => {
  console.log(data);
}/* 这里可以写上你的回调函数 */);
```

不需要的时候，记得取消监听

```js
emitter.off("theme", (data) => {
  console.log(data);
}/* 这里可以写上你的回调函数 */);
```
