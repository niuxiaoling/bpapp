
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { background: #FFFFFF; }\n.",[1],"taskView { width: 95%; margin: 0 auto; }\n.",[1],"taskTitle { display: -webkit-box; display: -webkit-flex; display: flex; padding: ",[0,30]," 0; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"taskTitles { display: -webkit-box; display: -webkit-flex; display: flex; margin: ",[0,30]," 0; padding: ",[0,10]," 0; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; border-bottom: 1px solid #DADADA; }\n.",[1],"taskTitle .",[1],"_input { text-align: right; width: 80%; }\n.",[1],"taskTitles .",[1],"_input { text-align: right; }\n.",[1],"taskContent { margin: ",[0,10]," 0; border: 1px solid #999999; height: ",[0,600],"; padding-top: ",[0,15],"; }\n.",[1],"taskContent .",[1],"contentText { width: 96%; height: ",[0,400],"; margin: 0 auto; }\n.",[1],"taskGo { background: #E86318; color: #FFFFFF; }\n",],undefined,{path:"./pages/main/taskRelease.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/main/taskRelease.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      