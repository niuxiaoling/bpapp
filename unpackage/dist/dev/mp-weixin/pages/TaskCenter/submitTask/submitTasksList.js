require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([16],{46:function(t,e,o){"use strict";var s=r(o(0)),n=r(o(47));function r(t){return t&&t.__esModule?t:{default:t}}new s.default(n.default).$mount()},47:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(49),n=o.n(s),r=o(50),i=!1;var a=function(t){i||o(48)},u=o(1)(n.a,r.a,a,null,null);u.options.__file="E:\\其他项目\\bpapp\\pages\\TaskCenter\\submitTask\\submitTasksList.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] submitTasksList.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},48:function(t,e){},49:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{submitLists:[],orderInfo:{account:"",orderStatus:"1"}}},onLoad:function(){t.showLoading({mask:!0,title:"loading"});var e=this;this.orderInfo.account=t.getStorageSync("userInfo").account;var o={orderInfo:this.orderInfo,requestType:"getOrdeFromAccount"},s={controllerRequestType:"orderControllerService",jsonString:JSON.stringify(o)};t.request({url:this.websiteUrl,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:s,success:function(o){"0000"==o.data.errorCode?(e.submitLists=o.data.orderInfo.ordeList,t.hideLoading()):t.showToast({icon:"none",title:o.data.errorMessage})},fail:function(e){t.showToast({icon:"none",title:"网络异常，请稍后重试"})}})},methods:{goSubmitContent:function(e){t.navigateTo({url:"./submitContent?task="+JSON.stringify(e)})}}}}).call(e,o(2).default)},50:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"hall"},t._l(t.submitLists,function(e,s){return o("view",{key:e,staticClass:"task",attrs:{eventid:"Io9-0-"+s},on:{tap:function(o){t.goSubmitContent(e)}}},[o("view",{staticClass:"subcontent"},[o("image",{attrs:{src:"../../../static/img/logoicon1.png",mode:"aspectFit"}}),o("text",[t._v(t._s(e.taskInfo.taskTitle))]),o("text",{staticStyle:{color:"#999999"}},[t._v("（"+t._s("01"==e.taskInfo.taskType?"勇士":"自由")+"）")])]),o("view",[o("text",{staticStyle:{color:"#666666"}},[t._v(t._s("1"==e.orderStatus?"待提交":"已提交"))]),o("image",{staticClass:"you",attrs:{src:"../../../static/img/youjiantou.png",mode:"aspectFit"}})])])}))};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n}},[46]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/TaskCenter/submitTask/submitTasksList.js.map