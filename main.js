import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.websiteUrl  = 'http://39.106.215.215:8080/ScreenTheWord/MainController.do?';
// Vue.prototype.websiteUrl  = 'http://192.168.43.229:8080/ScreenTheWord/MainController.do?';
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
