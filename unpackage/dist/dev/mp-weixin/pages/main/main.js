require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],[,,,,,,,,,function(t,e,i){"use strict";var n=a(i(0)),s=a(i(10));function a(t){return t&&t.__esModule?t:{default:t}}new n.default(s.default).$mount()},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(12),s=i.n(n),a=i(13),r=!1;var o=function(t){r||i(11)},l=i(1)(s.a,a.a,o,null,null);l.options.__file="C:\\Users\\Administrator\\Desktop\\wptx1\\bpapp\\pages\\main\\main.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:{itemList:["../../static/img/banner1.jpg","../../static/img/banner2.jpg"],list:[{imgage:"../../static/img/ruhezhuangqu.png",text:"赚钱方式",url:"/pages/main/MoneyWay"},{imgage:"../../static/img/tgewm.png",text:"勇士推广码",url:"/pages/main/SeoCode"},{imgage:"../../static/img/ggrw.png",text:"广告投放",url:"/pages/main/waiting"},{imgage:"../../static/img/huiyuanrenwu.png",text:"微品勇士",url:"/pages/main/bVip"},{imgage:"../../static/img/renwudating.png",text:"科企互化",url:"/pages/main/waiting"},{imgage:"../../static/img/wdgx.png",text:"科技孵化",url:"/pages/main/waiting"},{imgage:"../../static/img/shagnchengwulian.png",text:"微品众商",url:"/pages/main/waiting"},{imgage:"../../static/img/hb.png",text:"全球免费",url:"/pages/main/waiting"},{imgage:"../../static/img/kefu.png",text:"客服中心",url:"/pages/MoneyWay/request-payment"}],bchange:2,bspeed:100,direction:"horizontal",horizontal_dire:"left",vertical_dire:"top",strs:["所有的楼房全部低于3千平米赶快买","所有的车子全部低于30000一辆","知道区块链吗，知道比特币吗，赶紧学"],clonestr:[],bw:0,bh:0,bl:0,bt:0},methods:{seamlessscrolling:function(){for(var t=this,e=[],i=0;i<this.strs.length;i++)e.push(this.strs[i]);for(i=0;i<this.strs.length;i++)e.push(this.strs[i]);t.clonestr=e,wx.getSystemInfo({success:function(e){t.bw=e.windowWidth,t.bh=40}})}},mounted:function(){},onLoad:function(){this.seamlessscrolling();var t=this;setInterval(function(){"horizontal"==t.direction?t.bl-t.bchange<=-t.bw*t.strs.length?t.bl=0:t.bl=t.bl-t.bchange:"vertical"==t.direction&&(t.bt-t.bchange<=-t.bh*t.strs.length?t.bl=0:t.bt=t.bt-t.bchange)},t.bspeed)}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"swiperbox"},[i("swiper",{attrs:{"indicator-dots":t.indicatorDots,"indicator-active-color":"#3AC198",autoplay:t.autoplay,interval:t.interval,duration:t.duration,circular:!0}},t._l(t.itemList,function(t,e){return i("swiper-item",{key:t,attrs:{mpcomid:"W29-0-"+e}},[i("image",{attrs:{src:t,mode:"scaleToFill"}})])}))],1),i("view",{staticClass:"banner"},[i("view",{staticClass:"seamlessscrolling",style:{height:t.bh+"px",width:t.bw+"px"}},[i("view",{style:{height:"vertical"==t.direction?t.bh*t.clonestr.length:t.bh+"px",width:"horizontal"==t.direction?t.bw*t.clonestr.length+"px":t.bw+"px",left:t.bl+"px",top:t.bt+"px"}},t._l(t.clonestr,function(e,n){return i("view",{key:n,style:{height:t.bh+"px",lineHeight:t.bh+"px",width:t.bw+"px",position:t.absolute,top:"vertical"==t.direction?n*t.bh+"px":0,left:"horizontal"==t.direction?n*t.bw+"px":0}},[t._v(t._s(e))])}))])]),i("view",{staticClass:"list"},t._l(t.list,function(e,n){return i("view",{key:e,staticClass:"list_item"},[i("navigator",{attrs:{url:e.url}},[i("image",{attrs:{src:e.imgage,mode:"scaleToFill"}}),i("text",[t._v(t._s(e.text))])])],1)}))])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s}],[9]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/main/main.js.map