import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "杂谈",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "测试博客",
        icon: "pen-to-square",
        link: "test"
      }
    ]
  },
]);
