(this.webpackJsonppicsearch=this.webpackJsonppicsearch||[]).push([[0],{13:function(e,t,a){},39:function(e,t){},61:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(23),r=a.n(i),s=(a(13),a(2)),l=a(24),u=a.n(l),o=a(0),b=function(e){var t=e.className,a=e.query,c=Object(n.useCallback)((function(e){if("Enter"===e.key||13===e.keyCode){var t=e.target.value;window.location.search="q=".concat(encodeURIComponent(t))}}),[]);return Object(o.jsx)("div",{className:Object(s.a)("w-2/4","h-10","rounded-lg","bg-white","border","overflow-hidden",t),children:Object(o.jsx)("input",{defaultValue:a,className:Object(s.a)("w-full","h-full","p-3","outline-none","text-lg"),placeholder:"\u641c\u7d22\u514d\u8d39\u56fe\u7247",onKeyDown:c})})},d=a(4),j=a(5),f=a(8),m=a.n(f),p=m.a.create({headers:{Authorization:"563492ad6f91700001000001ee73ec26350b4a91aa701684cd9cf496"}});function h(e){return{id:e.id,width:e.width,height:e.height,pageUrl:e.url,imageUrl:e.src.large}}var x=m.a.create({params:{key:"24009231-e8e4fd260a26521d059640a40"}});function O(e){return{id:e.id,width:e.imageWidth,height:e.imageHeight,pageUrl:e.pageURL,imageUrl:e.largeImageURL}}function g(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){p.get("https://api.pexels.com/v1/curated",{params:{page:1,per_page:80}}).then((function(e){return e.data.photos.map(h)})).catch((function(e){return[]})).then((function(e){return c(e)}))}),[]),a}function v(e){var t=Object(n.useState)(1),a=Object(d.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(new Map),s=Object(d.a)(r,1)[0],l=Object(n.useState)(s.size),u=Object(d.a)(l,2),o=u[0],b=u[1];Object(n.useEffect)((function(){var t;(t={page:c,per_page:40,query:e},p.get("https://api.pexels.com/v1/search/",{params:Object(j.a)(Object(j.a)({},t),{},{query:encodeURIComponent(t.query)})}).then((function(e){return e.data.photos.map(h)})).catch((function(e){return[]}))).then((function(e){e.map((function(e){return s.set(e.imageUrl,e)})),b(s.size)})),function(e){return x.get("https://pixabay.com/api/",{params:Object(j.a)(Object(j.a)({},e),{},{query:encodeURIComponent(e.q)})}).then((function(e){return e.data.hits.map(O)})).catch((function(e){return[]}))}({page:c,per_page:40,q:e}).then((function(e){e.map((function(e){return s.set(e.imageUrl,e)})),b(s.size)}))}),[c,e,s,b]);var f=Object(n.useCallback)((function(){i(c+1)}),[c,i]);return[Object(n.useMemo)((function(){return o?Array.from(s.values()):[]}),[s,o]),f]}function y(e){var t,a=e.pictureList;return t=a.length?a.map((function(e){var t=e.width/e.height;return Object(o.jsxs)("a",{className:Object(s.a)("relative","m-1","block"),style:{width:"".concat(250*t,"px"),flexGrow:250*t,flexShrink:250*t,background:"#f6f5fa",maxHeight:"50vh",maxWidth:"calc(".concat(t," * 50vh)")},href:e.pageUrl,target:"_blank",rel:"noreferrer",children:[Object(o.jsx)("i",{className:Object(s.a)("block"),style:{paddingBottom:"".concat(1/t*100,"%")}}),Object(o.jsx)("img",{className:Object(s.a)("absolute","w-full","h-full","top-0","align-bottom","border","lazyload"),"data-src":e.imageUrl,alt:""})]},e.id)})):new Array(40).fill(0).map((function(e,t){return Object(o.jsx)("div",{className:Object(s.a)("relative","m-1","block"),style:{width:"250px",flexGrow:250,flexShrink:250,background:"#f6f5fa",maxHeight:"50vh",maxWidth:"50vh"},children:Object(o.jsx)("i",{className:Object(s.a)("block"),style:{paddingBottom:"100%"}})},t)})),Object(o.jsx)("ul",{className:Object(s.a)("flex","flex-row","flex-wrap"),children:t})}function w(e){var t=e.className,a=g();return Object(o.jsx)("div",{className:Object(s.a)("pt-2",t),children:Object(o.jsx)(y,{pictureList:a})})}var k=c.a.forwardRef((function(e,t){return Object(o.jsx)("div",{ref:t,className:Object(s.a)("block","h-10"),style:{margin:"10px auto"},children:Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:Object(s.a)("bg-transparent","block","my-0","mx-auto"),width:"40px",height:"40px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(o.jsxs)("circle",{cx:"84",cy:"50",r:"10",fill:"#e15b64",children:[Object(o.jsx)("animate",{attributeName:"r",repeatCount:"indefinite",dur:"0.25s",calcMode:"spline",keyTimes:"0;1",values:"10;0",keySplines:"0 0.5 0.5 1",begin:"0s"}),Object(o.jsx)("animate",{attributeName:"fill",repeatCount:"indefinite",dur:"1s",calcMode:"discrete",keyTimes:"0;0.25;0.5;0.75;1",values:"#e15b64;#abbd81;#f8b26a;#f47e60;#e15b64",begin:"0s"})]}),Object(o.jsxs)("circle",{cx:"16",cy:"50",r:"10",fill:"#e15b64",children:[Object(o.jsx)("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"0;0;10;10;10",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"0s"}),Object(o.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"16;16;16;50;84",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"0s"})]}),Object(o.jsxs)("circle",{cx:"50",cy:"50",r:"10",fill:"#f47e60",children:[Object(o.jsx)("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"0;0;10;10;10",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.25s"}),Object(o.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"16;16;16;50;84",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.25s"})]}),Object(o.jsxs)("circle",{cx:"84",cy:"50",r:"10",fill:"#f8b26a",children:[Object(o.jsx)("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"0;0;10;10;10",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.5s"}),Object(o.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"16;16;16;50;84",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.5s"})]}),Object(o.jsxs)("circle",{cx:"16",cy:"50",r:"10",fill:"#abbd81",children:[Object(o.jsx)("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"0;0;10;10;10",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.75s"}),Object(o.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"16;16;16;50;84",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.75s"})]})]})})}));function N(e){var t=e.keyword,a=e.className,c=v(t),i=Object(d.a)(c,2),r=i[0],l=i[1],u=Object(n.useRef)(null),b=Object(n.useCallback)((function(){u.current&&function(e){var t=window.innerWidth||document.documentElement.clientWidth,a=window.innerHeight||document.documentElement.clientHeight,n=e.getBoundingClientRect(),c=n.top,i=n.right,r=n.bottom,s=n.left;return c>=0&&s>=0&&i<=t&&r<=a}(u.current)&&l()}),[u,l]);return Object(n.useEffect)((function(){return window.addEventListener("scroll",b),function(){window.removeEventListener("scroll",b)}}),[b]),Object(o.jsxs)("div",{className:Object(s.a)(a),children:[Object(o.jsxs)("p",{className:Object(s.a)("m-2","text-gray-600",{visible:!!t,invisible:!t}),children:["\u60a8\u67e5\u627e\u7684\u5173\u4e8e\u201c",t,"\u201d\u7684\u56fe\u7247\uff1a"]}),Object(o.jsx)(y,{pictureList:r}),!!r.length&&Object(o.jsx)(k,{ref:u})]})}a(60);function C(){var e=u.a.parse(window.location.search.substring(1)).q,t=Object(s.a)("mt-20","content");return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:Object(s.a)("flex","flex-row","justify-center","items-center","h-20","fixed","w-full","top-0","left-0","z-50","search"),children:Object(o.jsx)(b,{query:e})}),e?Object(o.jsx)(N,{keyword:e,className:t}):Object(o.jsx)(w,{className:t})]})}var S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),S()}},[[61,1,2]]]);
//# sourceMappingURL=main.bedbe662.chunk.js.map