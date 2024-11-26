import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "杂谈",
    icon: "home",
    prefix: "/posts/",
    children: [
      {
        text: "测试博客",
        icon: "pen-to-square",
        link: "test"
      }
    ]
  },
  {
    text: '关于',
    icon: 'info',
    prefix: 'about/',
    link: '/about/',
  },
]);
