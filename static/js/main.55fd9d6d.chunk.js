(this["webpackJsonpmy-gallery"]=this["webpackJsonpmy-gallery"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var r,c,i,a,o,l,s,u,d,j,b,f=n(0),m=n.n(f),g=n(31),p=n.n(g),h=(n(83),n(10)),x=n(18),O=n(19),v=function(){var e=Object(f.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(f.useEffect)((function(){var e=function(){r(!!document.pointerLockElement)};return document.addEventListener("pointerlockchange",e,!1),function(){document.addEventListener("pointerlockchange",e,!1)}}),[]),n},w={Container:O.a.div(r||(r=Object(x.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.6);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: #ffffff;\n    text-align: center;\n    font-size: 1.1rem;\n    line-height: 26px;\n    z-index: 1;\n    cursor: pointer;\n  "]))),Title:O.a.h3(c||(c=Object(x.a)(["\n    font-size: 2rem;\n  "])))},y=n(6),E=function(){var e=Object(f.useState)(!0),t=Object(h.a)(e,2),n=t[0],r=t[1],c=v();return Object(f.useEffect)((function(){r(!c)}),[c]),n?Object(y.jsxs)(w.Container,{children:[Object(y.jsx)(w.Title,{children:"Click to Explore"}),Object(y.jsx)("br",{}),"Move: WASD",Object(y.jsx)("br",{}),"Look: MOUSE"]}):null},S=n(11),I=n(24),L=n(22),k=function(e){var t=e.children;return Object(y.jsxs)(y.Fragment,{children:[t,Object(y.jsx)("axesHelper",{args:[3]}),Object(y.jsx)("gridHelper",{})]})},C=13421772,P=.1,M=function(){return Object(y.jsxs)("mesh",{position:[0,0,-20],rotation:[0,-Math.PI/2,0],children:[Object(y.jsx)("boxGeometry",{args:[P,20,40]}),Object(y.jsx)("meshBasicMaterial",{color:C})]})},T=function(){return Object(y.jsxs)("mesh",{position:[0,0,20],rotation:[0,-Math.PI/2,0],children:[Object(y.jsx)("boxGeometry",{args:[P,20,40]}),Object(y.jsx)("meshBasicMaterial",{color:C})]})},R=function(){return Object(y.jsxs)("mesh",{position:[-20,0,0],children:[Object(y.jsx)("boxGeometry",{args:[P,20,40]}),Object(y.jsx)("meshBasicMaterial",{color:C})]})},z=function(){return Object(y.jsxs)("mesh",{position:[20,0,0],children:[Object(y.jsx)("boxGeometry",{args:[P,20,40]}),Object(y.jsx)("meshBasicMaterial",{color:C})]})},D=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(M,{}),Object(y.jsx)(T,{}),Object(y.jsx)(R,{}),Object(y.jsx)(z,{})]})},B=n(102),_=n(103),N=n(104),A=n.p+"static/media/ddt_home.a5022fc0.png",F=Object(L.b)({key:"controls",default:null,dangerouslyAllowMutability:!0}),W=n(9),G=function(e,t){var n=new W.Vector3;return t.getWorldDirection(n),new W.Raycaster(t.position,n).intersectObject(e)},K=m.a.forwardRef((function(e,t){var n=Object(I.d)().camera,r=Object(f.useState)(!1),c=Object(h.a)(r,2),i=c[0],a=c[1],o=v();Object(f.useEffect)((function(){a(o)}),[o]);var l=Object(f.useState)(.3),s=Object(h.a)(l,2),u=s[0],d=s[1];return Object(f.useEffect)((function(){if(t){var e=function(e){e.preventDefault();var r=t.current,c=G(r,n).length;d(c?1:.3)};return i?document.addEventListener("mousemove",e):document.removeEventListener("mousemove",e),function(){document.removeEventListener("mousemove",e)}}}),[n,e,t,i]),Object(y.jsxs)("mesh",Object(S.a)(Object(S.a)({ref:t,rotation:[-Math.PI/2,0,0]},e),{},{children:[Object(y.jsx)("ringGeometry",{args:[.2,.5,64]}),Object(y.jsx)("meshBasicMaterial",{opacity:u,color:"#47a3da",transparent:!0})]}))})),H=function(e){var t=Object(I.d)().camera,n=Object(L.d)(F),r=Object(B.a)(A),c=Object(f.useRef)(null);return Object(f.useEffect)((function(){if(c){var r=function(r){r.preventDefault();var i=c.current;G(i,t).length>0&&(e.setIsSlideShow(!0),(null===n||void 0===n?void 0:n.unlock)&&(null===n||void 0===n||n.unlock()))};return document.addEventListener("mousedown",r),function(){document.removeEventListener("mousedown",r)}}}),[t,c,n,e]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("group",{position:[0,2,-3.5],children:[Object(y.jsx)("mesh",{children:Object(y.jsx)("boxGeometry",{args:[5,4,1]})}),Object(y.jsxs)("mesh",{position:[0,0,.51],children:[Object(y.jsx)(_.a,{args:[4.8,3,1],children:Object(y.jsx)("meshBasicMaterial",{map:r})}),Object(y.jsx)("group",{position:[0,1.85,0],children:Object(y.jsx)(N.a,{font:"https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff",color:"#0000A0",anchorX:"center",anchorY:"top",fontSize:.2,letterSpacing:.2,children:"DaDaTong"})})]})]}),Object(y.jsx)(K,{ref:c,position:[0,0,-1.5]})]})},U=n.p+"static/media/wood.396fbc12.png",J=function(){var e=Object(I.c)(W.TextureLoader,U);return e.wrapS=W.MirroredRepeatWrapping,e.wrapT=W.MirroredRepeatWrapping,e.repeat.set(5,5),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(_.a,{args:[100,100],position:[0,-.1,0],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:Object(y.jsx)("meshBasicMaterial",{transparent:!0,map:e})})})},X=function(e){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(f.Suspense,{fallback:null,children:[Object(y.jsx)(J,{}),Object(y.jsx)(D,{}),Object(y.jsx)(H,{setIsSlideShow:e.setIsSlideShow})]})})},Y=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("ambientLight",{})})},V=n(105),q=n(14),Q=["KeyW","KeyS","KeyA","KeyD"],Z=function(e){return{KeyW:"forward",KeyS:"backward",KeyA:"left",KeyD:"right"}[e]},$={forward:!1,backward:!1,left:!1,right:!1},ee=function(){var e=Object(f.useRef)($),t=Object(f.useCallback)((function(t){var n=t.direction,r=t.value;e.current=Object(S.a)(Object(S.a)({},e.current),{},Object(q.a)({},n,r))}),[]);return Object(f.useEffect)((function(){var e=function(e){var n=e.code;Q.includes(n)&&t({direction:Z(n),value:!0})},n=function(e){var n=e.code;Q.includes(n)&&t({direction:Z(n),value:!1})};return document.addEventListener("keydown",e),document.addEventListener("keyup",n),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",n)}}),[t]),[e,t]},te=function(){var e=[];return["forward","backward","left","right"].forEach((function(t){var n=function(e){var t={forward:0,backward:180,left:90,right:-90}[e],n=new W.Matrix4;return n.makeRotationY(W.MathUtils.degToRad(t)),{direction:e,value:n}}(t);e.push(n)})),e},ne=new W.Vector3,re=0,ce=function(){var e=Object(I.d)(),t=e.camera,n=e.clock,r=e.scene,c=Object(f.useRef)(null),i=Object(L.e)(F);Object(f.useEffect)((function(){c.current&&i(c.current)}),[c,i]);var a=ee(),o=Object(h.a)(a,2),l=o[0],s=o[1];return Object(I.b)((function(){var e;if(null===(e=c.current)||void 0===e?void 0:e.isLocked){var i=n.getElapsedTime(),a=i-re;!function(){var e=new W.Vector3;t.getWorldDirection(e),te().forEach((function(n){var c=e.clone();c.applyMatrix4(n.value);var i=t.position.clone(),a=new W.Raycaster(i,c).intersectObject(r,!0);a.length>0&&a[0].distance<3&&s({direction:n.direction,value:!1})}))}(),function(){var e,t;(null===(e=c.current)||void 0===e?void 0:e.moveForward)&&(null===(t=c.current)||void 0===t?void 0:t.moveRight)&&(ne.x+=-1*ne.x*.75,ne.z+=-1*ne.z*.75,l.current.left&&(ne.x-=4),l.current.right&&(ne.x+=4),l.current.forward&&(ne.z-=4),l.current.backward&&(ne.z+=4),c.current.moveForward(-ne.z*a),c.current.moveRight(ne.x*a))}(),re=i}})),Object(y.jsx)(V.a,{ref:c})},ie={MouseIcon:O.a.div(i||(i=Object(x.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    cursor: pointer;\n    border: 2px solid white;\n  "])))},ae=function(){return Object(y.jsx)(ie.MouseIcon,{})},oe=n(106),le=function(){return Object(y.jsx)(oe.a,{})},se={Container:O.a.div(a||(a=Object(x.a)(["\n    display: flex;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n  "]))),NormalElement:O.a.div(o||(o=Object(x.a)([""])))},ue=function(e){var t=Object(L.c)(),n={className:"full-width",gl:{antialias:!0},dpr:devicePixelRatio,camera:{fov:60,aspect:window.innerWidth/window.innerHeight,near:1,far:1e3,position:[-5,2,5]},onCreated:function(e){e.camera.lookAt(-1,2,-3)}};return Object(y.jsxs)(se.Container,{children:[Object(y.jsx)(I.a,Object(S.a)(Object(S.a)({},n),{},{children:Object(y.jsxs)(t,{children:[Object(y.jsx)(ce,{}),Object(y.jsxs)(k,{children:[Object(y.jsx)(Y,{}),Object(y.jsx)(X,{setIsSlideShow:e.setIsSlideShow})]})]})})),Object(y.jsxs)(se.NormalElement,{children:[Object(y.jsx)(le,{}),Object(y.jsx)(ae,{})]})]})},de=n(53),je={SlideItem:O.a.li(l||(l=Object(x.a)(["\n    width: 660px;\n    height: 560px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -280px 0 0 -330px;\n    visibility: hidden;\n\n    &::after {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      background: rgba(255, 255, 255, 0.8);\n      transition: opacity 0.3s;\n    }\n\n    &.current {\n      &::after {\n        visibility: hidden;\n        opacity: 0;\n        transition: opacity 0.3s, visibility 0s 0.3s;\n      }\n    }\n\n    &.show {\n      visibility: visible;\n    }\n\n    & > figure {\n      width: 100%;\n      height: 100%;\n      background: #fff;\n      border: 50px solid #fff;\n      overflow: hidden;\n      padding-top: 20px;\n\n      & figcaption {\n        color: #47a3da;\n        padding-bottom: 20px;\n\n        h3 {\n          font-weight: 500;\n          font-size: 200%;\n          padding: 0 0 0.5em;\n        }\n\n        ol {\n          li {\n            margin: 8px 0px;\n\n            code {\n              background-color: rgba(192, 192, 192, 0.3);\n              padding: 1px 3px;\n            }\n          }\n        }\n      }\n\n      & img {\n        display: block;\n        width: 100%;\n      }\n    }\n  "])))},be={SlideShowList:O.a.ul(s||(s=Object(x.a)(["\n    width: 100%;\n    height: 100%;\n    transform-style: preserve-3d;\n    transform: translate3d(0, 0, 150px);\n    transition: transform 0.5s;\n\n    &.animatable > "," {\n      transition: transform 0.5s;\n    }\n  "])),je.SlideItem)},fe={Container:O.a.div(u||(u=Object(x.a)(["\n    position: fixed;\n    background: rgba(0, 0, 0, 0.6);\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 500;\n    opacity: 0;\n    visibility: hidden;\n    overflow: hidden;\n    perspective: 1000px;\n    transition: opacity 0.5s, visibility 0s 0.5s;\n\n    &.open {\n      opacity: 1;\n      visibility: visible;\n      transition: opacity 0.5s;\n\n      "," {\n        transform: translate3d(0, 0, 0);\n      }\n    }\n  "])),be.SlideShowList)};!function(e){e[e.Initial=0]="Initial",e[e.Pending=1]="Pending",e[e.Start=2]="Start"}(d||(d={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right"}(j||(j={})),function(e){e[e.LastPrev=0]="LastPrev",e[e.Prev=1]="Prev",e[e.Current=2]="Current",e[e.Next=3]="Next"}(b||(b={}));var me,ge,pe,he=[{type:"normal",src:n.p+"static/media/home_top.58161cca.png",title:"DaDaTong Website",list:["I am reponsible for refactoring and developing the website of DaDaTong from November 2019 to December 2020. The next few slides show the features that I implemented last year."]},{type:"normal",src:n.p+"static/media/solution_detail.cca5028e.png",title:"Refactoring the Website",list:["1. Refactor the old DaDaTong from <code>JSP (JavaServer Page)</code> to <code>React.js</code>.","2. Choose <code>Next.js</code> as the front-end framework in order to optimize the SEO."]},{type:"normal",src:n.p+"static/media/SEO.6f1148d2.png",title:"Search Engine Optimization (SEO)",list:["1. By using <code>Google Analytics (GA)</code> <code>Google Tag Manager (GTM)</code> <code>A/B Test</code> to optimize the SEO.","2. The impression was increased significantly after the new DaDaTong launched on April 2020."]},{type:"localization"},{type:"normal",src:n.p+"static/media/announcement.9446d8b1.png",title:"Technical Skills",list:["1. The UI design system is based on the <code>material-ui</code>.","2. Using <code>redux-saga</code> to manage the user authentication.","3. Using <code>typeScript</code> to build a more robust web application."]}],xe=m.a.forwardRef((function(e,t){return Object(y.jsx)(be.SlideShowList,Object(S.a)(Object(S.a)({},e),{},{ref:t,children:e.children}))})),Oe={ListItem:O.a.li(me||(me=Object(x.a)(["\n    line-height: 1.5em;\n  "])))},ve=function(e){return Object(y.jsxs)("figure",{children:[Object(y.jsxs)("figcaption",{children:[Object(y.jsx)("h3",{children:e.data.title}),Object(y.jsx)("ol",{children:e.data.list.map((function(e,t){return Object(y.jsx)(Oe.ListItem,{dangerouslySetInnerHTML:{__html:e}},t)}))})]}),Object(y.jsx)("img",{src:e.data.src,alt:"img"})]})},we=n.p+"static/media/i18n_tw.c938e10c.png",ye=n.p+"static/media/i18n_cn.7f02c246.png",Ee=n(78),Se=(n(98),Object(S.a)(Object(S.a)({},Oe),{},{ImgContainer:O.a.div(ge||(ge=Object(x.a)(["\n    position: relative;\n    height: 240px;\n  "]))),TextAnnotation:O.a.div(pe||(pe=Object(x.a)(["\n    font-size: 0.87em;\n    font-weight: bold;\n    margin-bottom: 7px;\n  "])))})),Ie=["Implemented by using <code>next-i18next</code>."],Le=function(){var e=Object(f.useState)(0),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(y.jsxs)("figure",{children:[Object(y.jsxs)("figcaption",{children:[Object(y.jsx)("h3",{children:"Internationalization and Localization"}),Object(y.jsx)("ol",{children:Ie.map((function(e,t){return Object(y.jsx)(Se.ListItem,{dangerouslySetInnerHTML:{__html:e}},t)}))})]}),Object(y.jsxs)(Se.ImgContainer,{children:[Object(y.jsx)(Se.TextAnnotation,{children:function(e){switch(e){case 0:return"Traditional Chinese";case 1:return"Simplified Chinese"}}(n)}),Object(y.jsxs)(Ee.Carousel,{autoPlay:!0,infiniteLoop:!0,showThumbs:!1,showStatus:!1,showIndicators:!1,selectedItem:n,onChange:function(e){r(e)},children:[Object(y.jsx)("img",{src:we,alt:"DaDaTong_I18n_TW"}),Object(y.jsx)("img",{src:ye,alt:"DaDaTong_I18n_CN"})]})]})]})},ke=function(e){var t=Object(f.useRef)(null),n=Object(f.useMemo)((function(){return function(e,t,n){var r=n===j.Left?t+2:t-2,c=n===j.Left?t+1:t-1,i=n===j.Left?t-1:t+1;switch(e){case r:return b.LastPrev;case c:return b.Prev;case t:return b.Current;case i:return b.Next;default:return null}}(e.index,e.currentIndex,e.direction)}),[e.index,e.currentIndex,e.direction]),r=Object(f.useState)(!1),c=Object(h.a)(r,2),i=c[0],a=c[1];Object(f.useEffect)((function(){var t=!1;e.index>=e.currentIndex-1&&e.index<=e.currentIndex+1&&(t=!0),n===b.LastPrev&&(t=!0),a(t)}),[e.index,e.currentIndex,n]);var o=Object(f.useState)(!1),l=Object(h.a)(o,2),s=l[0],u=l[1];Object(f.useEffect)((function(){switch(e.animationStatus){case d.Initial:case d.Start:u(e.index===e.currentIndex)}}),[e.index,e.currentIndex,e.animationStatus]),Object(f.useEffect)((function(){switch(e.animationStatus){case d.Initial:!function(){if(t.current){var n="";switch(e.index){case e.currentIndex-1:case e.currentIndex:break;case e.currentIndex+1:n="translate3d(calc(50vw + 330px), 0px, -150px)";break;default:return""}t.current.style.transform=n}}();break;case d.Pending:!function(){if(t.current){var r="";switch(e.direction){case j.Left:r="translate3d(calc(-100vw - 330px), 0px, -150px)";break;case j.Right:r="translate3d(calc(100vw + 330px), 0px, -150px)"}n===b.Next&&(t.current.style.transform=r)}}();break;case d.Start:!function(){if(t.current){var r="";switch(e.index){case e.currentIndex-1:r="translate3d(calc(-50vw - 330px), 0px, -150px)";break;case e.currentIndex+1:r="translate3d(calc(50vw + 330px), 0px, -150px)"}n===b.LastPrev&&(r=e.direction===j.Left?"translate3d(calc(100vw + 330px), 0px, -150px)":"translate3d(calc(-100vw - 330px), 0px, -150px)"),t.current.style.transform=r}}(),function(){var e;null===(e=t.current)||void 0===e||e.addEventListener("transitionend",(function e(){var r;n===b.LastPrev&&a(!1),null===(r=t.current)||void 0===r||r.removeEventListener("transitionend",e)}))}()}}),[e.index,e.currentIndex,e.animationStatus,e.direction,n]);var m=Object(f.useCallback)((function(t){return"normal"===t.type?Object(y.jsx)(ve,{data:e.data}):{localization:Object(y.jsx)(Le,{})}[t.type]}),[e.data]);return Object(y.jsx)(je.SlideItem,{ref:t,className:Object(de.a)({show:i,current:s}),children:m(e.data)})};function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Pe(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var Me=f.createElement("g",null,f.createElement("g",null,f.createElement("path",{d:"M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"}))),Te=f.createElement("g",null),Re=f.createElement("g",null),ze=f.createElement("g",null),De=f.createElement("g",null),Be=f.createElement("g",null),_e=f.createElement("g",null),Ne=f.createElement("g",null),Ae=f.createElement("g",null),Fe=f.createElement("g",null),We=f.createElement("g",null),Ge=f.createElement("g",null),Ke=f.createElement("g",null),He=f.createElement("g",null),Ue=f.createElement("g",null),Je=f.createElement("g",null);function Xe(e,t){var n=e.title,r=e.titleId,c=Pe(e,["title","titleId"]);return f.createElement("svg",Ce({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 492 492",style:{enableBackground:"new 0 0 492 492"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?f.createElement("title",{id:r},n):null,Me,Te,Re,ze,De,Be,_e,Ne,Ae,Fe,We,Ge,Ke,He,Ue,Je)}var Ye=f.forwardRef(Xe);n.p;function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function qe(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var Qe=f.createElement("g",null,f.createElement("g",null,f.createElement("path",{d:"M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"}))),Ze=f.createElement("g",null),$e=f.createElement("g",null),et=f.createElement("g",null),tt=f.createElement("g",null),nt=f.createElement("g",null),rt=f.createElement("g",null),ct=f.createElement("g",null),it=f.createElement("g",null),at=f.createElement("g",null),ot=f.createElement("g",null),lt=f.createElement("g",null),st=f.createElement("g",null),ut=f.createElement("g",null),dt=f.createElement("g",null),jt=f.createElement("g",null);function bt(e,t){var n=e.title,r=e.titleId,c=qe(e,["title","titleId"]);return f.createElement("svg",Ve({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 492.004 492.004",style:{enableBackground:"new 0 0 492.004 492.004"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?f.createElement("title",{id:r},n):null,Qe,Ze,$e,et,tt,nt,rt,ct,it,at,ot,lt,st,ut,dt,jt)}var ft=f.forwardRef(bt);n.p;function mt(){return(mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function gt(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var pt=f.createElement("g",null,f.createElement("g",null,f.createElement("path",{d:"M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872 c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872 c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052 L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116 c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952 c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116 c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"}))),ht=f.createElement("g",null),xt=f.createElement("g",null),Ot=f.createElement("g",null),vt=f.createElement("g",null),wt=f.createElement("g",null),yt=f.createElement("g",null),Et=f.createElement("g",null),St=f.createElement("g",null),It=f.createElement("g",null),Lt=f.createElement("g",null),kt=f.createElement("g",null),Ct=f.createElement("g",null),Pt=f.createElement("g",null),Mt=f.createElement("g",null),Tt=f.createElement("g",null);function Rt(e,t){var n=e.title,r=e.titleId,c=gt(e,["title","titleId"]);return f.createElement("svg",mt({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 492 492",style:{enableBackground:"new 0 0 492 492"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?f.createElement("title",{id:r},n):null,pt,ht,xt,Ot,vt,wt,yt,Et,St,It,Lt,kt,Ct,Pt,Mt,Tt)}var zt,Dt,Bt,_t,Nt,At=f.forwardRef(Rt),Ft=(n.p,O.a.div(zt||(zt=Object(x.a)(["\n  position: absolute;\n  z-index: 1000;\n  color: #59656c;\n  text-align: center;\n  cursor: pointer;\n  font-size: 2.2em;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 70px;\n  display: flex;\n  align-items: center;\n  & svg {\n    position: absolute;\n    fill: rgb(89, 101, 108);\n    transform: scale(0.5);\n  }\n"])))),Wt={Left:Object(O.a)(Ft)(Dt||(Dt=Object(x.a)([""]))),Right:Object(O.a)(Ft)(Bt||(Bt=Object(x.a)(["\n    right: 0;\n  "]))),Close:O.a.div(_t||(_t=Object(x.a)(["\n    position: fixed;\n    z-index: 1000;\n    text-align: center;\n    cursor: pointer;\n    font-size: 2.2em;\n    top: 0;\n    right: 0;\n    padding: 0.5em 1em;\n    svg {\n      width: 20px;\n      fill: #fff;\n    }\n  "])))},Gt=function(e){var t=Object(L.d)(F);return Object(y.jsxs)("nav",{children:[e.currentIndex>0&&Object(y.jsx)(Wt.Left,{onClick:function(){return e.onNavigateClick(j.Left)},children:Object(y.jsx)(Ye,{})}),e.currentIndex<e.total-1&&Object(y.jsx)(Wt.Right,{onClick:function(){return e.onNavigateClick(j.Right)},children:Object(y.jsx)(ft,{})}),Object(y.jsx)(Wt.Close,{onClick:function(){e.setIsSlideShow(!1),(null===t||void 0===t?void 0:t.lock)&&t.lock()},children:Object(y.jsx)(At,{})})]})},Kt=function(e){var t=Object(f.useRef)(null),n=Object(f.useState)(d.Initial),r=Object(h.a)(n,2),c=r[0],i=r[1],a=Object(f.useState)(),o=Object(h.a)(a,2),l=o[0],s=o[1],u=Object(f.useState)(0),b=Object(h.a)(u,2),m=b[0],g=b[1];Object(f.useEffect)((function(){switch(c){case d.Pending:!function(){var e;null===(e=t.current)||void 0===e||e.classList.remove("animatable"),setTimeout((function(){i(d.Start)}),25)}();break;case d.Start:!function(){var e;null===(e=t.current)||void 0===e||e.classList.add("animatable")}()}}),[c]);return Object(y.jsxs)(fe.Container,{className:Object(de.a)(e.isShow&&"open"),style:{pointerEvents:e.isShow?"auto":"none"},onClick:function(e){e.stopPropagation()},children:[Object(y.jsx)(xe,{ref:t,children:he.map((function(e,t){return Object(y.jsx)(ke,{data:e,index:t,currentIndex:m,direction:l,animationStatus:c},t)}))}),Object(y.jsx)(Gt,{currentIndex:m,total:he.length,onNavigateClick:function(e){s(e),function(){switch(e){case j.Left:g((function(e){return e-1}));break;case j.Right:g((function(e){return e+1}))}}(),i(d.Pending)},setIsSlideShow:e.setIsSlideShow})]})},Ht=(n(99),{Container:O.a.div(Nt||(Nt=Object(x.a)(["\n    display: flex;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n  "])))}),Ut=function(){var e=Object(f.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(y.jsx)(L.a,{children:Object(y.jsxs)(Ht.Container,{children:[Object(y.jsx)(E,{}),Object(y.jsx)(ue,{setIsSlideShow:r}),Object(y.jsx)(Kt,{isShow:n,setIsSlideShow:r})]})})},Jt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};p.a.render(Object(y.jsx)(m.a.StrictMode,{children:Object(y.jsx)(Ut,{})}),document.getElementById("root")),Jt()},83:function(e,t,n){},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.55fd9d6d.chunk.js.map