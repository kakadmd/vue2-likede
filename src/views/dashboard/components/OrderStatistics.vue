<template>
  <div calss="order">
    <!-- 工单统计 -->
    <TopTitle :title="title" :time="time"></TopTitle>
  </div>
</template>

<script>
import TopTitle from '@/components/TopTitle.vue'
import { getGongdanData } from '@/api/gongdan'
import { getUserDetailMsg } from '@/api/user'
export default {
  components: {
    TopTitle
  },
  data() {
    return {
      title: '工单统计',
      time: '2022.09.01~2022.09.00',
      start: '2022-09-01',
      end: '2022-09-28',
      userId: ''
    }
  },
  created() {
    // this.getGongdanData()
    this.userId = this.$store.state.user.userInfo.userId
    // console.log(this.userId)
    this.getUserDetailMsg()
  },
  methods: {
    getUserDetailMsg() {
      console.log(getUserDetailMsg(this.userId))
    },
    getGongdanData() {
      console.log(getGongdanData(this.start, this.end))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
