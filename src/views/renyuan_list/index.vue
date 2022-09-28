<template>
		<div ref="chart" style="width: 400px; height: 300px"></div>
</template>
<script>
export default {
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      //2.初始化
      this.chart = this.$echarts.init(this.$refs.chart)
      //3.配置数据
      const option = {
        title: {
          text: '柱状图'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            label: {
              show: true, //是否在图上展示数据 // position:'top',//数据在柱状图顶部显示
              textStyle: {
                // color: "#000000", //数据颜色
              },
              formatter: '{c}' //显示百分比
            },
            data: [5, 20, 36, 10, 10, 20]
          }

        ]
      }
      // 4.传入数据
      this.chart.setOption(option)
    }
  }
}
</script>
<style>

</style>

