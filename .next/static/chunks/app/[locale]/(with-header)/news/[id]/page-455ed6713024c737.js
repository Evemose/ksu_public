(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{58175:function(e,t,n){Promise.resolve().then(n.bind(n,65205)),Promise.resolve().then(n.bind(n,43447)),Promise.resolve().then(n.bind(n,25335)),Promise.resolve().then(n.bind(n,92432)),Promise.resolve().then(n.bind(n,29601)),Promise.resolve().then(n.bind(n,54779)),Promise.resolve().then(n.bind(n,25218)),Promise.resolve().then(n.bind(n,5415)),Promise.resolve().then(n.bind(n,82591)),Promise.resolve().then(n.bind(n,34327))},92432:function(e,t,n){"use strict";n.d(t,{Gallery:function(){return u}});var a=n(57437),s=n(32529),l=n(94614),r=n(37169),i=n(64593),o=n(2265),c={src:"/_next/static/media/arrow-gallery.0a90068b.svg",height:23,width:27,blurWidth:0,blurHeight:0},d=n(66648),m=n(4776);let x={766:2,1440:3,1780:4,[Number.MAX_SAFE_INTEGER]:5};function u(e){var t;let{images:n}=e,[i,u]=o.useState(0),w=(0,m.Z)().innerWidth,[v,p]=(0,o.useState)(Object.entries(x).toSorted((e,t)=>{let[n]=e,[a]=t;return parseInt(n)-parseInt(a)}).find(e=>{let[t]=e;return parseInt(t)>w})[1]),[f,g]=(0,o.useState)(Array.from({length:Math.min(v,n.length)}).map((e,t)=>t)),[j,b]=(0,o.useState)(!1),y=o.useRef(null),N=o.useRef(null),Z=o.useRef(null),S=o.useRef(n.map(()=>o.useRef())),[k,E]=(0,o.useState)(!1);function P(){u((i-1+n.length)%n.length),f.length!==n.length&&i===f[0]&&g(e=>[((e=e.toSpliced(-1,1))[0]-1+n.length)%n.length,...e])}function L(){u((i+1)%n.length),f.length!==n.length&&i===f[f.length-1]&&g(e=>[...e=e.toSpliced(0,1),(e[e.length-1]+1+n.length)%n.length])}return((0,o.useEffect)(()=>{p(Object.entries(x).toSorted((e,t)=>{let[n]=e,[a]=t;return parseInt(n)-parseInt(a)}).find(e=>{let[t]=e;return parseInt(t)>w})[1])},[w]),(0,o.useEffect)(()=>{let e=v-f.length;e>0?f[f.length-1]+e<n.length?g(t=>[...t,...Array.from({length:e}).map((e,n)=>t[t.length-1]+n+1)]):f[f.length-1]-e>=0?g(t=>[...Array.from({length:e}).map((e,a)=>(t[t.length-1]-t.length-a-1)%n.length),...t]):g(Array.from({length:n.length}).map((e,t)=>t)):g(t=>t.toSpliced(t.length+e,-e))},[v]),(0,o.useEffect)(()=>{var e;null===(e=N.current)||void 0===e||e.style.setProperty("max-height","".concat(9*y.current.clientWidth/16,"px"))},[null===(t=y.current)||void 0===t?void 0:t.clientWidth,k]),0===n.length)?null:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.Z,{className:"w-full items-center gap-[2dvw] mt-[4dvw]   max-xs:gap-[4dvw]   3xl:mb-[6dvw] 3xl:gap-[1dvw]   ",ref:y,children:[(0,a.jsx)("button",{onClick:()=>b(!0),className:"w-full flex justify-center",children:(0,a.jsx)("img",{src:n[i].image,alt:n[i].alt,height:"100%",ref:N})}),(0,a.jsxs)(s.Z,{className:"items-center relative",direction:"row",ref:Z,children:[n.map((e,t)=>(0,a.jsx)("img",{src:e.image,alt:e.alt,width:0,height:0},t)),(0,a.jsx)(s.Z,{className:"px-[2dvw] aspect-square justify-center   xl:px-[1.5dvw]   2xl:px-[1dvw]   ",children:(0,a.jsx)(l.Z,{onClick:P,className:"relative",children:(0,a.jsx)(d.default,{src:c,alt:"arrow-left",width:16,className:"object-contain"})})}),(0,a.jsx)(s.Z,{direction:"row",className:"gap-[2dvw] overflow-x-hidden   xl:gap-[1.5dvw]   2xl:gap-[1dvw]   3xl:gap-[0.7dvw]   ",children:f.map((e,t)=>(0,a.jsx)(r.Z,{sx:{opacity:e===i?1:.5},className:"hover:cursor-pointer shrink-0",ref:S.current[e],children:(0,a.jsx)("img",{src:n[e].image,alt:n[e].alt,onClick:()=>u(e),height:"5dvw",className:"w-auto h-[7dvw]   max-xs:!h-[13dvw]   max-lg:h-[8dvw]   xl:h-[6dvw]   2xl:h-[5dvw]   3xl:h-[4dvw]   ",onLoad:()=>E(e=>!e)})},t))}),(0,a.jsx)(s.Z,{className:"px-[2dvw] aspect-square justify-center   xl:px-[1.5dvw]   2xl:px-[1dvw]   ",children:(0,a.jsx)(l.Z,{onClick:L,className:"relative",children:(0,a.jsx)(d.default,{src:c,alt:"arrow-right",width:16,className:" object-contain scale-x-[-1]"})})})]})]}),(0,a.jsx)(h,{selectNext:L,selectPrevious:P,image:n[i].image,open:j,close:()=>b(!1)})]})}function h(e){let{selectNext:t,selectPrevious:n,image:r,open:o,close:m}=e;return(0,a.jsx)(i.Z,{className:"z-[5000]",open:o,onClick:m,children:(0,a.jsxs)(s.Z,{direction:"row",className:"items-center justify-between p-[3dvw] xs:px-[5dvw] md:px-[10dvw]",children:[(0,a.jsx)(l.Z,{onClick:e=>{e.stopPropagation(),n()},className:"relative p-[3dvw] max-xs:hidden",children:(0,a.jsx)(d.default,{src:c,alt:"arrow-left",width:128,className:"object-contain   max-lg:w-16   "})}),(0,a.jsx)("img",{src:r,alt:"selected gallery image",className:"w-[50dvw] max-xs:!w-full"}),(0,a.jsx)(l.Z,{onClick:e=>{e.stopPropagation(),t()},className:"relative p-[3dvw] max-xs:hidden",children:(0,a.jsx)(d.default,{src:c,alt:"arrow-right",width:128,className:" object-contain scale-x-[-1]      max-lg:w-16   "})})]})})}},29601:function(e,t,n){"use strict";n.d(t,{Share:function(){return o}});var a=n(57437),s=n(32529),l=n(83719),r=n(75764),i=n(18087);function o(){let e=(0,i.useTranslations)("news");return(0,a.jsxs)(s.Z,{className:"py-[2.5dvw] mb-[2.5dvw] px-[3dvw] justify-between xs:!bg-themed-light-gray   max-xs:gap-[22px] max-xs:py-[6dvw]   max-md:mt-[12dvw]   max-lg:!px-0   3xl:p-[2dvw] 3xl:mb-[2dvw]   ",direction:"row",children:[(0,a.jsxs)(l.Z,{variant:"h5",letterSpacing:"-0.01rem",lineHeight:1.4,children:[e("share"),":"]}),(0,a.jsxs)(s.Z,{className:"gap-[2dvw] justify-start   max-xs:gap-[7dvw]   3xl:gap-[1dvw]   ",direction:"row",children:[(0,a.jsx)(r.B,{url:window.location.href,children:(0,a.jsx)("img",{src:"/images/commons/X.svg",alt:"X",className:"transition-opacity duration-200 hover:opacity-[0.8]"})}),(0,a.jsx)(r.Dk,{url:window.location.href,children:(0,a.jsx)("img",{src:"/images/commons/facebook-2.svg",alt:"X",className:"transition-opacity duration-200 hover:opacity-[0.8]"})})]})]})}},54779:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var a=n(57437),s=n(32529),l=n(83719),r=n(79706),i=n(50450),o=n(5864),c=n(62409),d=n(18087),m=n(28449),x=n(37061);function u(){let e=(0,d.useTranslations)("news.subscribeForm");return(0,a.jsxs)(c.Z,{formProps:{bgcolor:"secondary.main",className:"w-full md:!flex-row my-[12dvw] px-[4.5dvw] p-[5dvw] translate-y-[-2dvw] justify-between\n            max-xs:pt-[20dvw] max-xs:pb-[24dvw] max-xs:px-[5dvw] max-xs:!mb-0\n            max-md:gap-[7dvw]\n            xl:mt-[8dvw] xl:max-w-[80dvw] xl:py-[5dvw]\n            2xl:mb-[10dvw] 2xl:px-[6dvw] 2xl:py-[5dvw]\n            3xl:my-[7dvw] 3xl:px-[5dvw] 3xl:py-[4dvw]\n            "},onSubmit:async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),a=await (0,o.v_)("/subscribers",Object.fromEntries(n));if(!a.ok)throw c.T.ofProblemDetails(await a.json());t.reset()},messageOverrides:{success:e("success")},children:[(0,a.jsxs)(s.Z,{className:"gap-6 w-full   xl:max-w-[35dvw]   2xl:max-w-[30dvw]   3xl:max-w-[22dvw]   ",children:[(0,a.jsx)(l.Z,{variant:"h2",lineHeight:1.2,className:"max-md:max-w-[90%]",children:e("wantToBeUpdated")}),(0,a.jsx)(l.Z,{variant:"body2",className:"max-md:max-w-[60dvw] max-xs:!max-w-none",children:e("subscribeToNews")})]}),(0,a.jsxs)(s.Z,{className:"w-full max-w-[30dvw] mb-[15px]   max-md:!max-w-none   3xl:max-w-[21dvw]   ",children:[(0,a.jsx)(r.Z,{label:e("email"),variant:"standard",fullWidth:!0,type:"email",name:"email",className:"max-xs:!mt-[4dvw]",required:!0,inputProps:{style:{fontSize:"1rem",lineHeight:"1.5",fontFamily:"IBM Plex Mono !important"}},sx:{"& > *":{paddingLeft:"0 !important",paddingRight:"0 !important",fontFamily:m.Nr+" !important"}}}),(0,a.jsx)(l.Z,{variant:"caption",lineHeight:"20px",className:"!tracking-normal   max-xs:!pt-[4dvw] max-xs:!max-w-none   max-md:pt-[2dvw] max-md:max-w-[60dvw]   3xl:py-[1dvw]   ",color:x.gray.darker,fontFamily:m.ll,children:e("byClickingButton")}),(0,a.jsx)(i.K,{props:{className:"self-end w-full xs:w-auto h-14 mt-[3dvw] !px-[48px] gap-0 max-xs:!max-w-full\n                    max-xs:!mt-[12dvw]\n                    max-md:!mb-0\n                    max-lg:mt-[4dvw]\n                    2xl:mt-[2dvw]\n                    3xl:!px-8 3xl:py-[1dvw] 3xl:gap-4 3xl:mt-[1dvw]",type:"submit"},children:(0,a.jsx)(l.Z,{variant:"caption",className:"text-white",letterSpacing:0,children:e("subscribeButton")})})]})]})}},65205:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var a=n(57437),s=n(204),l=n(32529),r=n(83719),i=n(18087),o=n(43447);function c(e){let{className:t=""}=e,n=["main"].concat((0,s.jD)().split("/").slice(1,-1)),c=(0,i.useTranslations)("nav");return(0,a.jsx)(o.default,{direction:"up",offset:0,duration:400,delay:800,children:(0,a.jsx)(l.Z,{direction:"row",className:t+" backwards-nav text-themed-gray items-center\n                max-lg:h-[21px]\n                ",children:n.map((e,t)=>(0,a.jsx)(s.rU,{href:"/"+n.slice(0,t+1).map(e=>"main"===e?"":e).join("/"),className:"h-full flex items-center",children:(0,a.jsx)(r.Z,{variant:"caption",className:"hover:text-[#62626a]",lineHeight:1.5,letterSpacing:0,children:c(e)||e})},t))})})}},50450:function(e,t,n){"use strict";n.d(t,{K:function(){return l}});var a=n(57437),s=n(75519);function l(e){var t;let{children:n,disableArrow:l,props:r={}}=e;return(0,a.jsxs)(s.Z,{...r,className:"".concat(null!==(t=r.className)&&void 0!==t?t:""," !bg-button-primary \n                !capitalize hover:!bg-button-hover-primary \n                [&>*]:!text-white \n                !px-12 !h-14 gap-4 !py-0"),sx:{"&:hover > svg":{transform:"translateX(4px)"}},children:[n,!l&&(0,a.jsxs)("svg",{height:"14",viewBox:"0 0 28 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition-transform ease-linear duration-200",children:[(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.2931 7.00003L20.6465 12.6485L21.3537 13.3555L27.7071 7.00001L21.3537 0.644792L20.6465 1.3518L26.2931 7.00003Z",fill:"white"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 6.50024L27 6.50024L27 7.50024L8.74228e-08 7.50024L0 6.50024Z",fill:"white"})]})]})}},43447:function(e,t,n){"use strict";n.r(t),n.d(t,{ChangeBg:function(){return d},default:function(){return c}});var a=n(57437),s=n(37169),l=n(95635),r=n(2265),i=n(17885),o=n(4776);function c(e){let{direction:t,children:n,className:c="",offset:d=30,duration:m=600,delay:x=0,grow:u=!1,fadeDuration:h,fadeDelay:w,disableReplayOnRefresh:v=!1}=e,p=(0,o.Z)().innerWidth;d instanceof i.Z&&(d=d.floor(p)),m instanceof i.Z&&(m=m.floor(p)),x instanceof i.Z&&(x=x.floor(p)),h instanceof i.Z&&(h=h.floor(p)),w instanceof i.Z&&(w=w.floor(p));let[f,g]=r.useState(!1),[j,b]=r.useState(null!=h?h:m);return(0,r.useEffect)(()=>{function e(){g(!0)}return"complete"===window.document.readyState&&e(),window.addEventListener("load",e),()=>window.removeEventListener("load",e)},[]),(0,a.jsx)(a.Fragment,{children:f&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.Z,{className:{left:"animate-slide-left",right:"animate-slide-right",up:"animate-slide-up",down:"animate-slide-down"}[t]+" "+c,style:{animationDuration:"".concat(m,"ms"),animationDelay:"".concat(x,"ms"),"--translate-offset":"string"==typeof d?d:d+"px"},children:(0,a.jsx)(s.Z,{className:"w-full h-full "+(u?"animate-grow":""),children:(0,a.jsx)(l.Z,{in:!0,timeout:j,easing:"linear",style:{transitionDelay:"".concat(null!=w?w:x,"ms")},addEndListener:()=>{v&&b(0)},children:n})},new Date().toString())},v?void 0:new Date().toString())})})}function d(e){let{children:t,className:n="",duration:l=500,delay:i=0}=e,[o,c]=r.useState(!1);return(0,r.useEffect)(()=>{function e(){c(!0)}return"complete"===window.document.readyState&&e(),window.addEventListener("load",e),()=>window.removeEventListener("load",e)},[]),o?(0,a.jsx)(s.Z,{className:"animate-change-bg "+n,style:{animationDuration:"".concat(l,"ms"),animationDelay:"".concat(i,"ms")},children:t}):(0,a.jsx)(s.Z,{className:n+" h-dvh"})}},17885:function(e,t){"use strict";class n{floor(e){var t;let n=null===(t=Object.entries(this).toSorted((e,t)=>parseInt(t[0])-parseInt(e[0])).find(t=>{let[n]=t;return e>=parseInt(n)}))||void 0===t?void 0:t[1];if(void 0===n)throw Error("No breakpoint found for value ".concat(e));return n}constructor(e){Object.assign(this,e)}}t.Z=n}},function(e){e.O(0,[378,726,201,357,544,654,611,702,630,854,813,63,335,971,23,744],function(){return e(e.s=58175)}),_N_E=e.O()}]);