require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{52:function(e,t,i){"use strict";var n=s(i(0)),a=s(i(53));function s(e){return e&&e.__esModule?e:{default:e}}new n.default(a.default).$mount()},53:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(55),a=i.n(n),s=i(56),o=!1;var r=function(e){o||i(54)},c=i(1)(a.a,s.a,r,null,null);c.options.__file="F:\\其他项目\\app\\bpapp\\pages\\main\\bVip.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] bVip.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},54:function(e,t){},55:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=i(3);(n=a)&&n.__esModule;t.default={data:function(){return{active:1,money:"99",vipLevel:""}},methods:{change:function(e){this.vipLevel?1==this.vipLevel?this.active:2==this.vipLevel&&this.active:this.active=e}},onLoad:function(){this.vipLevel=e.getStorageSync("vipLevel"),this.vipLevel=1,1==this.vipLevel?this.active:2==this.vipLevel&&this.active}}}).call(t,i(2).default)},56:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",[e._m(0),i("view",{staticClass:"bevip"},[i("view",{staticClass:"bevip-item",class:1==e.active?"active":"",attrs:{eventid:"iuh-0"},on:{tap:function(t){e.change(1)}}},[i("text",[e._v("普通VIP")]),i("text",{staticStyle:{color:"red"}},[e._v("￥99")])]),i("view",{staticClass:"bevip-item",class:2==e.active?"active":"",attrs:{eventid:"0Vu-1"},on:{tap:function(t){e.change(2)}}},[i("text",[e._v("高级VIP")]),i("text",{staticStyle:{color:"red"}},[e._v("￥999")])])]),i("view",{staticClass:"bevipbtn"},[i("navigator",{attrs:{url:"../MoneyWay/request-payment?money=99"}},[1==e.active?i("button",[e._v("成为VIP")]):e._e()],1),i("navigator",{attrs:{url:"../MoneyWay/request-payment?money=999"}},[2==e.active?i("button",[e._v("成为高级VIP")]):e._e()],1)],1)])};n._withStripped=!0;var a={render:n,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"logo"},[t("image",{attrs:{src:"../../static/img/logoBanner.jpg",mode:"widthFix"}})])}]};t.a=a}},[52]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/main/bVip.js.map