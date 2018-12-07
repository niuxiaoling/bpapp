
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([],undefined,{path:"./pages/TaskCenter/taskHall/freeTask.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/TaskCenter/taskHall/freeTask.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      