require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([19],{22:function(t,e,s){"use strict";var a=i(s(1)),n=i(s(23));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},23:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(25),n=s.n(a),i=s(26),r=!1;var o=function(t){r||s(24)},u=s(0)(n.a,i.a,o,null,null);u.options.__file="C:\\Users\\Administrator\\Desktop\\WPZX\\bpapp\\pages\\TaskCenter\\TaskCente.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] TaskCente.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},24:function(t,e){},25:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:{items:["../../static/img/banner1.jpg","../../static/img/banner2.jpg","../../static/img/banner3.jpg","../../static/img/banner4.jpg"],userInfo:"",autoplay:!0,circular:!0,indicator:!0,duration:500,tasksList:[{imgage:"../../static/img/renwudating.png",text:"任务大厅",url:"/pages/TaskCenter/taskHall/YSTask"},{imgage:"../../static/img/tijiaorenwu.png",text:"提交任务",url:"/pages/TaskCenter/submitTask/submitTasksList"},{imgage:"../../static/img/renwujilu.png",text:"任务记录",url:"/pages/TaskCenter/taskRecord/taskRecord"}]},onLoad:function(){var e=t.getStorageSync("userInfo");this.userInfo=e},methods:{goURL:function(e){""!=this.userInfo&&this.userInfo?t.navigateTo({url:e}):t.showModal({title:"温馨提示",content:"当前没有登陆，请登陆",success:function(e){e.confirm&&t.navigateTo({url:"../index/index"}),e.cancel&&console.log("取消")}})}}}}).call(e,s(2).default)},26:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("swiper",{staticClass:"swpier-box",attrs:{autoplay:t.autoplay,circular:t.circular,duration:t.duration,"indicator-dots":t.indicator,"indicator-active-color":"#3AC198"}},t._l(t.items,function(t,e){return s("swiper-item",{key:t,attrs:{mpcomid:"Nzt-0-"+e}},[s("image",{attrs:{src:t,mode:"scaleToFill"}})])})),s("view",{staticClass:"taskListBOX"},t._l(t.tasksList,function(e,a){return s("view",{key:e,staticClass:"taskList"},[s("view",{staticClass:"taskUrl",attrs:{eventid:"7Ym-0-"+a},on:{tap:function(s){t.goURL(e.url)}}},[s("image",{attrs:{src:e.imgage,mode:"scaleToFill"}}),s("text",[t._v(t._s(e.text))])])])}))],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n}},[22]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/TaskCenter/TaskCente.js.map