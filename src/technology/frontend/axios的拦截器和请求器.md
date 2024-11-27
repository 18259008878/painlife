---
icon: fa-brands fa-vuejs
date: 2024-11-27
category:
  - Vue
tag:
  - axios
---

# axios的拦截器和请求器

## 首先配置基础路径

首先在vite.config.js中配置基础路径

```js
server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
```

然后使用axios.create创建一个axios实例

```js
import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
});

```

## 拦截器

### 请求拦截器

```js
service.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => Promise.reject(error)
);
```

### 响应拦截器

```js
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 200) {
            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            return res;
        }
    },
    error => {
        console.log('err' + error);
        return Promise.reject(error);
    }
);
```

## 使用

以用户登录为例

```js
async function login() {
      try {
          const response = await service.post('/login', {
              phone: user.value.phone,
              password: user.value.password,
          });
          if (response.data.code == 0) {
              localStorage.setItem("accessToken", response.data.data.tokens.accessToken);
              localStorage.setItem("refreshToken", response.data.data.tokens.refreshToken);
              ElMessage.success("登录成功");
              return true;
          }
          ElMessage.error(response.data.msg);
          return false;
      } catch (error) {
          ElMessage.error("网络错误");
          console.error(error);
          return false;
      }
  }
```
