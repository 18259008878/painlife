import { defineUserConfig } from "vuepress";
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';
import theme from "./theme.js";
import { getDirname, path } from 'vuepress/utils';

const __dirname = getDirname(import.meta.url);
const SrcPath = path.resolve(__dirname, '../');

export default defineUserConfig({
  alias: {
    '@components': path.resolve(__dirname, 'components'),
    '@src': SrcPath,
  },

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
  plugins: [
    // live2d看板娘
    oml2dPlugin({
      mobileDisplay: true,
      models: [
        {
          path: 'https://model.oml2d.com/HK416-2-destroy/model.json',
          scale: 0.12,
          mobileScale: 0.08,
          position: [-10, 50],
          stageStyle: {
            width: 350
          }
        }
      ]
    })
  ],
  theme,
});

