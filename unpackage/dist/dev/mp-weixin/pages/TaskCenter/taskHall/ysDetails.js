require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([13],{42:function(t,e,s){"use strict";var i=n(s(1)),a=n(s(43));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},43:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(45),a=s.n(i),n=s(46),o=!1;var c=function(t){o||s(44)},r=s(0)(a.a,n.a,c,null,null);r.options.__file="C:\\Users\\Administrator\\Desktop\\WEIPIN\\bpapp\\pages\\TaskCenter\\taskHall\\ysDetails.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] ysDetails.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},44:function(t,e){},45:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tasksDetails:{taskTitle:"",copyWriting:"",picId:"",picId2:"",taskIdentifier:"",statusTask:""},copyImages:[],orderInfo:{taskIdentifier:"",account:""}}},onLoad:function(){this.tasksDetails=t.getStorageSync("tasksDetails"),this.copyImages=[this.tasksDetails.picId,this.tasksDetails.picId2],this.orderInfo.taskIdentifier=this.tasksDetails.taskIdentifier,this.orderInfo.account=t.getStorageSync("userInfo").account},methods:{getTask:function(){var e=this;if("01"==this.tasksDetails.statusTask){var s={orderInfo:this.orderInfo,requestType:"creatOrde"},i={controllerRequestType:"orderControllerService",jsonString:JSON.stringify(s)};t.request({url:this.websiteUrl,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:i,success:function(s){"0000"==s.data.errorCode?(t.showToast({icon:"none",title:"领取任务成功！"}),e.tasksDetails.statusTask="08"):t.showToast({icon:"none",title:s.data.errorMessage})},fail:function(e){t.showToast({icon:"none",title:"网络异常！请稍后重试"})}})}else t.showToast({icon:"none",title:"当前任务已领取，请勿重复领取"})},copywriting:function(){t.setClipboardData({data:this.tasksDetails.copyWriting,success:function(){t.showToast({title:"已复制到剪贴板",duration:2e3,icon:"none"})}})},saveImage:function(e){t.showModal({title:"",content:"保存图片到相册吗？",success:function(s){s.confirm&&t.downloadFile({url:e,success:function(e){t.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){t.showToast({icon:"none",title:"已保存到手机相册"})},fail:function(){t.showToast({icon:"none",title:"保存到手机相册失败"})}})},fail:function(e){t.showModal({content:"下载失败，"+e.errMsg,showCancel:!1})}}),s.cancel&&console.log("取消")}})}}}}).call(e,s(2).default)},46:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("view",{staticClass:"detailsText"},[s("view",{staticClass:"detailsTitle"},[t._v(t._s(t.tasksDetails.taskTitle))]),s("view",{staticClass:"detailsTips"},[t._v("请将下面得文本图片复制发送朋友圈（点击图片保存到手机）")]),s("view",{staticClass:"detailsContent"},[s("text",[t._v("\n\t\t\t\t"+t._s(t.tasksDetails.copyWriting)+"\n\t\t\t")])]),s("view",[s("button",{staticClass:"pastbut",attrs:{eventid:"9Da-0"},on:{click:t.copywriting}},[t._v("复制文案")])],1)]),s("view",{staticClass:"detailsImg"},[s("view",{staticClass:"ImgTitle"},[t._v("图片信息")]),t._l(t.copyImages,function(e,i){return s("view",{key:e,staticClass:"imgContent"},[s("image",{attrs:{src:"https://www.sixkeep.com:8080/pics/"+e,mode:"widthFix",eventid:"oRM-1-"+i},on:{tap:function(s){t.saveImage(e)}}})])})],2),s("view",[s("button",{staticClass:"getTasks",attrs:{eventid:"IQ6-2"},on:{tap:t.getTask}},[t._v("立即领取")])],1)])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a}},[42]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/TaskCenter/taskHall/ysDetails.js.map