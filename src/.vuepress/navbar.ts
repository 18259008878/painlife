import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "杂谈",
    icon: "note",
    prefix: "/posts/",
    link: '/posts/'
  },
  {
    text: '关于',
    icon: 'info',
    prefix: 'about/',
    link: '/about/',
  },
]);
