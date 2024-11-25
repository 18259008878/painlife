import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import 'vuepress-theme-hope/presets/bounce-icon.scss';

const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));
const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component('MyIcon', MyIcon);
    },
    setup() {
        onMounted(() => { });
    },
    rootComponents: [
        NavMusic,
    ],
});
