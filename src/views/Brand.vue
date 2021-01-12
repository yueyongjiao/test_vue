<template>
  <div class="brand-container">
  	<div class="wrap">
      <section class="mainbox">
        <div class="item center">         
          <div class="map">
            <div class="chart" id="chart_map"></div>
          </div>
        </div>
      </section>  
    </div>    
  </div>
</template>

<script>

import echarts from "echarts" //必须安装echarts组件
import geoJson from "../assets/js/sichuan.js";//必须的地图文件
export default {
  inject: ['reload'],
  name: 'Brand',  
  data() {
  	return {      
    }
  },
  props:{
    dataJson: Array
  },
  mounted() {
    this.getEchart();

  },
  methods: {
     getEchart() { // 初始化地图数据
      let myChart = echarts.init(document.getElementById('chart_map'));
      echarts.registerMap("sichuan", geoJson, this.brcd);
      let  pointData = [], sum = 0;

       geoJson.features.push({"properties":{
           "name": "省分行机构",
           "center":[103.800000, 30.790200, 0],
           "adcode":510108
         }
       })

      geoJson.features.forEach(item => {
        let value = Math.random() * 3000
        let  context = [],brname = null
      })
      var convertData = function(data) {
      var res = [];
        for (var a in data) {
          res.push({
          name:a,
          value:data[a]
          });
        }
        return res;
      };
      let option = {
        backgroundColor: 'rgb(255,255,255)',
        geo: {
          map: "sichuan",
          label: {
            normal: {
              show: false,
              textStyle: {
                fontSize: 12,
                fontWeight: 400,
                // color: 'rgb(255,255,255)'
                color: 'rgb(255,0,0)'
              }
            },
            emphasis: {
              show: true,
              color: "#fff"
            }
          },
          roam: false,
          zoom: 1,
          itemStyle: {
            normal: {
              areaColor: "rgb(0,191,255)",
              shadowColor: "rgb(65,105,225)",
              shadowBlur: 20,
              shadowOffsetX: -5,
              shadowOffsetY: 15,
              borderColor: "rgb(255,233,225)",
              borderWidth: 0.5
            },
            emphasis: {
              areaColor: "rgb(65,105,225)"//点击时的颜色"rgb(65,105,225)"
            }
          }
        },
        
        series: [{
          name: '散点',
          type: 'scatter',
          symbol: 'pin',//点的形状（水滴）
          symbolSize:18, //水滴大小
          
          coordinateSystem: 'geo',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color:'#F4A460',//设置水滴的颜色'rgb(255,160,122)'
              shadowBlur: 30,
              shadowColor: '#833'
            }
          },         
          data: convertData(this.dataJson),
          label: {
            formatter(params) {                
              return `${params.data.value[3] +":"+ params.data.name}`;
            },
            color: 'white', //调整显示字体的颜色（当前为红色）'#FFDC6C'  '#F08080'
            fontSize: 10, //调整显示字体的大小
            position: 'top',
            fontWeight: 'bolder',//bolder
            show: true
          },
          showEffectOn: 'render'
        }
        ]
      }

      myChart.setOption(option, true);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.brand-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  .wrap {
    line-height: 1.15;    
    .mainbox {
      width: 100%;
      height: 100%;
      max-width: 450px;
      max-height: 800px;
      min-height: 400px;
      padding: 0.125rem 0.125rem 0;
      display: flex;
      .item {
        flex: 3;
        &.center {
          flex: 5;
          margin: 0 0.125rem 0.1rem;
          overflow: hidden;
        }
        .map {
          position: relative;
          height: 100%;
          .chart {
            position: absolute;
            top: 0;
            left: 0;
            // z-index: 5;
            height:100%;
            width: 100%;
          }
        }
      }
    }
  }

}	
</style>
