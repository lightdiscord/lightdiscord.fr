import Vue from 'vue'
import App from './App'
import 'milligram/dist/milligram.min.css'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
  /* eslint-disable no-unused-vars */
  const registration = runtime.register()
}
