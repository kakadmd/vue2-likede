<template>
  <div>
    <!-- 商品热榜 -->
    <TopTitle :title="title" :time="time"></TopTitle>
  </div>
</template>

<script>
import TopTitle from '@/components/TopTitle.vue'
export default {
  components: {
    TopTitle
  },
  data() {
    return {
      title: '商品热榜',
      time: '2022.02.02~2023.02.02'
    }
  }
}
</script>

<style>

</style>
