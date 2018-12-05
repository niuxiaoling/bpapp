require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{15:function(e,t,n){"use strict";var o=a(n(0)),s=a(n(16));function a(e){return e&&e.__esModule?e:{default:e}}new o.default(s.default).$mount()},16:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(18),s=n.n(o),a=n(20),i=!1;var r=function(e){i||n(17)},l=n(1)(s.a,a.a,r,null,null);l.options.__file="E:\\其他项目\\bpapp\\pages\\index\\index.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},17:function(e,t){},18:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n(19);t.default={data:{account:"",password:"",positionTop:0},methods:o({},(0,s.mapMutations)(["login"]),{initPosition:function(){this.positionTop=e.getSystemInfoSync().windowHeight-100},bindLogin:function(){e.showLoading({title:"Loading",mask:!0});if(""!=this.account.length)if(this.password.length<6)e.showToast({icon:"none",title:"密码最短为 6 个字符"});else{var t={userInfo:{account:this.account,password:this.password},requestType:"login"},n={controllerRequestType:"loginControllerService",jsonString:JSON.stringify(t)};e.request({url:this.websiteUrl,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:n,success:function(t){"0000"==t.data.errorCode?(e.setStorageSync("userInfo",t.data.userInfo),e.setStorageSync("vipLevel",t.data.userInfo.vipLevel),e.hideLoading(),e.reLaunch({url:"../main/main"})):e.showToast({icon:"none",title:t.data.errorMessage})},fail:function(e){console.log(JSON.stringify(e))}})}else e.showToast({icon:"none",title:"账号不能为空"})}}),onLoad:function(){this.initPosition()}}}).call(t,n(2).default)},20:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"content"},[e._m(0),n("view",{staticClass:"reg-list"},[n("image",{attrs:{src:"../../static/img/shouji.png"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{type:"text",placeholder:"手机号",maxlength:"11","placeholder-class":"placeholder",eventid:"jkd-0"},domProps:{value:e.account},on:{input:function(t){t.target.composing||(e.account=t.target.value)}}})]),n("view",{staticClass:"reg-list"},[n("image",{attrs:{src:"../../static/img/miam.png"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码",maxlength:"11","placeholder-class":"placeholder",eventid:"EPN-1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("view",{staticClass:"regBut"},[n("button",{attrs:{eventid:"BKQ-2"},on:{tap:e.bindLogin}},[e._v(" 登 录 ")])],1),n("view",{staticClass:"action-row"},[n("navigator",{attrs:{url:"../reg/reg"}},[e._v("注册账号")]),n("navigator",{attrs:{url:"../main/waiting"}},[e._v("忘记密码")])],1)])};o._withStripped=!0;var s={render:o,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"logo"},[t("image",{attrs:{src:"../../static/img/logo.jpg"}})])}]};t.a=s}},[15]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map