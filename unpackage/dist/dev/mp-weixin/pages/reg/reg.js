require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{30:function(e,t,o){"use strict";var i=n(o(0)),s=n(o(31));function n(e){return e&&e.__esModule?e:{default:e}}new i.default(s.default).$mount()},31:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(33),s=o.n(i),n=o(34),a=!1;var r=function(e){a||o(32)},l=o(1)(s.a,n.a,r,null,null);l.options.__file="E:\\其他项目\\bpapp\\pages\\reg\\reg.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] reg.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},32:function(e,t){},33:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{phone:"",verificationCode:"",account:"",password:"",invitationCode:"",superInvitationCode:"",showTime:!1,time:60}},methods:{getPhone:function(){var t=this;if(/^1[34578]\d{9}$/.test(this.phone)){var o={requestType:"getInvitation",userInfo:{phone:this.phone}},i={controllerRequestType:"loginControllerService",jsonString:JSON.stringify(o)};e.request({url:t.websiteUrl,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:i,success:function(o){"0000"==o.data.errorCode?t.invitationCode=o.data.userInfo.invitationCode:e.showToast({icon:"none",title:o.data.errorMessage})},fail:function(t){e.showToast({icon:"none",title:t.data.errorMessage})}}),this.showTime=!0;var s=setInterval(function(){t.time--,0==t.time&&(t.showTime=!1,clearInterval(s),t.time=60)},1e3)}else e.showToast({icon:"none",title:"请输入正确的11位手机号"})},register:function(){if(/^1[34578]\d{9}$/.test(this.phone))if(this.password.length<6)e.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.okPassword==this.password)if(""!=this.verificationCode)if(""!=this.superInvitationCode){var t={requestType:"registUserInfo",userInfo:{phone:this.phone,verificationCode:this.verificationCode,account:this.phone,password:this.password,superInvitationCode:this.superInvitationCode,invitationCode:this.invitationCode}},o={controllerRequestType:"loginControllerService",jsonString:JSON.stringify(t)};e.request({url:this.websiteUrl,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:o,success:function(t){"0000"==t.data.errorCode?e.showToast({icon:"none",title:"注册成功,请登陆！"}):e.showToast({icon:"none",title:t.data.errorMessage})},fail:function(t){e.showToast({icon:"none",title:"注册失败"})}})}else e.showToast({icon:"none",title:"请输入邀请码"});else e.showToast({icon:"none",title:"请输入短信验证码"});else e.showToast({icon:"none",title:"密码不一致"});else e.showToast({icon:"none",title:"请输入正确的11位手机号"})}}}}).call(t,o(2).default)},34:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",[e._m(0),o("view",{staticClass:"reg-list"},[o("image",{attrs:{src:"../../static/img/shouji.png"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"手机号",maxlength:"11","placeholder-style":"color:#ffffff",eventid:"Soq-0"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),o("view",{staticClass:"reg-list"},[o("image",{attrs:{src:"../../static/img/yanzhengma.png"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.verificationCode,expression:"verificationCode"}],attrs:{type:"text",placeholder:"手机验证码","placeholder-style":"color:#ffffff",eventid:"XMh-1"},domProps:{value:e.verificationCode},on:{input:function(t){t.target.composing||(e.verificationCode=t.target.value)}}}),e.showTime?o("text",{staticClass:"yanzhentime"},[e._v(e._s(e.time)+"s")]):o("button",{attrs:{eventid:"ph0-2"},on:{tap:e.getPhone}},[o("text",[e._v("|")]),e._v("获取")])],1),o("view",{staticClass:"reg-list"},[o("image",{attrs:{src:"../../static/img/miam.png"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码","placeholder-style":"color:#ffffff",eventid:"nYM-3"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("view",{staticClass:"reg-list"},[o("image",{attrs:{src:"../../static/img/querenmima.png"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.okPassword,expression:"okPassword"}],attrs:{type:"password",placeholder:"请确认密码","placeholder-style":"color:#ffffff",eventid:"a7z-4"},domProps:{value:e.okPassword},on:{input:function(t){t.target.composing||(e.okPassword=t.target.value)}}})]),o("view",{staticClass:"reg-list"},[o("image",{attrs:{src:"../../static/img/yaoqingma.png"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.superInvitationCode,expression:"superInvitationCode"}],attrs:{type:"text",placeholder:"邀请码","placeholder-style":"color:#ffffff",eventid:"liY-5"},domProps:{value:e.superInvitationCode},on:{input:function(t){t.target.composing||(e.superInvitationCode=t.target.value)}}})]),o("view",{staticClass:"regBut"},[o("button",{attrs:{eventid:"d9j-6"},on:{tap:e.register}},[e._v("确认注册")])],1)])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"logo"},[t("image",{attrs:{src:"../../static/img/logo.jpg"}})])}]};t.a=s}},[30]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/reg/reg.js.map