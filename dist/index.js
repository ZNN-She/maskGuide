!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.maskGuide=e():t.maskGuide=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o={el:null,type:"action",classWarp:null,position:"bottomRight",targetPosition:null,targetSize:null,onClickContainer:null,onClickTarget:null,onClickNext:null,onClickPrev:null,onClickClose:null,nextBtnText:"下一步",prevBtnText:"上一步",showNext:!0,showPrev:!0,showClose:!0,showArrow:!0,showStar:!0,maskClosable:!0,explain:{width:340,title:"",content:""}},i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAuFJREFUSA21lj1oFEEUx99/ZzGJMQme5GLQImAjamUjKAiCXoyIWmgRFE0hpjAIauEHirFQCFoKSgSxE2wCEkmMFloJgo0awUIIiMH7MCTGwng383yH3uZus7eZycVtdt5/3v5/8/Fm7kA1Psw99Trz9QERGlRD40k0D323tfRsE6vlmcxkHxN1M/EhM/fzcLW8KL12OKg7MDZoDtoWjZrgnEttJOatAcdDPmhbNGqCa4O+EEOF4thwyXCeOtJCZE6UuxtDotk/S4YbPX2GmVZVoMD/H87ZznY2uFABlgDE68NaXLykmWvDt+RoNYaN5chtCWtxsTNcZzrlXPPRKFMQNhQvnai+KM2PEsMaM4Om9m3TBX3asDkW7i/Fkqd0bnK3xMMlLe4N5q46nTUHQdQu1Vv4m4xmQ9wiM1krs9wMxiZ5r4wzCvpAr/zWsV0AZBfiH+TTqX4ivhaf5tYrgx5UyY4+YDD20vE84Leb9eLZskqnCtmJ15zesyMuW5adobN7e2TJj8th2SmxcxHGAkCPla9uIDH6LpwnWz3/cG7/uoLO98p57ZXRJ+d7am8B9JLYu6OS3jAwMld0rICXEMUiNLlCDxu6LlXTVtKX4y2DmCHyhhTociS8BOHsgaYC/boqdXt+2beD8CIWXhpEIZPqIqYh2Yq6klbrG/AeWsGLIJ1JXTLMN62gwCcxfi8/POOyzF/kmxlWstxMmjT7vq9mKdH0xhrOM50JPWfSYlj1VhSze2qFGsDq0QmbQVrDi2b5TOptxT+XMoIH76JKPhsokxZtOp1pGemHKEe5SsdcwUUfRzg+huEC1krhXFi3iavuX9THUu3fFujM97FmbHyBbiE4zZw8TJd7yqyNIv92uebSdoJLpf8ImT9F28jnkGYdOsEjXO9GaNaSG9zjoEak8nOqdftza1JEohPch5cOPIBHQP+/fz6B6tRwumSKzjqbOmuYOnzUX0Hrk1knWij5D1Va8GUfaWNFAAAAAElFTkSuQmCC",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAZBJREFUOBGVVM0uBEEQruqesYnEzc+VuCB4AGETPzu760XEAS/AbV9ASMSLYJdwEE/AYW9cd1dEELI/3Z/uSSaxrQR9qa766vumpqpmiISDp9I8msUlAfoxpCTE9GzFAOdolCclXIqJQmCqg5AzbA4kkhQThdjynU8GUDaNZFMihjFRSDPdZ4lg7Hcfk5XM/8lGMqDeiGwKARSzoVPTKlSU0hfUwzsxDxllxmFplkHTOtZ7LAmhkSz0CDcSFsaYuK2ZC+KrWYXVkCD5zHSic/EMj1avv1XUbRWX2eLMTW1AIvuYq6LDCtt65Pw4y+mryPVh4y8iUFz6KuLF0mbjOZkwHRxaS+tu6NlDROsqqUQjtasQjNAsLZq2vXD0XAhKfjo5AYhcTS/URZWUqjPbW231g9vEV4p40FqzBsu7ff0y5kPQcX375fhlTPvm9smnRqzyfkohra/ZIej9eLh2yeCdDDOg8ez+1f4q5JP1WO2ImU/9HQpz3obnT0KepKG3/Ba7T2IqFPm3j2aS9z89ifgJrU+an7K2hJYAAAAASUVORK5CYII=",c="data:image/gif;base64,R0lGODlhPwA8AIABAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNEMkVDNzlBQjQxMTFFNzhGMjA4NjI1OEQ0QUVBQUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNEMkVDN0FBQjQxMTFFNzhGMjA4NjI1OEQ0QUVBQUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0QyRUM3N0FCNDExMUU3OEYyMDg2MjU4RDRBRUFBRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0QyRUM3OEFCNDExMUU3OEYyMDg2MjU4RDRBRUFBRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTD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",a="mask_guide_container";function l(){document.getElementById(a)&&window.document.body.removeChild(document.getElementById(a))}function p(t){return"active"===t.type?function(t){var e=h(t),n=A(t);return{top:function(){return{left:e.left+(n.width-16)/2,top:e.top-65}},left:function(){return{left:e.left-65,top:e.top+(n.height-16)/2}},bottom:function(){return{left:e.left+(n.width-16)/2,top:e.top+n.height+15}},right:function(){return{left:e.left+n.width+15,top:e.top+(n.height-16)/2}}}[t.position.split(/(?=[A-Z])/)[0]]()}(t):function(t){var e=h(t),n=A(t);return{top:function(){return{left:e.left+(n.width-16)/2,top:e.top-8}},left:function(){return{left:e.left-8,top:e.top+(n.height-16)/2}},bottom:function(){return{left:e.left+(n.width-16)/2,top:e.top+n.height-8}},right:function(){return{left:e.left+n.width-8,top:e.top+(n.height-16)/2}}}[t.position.split(/(?=[A-Z])/)[0]]()}(t)}function u(t,e){var n=t.position,o=h(t),i=A(t),r=document.body.getBoundingClientRect().width,c=document.body.getBoundingClientRect().height,a={top:function(){return{left:o.left-(e.width-i.width)/2,top:o.top-e.height-70}},left:function(){return{left:o.left-e.width-70,top:o.top-(e.height-i.height)/2}},bottom:function(){return{left:o.left-(e.width-i.width)/2,top:o.top+i.height+70}},right:function(){return{left:o.left+i.width+70,top:o.top-(e.height-i.height)/2}},topLeft:function(){return{left:o.left-(e.width-i.width),top:o.top-e.height-70}},topRight:function(){return{left:o.left,top:o.top-e.height-70}},rightTop:function(){return{left:o.left+i.width+70,top:o.top-(e.height-i.height)}},rightBottom:function(){return{left:o.left+i.width+70,top:o.top}},bottomLeft:function(){return{left:o.left-(e.width-i.width),top:o.top+i.height+70}},bottomRight:function(){return{left:o.left,top:o.top+i.height+70}},leftTop:function(){return{left:o.left-e.width-70,top:o.top-(e.height-i.height)}},leftBottom:function(){return{left:o.left-e.width-70,top:o.top}}};return"auto"===n?(n=Object.keys(a).find((function(t){return n=a[t](),o=n.top,i=n.left,!(o<0||i<0||i+e.width>r||o+e.height>c);var n,o,i})))?a[n]():(console.warn("cannot resolve position"),{left:0,top:0}):a[n]?a[n]():(console.warn("cannot resolve position: ".concat(n)),a.bottom())}function d(t,e){var n=t.position,o=h(t),i=A(t),r=document.body.getBoundingClientRect().width,c=document.body.getBoundingClientRect().height,a={top:function(){return{left:o.left-(e.width-i.width)/2,top:o.top-e.height-15}},left:function(){return{left:o.left-e.width-15,top:o.top-(e.height-i.height)/2}},bottom:function(){return{left:o.left-(e.width-i.width)/2,top:o.top+i.height}},right:function(){return{left:o.left+i.width,top:o.top-(e.height-i.height)/2}},topLeft:function(){return{left:o.left-(e.width-i.width),top:o.top-e.height-15}},topRight:function(){return{left:o.left,top:o.top-e.height-15}},rightTop:function(){return{left:o.left+i.width,top:o.top-(e.height-i.height)}},rightBottom:function(){return{left:o.left+i.width,top:o.top}},bottomLeft:function(){return{left:o.left-(e.width-i.width),top:o.top+i.height}},bottomRight:function(){return{left:o.left,top:o.top+i.height}},leftTop:function(){return{left:o.left-e.width-15,top:o.top-(e.height-i.height)}},leftBottom:function(){return{left:o.left-e.width-15,top:o.top}}};return"auto"===n?(n=Object.keys(a).find((function(t){return n=a[t](),o=n.top,i=n.left,!(o<0||i<0||i+e.width>r||o+e.height>c);var n,o,i})))?a[n]():(console.warn("cannot resolve position"),{left:0,top:0}):a[n]?a[n]():(console.warn("cannot resolve position: ".concat(n)),a.bottom())}function A(t){var e=t.targetSize||{};return{width:e.width||t.el.getBoundingClientRect().width,height:e.height||t.el.getBoundingClientRect().height}}function h(t){var e=t.targetPosition||{};return{left:e.left||t.el.getBoundingClientRect().left,top:e.top||t.el.getBoundingClientRect().top}}var f="mask_guide_container",g="mask_guide_container";function s(t){var e={class:"".concat(g," ").concat(t.classWarp),id:f},n={position:"fixed",left:0,top:0,right:0,bottom:0,height:"100%",width:"100%","z-index":999},o=document.createElement("div");for(var i in e)o.setAttribute(i,e[i]);for(var r in n)o.style[r]=n[r];return t.onClickContainer&&o.addEventListener("click",t.onClickContainer),o}var v="rgba(0,0,0,0.5)",m=function(t,e){t.maskClosable&&e.addEventListener("click",(function(){l(),t.onClickClose&&t.onClickClose()}))},b=function(t){var e=A(t),n=h(t),o={position:"absolute",background:v,top:0,left:"".concat(n.left,"px"),width:"".concat(e.width,"px"),height:"".concat(n.top,"px")},i=document.createElement("div");for(var r in o)i.style[r]=o[r];return m(t,i),i},x=function(t){var e=A(t),n=h(t),o={position:"absolute",background:v,top:0,left:"".concat(n.left+e.width,"px"),width:"".concat(document.body.offsetWidth-n.left+e.width,"px"),height:"100%"},i=document.createElement("div");for(var r in o)i.style[r]=o[r];return m(t,i),i},C=function(t){var e=A(t),n=h(t),o={position:"absolute",background:v,top:"".concat(n.top+e.height,"px"),left:"".concat(n.left,"px"),bottom:0,width:"".concat(e.width,"px")},i=document.createElement("div");for(var r in o)i.style[r]=o[r];return m(t,i),i},w=function(t){var e=h(t),n={position:"absolute",background:v,top:0,left:0,bottom:0,height:"100%",width:"".concat(e.left,"px")},o=document.createElement("div");for(var i in n)o.style[i]=n[i];return m(t,o),o},y=function(t){var e=A(t),n=h(t),o={position:"absolute",opacity:1,top:"".concat(n.top,"px"),left:"".concat(n.left,"px"),height:"".concat(e.height,"px"),width:"".concat(e.width,"px")},i={class:"mask_guide_target",id:"mask_guide_target"};"active"===t.type&&(o=Object.assign({},o,{boxShadow:"rgba(255, 255, 255, 0.4) 0px 0px 0px 5px, rgba(255, 255, 255, 0.5) 0px 0px 0px 15px"}));var r=document.createElement("div");for(var c in o)r.style[c]=o[c];for(var a in i)r.setAttribute(a,i[a]);return t.onClickTarget&&r.addEventListener("click",t.onClickTarget),r},k=function(t){var e=t.explain,n={class:"".concat("mask_guide_explain","_title")},o={padding:"10px 20px",fontSize:"14px",lineHeight:"21px",fontWeight:"400"};"active"!==t.type&&(o.borderBottom="1px solid #dfe1e6");var i=document.createElement("div");for(var r in n)i.setAttribute(r,n[r]);for(var c in o)i.style[c]=o[c];return"[object String]"!==Object.prototype.toString.call(e.title)?i.appendChild(e.title):i.innerHTML=e.title,"active"!==t.type&&i.appendChild(function(t){var e={class:"".concat("mask_guide_explain","_close")},n={position:"absolute",top:"5px",right:"10px",width:"20px",height:"20px",padding:"4px",color:"#ccc",textAlign:"center",cursor:"pointer"},o=document.createElement("div");for(var i in e)o.setAttribute(i,e[i]);for(var r in n)o.style[r]=n[r];return o.innerHTML="×",o.addEventListener("click",t.onClickClose?t.onClickClose:l),o}(t)),i},j="mask_guide_explain";var I=function(t){if(!t.showNext&&!t.showPrev)return document.createElement("div");var e={class:"".concat(j,"_footer")},n={boxSizing:"border-box",padding:"0px 20px 20px 20px",textAlign:"center"},o=document.createElement("div");for(var i in e)o.setAttribute(i,e[i]);for(var r in n)o.style[r]=n[r];return t.showPrev&&o.appendChild(function(t){var e={class:"".concat(j,"_prev_button")},n={padding:"3px 6px",color:"#333",border:"1px solid #c4c6cc",borderRadius:"3px",marginRight:"8px"},o=document.createElement("button");for(var i in e)o.setAttribute(i,e[i]);for(var r in n)o.style[r]=n[r];return"[object String]"!==Object.prototype.toString.call(t.prevBtnText)?o.appendChild(t.prevBtnText):o.innerHTML=t.prevBtnText,o.addEventListener("click",t.onClickPrev?t.onClickPrev:l),o}(t)),t.showNext&&o.appendChild(function(t){var e={class:"".concat(j,"_next_button")},n={padding:"3px 6px",backgroundColor:"#ff8040",border:"1px solid #ff8040",color:"#FFF",borderRadius:"3px"},o=document.createElement("button");for(var i in e)o.setAttribute(i,e[i]);for(var r in n)o.style[r]=n[r];return"[object String]"!==Object.prototype.toString.call(t.nextBtnText)?o.appendChild(t.nextBtnText):o.innerHTML=t.nextBtnText,o.addEventListener("click",t.onClickNext?t.onClickNext:l),o}(t)),o},E=function(t){var e=t.explain,n=A(t),o=h(t),i={class:"".concat("mask_guide_explain"),id:"mask_guide_explain"},r={position:"absolute",left:o.left,top:"".concat(o.top+n.height,"px"),width:"".concat(e.width,"px"),margin:"8px",borderRadius:"6px",color:"#FFF"};"active"!==t.type&&(r.background="#FFF",r.boxShadow="0px 0px 10px #fff",r.color="#333");var c=document.createElement("div");for(var a in i)c.setAttribute(a,i[a]);for(var l in r)c.style[l]=r[l];return c.appendChild(k(t)),c.appendChild(function(t){var e=t.explain,n={class:"".concat("mask_guide_explain","_body")},o={boxSizing:"border-box",padding:"10px 20px",wordBreak:"break-all",fontSize:"14px"},i=document.createElement("div");for(var r in"active"===t.type&&(o.paddingTop=0),n)i.setAttribute(r,n[r]);for(var c in o)i.style[c]=o[c];return"[object String]"!==Object.prototype.toString.call(e.content)?i.appendChild(e.content):i.innerHTML=e.content,i}(t)),"active"!==t.type&&c.appendChild(I(t)),c},q=function(t){var e=document.createElement("div"),n=function(t){var e=t.position.split(/(?=[A-Z])/)[0],n=e.replace(e[0],e[0].toUpperCase()),o={position:"fixed",border:"8px solid transparent",width:0,height:0};return o["border".concat(n,"Color")]="#FFF","active"===t.type&&(o={position:"fixed",width:"50px",height:"50px",backgroundImage:"url(".concat(c,")"),transform:{top:"rotate(180deg)",right:"rotate(0deg)",bottom:"rotate(0deg)",left:"rotate(90deg)"}[e]}),o}(t);for(var o in n)e.style[o]=n[o];var i=p(t);for(var r in i)e.style[r]="".concat(i[r],"px");return e},M=function(t){var e=document.createElement("div"),n=function(t){var e=h(t),n=A(t),o=e.left+n.width+40,r=e.top+n.height+15;return{position:"absolute",backgroundImage:"url(".concat(i,")"),width:"31px",height:"31px",left:"".concat(o,"px"),top:"".concat(r,"px")}}(t);for(var o in n)e.style[o]=n[o];return e},R=function(t){var e=document.createElement("div"),n=function(t){var e=h(t),n=e.left-80,o=e.top-10;return{position:"absolute",backgroundImage:"url(".concat(r,")"),width:"18px",height:"18px",left:"".concat(n,"px"),top:"".concat(o,"px")}}(t);for(var o in n)e.style[o]=n[o];return e},Y=function(t){var e=s(t);if(document.body.appendChild(e),e.appendChild(b(t)),e.appendChild(x(t)),e.appendChild(C(t)),e.appendChild(w(t)),e.appendChild(y(t)),t.explain){var n=E(t);e.appendChild(n);var o=u(t,{width:n.getBoundingClientRect().width,height:n.getBoundingClientRect().height});for(var i in o)n.style[i]="".concat(o[i],"px")}if(t.showArrow){var r=q(t);e.appendChild(r)}return t.showStar&&(e.appendChild(M(t)),e.appendChild(R(t))),e},G=function(t){var e=s(t);if(document.body.appendChild(e),e.appendChild(b(t)),e.appendChild(x(t)),e.appendChild(C(t)),e.appendChild(w(t)),e.appendChild(y(t)),t.explain){var n=E(t);e.appendChild(n);var o=d(t,{width:n.getBoundingClientRect().width,height:n.getBoundingClientRect().height});for(var i in o)n.style[i]="".concat(o[i],"px")}if(t.showArrow){var r=q(t);e.appendChild(r)}return e};function O(t){l();var e=Object.assign({},o,t);t.explain&&(e.explain=Object.assign({},o.explain,t.explain)),console.log(e),"string"==typeof e.el&&(e.el=document.getElementById(e.el));var n=null;switch(e.type){case"active":n=Y(e);break;case"step":default:n=G(e)}return document.body.appendChild(n),n}n.d(e,"guide",(function(){return O})),n.d(e,"close",(function(){return B}));var B=l}])}));