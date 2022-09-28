<template>
  <div class="dashboard-container">
    <div class="main">

      <div class="top">
        <div class="top-left">
           <div class="top-left_top">
            <!-- 工单统计模块 -->
           <div class="gongdan_statistical">
           </div>

           <!-- 销售统计 -->
           <div class="sale_statistical">

           </div>
           </div>
           <div class="top-left_bottom">
            <!-- <div class="title">
              <span>销售数据</span>
            </div> -->
            <TopTitle></TopTitle>
           </div>
        </div>
        <div class="top-right"></div>
      </div>

    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import TopTitle from '@/components/TopTitle.vue'
export default {
  name: 'Dashboard',
  components: {
    TopTitle
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 1753px;
  height: 951px;
  padding:20px;
  background-color: darkcyan;
  .top {
    width: 100%;
    .top-left{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 1299px;
      height: 538px;
      background-color: darkgray;
      .top-left_top{
        display: flex;
        justify-content: space-between;
        width: 100%;
        .gongdan_statistical {
            width: 685px;
            height: 166px;
            padding: 20px;
            border-radius: 20px;
            background-color: aquamarine;
          }
          .sale_statistical{
            width: 575px;
            height: 166px;
            padding: 20px;
            border-radius: 20px;
            background-color: burlywood;
          }
      }

      .top-left_bottom {
        width: 1299px;
        height: 352px;
        padding: 20px;
        background-color: darkseagreen;
        .title{
          width: 1110px;
          height: 34px;
          line-height: 34px;
          background-color: aquamarine;
        }
      }
    }
  }

}
</style>
