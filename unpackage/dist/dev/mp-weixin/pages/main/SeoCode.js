require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{81:function(r,t,e){"use strict";var n=a(e(0)),o=a(e(82));function a(r){return r&&r.__esModule?r:{default:r}}new n.default(o.default).$mount()},82:function(r,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(84),o=e.n(n),a=e(86),i=!1;var u=function(r){i||e(83)},f=e(1)(o.a,a.a,u,null,null);f.options.__file="E:\\其他项目\\bpapp\\pages\\main\\SeoCode.vue",f.esModule&&Object.keys(f.esModule).some(function(r){return"default"!==r&&"__"!==r.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),f.options.functional&&console.error("[vue-loader] SeoCode.vue: functional components are not supported with templates, they should use render functions."),t.default=f.exports},83:function(r,t){},84:function(r,t,e){"use strict";(function(r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=e(85),a=(n=o)&&n.__esModule?n:{default:n};t.default={data:function(){return{qrimg:"",plcode:"",plcodeArr:[]}},onLoad:function(){this.plcode=r.getStorageSync("userInfo").invitationCode;var t="https://www.sixkeep.com:8080/html/resgs/?invitationCode="+this.plcode,e=a.default.createQrCodeImg(t,{size:parseInt(200)});this.qrimg=e,this.plcodeArr=[].concat(function(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}return Array.from(r)}(this.plcode))}}}).call(t,e(2).default)},85:function(r,t,e){"use strict";var n=function(r,t){var e=r,n=g[t],o=null,a=0,i=null,u=new Array,f={},c=function(r,t){o=function(r){for(var t=new Array(r),e=0;e<r;e+=1){t[e]=new Array(r);for(var n=0;n<r;n+=1)t[e][n]=null}return t}(a=4*e+17),s(0,0),s(a-7,0),s(0,a-7),h(),l(),d(r,t),e>=7&&v(r),null==i&&(i=p(e,n,u)),w(i,t)},s=function(r,t){for(var e=-1;e<=7;e+=1)if(!(r+e<=-1||a<=r+e))for(var n=-1;n<=7;n+=1)t+n<=-1||a<=t+n||(o[r+e][t+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},l=function(){for(var r=8;r<a-8;r+=1)null==o[r][6]&&(o[r][6]=r%2==0);for(var t=8;t<a-8;t+=1)null==o[6][t]&&(o[6][t]=t%2==0)},h=function(){for(var r=C.getPatternPosition(e),t=0;t<r.length;t+=1)for(var n=0;n<r.length;n+=1){var a=r[t],i=r[n];if(null==o[a][i])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[a+u][i+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(r){for(var t=C.getBCHTypeNumber(e),n=0;n<18;n+=1){var i=!r&&1==(t>>n&1);o[Math.floor(n/3)][n%3+a-8-3]=i}for(n=0;n<18;n+=1){i=!r&&1==(t>>n&1);o[n%3+a-8-3][Math.floor(n/3)]=i}},d=function(r,t){for(var e=n<<3|t,i=C.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!r&&1==(i>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[a-15+u][8]=f}for(u=0;u<15;u+=1){f=!r&&1==(i>>u&1);u<8?o[8][a-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[a-8][8]=!r},w=function(r,t){for(var e=-1,n=a-1,i=7,u=0,f=C.getMaskFunction(t),c=a-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var s=0;s<2;s+=1)if(null==o[n][c-s]){var g=!1;u<r.length&&(g=1==(r[u]>>>i&1)),f(n,c-s)&&(g=!g),o[n][c-s]=g,-1==(i-=1)&&(u+=1,i=7)}if((n+=e)<0||a<=n){n-=e,e=-e;break}}},p=function(r,t,e){for(var n=k.getRSBlocks(r,t),o=b(),a=0;a<e.length;a+=1){var i=e[a];o.put(i.getMode(),4),o.put(i.getLength(),C.getLengthInBits(i.getMode(),r)),i.write(o)}var u=0;for(a=0;a<n.length;a+=1)u+=n[a].dataCount;if(o.getLengthInBits()>8*u)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*u+")");for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(r,t){for(var e=0,n=0,o=0,a=new Array(t.length),i=new Array(t.length),u=0;u<t.length;u+=1){var f=t[u].dataCount,c=t[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),a[u]=new Array(f);for(var s=0;s<a[u].length;s+=1)a[u][s]=255&r.getBuffer()[s+e];e+=f;var g=C.getErrorCorrectPolynomial(c),l=A(a[u],g.getLength()-1).mod(g);for(i[u]=new Array(g.getLength()-1),s=0;s<i[u].length;s+=1){var h=s+l.getLength()-i[u].length;i[u][s]=h>=0?l.getAt(h):0}}var v=0;for(s=0;s<t.length;s+=1)v+=t[s].totalCount;var d=new Array(v),w=0;for(s=0;s<n;s+=1)for(u=0;u<t.length;u+=1)s<a[u].length&&(d[w]=a[u][s],w+=1);for(s=0;s<o;s+=1)for(u=0;u<t.length;u+=1)s<i[u].length&&(d[w]=i[u][s],w+=1);return d}(o,n)};return f.addData=function(r){var t=M(r);u.push(t),i=null},f.isDark=function(r,t){if(r<0||a<=r||t<0||a<=t)throw new Error(r+","+t);return o[r][t]},f.getModuleCount=function(){return a},f.make=function(){c(!1,function(){for(var r=0,t=0,e=0;e<8;e+=1){c(!0,e);var n=C.getLostPoint(f);(0==e||r>n)&&(r=n,t=e)}return t}())},f.createTableTag=function(r,t){r=r||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(t=void 0===t?4*r:t)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+r+"px;",e+=" height: "+r+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createImgTag=function(r,t,e){r=r||2;var n=t=void 0===t?4*r:t,o=f.getModuleCount()*r+t;return x(e,e,function(t,e){if(n<=t&&t<o&&n<=e&&e<o){var a=Math.floor((t-n)/r),i=Math.floor((e-n)/r);return f.isDark(i,a)?0:1}return 1})},f};n.stringToBytes=function(r){for(var t=new Array,e=0;e<r.length;e+=1){var n=r.charCodeAt(e);t.push(255&n)}return t},n.createStringToBytes=function(r,t){var e=function(){for(var e=_(r),n=function(){var r=e.read();if(-1==r)throw new Error;return r},o=0,a={};;){var i=e.read();if(-1==i)break;var u=n(),f=n()<<8|n();a[String.fromCharCode(i<<8|u)]=f,o+=1}if(o!=t)throw new Error(o+" != "+t);return a}(),n="?".charCodeAt(0);return function(r){for(var t=new Array,o=0;o<r.length;o+=1){var a=r.charCodeAt(o);if(a<128)t.push(a);else{var i=e[r.charAt(o)];"number"==typeof i?(255&i)==i?t.push(i):(t.push(i>>>8),t.push(255&i)):t.push(n)}}return t}};var o,a,i,u=1,f=2,c=4,s=8,g={L:1,M:0,Q:3,H:2},l=0,h=1,v=2,d=3,w=4,p=5,y=6,m=7,C=(o=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],i=function(r){for(var t=0;0!=r;)t+=1,r>>>=1;return t},(a={}).getBCHTypeInfo=function(r){for(var t=r<<10;i(t)-i(1335)>=0;)t^=1335<<i(t)-i(1335);return 21522^(r<<10|t)},a.getBCHTypeNumber=function(r){for(var t=r<<12;i(t)-i(7973)>=0;)t^=7973<<i(t)-i(7973);return r<<12|t},a.getPatternPosition=function(r){return o[r-1]},a.getMaskFunction=function(r){switch(r){case l:return function(r,t){return(r+t)%2==0};case h:return function(r,t){return r%2==0};case v:return function(r,t){return t%3==0};case d:return function(r,t){return(r+t)%3==0};case w:return function(r,t){return(Math.floor(r/2)+Math.floor(t/3))%2==0};case p:return function(r,t){return r*t%2+r*t%3==0};case y:return function(r,t){return(r*t%2+r*t%3)%2==0};case m:return function(r,t){return(r*t%3+(r+t)%2)%2==0};default:throw new Error("bad maskPattern:"+r)}},a.getErrorCorrectPolynomial=function(r){for(var t=A([1],0),e=0;e<r;e+=1)t=t.multiply(A([1,B.gexp(e)],0));return t},a.getLengthInBits=function(r,t){if(1<=t&&t<10)switch(r){case u:return 10;case f:return 9;case c:case s:return 8;default:throw new Error("mode:"+r)}else if(t<27)switch(r){case u:return 12;case f:return 11;case c:return 16;case s:return 10;default:throw new Error("mode:"+r)}else{if(!(t<41))throw new Error("type:"+t);switch(r){case u:return 14;case f:return 13;case c:return 16;case s:return 12;default:throw new Error("mode:"+r)}}},a.getLostPoint=function(r){for(var t=r.getModuleCount(),e=0,n=0;n<t;n+=1)for(var o=0;o<t;o+=1){for(var a=0,i=r.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||t<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||t<=o+f||0==u&&0==f||i==r.isDark(n+u,o+f)&&(a+=1);a>5&&(e+=3+a-5)}for(n=0;n<t-1;n+=1)for(o=0;o<t-1;o+=1){var c=0;r.isDark(n,o)&&(c+=1),r.isDark(n+1,o)&&(c+=1),r.isDark(n,o+1)&&(c+=1),r.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<t;n+=1)for(o=0;o<t-6;o+=1)r.isDark(n,o)&&!r.isDark(n,o+1)&&r.isDark(n,o+2)&&r.isDark(n,o+3)&&r.isDark(n,o+4)&&!r.isDark(n,o+5)&&r.isDark(n,o+6)&&(e+=40);for(o=0;o<t;o+=1)for(n=0;n<t-6;n+=1)r.isDark(n,o)&&!r.isDark(n+1,o)&&r.isDark(n+2,o)&&r.isDark(n+3,o)&&r.isDark(n+4,o)&&!r.isDark(n+5,o)&&r.isDark(n+6,o)&&(e+=40);var s=0;for(o=0;o<t;o+=1)for(n=0;n<t;n+=1)r.isDark(n,o)&&(s+=1);return e+=Math.abs(100*s/t/t-50)/5*10},a),B=function(){for(var r=new Array(256),t=new Array(256),e=0;e<8;e+=1)r[e]=1<<e;for(e=8;e<256;e+=1)r[e]=r[e-4]^r[e-5]^r[e-6]^r[e-8];for(e=0;e<255;e+=1)t[r[e]]=e;var n={glog:function(r){if(r<1)throw new Error("glog("+r+")");return t[r]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r[t]}};return n}();function A(r,t){if(void 0===r.length)throw new Error(r.length+"/"+t);var e=function(){for(var e=0;e<r.length&&0==r[e];)e+=1;for(var n=new Array(r.length-e+t),o=0;o<r.length-e;o+=1)n[o]=r[o+e];return n}(),n={getAt:function(r){return e[r]},getLength:function(){return e.length},multiply:function(r){for(var t=new Array(n.getLength()+r.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<r.getLength();o+=1)t[e+o]^=B.gexp(B.glog(n.getAt(e))+B.glog(r.getAt(o)));return A(t,0)},mod:function(r){if(n.getLength()-r.getLength()<0)return n;for(var t=B.glog(n.getAt(0))-B.glog(r.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<r.getLength();o+=1)e[o]^=B.gexp(B.glog(r.getAt(o))+t);return A(e,0).mod(r)}};return n}var k=function(){var r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(r,t){var e={};return e.totalCount=r,e.dataCount=t,e},e={};return e.getRSBlocks=function(e,n){var o=function(t,e){switch(e){case g.L:return r[4*(t-1)+0];case g.M:return r[4*(t-1)+1];case g.Q:return r[4*(t-1)+2];case g.H:return r[4*(t-1)+3];default:return}}(e,n);if(void 0===o)throw new Error("bad rs block [url=home.php?mod=space&uid=5302]@[/url] typeNumber:"+e+"/errorCorrectLevel:"+n);for(var a=o.length/3,i=new Array,u=0;u<a;u+=1)for(var f=o[3*u+0],c=o[3*u+1],s=o[3*u+2],l=0;l<f;l+=1)i.push(t(c,s));return i},e}(),b=function(){var r=new Array,t=0,e={getBuffer:function(){return r},getAt:function(t){var e=Math.floor(t/8);return 1==(r[e]>>>7-t%8&1)},put:function(r,t){for(var n=0;n<t;n+=1)e.putBit(1==(r>>>t-n-1&1))},getLengthInBits:function(){return t},putBit:function(e){var n=Math.floor(t/8);r.length<=n&&r.push(0),e&&(r[n]|=128>>>t%8),t+=1}};return e},M=function(r){for(var t=c,e=r,n=[],o={},a=0,i=e.length;a<i;a++){var u=[],f=e.charCodeAt(a);f>65536?(u[0]=240|(1835008&f)>>>18,u[1]=128|(258048&f)>>>12,u[2]=128|(4032&f)>>>6,u[3]=128|63&f):f>2048?(u[0]=224|(61440&f)>>>12,u[1]=128|(4032&f)>>>6,u[2]=128|63&f):f>128?(u[0]=192|(1984&f)>>>6,u[1]=128|63&f):u[0]=f,n.push(u)}(n=Array.prototype.concat.apply([],n)).length!=e.length&&(n.unshift(191),n.unshift(187),n.unshift(239));var s=n;return o.getMode=function(){return t},o.getLength=function(r){return s.length},o.write=function(r){for(var t=0;t<s.length;t+=1)r.put(s[t],8)},o},L=function(){var r=new Array,t={writeByte:function(t){r.push(255&t)},writeShort:function(r){t.writeByte(r),t.writeByte(r>>>8)},writeBytes:function(r,e,n){e=e||0,n=n||r.length;for(var o=0;o<n;o+=1)t.writeByte(r[o+e])},writeString:function(r){for(var e=0;e<r.length;e+=1)t.writeByte(r.charCodeAt(e))},toByteArray:function(){return r},toString:function(){var t="";t+="[";for(var e=0;e<r.length;e+=1)e>0&&(t+=","),t+=r[e];return t+="]"}};return t},_=function(r){var t=r,e=0,n=0,o=0,a={read:function(){for(;o<8;){if(e>=t.length){if(0==o)return-1;throw new Error("unexpected end of file./"+o)}var r=t.charAt(e);if(e+=1,"="==r)return o=0,-1;r.match(/^\s$/)||(n=n<<6|i(r.charCodeAt(0)),o+=6)}var a=n>>>o-8&255;return o-=8,a}},i=function(r){if(65<=r&&r<=90)return r-65;if(97<=r&&r<=122)return r-97+26;if(48<=r&&r<=57)return r-48+52;if(43==r)return 62;if(47==r)return 63;throw new Error("c:"+r)};return a},S=function(r,t){var e=r,n=t,o=new Array(r*t),a={setPixel:function(r,t,n){o[t*e+r]=n},write:function(r){r.writeString("GIF87a"),r.writeShort(e),r.writeShort(n),r.writeByte(128),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(255),r.writeByte(255),r.writeByte(255),r.writeString(","),r.writeShort(0),r.writeShort(0),r.writeShort(e),r.writeShort(n),r.writeByte(0);var t=i(2);r.writeByte(2);for(var o=0;t.length-o>255;)r.writeByte(255),r.writeBytes(t,o,255),o+=255;r.writeByte(t.length-o),r.writeBytes(t,o,t.length-o),r.writeByte(0),r.writeString(";")}},i=function(r){for(var t=1<<r,e=1+(1<<r),n=r+1,a=u(),i=0;i<t;i+=1)a.add(String.fromCharCode(i));a.add(String.fromCharCode(t)),a.add(String.fromCharCode(e));var f,c,s,g=L(),l=(f=g,c=0,s=0,{write:function(r,t){if(r>>>t!=0)throw new Error("length over");for(;c+t>=8;)f.writeByte(255&(r<<c|s)),t-=8-c,r>>>=8-c,s=0,c=0;s|=r<<c,c+=t},flush:function(){c>0&&f.writeByte(s)}});l.write(t,n);var h=0,v=String.fromCharCode(o[h]);for(h+=1;h<o.length;){var d=String.fromCharCode(o[h]);h+=1,a.contains(v+d)?v+=d:(l.write(a.indexOf(v),n),a.size()<4095&&(a.size()==1<<n&&(n+=1),a.add(v+d)),v=d)}return l.write(a.indexOf(v),n),l.write(e,n),l.flush(),g.toByteArray()},u=function(){var r={},t=0,e={add:function(n){if(e.contains(n))throw new Error("dup key:"+n);r[n]=t,t+=1},size:function(){return t},indexOf:function(t){return r[t]},contains:function(t){return void 0!==r[t]}};return e};return a},x=function(r,t,e,n){for(var o=S(r,t),a=0;a<t;a+=1)for(var i=0;i<r;i+=1)o.setPixel(i,a,e(i,a));var u=L();o.write(u);for(var f,c,s,g,l,h,v,d=(f=0,c=0,s=0,g="",h=function(r){g+=String.fromCharCode(v(63&r))},v=function(r){if(r<0);else{if(r<26)return 65+r;if(r<52)return r-26+97;if(r<62)return r-52+48;if(62==r)return 43;if(63==r)return 47}throw new Error("n:"+r)},(l={}).writeByte=function(r){for(f=f<<8|255&r,c+=8,s+=1;c>=6;)h(f>>>c-6),c-=6},l.flush=function(){if(c>0&&(h(f<<6-c),f=0,c=0),s%3!=0)for(var r=3-s%3,t=0;t<r;t+=1)g+="="},l.toString=function(){return g},l),w=u.toByteArray(),p=0;p<w.length;p+=1)d.writeByte(w[p]);d.flush();var y="";return y+="data:image/gif;base64,",y+=d};r.exports={createQrCodeImg:function(r,t){var e,o=(t=t||{}).typeNumber||4,a=t.errorCorrectLevel||"M",i=t.size||500;try{(e=n(o,a||"M")).addData(r),e.make()}catch(t){if(o>=40)throw new Error("Text too long to encode");return gen(r,{size:i,errorCorrectLevel:a,typeNumber:o+1})}var u=parseInt(i/e.getModuleCount()),f=parseInt((i-e.getModuleCount()*u)/2);return e.createImgTag(u,f,i)}}},86:function(r,t,e){"use strict";var n=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("view",{staticClass:"content"},[r._m(0),r._m(1),e("view",{staticClass:"erweima"},[e("image",{staticClass:"erweima-bg",attrs:{src:"../../static/img/tg_bg_1.png",mode:"aspectFit"}}),e("view",{staticClass:"erweimaimg"},[e("view",{staticClass:"erweima-content"},[e("image",{attrs:{src:r.qrimg}})]),e("image",{staticClass:"erweimalogo",attrs:{src:"../../static/img/logo.jpg",mode:""}})]),e("view",{staticClass:"tjCode"},[e("view",{staticClass:"plCode"},r._l(r.plcodeArr,function(t,n){return e("block",{key:t},[e("text",[r._v(r._s(t))])])}))])]),e("image",{staticClass:"erweima-bg2",attrs:{src:"../../static/img/tg_bg.png",mode:""}})])};n._withStripped=!0;var o={render:n,staticRenderFns:[function(){var r=this.$createElement,t=this._self._c||r;return t("view",{staticClass:"logo"},[t("image",{attrs:{src:"../../static/img/tg_logo.png",mode:"widthFix"}})])},function(){var r=this.$createElement,t=this._self._c||r;return t("view",{staticClass:"logo_title"},[t("image",{attrs:{src:"../../static/img/tg_title.png",mode:""}})])}]};t.a=o}},[81]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/main/SeoCode.js.map