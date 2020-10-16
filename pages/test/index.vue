<template>
  <div class="container">
    <p>hhahah</p>
    <Carousel />
    <nuxt-link to="/">
      index
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Carousel from './Carousel.vue'

export default {
  components: {
    Carousel
  },
  mounted () {},
  meta: {
    auth: { authority: 'a' }
  }
}
</script>

<style>
</style>
