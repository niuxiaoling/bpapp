require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([14],{27:function(t,e,s){"use strict";var a=n(s(1)),i=n(s(28));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},28:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(30),i=s.n(a),n=s(31),o=!1;var r=function(t){o||s(29)},u=s(0)(i.a,n.a,r,null,null);u.options.__file="C:\\Users\\Administrator\\Desktop\\WEIPIN\\bpapp\\pages\\TaskCenter\\taskHall\\taskMast.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] taskMast.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},29:function(t,e){},30:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){},methods:{ysTask:function(){this.taskType="01",t.setStorageSync("taskType",this.taskType),t.navigateTo({url:"/pages/TaskCenter/taskHall/ysTask"})},freeTask:function(){this.taskType="02",t.setStorageSync("taskType",this.taskType),t.navigateTo({url:"/pages/TaskCenter/taskHall/ysTask"})}}}}).call(e,s(2).default)},31:function(t,e,s){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("view",{staticClass:"hall"},[e("view",{staticClass:"task",attrs:{eventid:"aAU-0"},on:{tap:this.ysTask}},[e("image",{attrs:{src:"../../../static/img/logoicon1.png",mode:"aspectFit"}}),e("text",[this._v("勇士任务大厅")]),e("image",{staticClass:"you",attrs:{src:"../../../static/img/youjiantou.png",mode:"aspectFit"}})]),e("view",{staticClass:"task",attrs:{eventid:"vY1-1"},on:{tap:this.freeTask}},[e("image",{attrs:{src:"../../../static/img/logoicon1.png",mode:"aspectFit"}}),e("text",[this._v("自由任务大厅")]),e("image",{staticClass:"you",attrs:{src:"../../../static/img/youjiantou.png",mode:"aspectFit"}})])])])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i}},[27]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/TaskCenter/taskHall/taskMast.js.map