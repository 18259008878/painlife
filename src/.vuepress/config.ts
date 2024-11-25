import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/painlife/",
  lang: "zh-CN",
  title: "\"极乐\"人生",
  description: "\"极乐\"人生",
  head: [
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://code.jquery.com/jquery-3.7.1.js",
      "defer": "true"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/painlife/js/mouseClickEffect.js",
      "defer": "true"
    }]
  ],
  theme,
});

