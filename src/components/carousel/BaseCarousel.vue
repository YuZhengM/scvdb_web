<template>
  <div id="base_carousel">
    <el-carousel :interval="interval">
      <el-carousel-item v-for="img in carouselImg" :key="img.id">
        <img :src="img.img" alt="image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/assets/less/components/carousel/BaseCarousel.less';

export default defineComponent({
  name: 'BaseCarousel',
  props: {
    interval: {
      type: Number,
      default: 2000
    },
    carouselImg: {
      type: Array,
      default: () => ([])
    }
  }
});
</script>
