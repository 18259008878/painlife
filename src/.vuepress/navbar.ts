import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "技术",
    icon: "fa-solid fa-code",
    prefix: "/technology/",
    children: [
      {
        text: "前端",
        prefix: "/technology/frontend/",
        link: "/technology/frontend/",
      },
      {
        text: "后端",
        prefix: "/technology/backend/",
        link: "/technology/backend/",
      }
    ]
  },
  {
    text: "杂谈",
    icon: "fa-solid fa-chart-bar",
    prefix: "/posts/",
    link: '/posts/'
  },
  {
    text: '关于',
    icon: 'fa-solid fa-circle-info',
    prefix: 'about/',
    link: '/about/',
  },
]);
