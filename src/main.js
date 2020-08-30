import Vue from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import ElementUI from 'element-ui'
import router from './router'
// import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/theme/index.css' // 自定义主题
import VeLine from 'v-charts/lib/line.common' //折线图
import VeBar from 'v-charts/lib/bar.common' // 条形图
import VeHistogram from 'v-charts/lib/histogram.common' //柱状图
import VePie from 'v-charts/lib/pie.common' // 饼图

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small'
})


Vue.component(VeLine.name, VeLine)
Vue.component(VeBar.name, VeBar)
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VePie.name, VePie)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
