require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],[,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return"function"==typeof e},i=/^on|^create|Sync$|Manager$|^pause/,r=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],s=function(e){return(!i.test(e)||"createBLEConnection"===e)&&!~r.indexOf(e)},a=function(e){return function(){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o(r.success)||o(r.fail)||o(r.complete)?e.apply(void 0,[r].concat(n)):new Promise(function(t,o){e.apply(void 0,[Object.assign({},r,{success:t,fail:o})].concat(n)),Promise.prototype.finally=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})}}).then(function(e){return[null,e]}).catch(function(e){return[e]})}},u=1e-4,c=750,l=!1,f=0,p=0;function d(e,t){var n,o,i,r;return 0===f&&(n=wx.getSystemInfoSync(),o=n.platform,i=n.pixelRatio,r=n.windowWidth,f=r,p=i,l="ios"===o),0===e?0:(e=e/c*(t||f),0===(e=Math.floor(e+u))?1!==p&&l?.5:1:e)}var v={oauth:["weixin"],share:["weixin"],payment:["wxpay"],push:["weixin"]};var h=Object.freeze({getProvider:function(e){var t=e.service,n=e.success,i=e.fail,r=e.complete,s=!1;v[t]?(s={errMsg:"getProvider:ok",service:t,provider:v[t]},o(n)&&n(s)):(s={errMsg:"getProvider:fail:服务["+t+"]不存在"},o(i)&&i(s)),o(r)&&r(s)},subscribePush:function(e){var t=e.fail,n=e.complete,i={errMsg:"subscribePush:fail:微信小程序不支持 subscribePush 方法"};o(t)&&t(i),o(n)&&n(i)},unsubscribePush:function(e){var t=e.fail,n=e.complete,i={errMsg:"unsubscribePush:fail:微信小程序不支持 unsubscribePush 方法"};o(t)&&t(i),o(n)&&n(i)},onPush:function(e){var t=e.fail,n=e.complete,i={errMsg:"onPush:fail:微信小程序不支持 onPush 方法"};o(t)&&t(i),o(n)&&n(i)},offPush:function(e){var t=e.fail,n=e.complete,i={errMsg:"offPush:fail:微信小程序不支持 offPush 方法"};o(t)&&t(i),o(n)&&n(i)},share:function(e){var t=e.fail,n=e.complete,i={errMsg:"share:fail:微信小程序不支持 share 方法"};o(t)&&t(i),o(n)&&n(i)}}),g={},w={os:{wx:!0}};"undefined"!=typeof Proxy?g=new Proxy({},{get:function(e,t){return w.hasOwnProperty(t)?w[t]:"upx2px"===t?d:h[t]?s(t)?a(h[t]):h[t]:wx.hasOwnProperty(t)?s(t)?a(wx[t]):wx[t]:void 0}}):(g.upx2px=d,Object.keys(w).forEach(function(e){g[e]=w[e]}),Object.keys(h).forEach(function(e){s(e)?g[e]=h[e]:g[e]=a(h[e])}),Object.keys(wx).forEach(function(e){wx.hasOwnProperty(e)&&(s(e)?g[e]=a(wx[e]):g[e]=wx[e])}));var m=g;t.default=m},,,,,,,,,,,,function(e,t,n){"use strict";var o=r(n(0)),i=r(n(15));function r(e){return e&&e.__esModule?e:{default:e}}new o.default(i.default).$mount()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),i=n.n(o),r=n(20),s=!1;var a=function(e){s||n(16)},u=n(1)(i.a,r.a,a,null,null);u.options.__file="E:\\其他项目\\bpapp\\pages\\index\\index.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},function(e,t){},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(18),s=(o=r)&&o.__esModule?o:{default:o},a=n(19);t.default={data:{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0},computed:(0,a.mapState)(["forcedLogin"]),methods:i({},(0,a.mapMutations)(["login"]),{initProvider:function(){var t=this,n=["weixin","qq","sinaweibo"];e.getProvider({service:"oauth",success:function(e){if(e.provider&&e.provider.length){for(var o=0;o<e.provider.length;o++)~n.indexOf(e.provider[o])&&t.providerList.push({value:e.provider[o],image:"../../static/img/"+e.provider[o]+".png"});t.hasProvider=!0}},fail:function(e){console.error("获取服务供应商失败："+JSON.stringify(e))}})},initPosition:function(){this.positionTop=e.getSystemInfoSync().windowHeight-100},bindLogin:function(){if(""!=this.account.length)if(this.password.length<6)e.showToast({icon:"none",title:"密码最短为 6 个字符"});else{var t=this.account,n=this.password;s.default.getUsers().some(function(e){return t===e.account&&n===e.password})?this.toMain(this.account):e.showToast({icon:"none",title:"用户账号或密码不正确"})}else e.showToast({icon:"none",title:"账号不能为空"})},oauth:function(t){var n=this;e.login({provider:t,success:function(o){e.getUserInfo({provider:t,success:function(e){n.toMain(e.userInfo.nickName)}})},fail:function(e){console.error("授权登录失败："+JSON.stringify(e))}})},toMain:function(t){this.login(t),this.forcedLogin?e.reLaunch({url:"../main/main"}):e.navigateBack()}}),onLoad:function(){this.initPosition(),this.initProvider()}}}).call(t,n(2).default)},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var t="";return(t=e.getStorageSync("admin"))||(t="[]"),JSON.parse(t)};t.default={getUsers:n,addUser:function(t){var o=n();o.push({account:t.account,password:t.password}),e.setStorageSync("admin",JSON.stringify(o))}}}).call(t,n(2).default)},,function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"content"},[e._m(0),e._v(" "),n("view",{staticClass:"login"},[n("view",{staticClass:"input-row border"},[n("text",{staticClass:"title"},[e._v("账号：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{type:"text",placeholder:"请输入账号",eventid:"uu3-0"},domProps:{value:e.account},on:{input:function(t){t.target.composing||(e.account=t.target.value)}}})]),e._v(" "),n("view",{staticClass:"input-row"},[n("text",{staticClass:"title"},[e._v("密码：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",password:"true",placeholder:"请输入密码",eventid:"xN4-1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._v(" "),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"jCN-2"},on:{tap:e.bindLogin}},[e._v("登录")])],1),e._v(" "),n("view",{staticClass:"action-row"},[n("navigator",{attrs:{url:"../reg/reg"}},[e._v("注册账号")]),e._v(" "),n("text",[e._v("|")]),e._v(" "),n("navigator",{attrs:{url:"../pwd/pwd"}},[e._v("忘记密码")])],1),e._v(" "),e.hasProvider?n("view",{staticClass:"oauth-row",style:{top:e.positionTop+"px"}},e._l(e.providerList,function(t,o){return n("view",{key:t.value,staticClass:"oauth-image"},[n("image",{attrs:{src:t.image,eventid:"fUv-3-"+o},on:{tap:function(n){e.oauth(t.value)}}})])})):e._e()])};o._withStripped=!0;var i={render:o,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"logo"},[t("image",{attrs:{src:"http://www.xhsmoll.com/upFiles/images/2018101175667609.jpg",mode:"scaleToFill"}})])}]};t.a=i}],[14]);
//# sourceMappingURL=../../.sourcemap/pages/index/index.js.map