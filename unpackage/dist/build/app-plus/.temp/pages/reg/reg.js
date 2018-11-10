require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{30:function(e,t,o){"use strict";var i=a(o(0)),n=a(o(31));function a(e){return e&&e.__esModule?e:{default:e}}new i.default(n.default).$mount()},31:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(33),n=o.n(i),a=o(34);var s=function(e){o(32)},r=o(1)(n.a,a.a,s,null,null);t.default=r.exports},32:function(e,t){},33:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{phone:"",verificationCode:"",account:"",password:"",invitationCode:""}},methods:{getPhone:function(){""==this.phone&&e.showToast({icon:"none",title:"手机号码不能为空"})},register:function(){if(this.account.length<5)e.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)e.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(""!=this.verificationCode){var t={phone:this.phone,verificationCode:this.verificationCode,account:this.account,password:this.password,invitationCode:this.invitationCode};e.request({url:"http://10.138.93.113:2221/ScreenTheWord/MainController.do",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{controllerRequestType:"loginControllerService",jsonString:{requestType:"registUserInfo",userInfo:t}},success:function(t){console.log(t),e.showToast({title:"注册成功"})},fail:function(e){}})}else e.showToast({icon:"none",title:"请输入短信验证码"})}}}}).call(t,o(2).default)},34:function(e,t,o){"use strict";var i={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",[e._m(0),o("view",{staticClass:"reg-list"},[o("image",{attrs:{src:"../../static/img/shouji.png"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"手机号/用户名",maxlength:"11","placeholder-style":"color:#ffffff",eventid:"lof-0"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),o("view",{staticClass:"reg-list"},[o("image",{attrs:{src:"../../static/img/yanzhengma.png"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.verificationCode,expression:"verificationCode"}],attrs:{type:"text",placeholder:"手机验证码","placeholder-style":"color:#ffffff",eventid:"ye1-1"},domProps:{value:e.verificationCode},on:{input:function(t){t.target.composing||(e.verificationCode=t.target.value)}}}),o("button",{attrs:{eventid:"q5s-2"},domProps:{innerHTML:e._s(e.coustDown)},on:{tap:e.getPhone}},[o("text",[e._v("|")]),e._v("获取")])],1),o("view",{staticClass:"reg-list"},[o("image",{attrs:{src:"../../static/img/miam.png"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",placeholder:"密码","placeholder-style":"color:#ffffff",eventid:"ITi-3"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("view",{staticClass:"reg-list"},[o("image",{attrs:{src:"../../static/img/yaoqingma.png"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.invitationCode,expression:"invitationCode"}],attrs:{type:"text",placeholder:"邀请码","placeholder-style":"color:#ffffff",eventid:"iGF-4"},domProps:{value:e.invitationCode},on:{input:function(t){t.target.composing||(e.invitationCode=t.target.value)}}})]),o("view",{staticClass:"regBut"},[o("button",{attrs:{eventid:"Vwx-5"},on:{tap:e.register}},[e._v("确认注册")])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"logo"},[t("image",{attrs:{src:"../../static/img/logo.jpg"}})])}]};t.a=i}},[30]);