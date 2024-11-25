import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/painlife/",

  lang: "zh-CN",
  title: "\"极乐\"人生",
  description: "\"极乐\"人生",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
