require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{26:function(t,e,s){"use strict";var i=c(s(0)),a=c(s(27));function c(t){return t&&t.__esModule?t:{default:t}}new i.default(a.default).$mount()},27:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(29),a=s.n(i),c=s(30),n=!1;var r=function(t){n||s(28)},l=s(1)(a.a,c.a,r,null,null);l.options.__file="C:\\Users\\Administrator\\Desktop\\wptx1\\bpapp\\pages\\PersonalCenter\\PersonalCenter.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] PersonalCenter.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},28:function(t,e){},29:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:{},methods:{changeAccont:function(){t.showLoading({mask:!0,title:"Loading"}),t.clearStorageSync("userInfo"),t.clearStorageSync("vipLevel"),t.reLaunch({url:"../main/main",success:function(){t.hideLoading()}})},layOutApp:function(){plus.runtime.quit()}}}}).call(e,s(2).default)},30:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"avatars"},[t._m(0),s("text",{staticClass:"phoneNo"},[t._v("页面功能开发中···")]),s("view",{staticClass:"income"},[s("view",{staticClass:"income-list"},[s("text",{staticClass:"list-No"},[t._v("12")]),s("rich-text",{staticClass:"list-text",attrs:{mpcomid:"cbr-0"}},[t._v("总贡献值")])],1),s("view",{staticClass:"income-list"},[s("text",{staticClass:"list-No"},[t._v("12")]),s("rich-text",{staticClass:"list-text",attrs:{mpcomid:"IV8-1"}},[t._v("今日贡献")])],1),s("view",{staticClass:"income-list"},[s("text",{staticClass:"list-No"},[t._v("12")]),s("rich-text",{staticClass:"list-text",attrs:{mpcomid:"r9y-2"}},[t._v("已兑贡献")])],1)]),s("view",{staticClass:"lists"},[t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),s("view",{staticClass:"listli",attrs:{eventid:"fID-0"},on:{tap:t.changeAccont}},[s("image",{attrs:{src:"../../static/img/QHZH.png",mode:"aspectFit"}}),s("text",[t._v("切换账号")])])]),s("view",{staticStyle:{width:"100%"}},[s("button",{staticClass:"getOut",attrs:{eventid:"ZAZ-1"},on:{tap:function(e){t.layOutApp()}}},[t._v("退出APP")])],1)])};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"avatar_box"},[e("view",{staticClass:"avatar"},[e("image",{attrs:{src:"../../static/img/tx_rbt.jpg",mode:"aspectFit"}}),e("view",{staticClass:"sign"},[e("image",{attrs:{src:"../../static/img/viptest.jpg",mode:"aspectFit"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"listli"},[e("image",{attrs:{src:"../../static/img/GRZL.png",mode:"aspectFit"}}),e("text",[this._v("个人资料")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"listli"},[e("image",{attrs:{src:"../../static/img/VIP.png",mode:"aspectFit"}}),e("text",[this._v("账号会员")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"listli"},[e("image",{attrs:{src:"../../static/img/TD.png",mode:"aspectFit"}}),e("text",[this._v("我得战队")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"listli"},[e("image",{attrs:{src:"../../static/img/QB.png",mode:"aspectFit"}}),e("text",[this._v("我的钱包")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"listli"},[e("image",{attrs:{src:"../../static/img/YHK.png",mode:"aspectFit"}}),e("text",[this._v("绑定银行卡")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"listli"},[e("image",{attrs:{src:"../../static/img/TX.png",mode:"aspectFit"}}),e("text",[this._v("提现")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"listli"},[e("image",{attrs:{src:"../../static/img/JCGX.png",mode:"aspectFit"}}),e("text",[this._v("检查更新")])])}]};e.a=a}},[26]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/PersonalCenter/PersonalCenter.js.map