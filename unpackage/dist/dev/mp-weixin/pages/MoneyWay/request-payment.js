require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([11],{60:function(e,t,n){"use strict";var o=a(n(0)),s=a(n(61));function a(e){return e&&e.__esModule?e:{default:e}}new o.default(s.default).$mount()},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(63),s=n.n(o),a=n(67),i=!1;var r=function(e){i||n(62)},c=n(1)(s.a,a.a,r,null,null);c.options.__file="E:\\其他项目\\bpapp\\pages\\MoneyWay\\request-payment.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] request-payment.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},62:function(e,t){},63:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o,s=n(64),a=(o=s)&&o.__esModule?o:{default:o};t.default={data:function(){return{title:"request-payment",loading:!1,providerList:[]}},onLoad:function(){},methods:{weixinPay:function(){var t=this;console.log("发起支付"),this.loading=!0,e.login({success:function(n){console.log("login success",n),e.request({url:"https://unidemo.dcloud.net.cn/payment/wx/mp?code="+n.code+"&amount=0.01",success:function(n){if(console.log("pay request success",n),200===n.statusCode)if(0===n.data.ret){console.log("得到接口prepay_id",n.data.payment);var o=n.data.payment;e.requestPayment({timeStamp:o.timeStamp,nonceStr:o.nonceStr,package:o.package,signType:"MD5",paySign:o.paySign,success:function(t){e.showToast({title:"感谢您的赞助!"})},fail:function(t){e.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})}else e.showModal({content:n.data.desc,showCancel:!1});else e.showModal({content:"支付失败，请重试！",showCancel:!1})},fail:function(n){console.log("fail",n),t.loading=!1,e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})}})},fail:function(n){console.log("fail",n),t.loading=!1,e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})}})},requestPayment:function(t,n){var o,s=this;return(o=a.default.mark(function o(){var i;return a.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return s.providerList[n].loading=!0,o.next=3,s.getOrderInfo(t.id);case 3:if(i=o.sent,console.log("得到订单信息",i),200===i.statusCode){o.next=9;break}return console.log("获得订单信息失败",i),e.showModal({content:"获得订单信息失败",showCancel:!1}),o.abrupt("return");case 9:e.requestPayment({provider:t.id,orderInfo:i.data,success:function(t){console.log("success",t),e.showToast({title:"感谢您的赞助!"})},fail:function(t){console.log("fail",t),e.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){s.providerList[n].loading=!1}});case 10:case"end":return o.stop()}},o,s)}),function(){var e=o.apply(this,arguments);return new Promise(function(t,n){return function o(s,a){try{var i=e[s](a),r=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(r).then(function(e){o("next",e)},function(e){o("throw",e)});t(r)}("next")})})()},getOrderInfo:function(t){var n="https://demo.dcloud.net.cn/payment/?payid="+t+"&appid=wx726318aa9a4e7971&total=0.01";return new Promise(function(t){e.request({url:n,success:function(e){t(e)},fail:function(e){t(e)}})})}}}}).call(t,n(2).default)},67:function(e,t,n){"use strict";var o=function(){var e=this.$createElement,t=this._self._c||e;return t("view",[t("page-head",{attrs:{title:this.title,mpcomid:"aZU-0"}}),t("view",{staticClass:"page-body"},[t("view",{staticClass:"page-section"},[t("view",[this._v("支付金额")]),this._m(0),t("view",{staticClass:"desc"},[this._v("实际应用中可自定义金额")]),t("view",{staticClass:"btn-area"},[t("button",{attrs:{type:"primary",loading:this.loading,eventid:"Zoq-0"},on:{tap:this.weixinPay}},[this._v("微信支付")])],1)])])],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"price"},[t("text",{staticClass:"rmbLogo"},[this._v("￥")]),this._v("0.01")])}]};t.a=s}},[60]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/MoneyWay/request-payment.js.map