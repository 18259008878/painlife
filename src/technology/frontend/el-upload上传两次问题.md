---
icon: fa-brands fa-vuejs
date: 2024-11-27
category:
  - Vue
tag:
  - element-plus
  - el-upload
---

# el-upload上传两次问题

## 问题

使用 `el-upload` 组件上传文件时，发现每次上传都会触发两次 `before-upload` 和 `change` 事件，导致上传两次。

## 解决方案

```vue
<el-upload class="avatar-uploader" action="/api/uploadimage"
    :show-file-list="false" :on-success="handleAvatarUpload" :headers="uploadHeaders">
    <el-avatar v-if="avatar" :src="avatar" :size="100" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
```

```js
const token = localStorage.getItem('accseeToken');
const refreshToken = localStorage.getItem('refreshToken');
const uploadHeaders = {
    "Authorization": `Bearer ${token}`,
    "Refresh-Token": refreshToken
};

function handleAvatarUpload(response) {
    console.log(response);
    avatar.value = response.data;
}
```

这样在action的时候就会上传文件，在`handleAvatarUpload`的时候就不会再上传文件了。
