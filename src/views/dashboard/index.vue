<template>
  <div class="dashboard-container">
    <div class="main">

      <div class="top">
        <div class="top-left">
           <div class="top-left_top">
            <!-- 工单统计模块 -->
           <div class="gongdan_statistical">
            <OrderStatistics></OrderStatistics>
           </div>

           <!-- 销售统计 -->
           <div class="sale_statistical">
            <SaleStatistics></SaleStatistics>
           </div>
           </div>
           <!-- 销售数据 -->
           <div class="top-left_bottom">
            <div class="title">
              <SaleData></SaleData>
            </div>
           <div class="top_bottom">
             <div class="top-left_bottom-left">
              <!-- 销售额趋势图 -->
            </div>
            <div class="top-left_bottom-right">
              <!-- 销售额分布 -->
            </div>
           </div>
           </div>
        </div>
        <div class="top-right">
          <!-- 商品热榜 -->
          <HotGoods></HotGoods>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import OrderStatistics from './components/OrderStatistics.vue'
import SaleStatistics from './components/SaleStatistics.vue'
import SaleData from './components/SaleData.vue'
import HotGoods from './components/HotGoods.vue'
export default {
  name: 'Dashboard',
  components: {
    OrderStatistics, SaleStatistics, SaleData, HotGoods
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
  background-color: #f8fafd;
  .top {
    display: flex;
    width: 100%;
    .top-left{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 1299px;
      height: 538px;
      padding: 0 10px;
      background-color: #f8fafd;
      .top-left_top{
        display: flex;
        justify-content: space-between;
        width: 100%;
        .gongdan_statistical {
            width: 685px;
            height: 166px;
            padding: 20px;
            border-radius: 20px;
            background-image: url('../../assets/common/circle.png'),url('../../assets/common/task.png');
            background-repeat: no-repeat,no-repeat;
            background-position: 0 0,calc(100% - 12px) 100%;
            // background: url('../../assets/common/circle.png') no-repeat;
            // background: url('../../assets/common/task.png');
            background-color: #e9f3ff;
          }
          .sale_statistical{
            width: 575px;
            height: 166px;
            padding: 20px;
            border-radius: 20px;
            background: #fbefe8 url('../../assets/common/pinkpig.png') no-repeat calc(100% - 12px) 100%;
          }
      }

      .top-left_bottom {
        width: 1279px;
        height: 352px;
        padding: 20px;
        border-radius: 20px;
        margin-top: 20px;
        background-color: darkseagreen;
        .title{
          width: 1110px;
          height: 34px;
          line-height: 34px;
          background-color: aquamarine;
        }
        .top_bottom{
          display: flex;
            .top-left_bottom-left{
              width: 620px;
              height: 278px;
              background-color: darkgoldenrod;
            }
            .top-left_bottom-right{
               width: 620px;
              height: 278px;
              background-color: darkolivegreen;
            }
        }
      }
    }
    .top-right{
      width: 413px;
      height: 538px;
      padding: 20px;
      border-radius: 20px;
      background-color: aquamarine;
    }
  }

}
</style>
