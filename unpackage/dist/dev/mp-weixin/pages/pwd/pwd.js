require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{36:function(e,t,s){"use strict";var o=a(s(0)),n=a(s(37));function a(e){return e&&e.__esModule?e:{default:e}}new o.default(n.default).$mount()},37:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(39),n=s.n(o),a=s(40),r=!1;var i=function(e){r||s(38)},l=s(1)(n.a,a.a,i,null,null);l.options.__file="E:\\其他项目\\bpapp\\pages\\pwd\\pwd.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] pwd.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},38:function(e,t){},39:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{account:"",password:"",newPassword:""}},methods:{submit:function(){if(this.account.length<5)e.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)e.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.password==this.newPassword){var t={password:this.phone,account:this.account,newPassword:this.newPassword};e.request({url:"http://10.138.93.113:2221/ScreenTheWord/MainController.do",method:"POST",header:{"Access-Control-Allow-Origin":"*"},data:{controllerRequestType:"loginControllerService",jsonString:{requestType:"updateUserInfo",userInfo:t}},success:function(t){e.showToast({title:"修改成功"})},fail:function(e){}})}else e.showToast({icon:"none",title:"两次密码不一致"})}}}}).call(t,s(2).default)},40:function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",[e._m(0),s("view",{staticClass:"reg-list"},[s("image",{attrs:{src:"../../static/img/shouji.png"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{type:"text",placeholder:"手机号",maxlength:"11","placeholder-style":"color:#ffffff",eventid:"L2l-0"},domProps:{value:e.account},on:{input:function(t){t.target.composing||(e.account=t.target.value)}}})]),s("view",{staticClass:"reg-list"},[s("image",{attrs:{src:"../../static/img/miam.png"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",password:"true",placeholder:"请输入新密码","placeholder-style":"color:#ffffff",eventid:"kZT-1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("view",{staticClass:"reg-list"},[s("image",{attrs:{src:"../../static/img/querenmima.png"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],attrs:{type:"text",password:"true",placeholder:"请确认密码","placeholder-style":"color:#ffffff",eventid:"q6q-2"},domProps:{value:e.newPassword},on:{input:function(t){t.target.composing||(e.newPassword=t.target.value)}}})]),s("view",{staticClass:"regBut"},[s("button",{attrs:{eventid:"E5u-3"},on:{tap:e.submit}},[e._v(" 确 定")])],1)])};o._withStripped=!0;var n={render:o,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"logo"},[t("image",{attrs:{src:"../../static/img/logo.jpg"}})])}]};t.a=n}},[36]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pwd/pwd.js.map