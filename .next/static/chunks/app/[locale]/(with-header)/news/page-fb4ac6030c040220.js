(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[952],{67737:function(e,t,n){var r={"./en.json":[82724,724],"./uk.json":[6583,583]};function i(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],i=t[0];return n.e(t[1]).then(function(){return n.t(i,19)})}i.keys=function(){return Object.keys(r)},i.id=67737,e.exports=i},26517:function(e,t,n){Promise.resolve().then(n.bind(n,65205)),Promise.resolve().then(n.bind(n,43447)),Promise.resolve().then(n.bind(n,40838)),Promise.resolve().then(n.bind(n,54779)),Promise.resolve().then(n.bind(n,52187)),Promise.resolve().then(n.bind(n,25218)),Promise.resolve().then(n.bind(n,5415)),Promise.resolve().then(n.bind(n,82591))},40838:function(e,t,n){"use strict";n.d(t,{default:function(){return Z}});var r=n(57437),i=n(2265);n(5864);class a{constructor(e,t,n,r,i){this.id=e,this.title=t,this.date=new Date(n),this.image=i,this.summary=r}}var o=n(37169),s=n(32529),l=n(83719),c=n(39581),d=n(60335);function u(e){let{date:t,format:n,textProps:i}=e;return n=n||{year:"numeric",month:"numeric",day:"numeric"},(0,r.jsx)("time",{dateTime:t.toString(),children:(0,r.jsx)(l.Z,{variant:"body1",fontSize:"14px",lineHeight:1.1,...i,className:(null==i?void 0:i.className)+" mt-[0.5dvw] !text-themed-darker-gray",children:new Intl.DateTimeFormat("en-GB",n).format(new Date(t))})})}var m=n(18087),p=n(62819),f=n(204),x=n(37061),h=n(43447),g=n(46011),w=n(16463),v=n(50450);function y(e){let{page:t}=e,n=function(e,t){let n=(0,m.useLocale)(),r=(0,p.X)("/publications/previews",{},{size:12,page:t-1,sort:"createdAt",desc:!0,language:n.toUpperCase(),type:"NEWS"});return r.error?(console.error(r.error),[]):r.data.map(e=>new a(e.id,e.title,e.createdAt,e.summary,e.image.image))}(0,t);return n.map(e=>(0,p.w)(e.image)),(0,r.jsx)(o.Z,{className:"gap-y-16 w-full gap-x-6 grid   max-xs:!gap-y-12   max-lg:gap-x-8   xl:gap-x-8   ",sx:{gridTemplateRows:"auto",gridTemplateColumns:"1fr 1fr 1fr",gridAutoColumns:"1fr",["@media (max-width: ".concat(g.lg,")")]:{gridTemplateColumns:"1fr 1fr"},["@media (max-width: ".concat(g.xs,")")]:{gridTemplateColumns:"1fr"}},children:n.map(e=>(0,r.jsx)(b,{news:e},e.id))})}function b(e){let{news:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f.rU,{href:"/news/".concat(t.id),className:"h-full block max-w-full",children:(0,r.jsxs)(s.Z,{className:"gap-[2dvw]   max-xs:!gap-[5dvw]   max-lg:gap-[3dvw]   xl:gap-[1.5dvw]   3xl:gap-[1dvw]   h-full",sx:{"&.MuiStack-root:hover .MuiTypography-h4":{color:x.blue}},children:[(0,r.jsx)(o.Z,{className:"aspect-video w-full relative flex items-center overflow-hidden",children:(0,r.jsx)("img",{src:t.image,alt:t.title,className:"object-cover",height:"100%"})}),(0,r.jsxs)(s.Z,{className:"gap-4   max-xs:!gap-[2dvw]   max-lg:gap-[1.5dvw]   ",children:[(0,r.jsx)(u,{date:t.date}),(0,r.jsx)(l.Z,{variant:"h4",fontSize:20,lineHeight:1.3,children:t.title})]})]})})})}function j(){return(0,r.jsx)(o.Z,{className:"gap-y-16 w-full gap-x-6 grid   max-xs:!gap-y-12   max-lg:gap-x-8   xl:gap-x-8   ",sx:{gridTemplateRows:"auto",gridTemplateColumns:"1fr 1fr 1fr",gridAutoColumns:"1fr",["@media (max-width: ".concat(g.lg,")")]:{gridTemplateColumns:"1fr 1fr"},["@media (max-width: ".concat(g.xs,")")]:{gridTemplateColumns:"1fr"}},children:Array.from({length:12},(e,t)=>(0,r.jsx)(S,{},t))})}function S(){return(0,r.jsxs)(s.Z,{className:"h-full block max-w-full",children:[(0,r.jsx)(c.Z,{variant:"rectangular",width:"100%",className:"!h-auto !aspect-video w-full"}),(0,r.jsxs)(s.Z,{className:"gap-4   max-xs:!gap-[2dvw]   max-lg:gap-[1.5dvw]   ",children:[(0,r.jsx)(c.Z,{variant:"text",width:"20%",className:"mt-10"}),(0,r.jsx)(c.Z,{variant:"text",width:"100%"})]})]})}function Z(){var e;let t=(0,w.useSearchParams)();return(0,r.jsx)(h.default,{direction:"up",className:"mt-[4dvw] mb-[7dvw]   max-lg:mt-[6dvw]   2xl:mt-[3dvw] 2xl:mb-[5dvw]   3xl:mb-[5dvw]   ",delay:200,duration:1e3,fadeDuration:400,offset:20,children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(j,{}),children:(0,r.jsx)(y,{page:parseInt(null!==(e=t.get("page"))&&void 0!==e?e:"1")})}),(0,r.jsx)(N,{})]})})}function N(){var e;let t=(0,w.useSearchParams)(),n=(0,m.useTranslations)("news"),i=parseInt(null!==(e=t.get("page"))&&void 0!==e?e:"1"),a=Array.from({length:3},(e,t)=>t+i);return 1===i?(a.push(4),a.push(5)):2===i?(a.splice(0,0,1),a.push(5)):(a.splice(0,0,i-1),a.splice(0,0,i-2)),console.log(a),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("hr",{className:"mt-[6dvw] mb-[2dvw] h-px w-full bg-themed-gray border-0   max-xs:!mt-[14dvw] max-xs:!mb-[6dvw]   max-md:mt-[8dvw] max-md:mb-[4dvw]   3xl:mt-[4dvw]   "}),(0,r.jsxs)(s.Z,{direction:"row",className:"justify-between gap-[0.2rem] w-full items-center",children:[(0,r.jsx)(k,{page:i-1,disabled:1===i,direction:"left",text:n("previous")}),(0,r.jsx)(s.Z,{direction:"row",className:"w-fit gap-[0.2rem]",children:a.map(e=>(0,r.jsx)(d.Z,{className:"w-10 h-10 !p-0 "+(e===i?"bg-black [&>a>p]:!text-white":""),disableRipple:e===i,children:(0,r.jsx)(f.rU,{href:"/news?page=".concat(e),className:"text-black hover:text-blue !p-2 ".concat(e===i?"pointer-events-none":""),children:(0,r.jsx)(l.Z,{variant:"body1",fontSize:14,fontWeight:500,children:e})},e)},e))}),(0,r.jsx)(k,{page:i+1,disabled:!1,direction:"right",text:n("next")})]})]})}function k(e){let{page:t,disabled:n,direction:i,text:a}=e;return(0,r.jsx)(f.rU,{href:"/news?page=".concat(t),className:"\n        text-black hover:text-blue py-4\n        ".concat(n?"pointer-events-none":"","\n        "),children:(0,r.jsx)(v.F,{direction:i,disabled:n,children:(0,r.jsx)(l.Z,{variant:"body1",fontSize:14,className:"h-fit !-tracking-[0.02rem] hidden   lg:block   ",children:a})})})}},54779:function(e,t,n){"use strict";n.d(t,{default:function(){return p}});var r=n(57437),i=n(32529),a=n(83719),o=n(79706),s=n(50450),l=n(5864),c=n(62409),d=n(18087),u=n(28449),m=n(37061);function p(){let e=(0,d.useTranslations)("news.subscribeForm");return(0,r.jsxs)(c.Z,{formProps:{bgcolor:"secondary.main",className:"w-full md:!flex-row my-[12dvw] px-[4.5dvw] p-[5dvw] translate-y-[-2dvw] justify-between\n            max-xs:pt-[20dvw] max-xs:pb-[24dvw] max-xs:px-[5dvw] max-xs:!mb-0\n            max-md:gap-[7dvw]\n            xl:mt-[8dvw] xl:max-w-[80dvw] xl:py-[5dvw]\n            2xl:mb-[10dvw] 2xl:px-[6dvw] 2xl:py-[5dvw]\n            3xl:my-[7dvw] 3xl:px-[5dvw] 3xl:py-[4dvw]\n            "},onSubmit:async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=await (0,l.v_)("/subscribers",Object.fromEntries(n));if(!r.ok)throw c.T.ofProblemDetails(await r.json());t.reset()},messageOverrides:{success:e("success")},children:[(0,r.jsxs)(i.Z,{className:"gap-6 w-full   xl:max-w-[35dvw]   2xl:max-w-[30dvw]   3xl:max-w-[22dvw]   ",children:[(0,r.jsx)(a.Z,{variant:"h2",lineHeight:1.2,className:"max-md:max-w-[90%]",children:e("wantToBeUpdated")}),(0,r.jsx)(a.Z,{variant:"body2",className:"max-md:max-w-[60dvw] max-xs:!max-w-none",children:e("subscribeToNews")})]}),(0,r.jsxs)(i.Z,{className:"w-full max-w-[30dvw] mb-[15px]   max-md:!max-w-none   3xl:max-w-[21dvw]   ",children:[(0,r.jsx)(o.Z,{label:e("email"),variant:"standard",fullWidth:!0,type:"email",name:"email",className:"max-xs:!mt-[4dvw]",required:!0,inputProps:{style:{fontSize:"1rem",lineHeight:"1.5",fontFamily:"IBM Plex Mono !important"}},sx:{"& > *":{paddingLeft:"0 !important",paddingRight:"0 !important",fontFamily:u.Nr+" !important"}}}),(0,r.jsx)(a.Z,{variant:"caption",lineHeight:"20px",className:"!tracking-normal   max-xs:!pt-[4dvw] max-xs:!max-w-none   max-md:pt-[2dvw] max-md:max-w-[60dvw]   3xl:py-[1dvw]   ",color:m.gray.darker,fontFamily:u.ll,children:e("byClickingButton")}),(0,r.jsx)(s.K,{props:{className:"self-end w-full xs:w-auto h-14 mt-[3dvw] !px-[48px] gap-0 max-xs:!max-w-full\n                    max-xs:!mt-[12dvw]\n                    max-md:!mb-0\n                    max-lg:mt-[4dvw]\n                    2xl:mt-[2dvw]\n                    3xl:!px-8 3xl:py-[1dvw] 3xl:gap-4 3xl:mt-[1dvw]",type:"submit"},children:(0,r.jsx)(a.Z,{variant:"caption",className:"text-white",letterSpacing:0,children:e("subscribeButton")})})]})]})}},73105:function(e,t,n){"use strict";n.d(t,{he:function(){return o},k1:function(){return a}});var r=n(16463),i=n(65051);let a=Object.freeze(["uk","en"]),o=Object.freeze({en:"ENG",uk:"УКР"});(0,i.cF)(async e=>{let{locale:t}=e;return a.includes(t)||(0,r.notFound)(),{messages:(await n(67737)("./".concat(t,".json"))).default}})},204:function(e,t,n){"use strict";n.d(t,{jD:function(){return s},rU:function(){return a},tv:function(){return l}});var r=n(5758),i=n(73105);let{Link:a,redirect:o,usePathname:s,useRouter:l}=(0,r.iV)({locales:i.k1})},28449:function(e,t,n){"use strict";n.d(t,{Nr:function(){return o},ll:function(){return s}});var r=n(37061),i=n(46011);let a="IBM Plex Serif",o="IBM Plex Mono",s="Inter",l=r.gray.darkest,c={palette:r,typography:{h1:{fontFamily:a,fontSize:"9dvw",fontWeight:600,lineHeight:1.2,whiteSpace:"pre-wrap",letterSpacing:"-0.02rem",["@media (min-width: ".concat(i.sm,")")]:{fontSize:36},["@media (min-width: ".concat(i.md,")")]:{fontSize:46},["@media (min-width: ".concat(i.lg,")")]:{fontSize:49},color:l},h2:{fontFamily:a,fontSize:30,fontWeight:500,lineHeight:1.3,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem",["@media (min-width: ".concat(i.sm,")")]:{fontSize:32},["@media (m-width: ".concat(i.md,")")]:{fontSize:34},["@media (min-width: ".concat(i.lg,")")]:{fontSize:36},color:l},h3:{fontFamily:a,fontSize:22,fontWeight:500,lineHeight:1.3,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem",["@media (min-width: ".concat(i.lg,")")]:{fontSize:32},color:l},h4:{fontFamily:a,fontSize:24,fontWeight:500,lineHeight:1.4,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem",color:l},h5:{fontFamily:a,fontSize:20,fontWeight:500,lineHeight:1.4,whiteSpace:"pre-wrap",letterSpacing:"-0.03rem",color:l},h6:{fontFamily:a,fontSize:16,fontWeight:500,lineHeight:1.1,whiteSpace:"pre-wrap",letterSpacing:0,color:l},body1:{fontFamily:o,lineHeight:1.5,fontSize:18,fontWeight:400,whiteSpace:"pre-wrap",letterSpacing:"-0.03rem"},body2:{fontFamily:s,lineHeight:1.5,fontSize:16,whiteSpace:"pre-wrap",letterSpacing:"-0.03rem",color:l},caption:{fontFamily:o,fontSize:14,whiteSpace:"pre-wrap",lineHeight:1.1,letterSpacing:"-0.03rem",color:l}},components:{MuiButton:{styleOverrides:{root:{fontFamily:s,borderRadius:Number.MAX_VALUE,padding:"14px 32px 14px 32px",textTransform:"capitalize",color:(16777215^Number("0x1".concat(r.primary.main))).toString(16).substring(1).toUpperCase()}}},MuiFormLabel:{styleOverrides:{root:{fontFamily:s,fontSize:16,lineHeight:1.4,color:"black","&:not(.MuiInputLabel-outlined)":{"&.MuiFormLabel-filled":{display:"none"}}}}},MuiInputBase:{styleOverrides:{root:{fontFamily:s,fontSize:16,lineHeight:1.4,letterSpacing:"0 !important",color:"black","&:not(.MuiOutlinedInput-root)":{marginTop:"0 !important",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"calc(0.5rem + 0.4dvw)","&::after":{borderColor:r.blue+" !important",borderBottomWidth:"1px !important"},"&:hover::before":{borderColor:r.blue+" !important",borderBottomWidth:"1px !important"},"& *":{padding:"0 !important"},["@media (max-width: ".concat(i.xs,")")]:{paddingLeft:"0.5rem",paddingRight:"0.5rem"}}},multiline:{"&:not(.MuiOutlinedInput-root)":{paddingBottom:"calc(0.5rem + 0.4dvw + 10px)",height:"auto"}}}},MuiFormControl:{styleOverrides:{root:{"&:not(.MuiOutlinedInput-root)":{paddingTop:"0"},lineHeight:"1.42857",letterSpacing:"normal","& *":{lineHeight:"1.42857",letterSpacing:"normal"}}}},MuiInputLabel:{styleOverrides:{fontSize:"22px !important",asterisk:{display:"none"},root:{display:"inline-block","&.Mui-focused":{"&::after":{opacity:0,width:0}},"&.Mui-required":{"&::after":{opacity:0,width:0}},"&:not(.MuiInputLabel-outlined)":{"&::after":{content:"'(optional)'",marginLeft:"0.5rem",transition:"opacity 0.25s ease-in-out, width 0s 0.25s ease-in-out"},transform:"translateY(1px)",letterSpacing:0,paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"calc(0.5rem + 0.4dvw)",["@media (max-width: ".concat(i.xs,")")]:{paddingLeft:"0.5rem",paddingRight:"0.5rem"}}}}}},breakpoints:{keys:Object.keys(i),values:{...Object.entries(i).map(e=>{let[t,n]=e;return{[t]:parseInt(n)}}).reduce((e,t)=>({...e,...t}),{})}}};t.ZP=c},65205:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var r=n(57437),i=n(204),a=n(32529),o=n(83719),s=n(18087),l=n(43447);function c(e){let{className:t=""}=e,n=["main"].concat((0,i.jD)().split("/").slice(1,-1)),c=(0,s.useTranslations)("nav");return(0,r.jsx)(l.default,{direction:"up",offset:0,duration:400,delay:800,children:(0,r.jsx)(a.Z,{direction:"row",className:t+" backwards-nav text-themed-gray items-start\n                max-lg:h-[21px]\n                ",children:n.map((e,t)=>(0,r.jsx)(i.rU,{href:"/"+n.slice(0,t+1).map(e=>"main"===e?"":e).join("/"),className:"h-full flex items-center",children:(0,r.jsx)(o.Z,{variant:"caption",className:"hover:text-[#62626a]",lineHeight:1.5,letterSpacing:0,children:c(e)||e})},t))})})}},50450:function(e,t,n){"use strict";n.d(t,{F:function(){return l},K:function(){return s}});var r=n(57437),i=n(75519),a=n(32529),o=n(37169);function s(e){var t;let{children:n,disableArrow:a,props:o={}}=e;return(0,r.jsxs)(i.Z,{...o,className:"".concat(null!==(t=o.className)&&void 0!==t?t:""," !bg-button-primary \n                !capitalize hover:!bg-button-hover-primary \n                [&>*]:!text-white \n                !px-12 !h-14 gap-4 !py-0"),sx:{"&:hover > svg":{transform:"translateX(4px)"}},children:[n,!a&&(0,r.jsxs)("svg",{height:"14",viewBox:"0 0 28 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition-transform ease-linear duration-200",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.2931 7.00003L20.6465 12.6485L21.3537 13.3555L27.7071 7.00001L21.3537 0.644792L20.6465 1.3518L26.2931 7.00003Z",fill:"white"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 6.50024L27 6.50024L27 7.50024L8.74228e-08 7.50024L0 6.50024Z",fill:"white"})]})]})}function l(e){var t;let{children:n,props:i={},disabled:s,direction:l}=e;return(0,r.jsxs)(a.Z,{direction:"row",...i,className:"".concat(null!==(t=i.className)&&void 0!==t?t:""," gap-4 items-start h-full\n            ").concat(s?"[&>*]:!text-themed-gray [&_svg]:!text-themed-gray":"[&:hover>*]:!text-themed-blue [&:hover_svg]:!text-themed-blue","\n             transition-[color] duration-200 ease-linear order-1\n            ").concat(s?"":"cursor-pointer","\n            "),sx:{"&:hover > div":{transform:"left"===l?"translateX(-4px) scaleX(-1)":"translateX(4px)"}},children:[n,(0,r.jsx)(o.Z,{className:"pt-[3px] w-8 transition-transform duration-300 ease-linear\n                    ".concat("left"===l?"-order-1 -scale-x-100":"","\n                     max-lg:pt-0.5 max-lg:w-8\n                     2xl:pt-1\n                     "),sx:{"&::before, &::after":{content:"' '"}},children:(0,r.jsxs)("svg",{width:"auto",height:"auto",viewBox:"0 0 220 82",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"leading-5 text-themed-darker-gray",children:[(0,r.jsx)("path",{d:"M220 35V47H208V58H196V46H0V36H196V24H208V35H220Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M196 12H184V24H196V12Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M184 0H172V12H184V0Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M196 58H184V70H196V58Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M184 70H172V82H184V70Z",fill:"currentColor"})]})})]})}},43447:function(e,t,n){"use strict";n.r(t),n.d(t,{ChangeBg:function(){return d},default:function(){return c}});var r=n(57437),i=n(37169),a=n(95635),o=n(2265),s=n(17885),l=n(4776);function c(e){let{direction:t,children:n,className:c="",offset:d=30,duration:u=600,delay:m=0,grow:p=!1,fadeDuration:f,fadeDelay:x,disableReplayOnRefresh:h=!1}=e,g=(0,l.Z)().innerWidth;d instanceof s.Z&&(d=d.floor(g)),u instanceof s.Z&&(u=u.floor(g)),m instanceof s.Z&&(m=m.floor(g)),f instanceof s.Z&&(f=f.floor(g)),x instanceof s.Z&&(x=x.floor(g));let[w,v]=o.useState(!1),[y,b]=o.useState(null!=f?f:u);return(0,o.useEffect)(()=>{function e(){v(!0)}return"complete"===window.document.readyState&&e(),window.addEventListener("load",e),()=>window.removeEventListener("load",e)},[]),(0,r.jsx)(r.Fragment,{children:w&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Z,{className:{left:"animate-slide-left",right:"animate-slide-right",up:"animate-slide-up",down:"animate-slide-down"}[t]+" "+c,style:{animationDuration:"".concat(u,"ms"),animationDelay:"".concat(m,"ms"),"--translate-offset":"string"==typeof d?d:d+"px"},children:(0,r.jsx)(i.Z,{className:"w-full h-full "+(p?"animate-grow":""),children:(0,r.jsx)(a.Z,{in:!0,timeout:y,easing:"linear",style:{transitionDelay:"".concat(null!=x?x:m,"ms")},addEndListener:()=>{h&&b(0)},children:n})},new Date().toString())},h?void 0:new Date().toString())})})}function d(e){let{children:t,className:n="",duration:a=500,delay:s=0}=e,[l,c]=o.useState(!1);return(0,o.useEffect)(()=>{function e(){c(!0)}return"complete"===window.document.readyState&&e(),window.addEventListener("load",e),()=>window.removeEventListener("load",e)},[]),l?(0,r.jsx)(i.Z,{className:"animate-change-bg "+n,style:{animationDuration:"".concat(a,"ms"),animationDelay:"".concat(s,"ms")},children:t}):(0,r.jsx)(i.Z,{className:n+" h-dvh"})}},62409:function(e,t,n){"use strict";n.d(t,{T:function(){return u},Z:function(){return m}});var r=n(57437),i=n(2265),a=n(79706),o=n(44812),s=n(32529),l=n(61520),c=n(27270),d=n(18087);class u extends Error{get errors(){return this._errors}static ofProblemDetails(e){return new u(e.map(e=>{let{detail:t,properties:n}=e;return{[Object.keys(n)[0]]:t}}))}constructor(e){super("Form fields validation failed"),this._errors=e}}function m(e){var t,n;let{children:m,onSubmit:p,messageOverrides:f={},formProps:x={},disableSuccessSnackbar:h=!1}=e,[g,w]=i.useState([]),[v,y]=i.useState(null),b=(0,d.useTranslations)("form"),j=i.Children.toArray(m).map(e=>(function e(t){if(t.children&&(t.children=i.Children.toArray(t.children).map(t=>e(t))),t.type===a.Z||t.type===o.Z){let e=g.find(e=>Object.keys(e)[0]===t.props.name);if(e)return i.cloneElement(t,{error:!0,helperText:Object.values(e)[0],onChange:e=>{t.props.onChange&&t.props.onChange(e),w(g.filter(e=>Object.keys(e)[0]!==t.props.name))}})}return t})(e)).map((e,t)=>i.cloneElement(e,{key:t}));return(0,r.jsxs)(s.Z,{onSubmit:async e=>{try{await p(e),y("success")}catch(e){if(!(e instanceof u))throw e;y("error"),w(e.errors)}},...x,component:"form",children:[j.map((e,t)=>e),!h&&(0,r.jsx)(l.Z,{open:"success"===v,onClose:()=>y(null),children:(0,r.jsx)(c.Z,{severity:"success",variant:"filled",onClose:()=>y(null),children:null!==(t=f.success)&&void 0!==t?t:b("success")})}),(0,r.jsx)(l.Z,{open:"error"===v,onClose:()=>y(null),children:(0,r.jsx)(c.Z,{severity:"error",variant:"filled",onClose:()=>y(null),children:null!==(n=f.error)&&void 0!==n?n:b("error")})})]})}},52646:function(e,t,n){"use strict";n.d(t,{p:function(){return i}});var r=n(25566);let i=e=>"NEXT_PUBLIC_API_URL"===e?"https://digiuni.kspu.edu/back":r.env[e]},62819:function(e,t,n){"use strict";n.d(t,{X:function(){return s},w:function(){return l}});var r=n(91617),i=n(52646),a=n(81308);let o=(0,i.p)("NEXT_PUBLIC_API_URL");function s(e,t,n){return c(r.ZP,e,t,n)}function l(e,t,n){return c(a.Z,e,t,n)}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e(t="".concat(t.startsWith("http")?"":o).concat(t,"?").concat(Object.entries(r).map(e=>"boolean"==typeof e[1]?e[0]:"".concat(e[0],"=").concat(e[1])).join("&")),async()=>{var e;let r=await fetch(t,{credentials:"include",...n});if(!r.ok)throw Error(r.statusText);return(null===(e=r.headers.get("Content-Type"))||void 0===e?void 0:e.includes("application/json"))?r.json():r.text()},{suspense:!0})}},5864:function(e,t,n){"use strict";n.d(t,{IV:function(){return s},r$:function(){return o},v_:function(){return a}});var r=n(52646);let i=e=>"".concat((0,r.p)("NEXT_PUBLIC_API_URL")).concat(e);async function a(e,t,n){return await fetch("".concat(i(e)),{method:"POST",headers:{"Content-Type":"application/json",...n},credentials:"include",body:JSON.stringify(t)})}async function o(e,t){return await fetch("".concat(i(e)),{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})}async function s(e){return await fetch("".concat(i(e)),{method:"DELETE",credentials:"include"})}},4776:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2265);function i(){let[e,t]=(0,r.useState)({innerWidth:0,innerHeight:0});return(0,r.useEffect)(()=>{function e(){t({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}},17885:function(e,t){"use strict";class n{floor(e){var t;let n=null===(t=Object.entries(this).toSorted((e,t)=>parseInt(t[0])-parseInt(e[0])).find(t=>{let[n]=t;return e>=parseInt(n)}))||void 0===t?void 0:t[1];if(void 0===n)throw Error("No breakpoint found for value ".concat(e));return n}constructor(e){Object.assign(this,e)}}t.Z=n},97709:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var r=n(2265),i=n(38017),a=n(57437);function o(e){let{children:t,defer:n=!1,fallback:o=null}=e,[s,l]=r.useState(!1);return(0,i.default)(()=>{n||l(!0)},[n]),r.useEffect(()=>{n&&l(!0)},[n]),(0,a.jsx)(r.Fragment,{children:s?t:o})}},52187:function(e,t,n){"use strict";n.r(t),n.d(t,{NoSsr:function(){return r.a}});var r=n(97709)},25218:function(e,t,n){"use strict";n.r(t),n.d(t,{boxClasses:function(){return i.Z},default:function(){return r.Z}});var r=n(37169),i=n(77126)},5415:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r.Z},stackClasses:function(){return i}});var r=n(32529),i=(0,n(34535).Z)("MuiStack",["root"])},82591:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r.Z},getTypographyUtilityClass:function(){return i.f},typographyClasses:function(){return i.Z}});var r=n(83719),i=n(98958)},34492:function(e,t,n){"use strict";var r=n(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useState,o=r.useEffect,s=r.useLayoutEffect,l=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,d=r[1];return s(function(){i.value=n,i.getSnapshot=t,c(i)&&d({inst:i})},[e,n,t]),o(function(){return c(i)&&d({inst:i}),e(function(){c(i)&&d({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},10554:function(e,t,n){"use strict";e.exports=n(34492)},37061:function(e){"use strict";e.exports=JSON.parse('{"primary":{"main":"#000000"},"secondary":{"main":"#FEFFE6"},"info":{"main":"#D5DAFF"},"button":{"hover-primary":"#2B48FF","hover-secondary":"white"},"gray":{"darkest":"#16161D","darker":"#62626A","default":"#AAAAAD","light":"#F7F7F7"},"blue":"#2B48FF"}')},46011:function(e){"use strict";e.exports=JSON.parse('{"xs":"480px","sm":"640px","md":"768px","lg":"991px","xl":"1280px","2xl":"1440px","3xl":"1920px","4xl":"2560px"}')}},function(e){e.O(0,[378,726,201,357,544,581,577,971,23,744],function(){return e(e.s=26517)}),_N_E=e.O()}]);