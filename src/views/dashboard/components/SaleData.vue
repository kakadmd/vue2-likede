<template>
  <div>
    <!-- 销售数据 -->
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
      title: '销售数据',
      time: '2022.02.02~2023.02.02'
    }
  }
}
</script>

<style>

</style>
