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
import '@/assets/js/flexible'
// import '@/assets/js/sichuan'
import echarts from "echarts"
import axios from 'axios'
import geoJson from "../assets/js/sichuan";

export default {
  inject: ['reload'],
  name: 'Brand',  
  data() {
  	return {
  	}
  },
  mounted() {
    this.getEchart();
  },
  methods: {
     getEchart() { // 初始化地图数据
      let myChart = echarts.init(document.getElementById('chart_map'));
      echarts.registerMap("sichuan", geoJson, this.brcd);
      let  pointData = [], sum = 0;
      // pointData.push({
         //name: item.properties.name,
        // name: "省分行机构",
       //  value: [103.800000, 30.790200, 0],
       //  cityCode: 510108,
       //  context : []
      // })
       geoJson.features.push({"properties":{
           "name": "省分行机构",
           "center":[103.800000, 30.790200, 0],
           "adcode":510108
         }
       })

      geoJson.features.forEach(item => {
        let value = Math.random() * 3000
        let  context = [],brname = null
        pointData.push({
          //name: item.properties.name,
          name: brname,
          value: [item.properties.center[0], item.properties.center[1], value],
          cityCode: item.properties.adcode,
          context : context
        })
        sum += value
      })
      let option = {
        //tooltip:提示框组件,最上层为全局，也可以下倒每已层
        backgroundColor: 'rgb(255,255,255)',
        tooltip: {
          //trigger:触发类型 item:图形类
          trigger: "item",
          //formatter: 提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
          formatter: (params, ticket, callback) => {
            if (params.seriesType === "effectScatter") {
              //return  "\<br />" + params.data.context.toString();
              let revalue = ""
              let j = 0
              //alert("kkk:"+params.data.context.toString());
              revalue = params.data.name + "\<br />";
              params.data.context.forEach((item,i)=>{
                if ( j < 9 ){
                  let m = 0
                  branchJson.forEach(item2=>{
                    if ( item === item2.name){
                      revalue = revalue + item + ":" + item2.value + "\<br />";
                      j++;
                      m=1;
                      //alert("ddd:"+revalue);
                      return true;
                    }
                  })
                  if ( m === 0 )
                      revalue = revalue + item  + ":" + "未知网点" + "\<br />";
                }
                if  (j === 9){
                  revalue = revalue + ".....";
                  j++;
                }
              })
              return  revalue;
            }
          }
        },
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
          //   放大我们的地图
          zoom: 1,
          itemStyle: {
            normal: {
              // areaColor: "rgba(43, 196, 243, 0.42)",
              // areaColor: "rgba(0, 255, 0, 0)",
              // areaColor: "rgb(123,104,238)",
              areaColor: "rgb(0,191,255)",
              shadowColor: "rgb(65,105,225)",
              shadowBlur: 20,
              shadowOffsetX: -5,
              shadowOffsetY: 15,
              borderColor: "rgb(255,233,225)",
              borderWidth: 0.5
            },
            emphasis: {
              // areaColor: "#2B91B7"
              areaColor: "rgb(65,105,225)"
            }
          }
        },
        
        series: [{
          name: '散点',
          // type: 'effectScatter',
          type: 'scatter',
          symbol: 'pin',//点的形状（水滴）
          symbolSize:[80, 80], //水滴大小
          
          coordinateSystem: 'geo',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
             //color: '#00ff00', 绿色
              color:function(params) {
                // build a color map as your need.
                if ( params.data.context.length > 0 ){
                  return '#F4E925';
                }
                else{
                  return 'rgb(255,160,122)';
                }
              },
              shadowBlur: 30,
              shadowColor: '#833'
            }
          },
          symbolSize: function(val){
            let value = val[2];
            if (value > 50) {
              return 18
            }
            return 12
          },
          data: pointData,
          showEffectOn: 'render', //加载完毕显示特效
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
