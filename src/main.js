import Vue from 'vue'
import App from './App.vue'
import SeaCarousel from 'sea-carousel'
import 'sea-carousel/lib/sea-carousel.css'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(SeaCarousel)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
