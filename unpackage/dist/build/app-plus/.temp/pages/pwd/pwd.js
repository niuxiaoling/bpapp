require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{35:function(e,t,s){"use strict";var o=n(s(0)),a=n(s(36));function n(e){return e&&e.__esModule?e:{default:e}}new o.default(a.default).$mount()},36:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(38),a=s.n(o),n=s(39);var r=function(e){s(37)},i=s(1)(a.a,n.a,r,null,null);t.default=i.exports},37:function(e,t){},38:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{account:"",password:"",newPassword:""}},methods:{submit:function(){if(this.account.length<5)e.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)e.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.password==this.newPassword){var t={password:this.phone,account:this.account,newPassword:this.newPassword};e.request({url:"http://10.138.93.113:2221/ScreenTheWord/MainController.do",method:"POST",header:{"Access-Control-Allow-Origin":"*"},data:{controllerRequestType:"loginControllerService",jsonString:{requestType:"updateUserInfo",userInfo:t}},success:function(t){e.showToast({title:"修改成功"})},fail:function(e){}})}else e.showToast({icon:"none",title:"两次密码不一致"})}}}}).call(t,s(2).default)},39:function(e,t,s){"use strict";var o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",[e._m(0),s("view",{staticClass:"reg-list"},[s("image",{attrs:{src:"../../static/img/shouji.png"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{type:"text",placeholder:"账号",maxlength:"11","placeholder-style":"color:#ffffff",eventid:"Xmz-0"},domProps:{value:e.account},on:{input:function(t){t.target.composing||(e.account=t.target.value)}}})]),s("view",{staticClass:"reg-list"},[s("image",{attrs:{src:"../../static/img/miam.png"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",password:"true",placeholder:"请输入新密码","placeholder-style":"color:#ffffff",eventid:"kZj-1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("view",{staticClass:"reg-list"},[s("image",{attrs:{src:"../../static/img/querenmima.png"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],attrs:{type:"text",password:"true",placeholder:"请确认密码","placeholder-style":"color:#ffffff",eventid:"XvT-2"},domProps:{value:e.newPassword},on:{input:function(t){t.target.composing||(e.newPassword=t.target.value)}}})]),s("view",{staticClass:"regBut"},[s("button",{attrs:{eventid:"pQj-3"},on:{tap:e.submit}},[e._v(" 确 定")])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"logo"},[t("image",{attrs:{src:"../../static/img/logo.jpg"}})])}]};t.a=o}},[35]);