<!--
 描述: 发展历程
 作者: Jack Chen
 日期: 2020-05-09
-->

<template>
  <div class="history-container">
    <div class="tabs">
      <ul class="tab-tilte">
        <li v-for="(itemTit, index) in tabTitle" @mouseover="handleMouseOver(index)" @mouseout="handleMouseOut(index)" :class="{active: cur === index}">
          {{ itemTit }}
        </li>
      </ul>
      <div class="indicatorDots">
        <span :class="{active: cur === i}" v-for="(v, i) in tabTitle" :key="i"></span>
      </div>
      <div class="tab-content">
        <div v-for="(itemCon, index) in tabCon" v-show="cur == index">
          <div v-for="(v, i) in itemCon" :key="i" class="content">
            {{ v }}
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  name: "history",
  data() {
    return {
      timer: null,
      tabTitle: ['1号令', '2号令', '3号令', '4号令', '5号令'],
      tabCon: [
        [
          '时间安排:2020年12月18日 16:00---12月21日 16:00',
          '一、12月20日起，年终决算相关系统、重要生产系统、一般信息系统暂停与年终决算无关的生产变更，对需要实施的生产变更，做好对年终决算的影响分析，增加特保期间变更管理特殊审批环节；对于12月14日年终决算封版测试之后的变更，明确分析结论。',
          '二、各行须提前对生产系统机房环境、硬件设备、网络资源和基础软件等进行全面的健康检查。',
          '三、各行须加强不规范业务数据清理，切实提高数据质量，确保年终决算数据的准确性。',
          '四、各行做好应急预案准备，提前通知软、硬件厂商、网络运营商等相关厂商技术人员进行现场支持。'
        ],
        [
          '时间安排:2020年12月21日 16:00---12月31日 10:00',
          '标题:2020年信息系统年终决算工作已全面展开。2020年12月25日起，IFAR系统进入年终决算准备阶段。',
          '一、2020年12月25日前，各行须全面做好IFAR系统决算准备工作，要在综合财会管理平台公共基础系统中做好组织单元及相关属性的核对工作，要做好IFAR系统用户配置、各类核算参数及机构人数的检查和确认。'
        ],
        [
          '时间安排:2020年12月31日10:00---01月01日07:30',
          '一、总行BoEing系统批处理Ⅰ将在31日21:00准时开始，要求各行组织辖内网点必须于31日21:00前完成本日资产业务的处理。',
          '二、要求各行于2月31日21:30前完成FMIS业务，届时总行将对分行集中签退。',
          '三、人行大额支付业务12月31日办理截止时间为20:15，各行辖内网点在截止时前完成业务办理，于21:00前完成大额异常业务处理。企业、个人网银大额落地记账业务不延长，于17:15停止记账，各网点、作业中心做好相应安排。',
          '四、要求各行于元月1日00:00前完成BoEing业务，届时总行将对分行集中签退，确保BoEing系统年终决算会计日期切换处理在2021年元月1日1:00准时开始。'
        ],
        [
          '时间安排:2021年01月01日07:30---08:00',
          '通知：总行BoEing生产系统年终批处理工作已于2021年元月1日4:19顺利完成，目前进入内部营业验证阶段。本阶段主要工作内容及要求如下：',
          '一、各营业网点内部验证完成后即可对外营业，开始报表打印、核对工作。'
        ],
        [
          '时间安排:2021年01月01日08:40---09:00',
          '一、预计2021年元月1日15:00生成IFAR年终决算全部报表。请各行通知所辖机构下载IFAR年终决算报表，全面核对账务处理情况，做好附属会计期间调账及报表调整工作。',
          '二、预计2021年元月1日10:30生成FMIS年终决算报表。请各行通知所辖机构下载并打印FMIS年终决算报表，全面核对账务处理情况，并重点核对损益结转是否正确，做好FMIS内部营业验证工作。',
          '三、BOEING辅助生产批处理预计将于2021年元月1日14:00完成；C3接口数据下发预计将于2021年元月1日15:00完成。请各行参考安排相关工作。'
        ]

      ],
      cur: 0, //默认选中第一个tab
    }
  },
  mounted() {
    this.getTimer();
  },
  methods: {
    getTimer() {
      this.timer = setInterval(() => {
        this.cur++;
        if (this.cur == this.tabTitle.length) {
          this.cur = 0;
        }
      }, 8000)
    },
    handleMouseOver(index) {
      this.cur = index;
      clearInterval(this.timer);
    },
    handleMouseOut(index) {
      this.getTimer();
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.history-container {
  margin: 1 0.125rem ;
  height: 0.925rem;
  .tabs {
    display: flex;
    .tab-tilte {
      li {
        top: 15;
        color: #fff;
        background-color: rgba(36, 196, 255, 0.5);
        text-align: center;
        cursor: pointer;
        width: 1.0rem;
        height: 0.65rem;
        line-height: 0.65rem;
        margin-bottom: 0.175rem;
        -webkit-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        font-weight: bold;
        &.active{
          background: linear-gradient(to right, #1b81bc, 20%, #24c4ff);
          color: #fff;
        }
      }
    }
    .indicatorDots {
      background-color: rgba(36, 196, 255, 0.5);
      width: 1px;
      height: 3.9rem;
      margin: 0.0625rem 0 0 0.375rem;
      span {
        display: block;
        height: 0.925rem;
        margin-left: -0.0875rem;
        &:after {
          content: '';
          display: block;
          width: 0.125rem;
          height: 0.125rem;
          background: #ddd;
          -webkit-border-radius: 50%;
          -ms-border-radius: 50%;
          -o-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          border: 2px solid #1b81bc;
        }
        &.active {
          &:after {
            background: #24c4ff;
            -webkit-box-shadow: 0 0 0.125rem #1b81bc;
            box-shadow: 0 0 0.125rem #1b81bc;
          }
        }
      }
    }
    .tab-content {
      display: flex;
      align-items: center;
      font-size: 0.155rem;
      div {
        margin-left: 0.1875rem;
        color: #fff;
        .content {
          line-height: 0.275rem;
          padding: 0.1rem 0;
        }
      }
    }
  }
}
</style>
