(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(6209)}])},6209:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var i=a(5893),n=a(7294),s=a(9008),o=a.n(s),r=a(5675),l=a.n(r);let c=[{id:1,title:"Text-to-Image - ARC - GreenFacade",description:"A stunning BAUBAUBAU created by our Stable Diffusion Test AI model.",tool:"xxx",date:"2023.10.24",type:"image",content:"https://github.com/atiprj/ai-portfolio/blob/main/media/image/2023.10.24_SD-00105-2857680428.jpg?raw=true"},{id:2,title:"Text-to-Image - ARC - Skyscraper",description:"A stunning BAUBAUBAU created by our Stable Diffusion Interpoaltion Test AI model.",tool:"xxx",date:"2023.06.22",type:"image",content:"https://github.com/atiprj/ai-portfolio/blob/main/media/image/2023.06.22_SD-Dint-00074-2613490247.0.jpg?raw=true"},{id:3,title:"AI Music Composition",description:"A beautiful melody composed by our AI music generator.",tool:"xxx",date:"2021.10.24",type:"audio",content:"https://example.com/ai-generated-music.mp3"},{id:4,title:"AI-Written Short Story",description:"A compelling short story written by our language model.",tool:"xxx",date:"2022.11.24",type:"text",content:"Once upon a time in a digital realm, an AI dreamed of electric sheep..."},{id:5,title:"AI Sketch To Image - InterpolationV2",description:"A mesmerizing video sequence created by our AI video model interpolazion from sketch ",tool:"SD+Runway",date:"2023.11.03",type:"video",content:"https://github.com/atiprj/ai-portfolio/raw/main/media/video/2023.11.3_SDK1_SketchToRender_DRAFT02.mp4"},{id:6,title:"AI Sketch To Image - InterpolationV1",description:"A mesmerizing video sequence created by our AI video model interpolazion from ",tool:"xxx",date:"2023.10.25",type:"video",content:"https://github.com/atiprj/ai-portfolio/raw/main/media/video/2023.10.24_ATI_SD-SketchToImage.mp4"},{id:7,title:"Biennale 2024 - Lucca",description:"An interactive piece of art generated clustering by our AI, hosted on spackl platform.",tool:"xxx",date:"2024.06.29",type:"embed",content:"https://app.speckle.systems/projects/602f74e444/models/8de5ac4c1f#embed=%7B%22isEnabled%22%3Atrue%2C%22isTransparent%22%3Atrue%2C%22hideControls%22%3Atrue%2C%22hideSelectionInfo%22%3Atrue%7D"},{id:8,title:"AI-Generated Portrait",description:"A unique portrait created by our AI image generation model.",tool:"xxx",date:"2021.06.24",type:"image",content:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1200&fit=crop"}];function d(){let[e,t]=(0,n.useState)("all"),[a,s]=(0,n.useState)(null),r="all"===e?c.sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime()):c.filter(t=>t.type===e).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime()),d=e=>{s(e)},m=e=>{switch(e){case"image":return"bg-gray-900";case"video":return"bg-gray-800";case"audio":return"bg-gray-700";case"text":return"bg-gray-600";case"embed":return"bg-gray-500";default:return"bg-gray-400"}};return(0,i.jsxs)("div",{className:"min-h-screen bg-base-100",children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Generative AI - Portfolio"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("div",{className:"navbar bg-base-100",children:[(0,i.jsx)("div",{className:"flex-1",children:(0,i.jsx)("a",{className:"btn btn-ghost normal-case text-xl",children:"Generative AI - Portfolio"})}),(0,i.jsx)("div",{className:"flex-none",children:(0,i.jsxs)("ul",{className:"menu menu-horizontal px-1",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})})]})})]}),(0,i.jsxs)("main",{className:"container mx-auto px-4 py-8",children:[(0,i.jsxs)("section",{className:"mb-12 text-center",children:[(0,i.jsx)("h1",{className:"mb-4 text-4xl font-bold hover:text-blue-500 hover:scale-105 hover:text-shadow-lg transition-all duration-300 hover:animate-bounce",children:"Creative Generative AI - Dev Team"}),(0,i.jsx)("p",{className:"mb-6 text-xl",children:"Research & Development Department"}),(0,i.jsx)("p",{className:"mx-auto max-w-2xl",children:"Explore our diverse collection of AI-generated content, spanning across various mediums including images, videos, audio, and interactive experiences."})]}),(0,i.jsxs)("div",{className:"tabs tabs-boxed justify-center mb-8",children:[(0,i.jsx)("a",{className:"tab ".concat("all"===e?"tab-active":""),onClick:()=>t("all"),children:"All"}),(0,i.jsx)("a",{className:"tab ".concat("image"===e?"tab-active":""),onClick:()=>t("image"),children:"Images"}),(0,i.jsx)("a",{className:"tab ".concat("video"===e?"tab-active":""),onClick:()=>t("video"),children:"Videos"}),(0,i.jsx)("a",{className:"tab ".concat("audio"===e?"tab-active":""),onClick:()=>t("audio"),children:"Audio"}),(0,i.jsx)("a",{className:"tab ".concat("text"===e?"tab-active":""),onClick:()=>t("text"),children:"Text"}),(0,i.jsx)("a",{className:"tab ".concat("embed"===e?"tab-active":""),onClick:()=>t("embed"),children:"Interactive"})]}),(0,i.jsx)("section",{className:"mb-16",children:(0,i.jsx)("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-4",children:r.map(e=>(0,i.jsxs)("div",{className:"card shadow-xl ".concat(m(e.type)),onClick:()=>d(e),children:[(0,i.jsxs)("figure",{className:"px-10 pt-10",children:["image"===e.type&&(0,i.jsx)(l(),{src:e.content,alt:e.title,width:400,height:300,objectFit:"cover",className:"rounded-xl"}),"video"===e.type&&(0,i.jsx)("video",{src:e.content,className:"h-64 w-full object-cover rounded-xl",muted:!0,loop:!0,playsInline:!0}),"audio"===e.type&&(0,i.jsx)("div",{className:"flex h-64 items-center justify-center bg-base-300 rounded-xl",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"})})}),"text"===e.type&&(0,i.jsx)("div",{className:"flex h-64 items-center justify-center bg-base-300 rounded-xl p-4",children:(0,i.jsx)("p",{className:"text-center line-clamp-5",children:e.content})}),"embed"===e.type&&(0,i.jsx)("div",{className:"flex h-64 items-center justify-center bg-base-300 rounded-xl",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]}),(0,i.jsxs)("div",{className:"card-body text-left space-y-4",children:[" ",(0,i.jsx)("p",{className:"text-sm text-gray-500",children:e.date})," ",(0,i.jsx)("h2",{className:"card-title",children:e.title}),(0,i.jsx)("p",{children:e.description}),(0,i.jsxs)("p",{className:"text-sm text-gray-500",children:["Tools: ",e.tool]})]})]},e.id))})})]}),(0,i.jsx)("footer",{className:"footer footer-center p-4 bg-base-300 text-base-content",children:(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"\xa9 2023 John Doe. All rights reserved."})})}),a&&(0,i.jsx)("div",{className:"modal modal-open",children:(0,i.jsxs)("div",{className:"modal-box",children:["image"===a.type&&(0,i.jsx)(l(),{src:a.content,alt:a.title,width:800,height:600,objectFit:"contain"}),"video"===a.type&&(0,i.jsx)("video",{src:a.content,controls:!0,className:"w-full"}),"audio"===a.type&&(0,i.jsx)("audio",{src:a.content,controls:!0,className:"w-full"}),"text"===a.type&&(0,i.jsx)("div",{className:"max-h-96 overflow-y-auto",children:(0,i.jsx)("p",{children:a.content})}),"embed"===a.type&&(0,i.jsx)("iframe",{src:a.content,className:"w-full h-96",title:a.title}),(0,i.jsx)("h3",{className:"font-bold text-lg mt-4",children:a.title}),(0,i.jsx)("p",{className:"py-4",children:a.description}),(0,i.jsx)("div",{className:"modal-action",children:(0,i.jsx)("button",{className:"btn",onClick:()=>{s(null)},children:"Close"})})]})})]})}}},function(e){e.O(0,[959,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);