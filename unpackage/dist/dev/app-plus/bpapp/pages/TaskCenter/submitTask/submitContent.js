
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { background: #FFFFFF; }\n.",[1],"item-list { margin: ",[0,20]," 0 ",[0,20]," ",[0,20],"; font-size: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: start; -webkit-justify-content: flex-start; justify-content: flex-start; }\n.",[1],"btn-upload { display: inline-block; padding: 0 ",[0,20],"; border-radius: ",[0,10],"; height: ",[0,60],"; line-height: ",[0,60],"; color: #fff; background: #E61532; font-size: ",[0,30],"; }\n.",[1],"imgbox { margin: 0 auto; padding: 0 ",[0,20],"; }\n.",[1],"imgbox-img { width: 100%; }\n.",[1],"getTasks { background: #E61532; width: 80%; color: #FFFFFF; margin: ",[0,30]," auto; }\n.",[1],"Taskhint { width: 96%; padding: 0 2%; }\n.",[1],"Taskhint wx-image { width: 100%; }\n",],undefined,{path:"./pages/TaskCenter/submitTask/submitContent.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/TaskCenter/submitTask/submitContent.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      