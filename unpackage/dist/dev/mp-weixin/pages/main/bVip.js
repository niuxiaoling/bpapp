require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{100:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n,s=i(3);(n=s)&&n.__esModule;e.default={data:function(){return{active:1,money:"99",vipLevel:""}},methods:{bevip1:function(){"VIP1"!=this.vipLevel?"VIP2"!=this.vipLevel?"VIP3"!=this.vipLevel?t.showModal({title:"微品提示",content:"确定支付99成为初级勇士",success:function(e){e.confirm?t.navigateTo({url:"../MoneyWay/request-payment?money=99&payTradeType=VIP1"}):e.cancel}}):t.showToast({icon:"none",title:"您已经是高级勇士，无需再次购买"}):t.showToast({icon:"none",title:"您已经是中级勇士，请选择高级"}):t.showToast({icon:"none",title:"您已经是初级勇士，请选择中级或高级"})},bevip2:function(){"VIP2"!=this.vipLevel?"VIP3"!=this.vipLevel?t.showModal({title:"微品提示",content:"确定支付999成为中级勇士",success:function(e){e.confirm?t.navigateTo({url:"../MoneyWay/request-payment?money=999&payTradeType=VIP2"}):e.cancel}}):t.showToast({icon:"none",title:"您已经是高级勇士，无需再次购买"}):t.showToast({icon:"none",title:"您已经是中级勇士，请选择高级"})},bevip3:function(){"VIP3"!=this.vipLevel?t.showModal({title:"微品提示",content:"确定支付9999成为高级勇士",success:function(e){e.confirm?t.navigateTo({url:"../MoneyWay/request-payment?money=9999&payTradeType=VIP3"}):e.cancel}}):t.showToast({icon:"none",title:"您已经是高级勇士，无需再次购买"})}},onLoad:function(){this.vipLevel=t.getStorageSync("vipLevel")?t.getStorageSync("vipLevel"):""}}}).call(e,i(2).default)},101:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("view",[this._m(0),e("view",{staticClass:"bevipbtn"},[e("view",{attrs:{eventid:"BO6-0"},on:{tap:this.bevip1}},[e("image",{attrs:{src:"../../static/img/bvip1.png",mode:"widthFix"}})]),e("view",{attrs:{eventid:"BHc-1"},on:{tap:this.bevip2}},[e("image",{attrs:{src:"../../static/img/bvip2.png",mode:"widthFix"}})]),e("view",{attrs:{eventid:"5Y2-2"},on:{tap:this.bevip3}},[e("image",{attrs:{src:"../../static/img/bvip3.png",mode:"widthFix"}})])]),this._m(1),this._m(2)])};n._withStripped=!0;var s={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"logo"},[e("image",{attrs:{src:"../../static/img/BvipImg.jpg",mode:"widthFix"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"textcontents"},[e("text",{staticClass:"wptext"},[this._v("微品众信向所有勇士签署单边协议，协议内容是3个月能成为精英者，均会在6年内通过微品众信平台赚取的收益买的起100万以上的房子，20万以上的车子。若是购买金额不足由微品众信补足剩余部分。本单边协议具有法律效力。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"textcontents",staticStyle:{"margin-top":"30px"}},[e("text",{staticClass:"wptextgr"},[this._v("注：满人员高级勇士才可升级精英，这是唯一途径，没有任何其他途径。")])])}]};e.a=s},97:function(t,e,i){"use strict";var n=o(i(0)),s=o(i(98));function o(t){return t&&t.__esModule?t:{default:t}}new n.default(s.default).$mount()},98:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(100),s=i.n(n),o=i(101),a=!1;var c=function(t){a||i(99)},r=i(1)(s.a,o.a,c,null,null);r.options.__file="E:\\其他项目\\bpapp\\pages\\main\\bVip.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] bVip.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},99:function(t,e){}},[97]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/main/bVip.js.map