(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{67737:function(e,t,n){var i={"./en.json":[82724,724],"./uk.json":[6583,583]};function r(e){if(!n.o(i,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=i[e],r=t[0];return n.e(t[1]).then(function(){return n.t(r,19)})}r.keys=function(){return Object.keys(i)},r.id=67737,e.exports=r},74933:function(e,t,n){"use strict";n.d(t,{Logo:function(){return a}});var i=n(57437),r=n(43447),o=n(204);function a(e){let{className:t=""}=e;return(0,i.jsx)(r.default,{direction:"right",offset:20,duration:1e3,fadeDuration:400,children:(0,i.jsx)(o.rU,{href:"/",children:(0,i.jsx)("img",{src:"/images/commons/digiuni.svg",alt:"DigiUni",className:t+" w-[15dvw]\n                    max-xs:!w-[44dvw]\n                    max-md:!w-[26dvw]\n                    max-lg:w-[23dvw]\n                    xl:w-[13dvw]\n                    3xl:w-[9dvw]\n                "})})},new Date().toString())}},73105:function(e,t,n){"use strict";n.d(t,{he:function(){return a},k1:function(){return o}});var i=n(16463),r=n(65051);let o=Object.freeze(["uk","en"]),a=Object.freeze({en:"ENG",uk:"УКР"});(0,r.cF)(async e=>{let{locale:t}=e;return o.includes(t)||(0,i.notFound)(),{messages:(await n(67737)("./".concat(t,".json"))).default}})},204:function(e,t,n){"use strict";n.d(t,{jD:function(){return l},rU:function(){return o},tv:function(){return s}});var i=n(5758),r=n(73105);let{Link:o,redirect:a,usePathname:l,useRouter:s}=(0,i.iV)({locales:r.k1})},28449:function(e,t,n){"use strict";n.d(t,{Nr:function(){return a},ll:function(){return l}});var i=n(37061),r=n(46011);let o="IBM Plex Serif",a="IBM Plex Mono",l="Inter",s=i.gray.darkest,c={palette:i,typography:{h1:{fontFamily:o,fontSize:"9dvw",fontWeight:600,lineHeight:1.2,whiteSpace:"pre-wrap",letterSpacing:"-0.02rem",["@media (min-width: ".concat(r.sm,")")]:{fontSize:36},["@media (min-width: ".concat(r.md,")")]:{fontSize:46},["@media (min-width: ".concat(r.lg,")")]:{fontSize:49},color:s},h2:{fontFamily:o,fontSize:30,fontWeight:500,lineHeight:1.3,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem",["@media (min-width: ".concat(r.sm,")")]:{fontSize:32},["@media (m-width: ".concat(r.md,")")]:{fontSize:34},["@media (min-width: ".concat(r.lg,")")]:{fontSize:36},color:s},h3:{fontFamily:o,fontSize:22,fontWeight:500,lineHeight:1.3,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem",["@media (min-width: ".concat(r.lg,")")]:{fontSize:32},color:s},h4:{fontFamily:o,fontSize:24,fontWeight:500,lineHeight:1.4,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem",color:s},h5:{fontFamily:o,fontSize:20,fontWeight:500,lineHeight:1.4,whiteSpace:"pre-wrap",letterSpacing:"-0.03rem",color:s},h6:{fontFamily:o,fontSize:16,fontWeight:500,lineHeight:1.1,whiteSpace:"pre-wrap",letterSpacing:0,color:s},body1:{fontFamily:a,lineHeight:1.5,fontSize:18,fontWeight:400,whiteSpace:"pre-wrap",letterSpacing:"-0.03rem"},body2:{fontFamily:l,lineHeight:1.5,fontSize:16,whiteSpace:"pre-wrap",letterSpacing:"-0.03rem",color:s},caption:{fontFamily:a,fontSize:14,whiteSpace:"pre-wrap",lineHeight:1.1,letterSpacing:"-0.03rem",color:s}},components:{MuiButton:{styleOverrides:{root:{fontFamily:l,borderRadius:Number.MAX_VALUE,padding:"14px 32px 14px 32px",textTransform:"capitalize","&:not(.MuiButton-colorError)":{color:(16777215^Number("0x1".concat(i.primary.main))).toString(16).substring(1).toUpperCase()}}}},MuiFormLabel:{styleOverrides:{root:{fontFamily:l,fontSize:16,lineHeight:1.4,color:"black","&:not(.MuiInputLabel-outlined)":{"&.MuiFormLabel-filled":{display:"none"}}}}},MuiInputBase:{styleOverrides:{root:{fontFamily:l,fontSize:16,lineHeight:1.4,letterSpacing:"0 !important",color:"black","&:not(.MuiOutlinedInput-root)":{marginTop:"0 !important",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"calc(0.5rem + 0.4dvw)","&::after":{borderColor:i.blue+" !important",borderBottomWidth:"1px !important"},"&:hover::before":{borderColor:i.blue+" !important",borderBottomWidth:"1px !important"},"& *":{padding:"0 !important"},["@media (max-width: ".concat(r.xs,")")]:{paddingLeft:"0.5rem",paddingRight:"0.5rem"}}},multiline:{"&:not(.MuiOutlinedInput-root)":{paddingBottom:"calc(0.5rem + 0.4dvw + 10px)",height:"auto"}}}},MuiFormControl:{styleOverrides:{root:{"&:not(.MuiOutlinedInput-root)":{paddingTop:"0"},lineHeight:"1.42857",letterSpacing:"normal","& *":{lineHeight:"1.42857",letterSpacing:"normal"}}}},MuiInputLabel:{styleOverrides:{fontSize:"22px !important",asterisk:{display:"none"},root:{display:"inline-block","&.Mui-focused":{"&::after":{opacity:0,width:0}},"&.Mui-required":{"&::after":{opacity:0,width:0}},"&:not(.MuiInputLabel-outlined)":{"&::after":{content:"'(optional)'",marginLeft:"0.5rem",transition:"opacity 0.25s ease-in-out, width 0s 0.25s ease-in-out"},transform:"translateY(1px)",letterSpacing:0,paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"calc(0.5rem + 0.4dvw)",["@media (max-width: ".concat(r.xs,")")]:{paddingLeft:"0.5rem",paddingRight:"0.5rem"}}}}}},breakpoints:{keys:Object.keys(r),values:{...Object.entries(r).map(e=>{let[t,n]=e;return{[t]:parseInt(n)}}).reduce((e,t)=>({...e,...t}),{})}}};t.ZP=c},43447:function(e,t,n){"use strict";n.r(t),n.d(t,{ChangeBg:function(){return d},default:function(){return c}});var i=n(57437),r=n(37169),o=n(95635),a=n(2265),l=n(17885),s=n(4776);function c(e){let{direction:t,children:n,className:c="",offset:d=30,duration:u=600,delay:m=0,grow:f=!1,fadeDuration:p,fadeDelay:h,disableReplayOnRefresh:g=!1}=e,w=(0,s.Z)().innerWidth;d instanceof l.Z&&(d=d.floor(w)),u instanceof l.Z&&(u=u.floor(w)),m instanceof l.Z&&(m=m.floor(w)),p instanceof l.Z&&(p=p.floor(w)),h instanceof l.Z&&(h=h.floor(w));let[x,S]=a.useState(!1),[y,v]=a.useState(null!=p?p:u);return(0,a.useEffect)(()=>{function e(){S(!0)}return"complete"===window.document.readyState&&e(),window.addEventListener("load",e),()=>window.removeEventListener("load",e)},[]),(0,i.jsx)(i.Fragment,{children:x&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{className:{left:"animate-slide-left",right:"animate-slide-right",up:"animate-slide-up",down:"animate-slide-down"}[t]+" "+c,style:{animationDuration:"".concat(u,"ms"),animationDelay:"".concat(m,"ms"),"--translate-offset":"string"==typeof d?d:d+"px"},children:(0,i.jsx)(r.Z,{className:"w-full h-full "+(f?"animate-grow":""),children:(0,i.jsx)(o.Z,{in:!0,timeout:y,easing:"linear",style:{transitionDelay:"".concat(null!=h?h:m,"ms")},addEndListener:()=>{g&&v(0)},children:n})},new Date().toString())},g?void 0:new Date().toString())})})}function d(e){let{children:t,className:n="",duration:o=500,delay:l=0}=e,[s,c]=a.useState(!1);return(0,a.useEffect)(()=>{function e(){c(!0)}return"complete"===window.document.readyState&&e(),window.addEventListener("load",e),()=>window.removeEventListener("load",e)},[]),s?(0,i.jsx)(r.Z,{className:"animate-change-bg "+n,style:{animationDuration:"".concat(o,"ms"),animationDelay:"".concat(l,"ms")},children:t}):(0,i.jsx)(r.Z,{className:n+" h-dvh"})}},81358:function(e,t,n){"use strict";n.d(t,{default:function(){return d}});var i=n(57437),r=n(32529),o=n(83719),a=n(204),l=n(73105),s=n(18087),c=n(43447);function d(e){let{color:t,animate:n=!1}=e,d=(0,s.useLocale)(),u=(0,a.jD)();return(0,i.jsx)(c.default,{direction:"left",duration:n?300:0,delay:n?800:0,offset:0,children:(0,i.jsx)(r.Z,{direction:"row",className:"gap-[21px] h-8   max-xs:!gap-[4dvw]   max-lg:gap-[3dvw]   ",children:l.k1.map(e=>(0,i.jsx)(a.rU,{href:u,locale:e,className:"h-full flex items-center",children:(0,i.jsx)(o.Z,{color:e===d?null!=t?t:"primary":"#62626a",variant:"body1",fontSize:"1rem",lineHeight:1.5,fontWeight:500,letterSpacing:"-0.01rem",className:"transition-colors delay-100 duration-200",children:l.he[e]})},e))})})}},74718:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(57437),r=n(94127),o=n(18087),a=n(37169),l=n(32529),s=n(95635),c=n(83719),d=n(204),u=n(28449),m=n(43447);function f(e){let{exclude:t=[],fontWeight:n=500,fontSize:f=18,className:p="",containerClassName:h="",showCurrent:g=!0,linkContainerClassname:w="",tight:x=!1}=e,S=(0,o.useTranslations)("nav"),y=(0,d.jD)();return(0,i.jsx)(a.Z,{component:"nav",children:(0,i.jsx)(l.Z,{component:"ul",className:h+" justify-between items-end flex-nowrap",children:Object.entries(r).filter(e=>!t.includes(e[0])).map((e,t)=>(0,i.jsxs)(l.Z,{className:w+" w-fit h-fit items-center gap-6",direction:"row",component:"li",children:[(2===y.split("/").length?y===e[1]:"/"!==e[1]&&y.startsWith(e[1]))&&g?(0,i.jsx)(s.Z,{in:!0,timeout:500,easing:"ease-out",style:{transitionDelay:"".concat(200*t,"ms")},children:(0,i.jsxs)("svg",{width:"27",height:"14",viewBox:"0 0 220 82",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M220 35V47H208V58H196V46H0V36H196V24H208V35H220Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M196 12H184V24H196V12Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M184 0H172V12H184V0Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M196 58H184V70H196V58Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M184 70H172V82H184V70Z",fill:"currentColor"})]})},new Date().toString()):(0,i.jsx)(a.Z,{className:x?"hidden":"w-[27px] h-[14px]"}),(0,i.jsx)(m.default,{direction:"left",duration:1e3,delay:100*t,offset:20,className:x?void 0:"h-8",children:(0,i.jsx)(d.rU,{href:e[1],className:"h-full flex items-center",onClick:t=>{e[1]===y&&t.preventDefault()},children:(0,i.jsx)(c.Z,{variant:"h6",fontSize:f,fontWeight:n,letterSpacing:"-0.32px",fontFamily:u.Nr,className:"".concat(p," text-black"),children:S(e[0])})})},t)]},t))})})}},45900:function(e,t,n){"use strict";n.d(t,{q$:function(){return a},u7:function(){return o},zG:function(){return r}});var i=n(57437);function r(e){let{className:t=""}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/images/commons/secondary-tiles.png",alt:"Secondary tiles",className:t+" w-full hidden xs:block"}),(0,i.jsx)("img",{src:"/images/commons/secondary-tiles-xs.jpg",alt:"Secondary tiles",className:t+" w-full xs:hidden"})]})}function o(e){let{className:t=""}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/images/commons/bw-tiles.png",alt:"Black and white tiles",className:t+" w-full hidden xs:block"}),(0,i.jsx)("img",{src:"/images/commons/bw-tiles-xs.jpg",alt:"Black and white tiles",className:t+" w-full xs:hidden"})]})}function a(e){let{className:t=""}=e;return(0,i.jsx)("img",{src:"/images/commons/secondary-to-black-tiles.jpg",alt:"Secondary to black tiles",className:t+" w-full"})}},4776:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(2265);function r(){let[e,t]=(0,i.useState)({innerWidth:0,innerHeight:0});return(0,i.useEffect)(()=>{function e(){t({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}},17885:function(e,t){"use strict";class n{floor(e){var t;let n=null===(t=Object.entries(this).toSorted((e,t)=>parseInt(t[0])-parseInt(e[0])).find(t=>{let[n]=t;return e>=parseInt(n)}))||void 0===t?void 0:t[1];if(void 0===n)throw Error("No breakpoint found for value ".concat(e));return n}constructor(e){Object.assign(this,e)}}t.Z=n},37061:function(e){"use strict";e.exports=JSON.parse('{"primary":{"main":"#000000"},"secondary":{"main":"#FEFFE6"},"info":{"main":"#D5DAFF"},"button":{"hover-primary":"#2B48FF","hover-secondary":"white"},"gray":{"darkest":"#16161D","darker":"#62626A","default":"#AAAAAD","light":"#F7F7F7"},"blue":"#2B48FF"}')},94127:function(e){"use strict";e.exports=JSON.parse('{"main":"/","about":"/about","news":"/news","contacts":"/contacts"}')},46011:function(e){"use strict";e.exports=JSON.parse('{"xs":"480px","sm":"640px","md":"768px","lg":"991px","xl":"1280px","2xl":"1440px","3xl":"1920px","4xl":"2560px"}')}}]);