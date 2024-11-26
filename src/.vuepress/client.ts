import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import 'vuepress-theme-hope/presets/bounce-icon.scss';

const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));
const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));
const BlogBeautify = defineAsyncComponent(() => import('./components/BlogBeautify.vue'));
const TopBarBeautify = defineAsyncComponent(() => import('./components/TopBarBeautify.vue'));
const HeroBG = defineAsyncComponent(() => import('./components/HeroBG.vue'));
const HeroHitokoto = defineAsyncComponent(() => import('./components/HeroHitokoto.vue'));

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component('MyIcon', MyIcon);
    },
    setup() {
        onMounted(() => { });
    },
    rootComponents: [
        NavMusic,
        BlogBeautify,
        TopBarBeautify,
        HeroBG,
        HeroHitokoto,
    ],
});
