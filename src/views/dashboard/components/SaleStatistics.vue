<template>
  <div>
    <!-- 销售额统计 -->
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
      title: '销售统计',
      time: '2022.02.02~2023.02.02'
    }
  }
}
</script>

<style>

</style>
