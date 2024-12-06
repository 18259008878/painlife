import { defineUserConfig } from "vuepress";
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
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
      tips: {
        idleTips: {
          wordTheDay: true
        }
      },
      models: [
        {
          path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4-SOPMOD-II-1/normal/model.json',
          scale: 0.08,
          mobileScale: 0.04,
          position: [0, 100],
          stageStyle: {
            height: 600,
          }
        },
        {
          path: 'https://model.oml2d.com/HK416-2-destroy/model.json',
          scale: 0.12,
          mobileScale: 0.08,
          position: [0, 50]
        },
        {
          path: 'https://model.oml2d.com/HK416-1-normal/model.json',
          scale: 0.1,
          mobileScale: 0.06,
          position: [0, 100],
          stageStyle: {
            height: 600,
          }
        },
        {
          path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/WA2000-1/destroy/model.json',
          scale: 0.1,
          mobileScale: 0.06,
          position: [0, 50],
          stageStyle: {
            height: 600,
          }
        },
        {
          path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4-SOPMOD-II-2/normal/model.json',
          scale: 0.1,
          mobileScale: 0.06,
          position: [0, 100],
          stageStyle: {
            height: 680,
          }
        },
        {
          path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4-SOPMOD-II-1/destroy/model.json',
          scale: 0.08,
          mobileScale: 0.04,
          position: [0, 100],
          stageStyle: {
            height: 620,
          }
        },
        {
          path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4-SOPMOD-II-2/destroy/model.json',
          scale: 0.12,
          mobileScale: 0.08,
          position: [0, 50],
          stageStyle: {
            height: 650,
          },
        },
        {
          path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4A1-2/normal/model.json',
          scale: 0.1,
          mobileScale: 0.06,
          position: [0, 100],
          stageStyle: {
            height: 660,
          }
        },
        {
          path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4A1-2/destroy/model.json',
          scale: 0.1,
          mobileScale: 0.06,
          position: [0, 100],
          stageStyle: {
            height: 600,
          }
        },
        {
          path: 'https://raw.githubusercontent.com/zenghongtu/live2d-model-assets/master/assets/Girls\'%20Frontline/ak12_3302/ak12_3302.model.json',
          scale: 0.12,
          mobileScale: 0.08,
          position: [0, 100],
          stageStyle: {
            height: 640,
          }
        },
        {
          path: 'https://raw.githubusercontent.com/zenghongtu/live2d-model-assets/master/assets/Girls\'%20Frontline/dsr50_2101/dsr50_2101.model.json',
          scale: 0.08,
          mobileScale: 0.04,
          position: [0, 100],
          stageStyle: {
            height: 640,
          }
        },
        {
          path: 'https://raw.githubusercontent.com/zenghongtu/live2d-model-assets/master/assets/moc3/dafeng_2/dafeng_2.model3.json',
          scale: 0.1,
          mobileScale: 0.06,
          position: [-60, 100],
          stageStyle: {
            height: 740,
          }, showHitAreaFrames: true
        },
        {
          path: 'https://raw.githubusercontent.com/zenghongtu/live2d-model-assets/master/assets/moc3/dafeng_4/dafeng_4.model3.json',
          scale: 0.08,
          mobileScale: 0.04,
          position: [0, 100],
          stageStyle: {
            height: 700,
          }
        }
      ]
    }),
    slimsearchPlugin({
      indexContent: true,
      autoSuggestions: true
    })
  ],
  theme,
});

