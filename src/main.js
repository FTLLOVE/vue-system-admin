import Vue from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import ElementUI from 'element-ui'
import router from './router'
// import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/theme/index.css' // 自定义主题
Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
