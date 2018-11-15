
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"logo wx-image { width: 100%; }\n.",[1],"bevip { margin: ",[0,40]," auto ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-justify-content: space-around; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"bevip .",[1],"bevip-item { padding: 0 ",[0,15],"; height: ",[0,70],"; line-height: ",[0,70],"; font-size: ",[0,40],"; border: 1px solid #444; border-radius: 5px; }\n.",[1],"bevip .",[1],"bevip-item.",[1],"active { border: 1px solid red; }\n.",[1],"bevipbtn { width: 60%; margin: ",[0,60]," auto 0; }\n.",[1],"bevipbtn .",[1],"_button { background: red; color: #fff; border-radius: 5px; }\n",],undefined,{path:"./pages/main/bVip.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/main/bVip.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      