
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"imageBox{height:auto}\n.",[1],"imageBox,.",[1],"imageBox wx-image{width:100%}\n",],undefined,{path:"./pages/main/MoneyWay.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/main/MoneyWay.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      