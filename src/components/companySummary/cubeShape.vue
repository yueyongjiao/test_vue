<!--
 描述: 滚动弧形线
 作者: Jack Chen
 日期: 2020-04-20
-->

<template>
    <div class="lh-container">
          <div class="chartsdom" id="chart_arc"></div>
    </div>
</template>

<script>
export default {
  name: "cubeShape",
  data() {
    return {
      option: null,
      number: 0, // 播放所在下标
      timer: null,
      departData:[[0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0],
          [6,4,12,4,12,7,2,11]]

    }
  },
    watch: {
        departData(val) {
            console.log("部门进度", val);
            this.getEchart4();
        }

    },
  mounted() {
      if ( this.ratetimer) {
          clearInterval(this.ratetimer);
      }else {

          this.ratetimer = setInterval(() => {
              this.getdepartment();

          }, 2000 * 60);
      }
    this.getEchart4();
  },
  methods: {
      getdepartment(){
          //获取部门工作情况
          axios.get('http://127.0.0.1:3001/depart', {
              params: {
                  name: '26148275',
                  id: '2id6H48Y',
                  IMG1: 'v6'
              }
          }).then(res => {
              if (res.data) {

                  this.departData = [];
                  this.departData = res.data.departvalue;

              }
          }).catch(err => {
              console.log(err)
          })
      },
    getEchart4() {
      let myChart = echarts.init(document.getElementById('chart_arc'));
        let data = {
            area: ['系统', '网络', '运行', '安全', '软一', '软二', '软三', '二级行'],
            legend: ['已完成', '正在进行中', '未启动'],
            data: []
        }
        data.data = this.departData;
        let colors = ['#76e050', '#e09a50', '#4fceda']
      let option = {
          title: {
              text: '',
              left: 19,
              top: 10,
              textStyle: {
                  color: '#fff'
              }
          },
          color: colors,
          legend: {
              top: 15,
              left: 10,
              itemWidth: 10,
              itemHeight: 10,
              // padding: [5, 10],
              textStyle: {
                  fontSize: 14,
                  color: '#96A4F4',
                  padding: [0, 0, 0, 0]
              },
              data: data.legend
          },
          grid: {
              left: '0%',
              right: '0%',
              bottom: '20%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              axisLabel: {
                  color: '#96A4F4',
                  interval: 0
              },
              axisLine: {
                  lineStyle: {
                      color: '#96A4F4'
                  },
                  width: 4
              },
              axisTick: {
                  show: false,
              },
              data: data.area
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                  color: '#96A4F4'
              },
              axisLine: {
                  lineStyle: {
                      color: '#96A4F4'
                  },
                  width: 5
              },
              axisTick: {
                  show: false,
              },
              splitLine: {
                  lineStyle: {
                      color: 'rgba(150, 164, 244, 0.3)'
                  }
              },
          },
          series: [

          ]

      };
        for (let i = 0; i < data.legend.length; i++) {
            option.series.push({
                //name: data.legend[i],
                name: data.legend[i],
                type: 'bar',
                stack: '总量',
                barWidth: '45%',
                label: {
                    show: true,
                    position: 'insideRight'

                },
                data: this.departData[i]
            })
        }
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
.lh-container {
  .chartsdom {
      height: 4.8rem;
  }
}
</style>
