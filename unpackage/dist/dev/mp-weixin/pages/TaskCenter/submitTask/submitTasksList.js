require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([16],{51:function(t,e,o){"use strict";var n=r(o(0)),s=r(o(52));function r(t){return t&&t.__esModule?t:{default:t}}new n.default(s.default).$mount()},52:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(54),s=o.n(n),r=o(55),i=!1;var a=function(t){i||o(53)},u=o(1)(s.a,r.a,a,null,null);u.options.__file="E:\\其他项目\\bpapp\\pages\\TaskCenter\\submitTask\\submitTasksList.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] submitTasksList.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},53:function(t,e){},54:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{submitLists:[],orderInfo:{account:""}}},onLoad:function(){var e=this;this.orderInfo.account=t.getStorageSync("userInfo").account;var o={orderInfo:this.orderInfo,requestType:"getOrdeFromAccount"},n={controllerRequestType:"orderControllerService",jsonString:JSON.stringify(o)};t.request({url:this.websiteUrl,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:n,success:function(t){"0000"==t.data.errorCode&&(e.submitLists=t.data.orderInfo.ordeList)},fail:function(e){t.showToast({icon:"none",title:"网络异常，请稍后重试"})}})},methods:{goSubmitContent:function(e){t.navigateTo({url:"./submitContent?task="+JSON.stringify(e)})}}}}).call(e,o(2).default)},55:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"hall"},t._l(t.submitLists,function(e,n){return o("view",{key:e,staticClass:"task",attrs:{eventid:"UoP-0-"+n},on:{tap:function(o){t.goSubmitContent(e)}}},[o("view",{staticClass:"subcontent"},[o("image",{attrs:{src:"../../../static/img/logoicon1.png",mode:"aspectFit"}}),o("text",[t._v(t._s(e.taskInfo.taskTitle))]),o("text",{staticStyle:{color:"#999999"}},[t._v("（"+t._s("01"==e.taskInfo.taskType?"勇士":"自由")+"）")])]),o("view",[o("text",{staticStyle:{color:"#666666"}},[t._v(t._s("1"==e.orderStatus?"待提交":"已提交"))]),o("image",{staticClass:"you",attrs:{src:"../../../static/img/youjiantou.png",mode:"aspectFit"}})])])}))};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s}},[51]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/TaskCenter/submitTask/submitTasksList.js.map