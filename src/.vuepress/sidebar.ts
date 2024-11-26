// Origin code from https://github.com/mo7cc/blog-source.git
import { sidebar } from 'vuepress-theme-hope';

const back_posts = {
  text: '返回总目录',
  icon: "fa-solid fa-bars",
  link: '/posts/',
};

const back_technology = {
  text: '返回开发者',
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
  '/technology/spring/': [
    back_technology,
    {
      text: 'spring',
      icon: "fa-brands fa-java",
      link: '/technology/spring/',
      children: 'structure',
    },
  ],

  '/technology/vue/': [
    back_technology,
    {
      text: 'vue',
      icon: "fa-brands fa-vuejs",
      link: '/technology/vue/',
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
