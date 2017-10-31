import Vue from 'vue'
import App from './App'
import 'milligram/dist/milligram.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
