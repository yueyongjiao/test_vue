<!--
 描述: 滚动弧形线
 作者: Jack Chen
 日期: 2020-04-20
-->

<template>
    <div class="pie-container">
          <div class="chartsdom" id="chart_arc"></div>
    </div>
</template>

<script>
export default {
  name: "pieChart",
  data() {
    return {
      option: null,
      number: 0, // 播放所在下标
      timer: null,
    }
  },
  mounted() {
    this.getEchart3();
  },
  methods: {
    getEchart3() {
      let myChart = echarts.init(document.getElementById('chart_arc'));
      let option = {
          title: [{
              text: '工作进度',
              x: 'center',
              top: '65%',
              textStyle: {
                  color: '#a6a9a5',
                  fontSize: 16,
                  fontWeight: '100',
              }
          }, {
              text: '75%',
              x: 'center',
              top: '38%',
              textStyle: {
                  fontSize: '19',
                  color: '#FFFFFF',
                  fontFamily: 'DINAlternate-Bold, DINAlternate',
                  foontWeight: '60',
              },
          }],
          polar: {
              radius: ['42%', '52%'],
              center: ['50%', '50%'],
          },
          angleAxis: {
              max: 100,
              show: false,
          },
          radiusAxis: {
              type: 'category',
              show: true,
              axisLabel: {
                  show: false,
              },
              axisLine: {
                  show: false,
              },
              axisTick: {
                  show: false,
              },
          },
          series: [{
              type: 'liquidFill',
              radius: '45%',
              center: ['50%', '50%'],
              data: [0.5, 0.5, 0.5], // data个数代表波浪数
              backgroundStyle: {
                  borderWidth: 1,
                  color: 'rgb(255,0,255,0.1)'
              },
              label: {
                  normal: {
                      formatter: (0.5 * 100).toFixed(2) + '%',
                      textStyle: {
                          fontSize: 50
                      }
                  }
              },
              outline: {
                  show: false,
              }
          },
              {
              name: '',
              type: 'bar',
              roundCap: true,
              barWidth: 90,
              showBackground: true,
              backgroundStyle: {
                  color: 'rgba(66, 66, 66, .3)',
              },
              data: [60],
              coordinateSystem: 'polar',

              itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                          offset: 0,
                          color: '#16CEB9',
                      },
                          {
                              offset: 1,
                              color: '#6648FF',
                          },
                      ]),
                  },
              },
          },
              {
                  name: '',
                  type: 'pie',
                  startAngle: 80,
                  radius: ['56%'],
                  hoverAnimation: false,
                  center: ['50%', '50%'],
                  itemStyle: {
                      color: 'rgba(66, 66, 66, .1)',
                      borderWidth: 1,
                      borderColor: '#5269EE',
                  },
                  data: [100],
              },
              {
                  name: '',
                  type: 'pie',
                  startAngle: 80,
                  radius: ['38%'],
                  hoverAnimation: false,
                  center: ['50%', '50%'],
                  itemStyle: {
                      color: 'rgba(66, 66, 66, .1)',
                      borderWidth: 1,
                      borderColor: '#5269EE',
                  },
                  data: [100],
              }
          ]

      };

      myChart.setOption(option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });


    }
  },
  beforeDestroy() {

  }
};
</script>

<style lang="scss" scoped>
.pie-container {
  .chartsdom {
      height: 2.8rem;
  }
}
</style>
