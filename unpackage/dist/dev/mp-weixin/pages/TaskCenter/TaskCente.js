require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{21:function(t,e,a){"use strict";var i=s(a(0)),n=s(a(22));function s(t){return t&&t.__esModule?t:{default:t}}new i.default(n.default).$mount()},22:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(24),n=a.n(i),s=a(25),r=!1;var o=function(t){r||a(23)},u=a(1)(n.a,s.a,o,null,null);u.options.__file="F:\\其他项目\\app\\bpapp\\pages\\TaskCenter\\TaskCente.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] TaskCente.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},23:function(t,e){},24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:{items:["../../static/img/banner1.jpg","../../static/img/banner2.jpg","../../static/img/banner2.jpg","../../static/img/banner2.jpg"],autoplay:!0,circular:!0,indicator:!0,duration:500,tasksList:[{imgage:"../../static/img/renwudating.png",text:"任务大厅",url:"/pages/main/waiting"},{imgage:"../../static/img/tijiaorenwu.png",text:"提交任务",url:"/pages/main/waiting"},{imgage:"../../static/img/renwujilu.png",text:"任务记录",url:"/pages/main/waiting"}]}}},25:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("swiper",{staticClass:"swpier-box",attrs:{autoplay:t.autoplay,circular:t.circular,duration:t.duration,"indicator-dots":t.indicator,"indicator-active-color":"#3AC198"}},t._l(t.items,function(t,e){return a("swiper-item",{key:t,attrs:{mpcomid:"K4k-0-"+e}},[a("image",{attrs:{src:t,mode:"scaleToFill"}})])})),a("view",{staticClass:"taskListBOX"},t._l(t.tasksList,function(e,i){return a("view",{key:e,staticClass:"taskList"},[a("navigator",{attrs:{url:e.url}},[a("image",{attrs:{src:e.imgage,mode:"scaleToFill"}}),a("text",[t._v(t._s(e.text))])])],1)}))],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n}},[21]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/TaskCenter/TaskCente.js.map