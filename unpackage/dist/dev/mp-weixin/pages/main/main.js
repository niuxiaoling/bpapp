require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],[,,,,,,,,,,,function(t,e,i){"use strict";var n=s(i(1)),a=s(i(12));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(14),a=i.n(n),s=i(15),r=!1;var o=function(t){r||i(13)},l=i(0)(a.a,s.a,o,null,null);l.options.__file="F:\\其他项目\\app\\bpapp\\pages\\main\\main.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},function(t,e){},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n,a=i(4),s=(n=a)&&n.__esModule?n:{default:n};e.default={data:{itemList:["../../static/img/banner1.jpg","../../static/img/banner2.jpg"],list:[{imgage:"../../static/img/ruhezhuangqu.png",text:"赚钱方式",url:"/pages/main/moneyWay"},{imgage:"../../static/img/tgewm.png",text:"勇士推广码",url:"/pages/main/SeoCode"},{imgage:"../../static/img/ggrw.png",text:"广告投放",url:"/pages/main/taskRelease"},{imgage:"../../static/img/huiyuanrenwu.png",text:"微品勇士",url:"/pages/main/bVip"},{imgage:"../../static/img/renwudating.png",text:"科企互化",url:"/pages/main/waiting"},{imgage:"../../static/img/wdgx.png",text:"科技孵化",url:"/pages/main/waiting"},{imgage:"../../static/img/shagnchengwulian.png",text:"微品众商",url:"/pages/main/waiting"},{imgage:"../../static/img/hb.png",text:"新社区零售",url:"/pages/main/waiting"},{imgage:"../../static/img/kefu.png",text:"客服中心",url:"/pages/main/waiting"}],bchange:2,bspeed:100,direction:"horizontal",horizontal_dire:"left",vertical_dire:"top",strs:["微品，引领新时代","微品，引领新时代"],clonestr:[],bw:0,bh:0,bl:0,bt:0},methods:{seamlessscrolling:function(){for(var t=this,e=[],i=0;i<this.strs.length;i++)e.push(this.strs[i]);for(i=0;i<this.strs.length;i++)e.push(this.strs[i]);t.clonestr=e,wx.getSystemInfo({success:function(e){t.bw=e.windowWidth,t.bh=40}})},goURL:function(e){""!=s.default.userInfo&&s.default.userInfo?t.navigateTo({url:e}):t.showModal({title:"温馨提示",content:"当前没有登陆，请登陆",success:function(e){e.confirm&&t.navigateTo({url:"../index/index"}),e.cancel&&console.log("取消")}})}},mounted:function(){},onLoad:function(){var e=t.getStorageSync("userInfo");s.default.userInfo=e,this.seamlessscrolling();var i=this;setInterval(function(){"horizontal"==i.direction?i.bl-i.bchange<=-i.bw*i.strs.length?i.bl=0:i.bl=i.bl-i.bchange:"vertical"==i.direction&&(i.bt-i.bchange<=-i.bh*i.strs.length?i.bl=0:i.bt=i.bt-i.bchange)},i.bspeed)}}}).call(e,i(2).default)},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"swiperbox"},[i("swiper",{attrs:{"indicator-dots":t.indicatorDots,"indicator-active-color":"#3AC198",autoplay:t.autoplay,interval:t.interval,duration:t.duration,circular:!0}},t._l(t.itemList,function(t,e){return i("swiper-item",{key:t,attrs:{mpcomid:"MO8-0-"+e}},[i("image",{attrs:{src:t,mode:"scaleToFill"}})])}))],1),i("view",{staticClass:"banner"},[i("view",{staticClass:"seamlessscrolling",style:{height:t.bh+"px",width:t.bw+"px"}},[i("view",{style:{height:"vertical"==t.direction?t.bh*t.clonestr.length:t.bh+"px",width:"horizontal"==t.direction?t.bw*t.clonestr.length+"px":t.bw+"px",left:t.bl+"px",top:t.bt+"px"}},t._l(t.clonestr,function(e,n){return i("view",{key:n,style:{height:t.bh+"px",lineHeight:t.bh+"px",width:t.bw+"px",position:t.absolute,top:"vertical"==t.direction?n*t.bh+"px":0,left:"horizontal"==t.direction?n*t.bw+"px":0}},[t._v(t._s(e))])}))])]),i("view",{staticClass:"list"},t._l(t.list,function(e,n){return i("view",{key:e,staticClass:"list_item"},[i("view",{staticClass:"list_item_a",attrs:{eventid:"6Vp-0-"+n},on:{tap:function(i){t.goURL(e.url)}}},[i("image",{attrs:{src:e.imgage,mode:"scaleToFill"}}),i("text",[t._v(t._s(e.text))])])])}))])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a}],[11]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/main/main.js.map