<!-- Origin code from https://github.com/mo7cc/blog-source.git -->
<script lang="ts">
</script>

<template>
    <ClientOnly>
        <div class="none"></div>
    </ClientOnly>
</template>

<style lang="scss">
.vp-blog-hero .slide-down-button {
    bottom: 4.75rem;
}

.vp-blog-hero.fullscreen .vp-blog-mask {
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: top;
    background-position-x: center;
    background-attachment: fixed;
}

.vp-blog-hero.fullscreen {
    z-index: 5;
    height: 100vh !important;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
}

[data-theme='light'] {
    .vp-blog-hero .vp-blog-mask::after {
        background: #000;
        opacity: 0.3 !important;
    }
}

[data-theme='dark'] {
    .vp-blog-hero .vp-blog-mask::after {
        background: #000;
        opacity: 0.7 !important;
    }
}
</style>