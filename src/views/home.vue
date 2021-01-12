<template>
    <div>
        <brand :dataJson="dataJson"></brand>
    </div>
</template>

<script>
import Brand from './Brand'
export default {
  components: { Brand },
  data(){
      return{          
          dataJson: {
              '理塘': [100.3495,30.52142,'理塘县印象树文旅实业',1], //县域名：[经度，纬度，厂商，足迹顺序]
              '西昌': [101.78653,28.015604,'西昌俊达商城',2],
              '马尔康': [101.95978,32.28752, '马尔康县铂悦贸易公司',3],
              '茂汶县': [103.82875,32.07237,'茂汶县信息卫士电子厂',4]
          },             
    }
  }
    
}
</script>