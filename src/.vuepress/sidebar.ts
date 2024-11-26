// Origin code from https://github.com/mo7cc/blog-source.git
import { sidebar } from 'vuepress-theme-hope';

const back_posts = {
  text: '返回总目录',
  icon: 'sort',
  link: '/posts/',
};

const back_developer = {
  text: '返回开发者',
  icon: 'developer',
  link: '/developer/',
};

export default sidebar({
  // 关于
  '/about/': [
    back_posts,
    {
      text: '关于',
      icon: 'info',
      link: '/about/',
      children: 'structure',
    },
  ],
  // 开发者
  '/developer/': [
    back_posts,
    {
      text: '开发者',
      icon: 'developer',
      link: '/developer/',
      children: 'structure',
    },
  ],
  '/developer/spring/': [
    back_developer,
    {
      text: 'spring',
      icon: 'Spring',
      link: '/developer/spring/',
      children: 'structure',
    },
  ],

  '/developer/vue/': [
    back_developer,
    {
      text: 'vue3',
      icon: 'Vue',
      link: '/developer/vue/',
      children: 'structure',
    },
  ],

  // 整体路由划分
  '/': [
    '',
    {
      text: '博文',
      icon: 'note',
      prefix: 'posts/',
      link: '/posts/',
      children: 'structure',
    },

    {
      text: '开发者',
      icon: 'developer',
      prefix: 'developer/',
      link: '/developer/',
      children: 'structure',
    },

    {
      text: '关于',
      icon: 'info',
      prefix: 'about/',
      link: '/about/',
      children: 'structure',
    },
  ],
});
