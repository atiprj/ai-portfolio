(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6209)}])},6541:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let r=i(8754),n=i(1757),s=i(5893),o=n._(i(7294)),a=r._(i(3935)),l=r._(i(7828)),c=i(7367),d=i(7903),u=i(4938);i(1997);let m=i(9953),f=r._(i(6663)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/ai-portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,i,r,n,s,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function g(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}let x=(0,o.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:n,height:a,width:l,decoding:c,className:d,style:u,fetchPriority:m,placeholder:f,loading:p,unoptimized:x,fill:b,onLoadRef:v,onLoadingCompleteRef:j,setBlurComplete:y,setShowAltText:w,sizesInput:N,onLoad:C,onError:_,...S}=e;return(0,s.jsx)("img",{...S,...g(m),loading:p,width:l,height:a,decoding:c,"data-nimg":b?"fill":"1",className:d,style:u,sizes:n,srcSet:r,src:i,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&h(e,f,v,j,y,x,N))},[i,f,v,j,y,_,x,N,t]),onLoad:e=>{h(e.currentTarget,f,v,j,y,x,N)},onError:e=>{w(!0),"empty"!==f&&y(!0),_&&_(e)}})});function b(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...g(i.fetchPriority)};return t&&a.default.preload?(a.default.preload(i.src,r),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let v=(0,o.forwardRef)((e,t)=>{let i=(0,o.useContext)(m.RouterContext),r=(0,o.useContext)(u.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=p||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:a,onLoadingComplete:l}=e,h=(0,o.useRef)(a);(0,o.useEffect)(()=>{h.current=a},[a]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[v,j]=(0,o.useState)(!1),[y,w]=(0,o.useState)(!1),{props:N,meta:C}=(0,c.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:v,showAltText:y});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{...N,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:j,setShowAltText:w,sizesInput:e.sizes,ref:t}),C.priority?(0,s.jsx)(b,{isAppRouter:!i,imgAttributes:N}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),i(1997);let r=i(9919),n=i(7903);function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var i;let a,l,c,{src:d,sizes:u,unoptimized:m=!1,priority:f=!1,loading:p,className:h,quality:g,width:x,height:b,fill:v=!1,style:j,overrideSrc:y,onLoad:w,onLoadingComplete:N,placeholder:C="empty",blurDataURL:_,fetchPriority:S,layout:I,objectFit:A,objectPosition:k,lazyBoundary:z,lazyRoot:P,...E}=e,{imgConf:M,showAltText:O,blurComplete:R,defaultLoader:L}=t,D=M||n.imageConfigDefault;if("allSizes"in D)a=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);a={...D,allSizes:e,deviceSizes:t}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let G=E.loader||L;delete E.loader,delete E.srcSet;let B="__next_img_default"in G;if(B){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:i,...r}=t;return e(r)}}if(I){"fill"===I&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[I];t&&!u&&(u=t)}let F="",W=o(x),T=o(b);if("object"==typeof(i=d)&&(s(i)||void 0!==i.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,_=_||e.blurDataURL,F=e.src,!v){if(W||T){if(W&&!T){let t=W/e.width;T=Math.round(e.height*t)}else if(!W&&T){let t=T/e.height;W=Math.round(e.width*t)}}else W=e.width,T=e.height}}let V=!f&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:F)||d.startsWith("data:")||d.startsWith("blob:"))&&(m=!0,V=!1),a.unoptimized&&(m=!0),B&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(m=!0),f&&(S="high");let q=o(g),J=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:k}:{},O?{}:{color:"transparent"},j),H=R||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:W,heightInt:T,blurWidth:l,blurHeight:c,blurDataURL:_||"",objectFit:J.objectFit})+'")':'url("'+C+'")',U=H?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},X=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:s,sizes:o,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,r)=>a({config:t,src:i,quality:s,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:a({config:t,src:i,quality:s,width:l[d]})}}({config:a,src:d,unoptimized:m,width:W,quality:q,sizes:u,loader:G});return{props:{...E,loading:V?"lazy":p,fetchPriority:S,width:W,height:T,decoding:"async",className:h,style:{...J,...U},sizes:X.sizes,srcSet:X.srcSet,src:y||X.src},meta:{unoptimized:m,priority:f,placeholder:C,fill:v}}}},9919:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:s,objectFit:o}=e,a=r?40*r:t,l=n?40*n:i,c=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},5666:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},getImageProps:function(){return a}});let r=i(8754),n=i(7367),s=i(6541),o=r._(i(6663));function a(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/ai-portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let l=s.Image},6663:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},6209:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var r=i(5893),n=i(7294),s=i(9008),o=i.n(s),a=i(5675),l=i.n(a);let c=[{id:1,title:"AI-Generated Landscape",description:"A stunning landscape created by our custom AI model.",type:"image",content:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop"},{id:2,title:"AI Music Composition",description:"A beautiful melody composed by our AI music generator.",type:"audio",content:"https://example.com/ai-generated-music.mp3"},{id:3,title:"AI-Written Short Story",description:"A compelling short story written by our language model.",type:"text",content:"Once upon a time in a digital realm, an AI dreamed of electric sheep..."},{id:4,title:"AI Video Generation",description:"A mesmerizing video sequence created by our AI video model.",type:"video",content:"https://example.com/ai-generated-video.mp4"},{id:5,title:"Interactive AI Art",description:"An interactive piece of art generated by our AI, hosted on a separate platform.",type:"embed",content:"https://example.com/interactive-ai-art"},{id:6,title:"AI-Generated Portrait",description:"A unique portrait created by our AI image generation model.",type:"image",content:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1200&fit=crop"}];function d(){let[e,t]=(0,n.useState)("all"),[i,s]=(0,n.useState)(null),a="all"===e?c:c.filter(t=>t.type===e),d=e=>{s(e)};return(0,r.jsxs)("div",{className:"min-h-screen bg-base-100",children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"AI Creations Portfolio"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:"navbar bg-base-100",children:[(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)("a",{className:"btn btn-ghost normal-case text-xl",children:"AI Creations Portfolio"})}),(0,r.jsx)("div",{className:"flex-none",children:(0,r.jsxs)("ul",{className:"menu menu-horizontal px-1",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})})]})})]}),(0,r.jsxs)("main",{className:"container mx-auto px-4 py-8",children:[(0,r.jsxs)("section",{className:"mb-12 text-center",children:[(0,r.jsx)("h1",{className:"mb-4 text-4xl font-bold",children:"John Doe"}),(0,r.jsx)("p",{className:"mb-6 text-xl",children:"AI Artist & Creative Technologist"}),(0,r.jsx)("p",{className:"mx-auto max-w-2xl",children:"Explore my diverse collection of AI-generated content, spanning across various mediums including images, videos, audio, and interactive experiences."})]}),(0,r.jsxs)("div",{className:"tabs tabs-boxed justify-center mb-8",children:[(0,r.jsx)("a",{className:"tab ".concat("all"===e?"tab-active":""),onClick:()=>t("all"),children:"All"}),(0,r.jsx)("a",{className:"tab ".concat("image"===e?"tab-active":""),onClick:()=>t("image"),children:"Images"}),(0,r.jsx)("a",{className:"tab ".concat("video"===e?"tab-active":""),onClick:()=>t("video"),children:"Videos"}),(0,r.jsx)("a",{className:"tab ".concat("audio"===e?"tab-active":""),onClick:()=>t("audio"),children:"Audio"}),(0,r.jsx)("a",{className:"tab ".concat("text"===e?"tab-active":""),onClick:()=>t("text"),children:"Text"}),(0,r.jsx)("a",{className:"tab ".concat("embed"===e?"tab-active":""),onClick:()=>t("embed"),children:"Interactive"})]}),(0,r.jsx)("section",{className:"mb-16",children:(0,r.jsx)("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:a.map(e=>(0,r.jsxs)("div",{className:"card bg-base-200 shadow-xl",onClick:()=>d(e),children:[(0,r.jsxs)("figure",{className:"px-10 pt-10",children:["image"===e.type&&(0,r.jsx)(l(),{src:e.content,alt:e.title,width:400,height:300,objectFit:"cover",className:"rounded-xl"}),"video"===e.type&&(0,r.jsx)("video",{src:e.content,className:"h-64 w-full object-cover rounded-xl",muted:!0,loop:!0,playsInline:!0}),"audio"===e.type&&(0,r.jsx)("div",{className:"flex h-64 items-center justify-center bg-base-300 rounded-xl",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"})})}),"text"===e.type&&(0,r.jsx)("div",{className:"flex h-64 items-center justify-center bg-base-300 rounded-xl p-4",children:(0,r.jsx)("p",{className:"text-center line-clamp-5",children:e.content})}),"embed"===e.type&&(0,r.jsx)("div",{className:"flex h-64 items-center justify-center bg-base-300 rounded-xl",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("h2",{className:"card-title",children:e.title}),(0,r.jsx)("p",{children:e.description})]})]},e.id))})})]}),(0,r.jsx)("footer",{className:"footer footer-center p-4 bg-base-300 text-base-content",children:(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:"\xa9 2023 John Doe. All rights reserved."})})}),i&&(0,r.jsx)("div",{className:"modal modal-open",children:(0,r.jsxs)("div",{className:"modal-box",children:["image"===i.type&&(0,r.jsx)(l(),{src:i.content,alt:i.title,width:800,height:600,objectFit:"contain"}),"video"===i.type&&(0,r.jsx)("video",{src:i.content,controls:!0,className:"w-full"}),"audio"===i.type&&(0,r.jsx)("audio",{src:i.content,controls:!0,className:"w-full"}),"text"===i.type&&(0,r.jsx)("div",{className:"max-h-96 overflow-y-auto",children:(0,r.jsx)("p",{children:i.content})}),"embed"===i.type&&(0,r.jsx)("iframe",{src:i.content,className:"w-full h-96",title:i.title}),(0,r.jsx)("h3",{className:"font-bold text-lg mt-4",children:i.title}),(0,r.jsx)("p",{className:"py-4",children:i.description}),(0,r.jsx)("div",{className:"modal-action",children:(0,r.jsx)("button",{className:"btn",onClick:()=>{s(null)},children:"Close"})})]})})]})}},9008:function(e,t,i){e.exports=i(7828)},5675:function(e,t,i){e.exports=i(5666)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);