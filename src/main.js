import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueParticles from 'vue-particles'
import Vcomp from './components/index'

import '@/assets/styles/base.scss'
import '@/assets/styles/common.scss'
import '@/assets/iconfont/iconfont.css'

Vue.use(vueParticles)
Vue.use(Vcomp)

Vue.config.productionTip = false




router.beforeEach((to, from, next) => {
	if (to.meta.title) {
	  document.title = to.meta.title;
	}
	next();
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
