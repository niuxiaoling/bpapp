require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{52:function(e,t,n){"use strict";var i=s(n(0)),o=s(n(53));function s(e){return e&&e.__esModule?e:{default:e}}new i.default(o.default).$mount()},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(55),o=n.n(i),s=n(56);var a=function(e){n(54)},c=n(1)(o.a,s.a,a,null,null);t.default=c.exports},54:function(e,t){},55:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i,o=n(3);(i=o)&&i.__esModule;t.default={data:function(){return{active:1,money:"99",vipLevel:""}},methods:{bevip1:function(){"VIP1"!=this.vipLevel?"VIP2"!=this.vipLevel?e.showModal({title:"微品提示",content:"确定支付99成为初级勇士",success:function(t){t.confirm?e.navigateTo({url:"../MoneyWay/request-payment?money=99"}):t.cancel}}):e.showToast({icon:"none",title:"您已经是中级勇士，无须再次购买"}):e.showToast({icon:"none",title:"您已经是初级勇士，请点击中级"})},bevip2:function(){"VIP2"!=this.vipLevel?e.showModal({title:"微品提示",content:"确定支付999成为中级勇士",success:function(t){t.confirm?e.navigateTo({url:"../MoneyWay/request-payment?money=999"}):t.cancel}}):e.showToast({icon:"none",title:"您已经是中级勇士，无须再次购买"})}},onLoad:function(){this.vipLevel=e.getStorageSync("vipLevel")?e.getStorageSync("vipLevel"):""}}}).call(t,n(2).default)},56:function(e,t,n){"use strict";var i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("view",[this._m(0),t("view",{staticClass:"bevipbtn"},[t("button",{attrs:{eventid:"Tna-0"},on:{tap:this.bevip1}},[this._v("99成为初级勇士")]),t("button",{attrs:{eventid:"CeE-1"},on:{tap:this.bevip2}},[this._v("999成为中级勇士")])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"logo"},[t("image",{attrs:{src:"../../static/img/logoBanner.jpg",mode:"widthFix"}})])}]};t.a=i}},[52]);