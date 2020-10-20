<template>
  <div class="block">
    <span class="demonstration">{{ I18N.test.Carousel.defaultIndication }}</span>
    <Carousel autoplay class="carousel-wrap">
      <CarouselItem v-for="item in 4" :key="item">
        <h3 :class="`carousel-wrap item-${item}`">
          {{ item }}
        </h3>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
.block {
    font-size: 40px;
    color: white;
}
.carousel-wrap {
  width: 600px;
  height: 300px;
}

.ivu-carousel-list {
  height: 100%;
}
.item-1 {
  background-color: #475669;
}
.item-2 {
  background-color: yellow;
}
.item-3 {
  background-color: blueviolet;
}
.item-4 {
  background-color: red;
}
</style>
