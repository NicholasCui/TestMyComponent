// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import MyComponents from 'my-component'

// Vue.use(MyComponents)
import {
  // MyButton,
  MyToast
} from 'my-component'

// Vue.use(MyButton)
Vue.use(MyToast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
