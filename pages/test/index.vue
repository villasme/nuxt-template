<template>
    <div class="container">
        <p>hhahah</p>
        <Carousel />
        <nuxt-link to="/">index</nuxt-link>
    </div>
</template>

<script lang="ts">
import Carousel from "./Carousel.vue";

export default {
    mounted() {
        console.log(this)
    },
    components: {
        Carousel,
    },
    meta: {
        auth: { authority: 2 },
    },
};
</script>

<style>
</style>