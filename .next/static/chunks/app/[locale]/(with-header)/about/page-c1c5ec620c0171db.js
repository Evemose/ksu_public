(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[430],{67737:function(t,e,n){var r={"./en.json":[82724,724],"./uk.json":[6583,583]};function i(t){if(!n.o(r,t))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=r[t],i=e[0];return n.e(e[1]).then(function(){return n.t(i,19)})}i.keys=function(){return Object.keys(r)},i.id=67737,t.exports=i},94597:function(t,e,n){Promise.resolve().then(n.bind(n,65205)),Promise.resolve().then(n.bind(n,25218)),Promise.resolve().then(n.bind(n,42472)),Promise.resolve().then(n.bind(n,4736)),Promise.resolve().then(n.bind(n,26976)),Promise.resolve().then(n.bind(n,91442)),Promise.resolve().then(n.bind(n,70621)),Promise.resolve().then(n.bind(n,5415)),Promise.resolve().then(n.bind(n,82591)),Promise.resolve().then(n.bind(n,34327)),Promise.resolve().then(n.t.bind(n,38173,23)),Promise.resolve().then(n.bind(n,3828))},73105:function(t,e,n){"use strict";n.d(e,{he:function(){return s},k1:function(){return o}});var r=n(16463),i=n(65051);let o=Object.freeze(["uk","en"]),s=Object.freeze({en:"ENG",uk:"УКР"});(0,i.cF)(async t=>{let{locale:e}=t;return o.includes(e)||(0,r.notFound)(),{messages:(await n(67737)("./".concat(e,".json"))).default}})},204:function(t,e,n){"use strict";n.d(e,{jD:function(){return u},rU:function(){return o},tv:function(){return a}});var r=n(5758),i=n(73105);let{Link:o,redirect:s,usePathname:u,useRouter:a}=(0,r.iV)({locales:i.k1})},65205:function(t,e,n){"use strict";n.d(e,{default:function(){return c}});var r=n(57437),i=n(204),o=n(32529),s=n(83719),u=n(18087),a=n(43447);function c(t){let{className:e=""}=t,n=["main"].concat((0,i.jD)().split("/").slice(1,-1)),c=(0,u.useTranslations)("nav");return(0,r.jsx)(a.Z,{direction:"up",offset:0,duration:400,delay:800,children:(0,r.jsx)(o.Z,{direction:"row",className:e+" backwards-nav text-themed-gray h-[30px] items-start\n                max-lg:h-[21px]\n                ",children:n.map((t,e)=>(0,r.jsx)(i.rU,{href:"/"+n.slice(0,e+1).map(t=>"main"===t?"":t).join("/"),className:"h-full flex items-center",children:(0,r.jsx)(s.Z,{variant:"caption",className:"hover:text-themed-darker-gray",lineHeight:1.5,letterSpacing:0,children:c(t)||t})},e))})})}},43447:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(57437),i=n(37169),o=n(95635);function s(t){let{direction:e,children:n,className:s="",loaded:u=!0,offset:a=30,duration:c=600,delay:l=0,grow:f=!1,fadeDuration:d,fadeDelay:m}=t;return(0,r.jsxs)(r.Fragment,{children:[u&&(0,r.jsx)(i.Z,{className:{left:"animate-slide-left",right:"animate-slide-right",up:"animate-slide-up",down:"animate-slide-down"}[e]+" translate-".concat(a," ")+s,style:{animationDuration:"".concat(c,"ms"),animationDelay:"".concat(l,"ms")},children:(0,r.jsx)(i.Z,{className:"w-full h-full "+(f?"animate-grow":""),children:(0,r.jsx)(o.Z,{in:!0,timeout:null!=d?d:c,easing:"ease-out",style:{transitionDelay:"".concat(null!=m?m:l,"ms")},children:n})},new Date().toString())},new Date().toString()),!u&&(0,r.jsx)(i.Z,{className:s+" invisible",children:n})]})}n(2265)},37087:function(t,e,n){"use strict";function r(t){return"string"==typeof t}n.d(e,{X:function(){return r}})},42472:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r.Z}});var r=n(95635)},91442:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x},getListItemIconUtilityClass:function(){return d},listItemIconClasses:function(){return m}});var r=n(23950),i=n(22988),o=n(2265),s=n(44839),u=n(26259),a=n(48024),c=n(95885),l=n(34535),f=n(87542);function d(t){return(0,f.ZP)("MuiListItemIcon",t)}var m=(0,l.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),h=n(61175),v=n(57437);let p=["className"],y=t=>{let{alignItems:e,classes:n}=t;return(0,u.Z)({root:["root","flex-start"===e&&"alignItemsFlexStart"]},d,n)},g=(0,a.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.root,"flex-start"===n.alignItems&&e.alignItemsFlexStart]}})(t=>{let{theme:e,ownerState:n}=t;return(0,i.Z)({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===n.alignItems&&{marginTop:8})});var x=o.forwardRef(function(t,e){let n=(0,c.i)({props:t,name:"MuiListItemIcon"}),{className:u}=n,a=(0,r.Z)(n,p),l=o.useContext(h.Z),f=(0,i.Z)({},n,{alignItems:l.alignItems}),d=y(f);return(0,v.jsx)(g,(0,i.Z)({className:(0,s.Z)(d.root,u),ownerState:f,ref:e},a))})},70621:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Z},getListItemTextUtilityClass:function(){return h},listItemTextClasses:function(){return v}});var r=n(23950),i=n(22988),o=n(2265),s=n(44839),u=n(26259),a=n(83719),c=n(61175),l=n(95885),f=n(48024),d=n(34535),m=n(87542);function h(t){return(0,m.ZP)("MuiListItemText",t)}var v=(0,d.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),p=n(57437);let y=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],g=t=>{let{classes:e,inset:n,primary:r,secondary:i,dense:o}=t;return(0,u.Z)({root:["root",n&&"inset",o&&"dense",r&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},h,e)},x=(0,f.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[{["& .".concat(v.primary)]:e.primary},{["& .".concat(v.secondary)]:e.secondary},e.root,n.inset&&e.inset,n.primary&&n.secondary&&e.multiline,n.dense&&e.dense]}})(t=>{let{ownerState:e}=t;return(0,i.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})});var Z=o.forwardRef(function(t,e){let n=(0,l.i)({props:t,name:"MuiListItemText"}),{children:u,className:f,disableTypography:d=!1,inset:m=!1,primary:h,primaryTypographyProps:v,secondary:Z,secondaryTypographyProps:b}=n,w=(0,r.Z)(n,y),{dense:I}=o.useContext(c.Z),L=null!=h?h:u,E=Z,k=(0,i.Z)({},n,{disableTypography:d,inset:m,primary:!!L,secondary:!!E,dense:I}),j=g(k);return null==L||L.type===a.Z||d||(L=(0,p.jsx)(a.Z,(0,i.Z)({variant:I?"body2":"body1",className:j.primary,component:null!=v&&v.variant?void 0:"span",display:"block"},v,{children:L}))),null==E||E.type===a.Z||d||(E=(0,p.jsx)(a.Z,(0,i.Z)({variant:"body2",className:j.secondary,color:"text.secondary",display:"block"},b,{children:E}))),(0,p.jsxs)(x,(0,i.Z)({className:(0,s.Z)(j.root,f),ownerState:k,ref:e},w,{children:[L,E]}))})},26976:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r.ZP},getListItemUtilityClass:function(){return i.o},listItemClasses:function(){return i.Z}});var r=n(80630),i=n(19152)},4736:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r.Z},getListUtilityClass:function(){return i.z},listClasses:function(){return i.Z}});var r=n(40008),i=n(65521)},5415:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r.Z},stackClasses:function(){return i}});var r=n(32529),i=(0,n(34535).Z)("MuiStack",["root"])},82591:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r.Z},getTypographyUtilityClass:function(){return i.f},typographyClasses:function(){return i.Z}});var r=n(83719),i=n(98958)},60717:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(2265);function i(t,e){var n,i;return r.isValidElement(t)&&-1!==e.indexOf(null!=(n=t.type.muiName)?n:null==(i=t.type)||null==(i=i._payload)||null==(i=i.value)?void 0:i.muiName)}},38017:function(t,e,n){"use strict";var r=n(2265);let i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;e.default=i},39244:function(t,e,n){"use strict";var r=n(2265),i=n(38017);e.default=function(t){let e=r.useRef(t);return(0,i.default)(()=>{e.current=t}),r.useRef(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(0,e.current)(...n)}).current}},89484:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m},teardown:function(){return d}});var r=n(2265),i=n(58599);let o=!0,s=!1,u=new i.Timeout,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(t){t.metaKey||t.altKey||t.ctrlKey||(o=!0)}function l(){o=!1}function f(){"hidden"===this.visibilityState&&s&&(o=!0)}function d(t){t.removeEventListener("keydown",c,!0),t.removeEventListener("mousedown",l,!0),t.removeEventListener("pointerdown",l,!0),t.removeEventListener("touchstart",l,!0),t.removeEventListener("visibilitychange",f,!0)}function m(){let t=r.useCallback(t=>{if(null!=t){var e;(e=t.ownerDocument).addEventListener("keydown",c,!0),e.addEventListener("mousedown",l,!0),e.addEventListener("pointerdown",l,!0),e.addEventListener("touchstart",l,!0),e.addEventListener("visibilitychange",f,!0)}},[]),e=r.useRef(!1);return{isFocusVisibleRef:e,onFocus:function(t){return!!function(t){let{target:e}=t;try{return e.matches(":focus-visible")}catch(t){}return o||function(t){let{type:e,tagName:n}=t;return"INPUT"===n&&!!a[e]&&!t.readOnly||"TEXTAREA"===n&&!t.readOnly||!!t.isContentEditable}(e)}(t)&&(e.current=!0,!0)},onBlur:function(){return!!e.current&&(s=!0,u.start(100,()=>{s=!1}),e.current=!1,!0)},ref:t}}},33467:function(t,e,n){"use strict";n.d(e,{default:function(){return o}});var r=n(2265);let i={};function o(t,e){let n=r.useRef(i);return n.current===i&&(n.current=t(e)),n}},86257:function(t,e,n){"use strict";n.d(e,{default:function(){return o}});var r=n(2265);let i=[];function o(t){r.useEffect(t,i)}},58599:function(t,e,n){"use strict";n.r(e),n.d(e,{Timeout:function(){return o},default:function(){return s}});var r=n(33467),i=n(86257);class o{static create(){return new o}start(t,e){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,e()},t)}constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}}function s(){let t=(0,r.default)(o.create).current;return(0,i.default)(t.disposeEffect),t}},34327:function(t,e,n){"use strict";n.d(e,{default:function(){return m}});var r=n(12887),i=n(87138),o=n(16463),s=n(2265),u=n(69773);let a="locale";function c(t){return("object"==typeof t?null==t.host&&null==t.hostname:!/^[a-z]+:/i.test(t))&&!function(t){let e="object"==typeof t?t.pathname:t;return null!=e&&!e.startsWith("/")}(t)}function l(t,e){let n;return"string"==typeof t?n=f(e,t):(n={...t},t.pathname&&(n.pathname=f(e,t.pathname))),n}function f(t,e){let n=t;return/^\/(\?.*)?$/.test(e)&&(e=e.slice(1)),n+=e}let d=(0,s.forwardRef)(function(t,e){let{href:n,locale:f,localePrefixMode:d,onClick:m,prefetch:h,prefix:v,...p}=t,y=(0,o.usePathname)(),g=function(){let t;let e=(0,o.useParams)();try{t=(0,u.useLocale)()}catch(n){if("string"!=typeof(null==e?void 0:e[a]))throw n;t=e[a]}return t}(),x=f!==g,[Z,b]=(0,s.useState)(()=>c(n)&&("never"!==d||x)?l(n,v):n);return(0,s.useEffect)(()=>{y&&b(function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;if(!c(t))return t;let o=r===i||r.startsWith("".concat(i,"/"));return(e!==n||o)&&null!=i?l(t,i):t}(n,f,g,y,v))},[g,n,f,y,v]),x&&(h&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),h=!1),s.createElement(i.default,(0,r.g)({ref:e,href:Z,hrefLang:x?f:void 0,onClick:function(t){(function(t,e,n){if(!(n!==e&&null!=n)||!t)return;let r=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===t?e:e.replace(t,"")}(t);document.cookie="".concat("NEXT_LOCALE","=").concat(n,"; path=").concat(""!==r?r:"/","; max-age=").concat(31536e3,"; sameSite=").concat("lax")})(y,g,f),m&&m(t)},prefetch:h},p))});d.displayName="ClientLink";var m=d},3828:function(t,e,n){"use strict";n.r(e),e.default={src:"/_next/static/media/timeline-dot.152bf737.svg",height:18,width:18,blurWidth:0,blurHeight:0}}},function(t){t.O(0,[249,773,296,941,630,971,23,744],function(){return t(t.s=94597)}),_N_E=t.O()}]);