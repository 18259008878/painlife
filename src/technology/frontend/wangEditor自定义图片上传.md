---
icon: fa-brands fa-vuejs
date: 2024-11-27
category:
  - Vue
tag:
  - wangEditor自定义图片上传
---

# wangEditor自定义图片上传

## 安装

```bash
npm install @wangeditor/editor --save
npm install @wangeditor/editor-for-vue@next --save
```

## 实现自定义图片上传

首先是`uploadImage`方法，用于上传图片，并返回图片的url。

```js
async function uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);
    const loadingInstance = ElLoading.service({
        lock: true,
        text: '正在加载...',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0.4)'
    });
    try {
        const res = await service.post('/uploadimage', formData);
        ElMessage.success('上传成功');
        return res.data;
    } catch (error) {
        ElMessage.error('上传失败');
    } finally {
        loadingInstance.close();
    }
}
```

后端返回接口样例如下

```json
{
    "code": 0, // 0表示成功，其他表示失败
    "msg": "图片上传成功",
    "data": {
        "url": "http://example.com/image.jpg"
    }
}
```

然后是自定义的图片上传。

```js
const { uploadImage } = useImage();
// 配置上传图片
editorConfig.MENU_CONF['uploadImage'] = {
    async customUpload(file, insertFn) {
        const data = await uploadImage(file);
        console.log("editBlog: ", data.data);
        insertFn(data.data, data.data, data.data);
    }
};
```
