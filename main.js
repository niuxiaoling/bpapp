import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.websiteUrl  = 'https://www.sixkeep.com:8080/MainController.do?';
Vue.prototype.uploadUrl = 'https://www.sixkeep.com:8080//FileUpController.do';
// Vue.prototype.websiteUrl  = 'http://192.168.43.229:8080/ScreenTheWord/MainController.do?';
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
