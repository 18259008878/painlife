// Origin code from https://github.com/mo7cc/blog-source.git
import { sidebar } from 'vuepress-theme-hope';

const back_posts = {
  text: '返回总目录',
  icon: "fa-solid fa-bars",
  link: '/posts/',
};

const back_technology = {
  text: '返回技术',
  icon: "fa-solid fa-code",
  link: '/technology/',
};

export default sidebar({
  '/about/': [
    back_posts,
    {
      text: '关于',
      icon: "fa-solid fa-lightbulb",
      link: '/about/',
      children: 'structure',
    },
  ],
  '/technology/': [
    back_posts,
    {
      text: '技术',
      icon: "fa-solid fa-code",
      link: '/technology/',
      children: 'structure',
    },
  ],
  '/technology/backend/': [
    back_technology,
    {
      text: '后端',
      icon: "fa-solid fa-terminal",
      link: '/technology/backend/',
      children: 'structure',
    },
  ],

  '/technology/frontend/': [
    back_technology,
    {
      text: '前端',
      icon: "fa-brands fa-vuejs",
      link: '/technology/frontend/',
      children: 'structure',
    },
  ],

  '/': [
    '',
    {
      text: '杂谈',
      icon: "fa-solid fa-bars",
      prefix: 'posts/',
      link: '/posts/',
      children: 'structure',
    },

    {
      text: '技术',
      icon: "fa-solid fa-code",
      prefix: 'technology/',
      link: '/technology/',
      children: 'structure',
    },

    {
      text: '关于',
      icon: "fa-solid fa-lightbulb",
      prefix: 'about/',
      link: '/about/',
      children: 'structure',
    },
  ],
});
