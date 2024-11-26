import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "技术",
    icon: "fa-solid fa-code",
    prefix: "/technology/",
    children: [
      {
        text: "vue",
        prefix: "/technology/vue/",
        link: "/technology/vue/",
      },
      {
        text: "spring",
        prefix: "/technology/spring/",
        link: "/technology/spring/",
      }
    ]
  },
  {
    text: "杂谈",
    icon: "fa-solid fa-bars",
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
