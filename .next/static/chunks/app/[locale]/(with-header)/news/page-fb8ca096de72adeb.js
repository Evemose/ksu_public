(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[952],{67737:function(e,t,n){var r={"./en.json":[82724,724],"./uk.json":[6583,583]};function a(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],a=t[0];return n.e(t[1]).then(function(){return n.t(a,19)})}a.keys=function(){return Object.keys(r)},a.id=67737,e.exports=a},85473:function(e,t,n){Promise.resolve().then(n.bind(n,65205)),Promise.resolve().then(n.bind(n,91110)),Promise.resolve().then(n.bind(n,54779)),Promise.resolve().then(n.bind(n,52187)),Promise.resolve().then(n.bind(n,25218)),Promise.resolve().then(n.bind(n,42472)),Promise.resolve().then(n.bind(n,5415)),Promise.resolve().then(n.bind(n,82591))},91110:function(e,t,n){"use strict";n.d(t,{default:function(){return Z}});var r=n(57437),a=n(2265);n(5864);class s{constructor(e,t,n,r,a){this.id=e,this.title=t,this.date=new Date(n),this.image=a,this.summary=r}}var i=n(37169),l=n(32529),o=n(83719),c=n(39581);function d(e){let{date:t,format:n,textProps:a}=e;return n=n||{year:"numeric",month:"numeric",day:"numeric"},(0,r.jsx)("time",{dateTime:t.toString(),children:(0,r.jsx)(o.Z,{variant:"body1",fontSize:"14px",lineHeight:1.1,...a,className:(null==a?void 0:a.className)+" mt-[0.5dvw] !text-themed-darker-gray",children:new Intl.DateTimeFormat("en-GB",n).format(new Date(t))})})}var u=n(39099),m=n(18087),x=n(29039),p=n(204),h=n(37061),f=n(43447),w=n(46011);let v=new Map;function g(e){let{page:t}=e,n=function(e,t){var n,r,a,i;let l=(0,m.useLocale)(),o=N(e=>e.indicateExhaustion),c=(n="/publications/previews",r={},a={size:12,page:t,sort:"createdAt",desc:!0,language:l.toUpperCase(),type:"NEWS"},i=!v.has(t),(0,x.ZP)(()=>i?"".concat("http://localhost:8080").concat(n,"?").concat(Object.entries(a).map(e=>"boolean"==typeof e[1]?e[0]:"".concat(e[0],"=").concat(e[1])).join("&")):null,async e=>(await fetch(e,{credentials:"include",...r})).json(),{suspense:!0}));return v.has(t)?v.get(t):c.error?(console.error(c.error),[]):(c.data.length<12&&o(c.data.length>0?t:t-1),c.data.map(e=>new s(e.id,e.title,e.createdAt,e.summary,e.image.image)))}(0,t);return(0,r.jsx)(i.Z,{className:"gap-y-16 w-full gap-x-6 grid   max-xs:!gap-y-12   max-lg:gap-x-8   xl:gap-x-8   ",sx:{gridTemplateRows:"auto",gridTemplateColumns:"1fr 1fr 1fr",gridAutoColumns:"1fr",["@media (max-width: ".concat(w.lg,")")]:{gridTemplateColumns:"1fr 1fr"},["@media (max-width: ".concat(w.xs,")")]:{gridTemplateColumns:"1fr"}},children:n.map(e=>(0,r.jsx)(j,{news:e},e.id))})}function j(e){let{news:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p.rU,{href:"/news/".concat(t.id),className:"h-full block max-w-full",children:(0,r.jsxs)(l.Z,{className:"gap-[2dvw]   max-xs:!gap-[5dvw]   max-lg:gap-[3dvw]   xl:gap-[1.5dvw]   3xl:gap-[1dvw]   h-full",sx:{"&.MuiStack-root:hover .MuiTypography-h4":{color:h.blue}},children:[(0,r.jsx)(i.Z,{className:"aspect-video w-full relative flex items-center overflow-hidden",children:(0,r.jsx)("img",{src:t.image,alt:t.title,className:"object-cover",height:"100%"})}),(0,r.jsxs)(l.Z,{className:"gap-4   max-xs:!gap-[2dvw]   max-lg:gap-[1.5dvw]   ",children:[(0,r.jsx)(d,{date:t.date}),(0,r.jsx)(o.Z,{variant:"h4",fontSize:20,lineHeight:1.3,children:t.title})]})]})})})}function y(){return(0,r.jsx)(i.Z,{className:"gap-y-16 w-full gap-x-6 grid   max-xs:!gap-y-12   max-lg:gap-x-8   xl:gap-x-8   ",sx:{gridTemplateRows:"auto",gridTemplateColumns:"1fr 1fr 1fr",gridAutoColumns:"1fr",["@media (max-width: ".concat(w.lg,")")]:{gridTemplateColumns:"1fr 1fr"},["@media (max-width: ".concat(w.xs,")")]:{gridTemplateColumns:"1fr"}},children:Array.from({length:12},(e,t)=>(0,r.jsx)(b,{},t))})}function b(){return(0,r.jsxs)(l.Z,{className:"h-full block max-w-full",children:[(0,r.jsx)(c.Z,{variant:"rectangular",width:"100%",className:"!h-auto !aspect-video w-full"}),(0,r.jsxs)(l.Z,{className:"gap-4   max-xs:!gap-[2dvw]   max-lg:gap-[1.5dvw]   ",children:[(0,r.jsx)(c.Z,{variant:"text",width:"20%",className:"mt-10"}),(0,r.jsx)(c.Z,{variant:"text",width:"100%"})]})]})}setInterval(()=>{v.clear()},3e5);let N=(0,u.Ue)((e,t)=>({isExhausted:!1,lastPage:0,indicateExhaustion:n=>{t().isExhausted||e({isExhausted:!0,lastPage:n})}}));function Z(){let[e,t]=(0,a.useState)(2),n=a.useRef(null),{isExhausted:s,lastPage:i}=N(e=>({isExhausted:e.isExhausted,lastPage:e.lastPage}));return(0,a.useEffect)(()=>{let e;let r=(e=window.scrollY,function(){e<window.scrollY&&n.current&&n.current.getBoundingClientRect().bottom<1.5*window.innerHeight&&t(e=>e+1),e=window.scrollY});if(s){t(i+1),window.removeEventListener("scroll",r);return}return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[s]),(0,r.jsx)(f.Z,{direction:"up",className:"mt-[4dvw] mb-[7dvw]   max-lg:mt-[6dvw]   2xl:mt-[3dvw] 2xl:mb-[5dvw]   3xl:mb-[5dvw]   ",delay:200,duration:600,offset:20,children:(0,r.jsx)(l.Z,{ref:n,className:"gap-16   max-xs:!gap-12   ",children:Array.from({length:e},(e,t)=>(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(y,{}),children:(0,r.jsx)(g,{page:t})},t))})})}},54779:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var r=n(57437),a=n(32529),s=n(83719),i=n(84030),l=n(50450),o=n(5864),c=n(62409),d=n(18087);function u(){let e=(0,d.useTranslations)("news.subscribeForm");return(0,r.jsxs)(c.Z,{formProps:{bgcolor:"secondary.main",className:"w-full md:!flex-row my-[12dvw] px-[4.5dvw] p-[5dvw] translate-y-[-2dvw] justify-between\n            xl:mt-[8dvw] xl:max-w-[80dvw] xl:py-[5dvw]\n            2xl:mb-[10dvw] 2xl:px-[6dvw] 2xl:py-[5dvw]\n            3xl:my-[7dvw] 3xl:px-[5dvw] 3xl:py-[4dvw]\n            "},onSubmit:async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=await (0,o.v_)("/subscribers",Object.fromEntries(n));if(!r.ok)throw c.T.ofProblemDetails(await r.json());t.reset()},messageOverrides:{success:e("success")},children:[(0,r.jsxs)(a.Z,{className:"gap-6 w-full   xl:,max-w-[35dvw]   2xl:max-w-[30dvw]   3xl:max-w-[22dvw]   ",children:[(0,r.jsx)(s.Z,{variant:"h2",lineHeight:1.2,children:e("wantToBeUpdated")}),(0,r.jsx)(s.Z,{variant:"body2",children:e("subscribeToNews")})]}),(0,r.jsxs)(a.Z,{className:"w-full max-w-[30dvw] mb-[15px]   3xl:max-w-[21dvw]   ",children:[(0,r.jsx)(i.Z,{label:e("email"),variant:"standard",fullWidth:!0,type:"email",name:"email",required:!0,inputProps:{style:{fontSize:"1rem",lineHeight:"1.5",fontFamily:"IBM Plex Mono"}},sx:{"& > *":{paddingLeft:"0 !important",paddingRight:"0 !important",paddingTop:"0.8dvw !important",paddingBottom:"0.4dvw !important"},"& > .MuiInputLabel-root":{paddingTop:"0.8dvw !important",paddingBottom:"0 !important"}}}),(0,r.jsx)(s.Z,{variant:"caption",lineHeight:"20px",className:"pt-[2dvw]   3xl:py-[1dvw]   ",children:"Натискаючи кнопку, ви автоматично погоджуєтесь на обробку персональних даних"}),(0,r.jsx)(l.K,{props:{className:"self-end w-full xs:w-auto h-14 mt-[3dvw] !px-[48px] gap-0\n                    2xl:mt-[2dvw]\n                    3xl:!px-8 3xl:py-[1dvw] 3xl:gap-4 3xl:mt-[1dvw]",type:"submit"},children:(0,r.jsx)(s.Z,{variant:"caption",className:"text-white",letterSpacing:0,children:e("subscribeButton")})})]})]})}},73105:function(e,t,n){"use strict";n.d(t,{he:function(){return i},k1:function(){return s}});var r=n(16463),a=n(65051);let s=Object.freeze(["uk","en"]),i=Object.freeze({en:"ENG",uk:"УКР"});(0,a.cF)(async e=>{let{locale:t}=e;return s.includes(t)||(0,r.notFound)(),{messages:(await n(67737)("./".concat(t,".json"))).default}})},204:function(e,t,n){"use strict";n.d(t,{jD:function(){return l},rU:function(){return s},tv:function(){return o}});var r=n(5758),a=n(73105);let{Link:s,redirect:i,usePathname:l,useRouter:o}=(0,r.iV)({locales:a.k1})},65205:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var r=n(57437),a=n(204),s=n(32529),i=n(83719),l=n(18087),o=n(43447);function c(e){let{className:t=""}=e,n=["main"].concat((0,a.jD)().split("/").slice(1,-1)),c=(0,l.useTranslations)("nav");return(0,r.jsx)(o.Z,{direction:"up",offset:0,duration:400,delay:800,children:(0,r.jsx)(s.Z,{direction:"row",className:t+" backwards-nav text-themed-gray h-[30px] items-start\n                max-lg:h-[21px]\n                ",children:n.map((e,t)=>(0,r.jsx)(a.rU,{href:"/"+n.slice(0,t+1).map(e=>"main"===e?"":e).join("/"),className:"h-full flex items-center",children:(0,r.jsx)(i.Z,{variant:"caption",className:"hover:text-themed-darker-gray",lineHeight:1.5,letterSpacing:0,children:c(e)||e})},t))})})}},50450:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var r=n(57437),a=n(76548);function s(e){var t;let{children:n,props:s={}}=e;return(0,r.jsxs)(a.Z,{...s,className:"".concat(null!==(t=null==s?void 0:s.className)&&void 0!==t?t:""," !bg-button-primary \n                !capitalize hover:!bg-button-hover-primary \n                [&>*]:!text-white \n                !px-12 !h-14 gap-4 !py-0"),sx:{"&:hover > svg":{transform:"translateX(4px)"}},children:[n,(0,r.jsxs)("svg",{height:"14",viewBox:"0 0 28 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition-transform ease-linear duration-200",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.2931 7.00003L20.6465 12.6485L21.3537 13.3555L27.7071 7.00001L21.3537 0.644792L20.6465 1.3518L26.2931 7.00003Z",fill:"white"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 6.50024L27 6.50024L27 7.50024L8.74228e-08 7.50024L0 6.50024Z",fill:"white"})]})]})}n(37061)},43447:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(57437),a=n(37169),s=n(95635);function i(e){let{direction:t,children:n,className:i="",loaded:l=!0,offset:o=30,duration:c=600,delay:d=0,grow:u=!1,fadeDuration:m,fadeDelay:x}=e;return(0,r.jsxs)(r.Fragment,{children:[l&&(0,r.jsx)(a.Z,{className:{left:"animate-slide-left",right:"animate-slide-right",up:"animate-slide-up",down:"animate-slide-down"}[t]+" translate-".concat(o," ")+i,style:{animationDuration:"".concat(c,"ms"),animationDelay:"".concat(d,"ms")},children:(0,r.jsx)(a.Z,{className:"w-full h-full "+(u?"animate-grow":""),children:(0,r.jsx)(s.Z,{in:!0,timeout:null!=m?m:c,easing:"ease-out",style:{transitionDelay:"".concat(null!=x?x:d,"ms")},children:n})},new Date().toString())},new Date().toString()),!l&&(0,r.jsx)(a.Z,{className:i+" invisible",children:n})]})}n(2265)},62409:function(e,t,n){"use strict";n.d(t,{T:function(){return u},Z:function(){return m}});var r=n(57437),a=n(2265),s=n(84030),i=n(44812),l=n(32529),o=n(61520),c=n(27270),d=n(18087);class u extends Error{get errors(){return this._errors}static ofProblemDetails(e){return new u(e.map(e=>{let{detail:t,properties:n}=e;return{[Object.keys(n)[0]]:t}}))}constructor(e){super("Form fields validation failed"),this._errors=e}}function m(e){var t,n;let{children:m,onSubmit:x,messageOverrides:p={},formProps:h={},disableSuccessSnackbar:f=!1}=e,[w,v]=a.useState([]),[g,j]=a.useState(null),y=(0,d.useTranslations)("form"),b=a.Children.toArray(m).map(e=>(function e(t){if(t.children&&(t.children=a.Children.toArray(t.children).map(t=>e(t))),t.type===s.Z||t.type===i.Z){let e=w.find(e=>Object.keys(e)[0]===t.props.name);if(e)return a.cloneElement(t,{error:!0,helperText:Object.values(e)[0],onChange:e=>{t.props.onChange&&t.props.onChange(e),v(w.filter(e=>Object.keys(e)[0]!==t.props.name))}})}return t})(e)).map((e,t)=>a.cloneElement(e,{key:t}));return(0,r.jsxs)(l.Z,{onSubmit:async e=>{try{await x(e),j("success")}catch(e){if(!(e instanceof u))throw e;j("error"),v(e.errors)}},...h,component:"form",children:[b.map((e,t)=>e),!f&&(0,r.jsx)(o.Z,{open:"success"===g,onClose:()=>j(null),children:(0,r.jsx)(c.Z,{severity:"success",variant:"filled",onClose:()=>j(null),children:null!==(t=p.success)&&void 0!==t?t:y("success")})}),(0,r.jsx)(o.Z,{open:"error"===g,onClose:()=>j(null),children:(0,r.jsx)(c.Z,{severity:"error",variant:"filled",onClose:()=>j(null),children:null!==(n=p.error)&&void 0!==n?n:y("error")})})]})}},5864:function(e,t,n){"use strict";n.d(t,{r$:function(){return s},v_:function(){return a}}),n(25566).env.SERVER_API_URL;let r=e=>"".concat("http://localhost:8080").concat(e);async function a(e,t,n){return await fetch("".concat(r(e)),{method:"POST",headers:{"Content-Type":"application/json",...n},credentials:"include",body:JSON.stringify(t)})}async function s(e,t){return await fetch("".concat(r(e)),{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})}},37061:function(e){"use strict";e.exports=JSON.parse('{"primary":{"main":"#000000"},"secondary":{"main":"#FEFFE6"},"info":{"main":"#D5DAFF"},"button":{"hover-primary":"#2B48FF","hover-secondary":"white"},"gray":{"darkest":"#16161D","darker":"#62626A","default":"#AAAAAD","light":"#F7F7F7"},"blue":"#2B48FF"}')},46011:function(e){"use strict";e.exports=JSON.parse('{"xs":"480px","sm":"640px","md":"768px","lg":"991px","xl":"1280px","2xl":"1440px","3xl":"1920px","4xl":"2560px"}')}},function(e){e.O(0,[249,773,861,296,878,165,496,971,23,744],function(){return e(e.s=85473)}),_N_E=e.O()}]);