require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([12],{63:function(e,t,n){"use strict";var o=a(n(1)),s=a(n(64));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(s.default))},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(66),s=n.n(o),a=n(70),r=!1;var i=function(e){r||n(65)},c=n(0)(s.a,a.a,i,null,null);c.options.__file="C:\\Users\\Administrator\\Desktop\\WEIpin\\bpapp\\pages\\MoneyWay\\request-payment.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] request-payment.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},65:function(e,t){},66:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o,s=n(67),a=(o=s)&&o.__esModule?o:{default:o};t.default={data:function(){return{title:"request-payment",loading:!1,providerList:[{name:"支付宝",id:"alipay",loading:!1,requesttype:"aLiPay"},{name:"微信",id:"wxpay",loading:!1,requesttype:"wxPay"}],money:"",userinfo:""}},onLoad:function(t){this.userinfo=e.getStorageSync("userInfo"),this.money=t.money,console.log(t.payTradeType),console.log(JSON.stringify(t))},methods:{requestPayment:function(t,n){var o,s=this;return(o=a.default.mark(function o(){var r,i;return a.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return s.providerList[n].loading=!0,o.next=3,s.getOrderInfo(t.id,n);case 3:if(r=o.sent,console.log(JSON.stringify(r.data.payInfo.payString)),"0000"===r.data.errorCode){o.next=9;break}return console.log(JSON.stringify(r.data.payInfo.payString)),e.showModal({content:"支付失败",showCancel:r.data.errorMessage}),o.abrupt("return");case 9:i=s,e.requestPayment({provider:t.id,orderInfo:r.data.payInfo.payString,success:function(t){e.showToast({title:"支付成功"});var n=e.getStorageSync("userInfo"),o={userInfo:{account:n.account,password:n.password},requestType:"login"},s={controllerRequestType:"loginControllerService",jsonString:JSON.stringify(o)};e.request({url:i.websiteUrl,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:s,success:function(t){"0000"==t.data.errorCode&&(e.setStorageSync("vipLevel",t.data.userInfo.vipLevel),console.log(JSON.stringify(t.data.userInfo)),e.reLaunch({url:"/pages/main/main"}))}})},fail:function(n){console.log(t.errMsg),console.log(JSON.stringify(r.data.payInfo)),console.log("fail",t),e.showModal({content:"支付失败",showCancel:!1})},complete:function(){s.providerList[n].loading=!1}});case 11:case"end":return o.stop()}},o,s)}),function(){var e=o.apply(this,arguments);return new Promise(function(t,n){return function o(s,a){try{var r=e[s](a),i=r.value}catch(e){return void n(e)}if(!r.done)return Promise.resolve(i).then(function(e){o("next",e)},function(e){o("throw",e)});t(i)}("next")})})()},getOrderInfo:function(t,n){var o=this,s=e.getStorageSync("userInfo");console.log(JSON.stringify(s.account));var a={payInfo:{totalFee:o.money,payTradeType:o.payTradeType,body:"商品价格",account:s.account},requestType:this.providerList[n].requesttype},r={controllerRequestType:"payControllerService",jsonString:JSON.stringify(a)};return new Promise(function(t){e.request({url:o.websiteUrl,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:r,success:function(e){t(e),console.log(JSON.stringify(e))},fail:function(e){t(e)}})})},weixinPay:function(){var t=this;this.loading=!0,e.login({success:function(n){console.log("login success",n),e.request({url:"https://unidemo.dcloud.net.cn/payment/wx/mp?code="+n.code+"&amount=0.01",success:function(n){if(console.log("pay request success",n),200===n.statusCode)if(0===n.data.ret){console.log("得到接口prepay_id",n.data.payment);var o=n.data.payment;e.requestPayment({timeStamp:o.timeStamp,nonceStr:o.nonceStr,package:o.package,signType:"MD5",paySign:o.paySign,success:function(t){e.showToast({title:"感谢您的赞助!"})},fail:function(t){e.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})}else e.showModal({content:n.data.desc,showCancel:!1});else e.showModal({content:"支付失败，请重试！",showCancel:!1})},fail:function(n){console.log("fail",n),t.loading=!1,e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})}})},fail:function(n){console.log("fail",n),t.loading=!1,e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})}})}}}}).call(t,n(2).default)},70:function(e,t,n){"use strict";var o=function(){var e=this.$createElement,t=this._self._c||e;return t("view",[t("page-head",{attrs:{title:this.title,mpcomid:"J1t-0"}}),t("view",{staticClass:"page-body"},[t("view",{staticClass:"page-section"},[t("view",[this._v("支付金额")]),t("view",{staticClass:"price"},[t("text",{staticClass:"rmbLogo"},[this._v("￥")]),this._v(this._s(this.money))])])]),this._m(0)],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",[t("view",{staticClass:"desc"},[this._v("支付方式")])])}]};t.a=s}},[63]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/MoneyWay/request-payment.js.map