/*
 * 描述: 封装组件库
 * 作者: Jack Chen
 * 日期: 2020-04-18
 */
import texteffect from "./companySummary/texteffect"
import wordCloud from './companySummary/wordCloud' // 产品热词
import history from "./companySummary/history";
import staffMix from './companySummary/staffMix'; // 人员占比
import news from './companySummary/news';
import scrollArc from './companySummary/scrollArc';
import cakeLinkage from './companySummary/cakeLinkage';
import cubeShape from "./companySummary/cubeShape";
import pieChart from "./companySummary/pieChart";

const components = {
  texteffect,
  wordCloud,
  history,
  staffMix,
  news,
  scrollArc,
  cakeLinkage,
  cubeShape,
  pieChart

};

const install = (Vue = {}) => {
  if (install.installed) return;
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component]);
  });

  install.installed = true;
};

install.installed = false;

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
  install.installed = true;
}

const Vcomp = {
  ...components,
  install
};


export default Vcomp
