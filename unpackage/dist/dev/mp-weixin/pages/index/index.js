require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],[,,,,,,,,function(t,e,o){"use strict";var n=a(o(0)),s=a(o(9));function a(t){return t&&t.__esModule?t:{default:t}}new n.default(s.default).$mount()},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(11),s=o.n(n),a=o(14),i=!1;var r=function(t){i||o(10)},l=o(1)(s.a,a.a,r,null,null);l.options.__file="E:\\其他项目\\bpapp\\pages\\index\\index.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},function(t,e){},function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},s=o(13);e.default={data:{account:"",password:"",positionTop:0},methods:n({},(0,s.mapMutations)(["login"]),{initPosition:function(){this.positionTop=t.getSystemInfoSync().windowHeight-100},bindLogin:function(){""!=this.account.length?this.password.length<6?t.showToast({icon:"none",title:"密码最短为 6 个字符"}):t.request({url:"http://10.138.93.113:2221/ScreenTheWord/MainController.do?controllerRequestType=loginControllerService",method:"POST",header:{"Access-Control-Allow-Origin":"*"},data:{jsonString:{requestType:"login",userInfo:{account:this.account,password:this.password}}},success:function(t){console.log(t.data)}}):t.showToast({icon:"none",title:"账号不能为空"})}}),onLoad:function(){this.initPosition()}}}).call(e,o(12).default)},,,function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"content"},[t._m(0),o("view",{staticClass:"reg-list"},[o("image",{attrs:{src:"../../static/img/shouji.png"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"手机号",maxlength:"11","placeholder-class":"placeholder",eventid:"rSH-0"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})]),o("view",{staticClass:"reg-list"},[o("image",{attrs:{src:"../../static/img/miam.png"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",password:"true",placeholder:"密码",maxlength:"11","placeholder-class":"placeholder",eventid:"5hE-1"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),o("view",{staticClass:"regBut"},[o("button",{attrs:{eventid:"1to-2"},on:{tap:t.bindLogin}},[t._v(" 登 录 ")])],1),o("view",{staticClass:"action-row"},[o("navigator",{attrs:{url:"../reg/reg"}},[t._v("注册账号")]),o("navigator",{attrs:{url:"../pwd/pwd"}},[t._v("忘记密码")])],1)])};n._withStripped=!0;var s={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"logo"},[e("image",{attrs:{src:"../../static/img/logo.jpg"}})])}]};e.a=s}],[8]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map