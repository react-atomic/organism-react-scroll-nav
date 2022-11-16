(()=>{"use strict";var c={31(z,A,a){var B,p=a(32),d=a(0),C=a(77),D=a(52),E=a(5),F=a(3),G=a(13),H=a(79),I=a(80),J=a(76),i=a(9),K=a(41),L=a(30),M=a(17),N=a(6),O=a(4),P=a(8),Q=a(21),q=function(){var a=window,c=!1;try{var b=Object.defineProperty({},"passive",{get:function(){c=!0}});a.addEventListener("test",null,b),a.removeEventListener("test",null,b)}catch(d){}return c};let R=q;function S(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var e,g,T=0,U=-1,j=function(){function a(){(0,H.Z)(this,a),(0,J.Z)(this,"storeName","delayScroll"),(0,J.Z)(this,"isInitResizeEvent",!1),(0,J.Z)(this,"checkIsActive",function(a,b){return a>=b.top-1&&a<=b.bottom-2})}return(0,I.Z)(a,[{key:"initResizeEvent",value:function(){var a=(0,P.p_)();a.__null||(this.isInitResizeEvent=!0,a.addEventListener?a.addEventListener("resize",this.bindHandleResize):a.attachEvent("onresize",this.bindHandleResize))}},{key:"initEvent",value:function(a,c){var d=this;if(void 0!==a){if(a.addEventListener){var b=R();a.addEventListener("scroll",this.scrollMonitor,!!b&&{passive:!0})}else a.attachEvent("onscroll",this.scrollMonitor);var e=0;this.clearInitTimer(),this.initTimer=setInterval(function(){d.trigger(a),++e>c&&d.clearInitTimer()},300),this.isInitResizeEvent||this.initResizeEvent()}}},{key:"removeEvent",value:function(a){null!=a&&a.removeEventListener?a.removeEventListener("scroll",this.scrollMonitor):null==a||a.deachEvent("onscroll",this.scrollMonitor)}},{key:"handleResize",value:function(){var a=this;this.spys.keySeq().forEach(function(b){a.scrollMonitor({target:{id:b}})})}},{key:"runScrollMonitor",value:function(a){var b=this.store.getState().get("scrollDelay");this.scrollDebounce({delay:b,args:[null==a?void 0:a.target]})}},{key:"triggerScroll",value:function(b){var i=this,c=(0,N.ZP)(b,["id"])||U,e=this.store.getState().get("scrollMargin"),f={mdefault:null},g={},h=[],a=(0,K.Z)(),j=a.top+e;(this.spys.get(c)||[]).forEach(function(b){var d=b.getOffsetEl();if(d){var k=i.getNodeId(b),l=(0,O.ZP)(b.getMonitorScroll),m=(0,O.ZP)(b.getScrollMargin),c=(0,M.ZP)(d);l&&(i.checkIsActive(j,c)&&(f.mdefault=k),h.unshift(b));var n=m||e;c=(0,L.JJ)(c,a,n),g[k]=c}});var k=h.length;this.margins.forEach(function(b){var e=a.top+b;f["m"+b]=null;for(var c=k;c--;){var j=h[c],d=i.getNodeId(j),l=g[d];if(i.checkIsActive(e,l)){f["m"+b]=d;break}}}),this.margins=this.margins.clear(),this.dispatch((0,d.Z)((0,d.Z)({},f),{},{offsetCache:g,scroll:a,storeName:this.storeName}))}},{key:"getOffset",value:function(b){var a=this.store.getMap("offsetCache")[b];if(a&&a.h&&a.w)return a;var c=this.getNode(b)||{},d=(0,O.ZP)(c.getOffsetEl)||Q.ZP.one("#"+b),e=d&&(0,M.ZP)(d);if(!e)return a;var f=(0,K.Z)(),g=this.store.getState().get("scrollMargin"),h=(0,O.ZP)(c.getScrollMargin)||g;return(0,L.JJ)(e,f,h)}},{key:"hasAttach",value:function(a){var b=this.getAttachDestId(a),c=this.spys.get(b);return!!(c&&c.has(a))&&b}},{key:"getNodeId",value:function(a){var b=(0,O.ZP)(a.getId)||a.id;return b||(a===(0,P.p_)()?U:this.setNodeId(a))}},{key:"setNodeId",value:function(a){var b="spy-"+T;return T++,a.setId?a.setId(b):a.id=b,b}},{key:"getAttachDestId",value:function(b){var a,c=(0,O.ZP)(b.getAttachDest);if(c)a=this.getNodeId(c);else{var d=(0,P.p_)();d.__null||b.setAttachDest(d),a=U}return a}},{key:"getNode",value:function(a){return this.arrNode.get(a)}},{key:"attach",value:function(a){var c=this.getNodeId(a),b=this.getAttachDestId(a),d=this.spys.get(b);return d?this.spys=this.spys.set(b,d.add(a)):this.spys=this.spys.set(b,(0,i.l4)().add(a)),this.arrNode=this.arrNode.set(c,a),this.isInitEvent.get(b)||(this.isInitEvent=this.isInitEvent.set(b,!0),this.initEvent((0,O.ZP)(a.getAttachDest),(0,O.ZP)(a.getAttachDestRetry))),c}},{key:"detach",value:function(b){var a=this.hasAttach(b);a&&(this.spys=this.spys.set(a,this.spys.get(a).remove(b)),this.arrNode=this.arrNode.delete(this.getNodeId(b)),this.spys.get(a).size||(this.removeEvent(b.attachDestId),this.spys=this.spys.delete(a),this.isInitEvent=this.isInitEvent.delete(a)))}},{key:"addMargin",value:function(a){this.margins=this.margins.add(a)}},{key:"deleteMargin",value:function(a){this.margins=this.margins.remove(a)}},{key:"clearInitTimer",value:function(){this.initTimer&&(clearInterval(this.initTimer),this.initTimer=null)}},{key:"getInitialState",value:function(){return this.initTimer=null,this.trigger=this.triggerScroll.bind(this),this.isInitEvent=(0,i.D5)(),this.spys=(0,i.D5)(),this.arrNode=(0,i.D5)(),this.margins=(0,i.l4)(),this.scrollMonitor=this.runScrollMonitor.bind(this),this.scrollDebounce=(0,O.Ds)(this.trigger),this.bindHandleResize=this.handleResize.bind(this),(0,i.D5)({scrollDelay:50,scrollMargin:0})}},{key:"reduce",value:function(a,b){return(0,i.zg)(a,b)}}]),a}(),b=new j,k=(e=(0,i.Cl)(b.reduce.bind(b),b.getInitialState.bind(b)),g=2,function(a){if(Array.isArray(a))return a}(e)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(e,g)||function d(a,c){if(a){if("string"==typeof a)return S(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return S(a,c)}}(e,g)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=k[0],r=k[1],s=(0,d.Z)((0,d.Z)({},l),{},{scroller:b});b.dispatch=r,b.store=l;let V=s;var W=a(89),X=a(10),Y=a(11);function Z(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var f,h,c=new(function(b){(0,X.Z)(a,b);var c=(0,Y.Z)(a);function a(){var d;(0,H.Z)(this,a);for(var e=arguments.length,f=new Array(e),b=0;b<e;b++)f[b]=arguments[b];return d=c.call.apply(c,[this].concat(f)),(0,J.Z)((0,W.Z)(d),"storeName","fastScroll"),d}return(0,I.Z)(a,[{key:"runScrollMonitor",value:function(a){this.triggerScroll(a.target)}}]),a}(j)),m=(f=(0,i.Cl)(c.reduce.bind(c),c.getInitialState.bind(c)),h=2,function(a){if(Array.isArray(a))return a}(f)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(f,h)||function d(a,c){if(a){if("string"==typeof a)return Z(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return Z(a,c)}}(f,h)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=m[0],t=m[1],u=(0,d.Z)((0,d.Z)({},n),{},{scroller:c});c.dispatch=t,c.store=n;let $=u;function _(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var aa=["noDelay","monitorScroll","attachDestRetry","id","scrollMargin","children","container","className","attachDest"],ab=function(a){var c,g,h=a.noDelay,m=void 0!==h&&h,i=a.monitorScroll,n=void 0===i||i,j=a.attachDestRetry,x=void 0===j?20:j,o=a.id,p=a.scrollMargin,q=a.children,r=a.container,k=a.className,s=a.attachDest,e=(0,C.Z)(a,aa),l=(c=(0,F.useState)(o),g=2,function(a){if(Array.isArray(a))return a}(c)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(c,g)||function d(a,c){if(a){if("string"==typeof a)return _(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return _(a,c)}}(c,g)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=l[0],t=l[1],y=(0,G.s4)(),u=(0,F.useRef)(),f=(0,F.useRef)({});f.current=(0,d.Z)((0,d.Z)({},f.current),{},{id:b,attachDest:f.current.attachDest||s,monitorScroll:n,scrollMargin:p});var v=(0,F.useRef)();(0,F.useEffect)(function(){var a=m?$:V,b=a.scroller.attach(A);return f.current.store=a,t(b),function(){a.scroller.detach(A)}},[]);var z=(0,G.Nr)(function(a){!u.current&&y()&&console.warn('Please use SemanticUI. props.container -> import {SemanticUI} from "react-atomic-molecule"',a)},1500),w=(0,F.useCallback)(function(){if(u.current)return u.current;z({targetId:b,container:v.current})},[b]),A={lastConfig:f,getOffsetEl:w,detach:function(){return f.current.store.scroller.detach(A)},getId:function(){return f.current.id},setId:t,getAttachDest:function(){return f.current.attachDest},setAttachDest:function(a){return f.current.attachDest=a},getMonitorScroll:function(){return f.current.monitorScroll},getScrollMargin:function(){return f.current.scrollMargin},getAttachDestRetry:function(){return x}};return e.id=b,e.refCb=u,e.className=(0,E.Jx)(k,"spy-tar-"+b),{targetId:b,className:k,children:q,container:r,noDelay:m,nextContainer:v,restProps:e}},v=function(b){var a=ab(b),c=a.targetId,e=a.children,f=a.container,g=a.noDelay,h=a.nextContainer,i=a.restProps;return(0,F.useMemo)(function(){var a;return"ScrollReceiver"===(0,E.Gf)(e)?(h.current=e,a=(0,d.Z)((0,d.Z)((0,d.Z)({},e.props),i),{},{targetId:c,container:f,noDelay:g})):(h.current=f||E.iX,a=(0,d.Z)((0,d.Z)({},i),{},{children:e})),(0,E.J_)(h.current)(a)},[e,c])};let ac=v;var ad=a(14),ae=a(2),af=function(a){return a&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a},ag=["scrollMargin","noDelay","targetId","container","children"],ah=function(a){var f=a.scrollMargin,c=void 0===f?ae.TP:f,g=a.noDelay,m=void 0!==g&&g,b=a.targetId,n=a.container,o=a.children,p=(0,C.Z)(a,ag),h=(0,F.useRef)(),e=m?$:V,q=(0,ad.XD)(["scroll"],e),i=q.scroll,j=void 0===i?{}:i,r=e.getState().get("m"+c),s=j.top,k=e.scroller.getOffset(b)||{},t=h.current||!1,u=ae.i_!==(void 0===b?"undefined":af(b))&&b===r,l=(0,d.Z)((0,d.Z)({},k),{},{active:u,scrollTop:s,scrollInfo:j,scrollMargin:c,isShown:t,targetId:b});return k.isOnScreen&&(l.isShown=!0,h.current=!0),isNaN(c)||e.scroller.addMargin(c),{targetInfo:l,container:n,children:o,restProps:p}},o=function(f){var b=ah(f),g=b.targetInfo,h=b.container,e=b.children,i=b.restProps,a=h,c=e;return a||(a=e,c=null),!c&&(0,F.isValidElement)(a)&&(c=a.props.children),(0,E.J_)(a)((0,d.Z)((0,d.Z)({},i),{},{targetInfo:g}),c)};o.displayName="ScrollReceiver";let ai=o;var aj=a(23),ak=a(27),al=a(1);function am(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var an=["targetId","scrollRefLoc","scrollRefId","scrollMargin","style","preventDefault","noDelay","onClick"],ao=null,ap=function(){ao&&(clearTimeout(ao),ao=null)},aq=function(a){var b,c,i=a.targetId,d=a.scrollRefLoc,j=void 0===d?"bottom":d,e=a.scrollRefId,q=void 0===e?"":e,k=a.scrollMargin,l=a.style,f=a.preventDefault,r=void 0===f||f,g=a.noDelay,s=void 0!==g&&g,t=a.onClick,m=(0,C.Z)(a,an),h=(b=(0,F.useState)(),c=2,function(a){if(Array.isArray(a))return a}(b)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(b,c)||function d(a,c){if(a){if("string"==typeof a)return am(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return am(a,c)}}(b,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=h[0],u=h[1],v=(0,F.useRef)(),w=function e(a){void 0===a&&(a=void 0);var b=(s?$:V).scroller.getOffset(i);if(b){var d=o(),c=b.top-d;if(v.current===c)return;setTimeout(function(){return v.current=c}),(0,aj.Z)(c,a,null,function(){ap(),ao=setTimeout(function(){return e(a)},800)})}};(0,F.useEffect)(function(){var a=(0,P.JU)().getElementById(q);return a&&u(a),(0,ak.ul)().anchor.substring(1)===i&&setTimeout(function(){return w(1)}),function(){ap()}},[]);var o=(0,F.useCallback)(function(){var a=0;if(n){var b=(0,M.ZP)(n);"bottom"===j&&(a+=b.bottom-b.top)}return isNaN(k)||(a+=k),a-=2},[j,k,n]),p={click:function(a){v.current=null,r&&a.preventDefault(),(0,O.ZP)(t),w()}};return{restProps:m,handler:p,targetId:i,margin:o(),style:l}},w=function(b){var a=aq(b),c=a.restProps,e=a.handler,f=a.margin,g=a.style,h=a.targetId;return(0,al.jsx)(ai,(0,d.Z)((0,d.Z)({atom:"a"},c),{},{targetId:h,scrollMargin:f,style:(0,d.Z)((0,d.Z)({},as.link),g),onClick:e.click}))};let ar=w;var as={link:{cursor:"pointer"}};function at(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var au=["targetInfo","style"],av=function(a){var c=a.targetInfo,e=a.style,f=(0,C.Z)(a,au),b=null;return c.active&&(b=aw.active),(0,al.jsx)("div",(0,d.Z)({style:(0,d.Z)((0,d.Z)((0,d.Z)({},aw.link),e),b)},f))},x=function(){B=(0,E.UM)(ax,B);var a,b,f,c=(a=(0,F.useState)(!1),b=2,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||function d(a,c){if(a){if("string"==typeof a)return at(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return at(a,c)}}(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e=c[0],g=c[1],h=function(a){a.checked?g(!0):g(!1)};return(0,al.jsxs)("div",{children:[(0,al.jsxs)("div",{id:"nav-parent",style:aw.nav,children:[(0,al.jsx)(ar,{scrollRefId:"nav-parent",container:av,targetId:"t1",style:{background:"#3498DB"},children:"test1"}),(0,al.jsx)(ar,{scrollRefId:"nav-parent",container:av,targetId:"t2",style:{background:"#F1C40F"},children:"test2"}),(0,al.jsx)(ar,{scrollRefId:"nav-parent",container:av,targetId:"t3",style:{background:"#2ECC71"},children:"test3"})]}),(0,al.jsxs)("div",{style:{paddingTop:66},children:[(0,al.jsx)(ac,{id:"t1",style:(0,d.Z)((0,d.Z)({},aw.content),{},{background:"#3498DB"}),children:"test111"}),(0,al.jsx)(ac,{id:"t2",style:(0,d.Z)((0,d.Z)({},aw.content),{},{background:"#F1C40F"}),children:(0,al.jsx)(ac,{monitorScroll:e,children:(0,al.jsx)(ai,{style:{border:"1px solid #fff"},children:function(a){var b=a.targetInfo,c=a.refCb;return(0,al.jsxs)("div",{ref:c,style:{border:"1px solid hsl(242, 100%, 50%)"},children:["test222 scrollUp: "+b.scrollInfo.isScrollUp+" scrollDown: "+b.scrollInfo.isScrollDown,(0,al.jsxs)("div",{style:{fontSize:"1.2rem"},children:[f||(f=(0,al.jsx)(D.XZ,{label:"enable monitor this area",toggle:!0,onChange:h})),"When enable and you scroll over here will make test2 button miss actived."]})]})}})})}),(0,al.jsx)(ac,{id:"t3",style:(0,d.Z)((0,d.Z)({},aw.content),{},{background:"#2ECC71"}),children:"test333"})]})]})};let y=x;var aw={content:{height:"110vh",textAlign:"center",paddingTop:"10%",fontSize:"4rem",color:"#fff"},link:{display:"inline-block",padding:"0.3rem 0.5rem",fontSize:"2rem",color:"#fff",marginRight:"10px",opacity:"0.5",cursor:"pointer"},active:{opacity:1},nav:{position:"fixed",background:"#fff",textAlign:"center",width:"100%",padding:"10px 0",top:0,zIndex:999}},ax={body:[{margin:0,padding:0},"body"]};(0,p.Z)(y)}},d={};function a(b){var f=d[b];if(void 0!==f)return f.exports;var e=d[b]={exports:{}};return c[b](e,e.exports,a),e.exports}a.m=c,(()=>{var b=[];a.O=(i,e,f,d)=>{if(e){d=d||0;for(var c=b.length;c>0&&b[c-1][2]>d;c--)b[c]=b[c-1];b[c]=[e,f,d];return}for(var g=1/0,c=0;c<b.length;c++){for(var[e,f,d]=b[c],j=!0,h=0;h<e.length;h++)g>=d&&Object.keys(a.O).every(b=>a.O[b](e[h]))?e.splice(h--,1):(j=!1,d<g&&(g=d));if(j){b.splice(c--,1);var k=f();void 0!==k&&(i=k)}}return i}})(),a.n=c=>{var b=c&&c.__esModule?()=>c.default:()=>c;return a.d(b,{a:b}),b},a.d=(d,c)=>{for(var b in c)a.o(c,b)&&!a.o(d,b)&&Object.defineProperty(d,b,{enumerable:!0,get:c[b]})},a.f={},a.e=b=>Promise.all(Object.keys(a.f).reduce((c,d)=>(a.f[d](b,c),c),[])),a.u=b=>""+b+"."+a.h().slice(0,7)+".bundle.js",a.h=()=>"1ae7a20a31f20a1907af",a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b),(()=>{var b={},c="organism-react-scroll-nav:";a.l=(e,j,f,m)=>{if(b[e]){b[e].push(j);return}if(void 0!==f)for(var d,k,l=document.getElementsByTagName("script"),g=0;g<l.length;g++){var h=l[g];if(h.getAttribute("src")==e||h.getAttribute("data-webpack")==c+f){d=h;break}}d||(k=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.setAttribute("data-webpack",c+f),d.src=e),b[e]=[j];var i=(a,f)=>{d.onerror=d.onload=null,clearTimeout(n);var c=b[e];if(delete b[e],d.parentNode&&d.parentNode.removeChild(d),c&&c.forEach(a=>a(f)),a)return a(f)},n=setTimeout(i.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=i.bind(null,d.onerror),d.onload=i.bind(null,d.onload),k&&document.head.appendChild(d)}})(),a.r=a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},a.p="./assets/",(()=>{var d={1:0};a.f.j=(b,e)=>{var c=a.o(d,b)?d[b]:void 0;if(0!==c){if(c)e.push(c[2]);else{var f=new Promise((a,e)=>c=d[b]=[a,e]);e.push(c[2]=f);var g=a.p+a.u(b),i=new Error,h=e=>{if(a.o(d,b)&&(0!==(c=d[b])&&(d[b]=void 0),c)){var f=e&&("load"===e.type?"missing":e.type),g=e&&e.target&&e.target.src;i.message="Loading chunk "+b+" failed.\n("+f+": "+g+")",i.name="ChunkLoadError",i.type=f,i.request=g,c[1](i)}};a.l(g,h,"chunk-"+b,b)}}},a.O.j=a=>0===d[a];var c=(h,i)=>{var c,b,[e,f,j]=i,g=0;if(e.some(a=>0!==d[a])){for(c in f)a.o(f,c)&&(a.m[c]=f[c]);if(j)var k=j(a)}for(h&&h(i);g<e.length;g++)b=e[g],a.o(d,b)&&d[b]&&d[b][0](),d[b]=0;return a.O(k)},b=self.webpackChunkorganism_react_scroll_nav=self.webpackChunkorganism_react_scroll_nav||[];b.forEach(c.bind(null,0)),b.push=c.bind(null,b.push.bind(b))})();var b=a.O(void 0,[0,2],()=>a(31));b=a.O(b)})()