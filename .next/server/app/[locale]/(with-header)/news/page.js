(()=>{var e={};e.id=952,e.ids=[952],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},37789:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>d,routeModule:()=>p,tree:()=>u}),r(87401),r(47498),r(78177),r(35866);var a=r(23191),n=r(88716),i=r(37922),s=r.n(i),l=r(95231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let u=["",{children:["[locale]",{children:["(with-header)",{children:["news",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,87401)),"C:\\ksu\\front\\app\\[locale]\\(with-header)\\news\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,47498)),"C:\\ksu\\front\\app\\[locale]\\(with-header)\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,78177)),"C:\\ksu\\front\\app\\[locale]\\layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\ksu\\front\\app\\[locale]\\(with-header)\\news\\page.tsx"],c="/[locale]/(with-header)/news/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/[locale]/(with-header)/news/page",pathname:"/[locale]/news",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},13173:(e,t,r)=>{Promise.resolve().then(r.bind(r,97396)),Promise.resolve().then(r.bind(r,63003)),Promise.resolve().then(r.bind(r,57094)),Promise.resolve().then(r.bind(r,91634)),Promise.resolve().then(r.bind(r,39103)),Promise.resolve().then(r.bind(r,29028)),Promise.resolve().then(r.bind(r,23608)),Promise.resolve().then(r.bind(r,54475))},63003:(e,t,r)=>{"use strict";let a;r.d(t,{default:()=>eE});var n=r(10326),i=r(17577),s=r.n(i);class l{constructor(e,t,r,a,n){this.id=e,this.title=t,this.date=new Date(r),this.image=n,this.summary=a}}var o=r(62232),u=r(15813),d=r(25609),c=r(55976);function f({date:e,format:t,textProps:r}){return t=t||{year:"numeric",month:"numeric",day:"numeric"},n.jsx("time",{dateTime:e.toString(),children:n.jsx(d.Z,{variant:"body1",fontSize:"14px",lineHeight:1.1,...r,className:r?.className+" mt-[0.5dvw] !text-themed-darker-gray",children:new Intl.DateTimeFormat("en-GB",t).format(new Date(e))})})}var p=r(60114),m=r(23844),h=r(94095);let x=()=>{},g=x(),w=Object,v=e=>e===g,b=e=>"function"==typeof e,y=(e,t)=>({...e,...t}),E=e=>b(e.then),S=new WeakMap,j=0,C=e=>{let t,r;let a=typeof e,n=e&&e.constructor,i=n==Date;if(w(e)!==e||i||n==RegExp)t=i?e.toJSON():"symbol"==a?e.toString():"string"==a?JSON.stringify(e):""+e;else{if(t=S.get(e))return t;if(t=++j+"~",S.set(e,t),n==Array){for(r=0,t="@";r<e.length;r++)t+=C(e[r])+",";S.set(e,t)}if(n==w){t="#";let a=w.keys(e).sort();for(;!v(r=a.pop());)v(e[r])||(t+=r+":"+C(e[r])+",");S.set(e,t)}}return t},T=new WeakMap,_={},P={},R="undefined",k=typeof window!=R,N=typeof document!=R,Z=()=>k&&typeof window.requestAnimationFrame!=R,O=(e,t)=>{let r=T.get(e);return[()=>!v(t)&&e.get(t)||_,a=>{if(!v(t)){let n=e.get(t);t in P||(P[t]=n),r[5](t,y(n,a),n||_)}},r[6],()=>!v(t)&&t in P?P[t]:!v(t)&&e.get(t)||_]},V=!0,[A,D]=k&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[x,x],L={initFocus:e=>(N&&document.addEventListener("visibilitychange",e),A("focus",e),()=>{N&&document.removeEventListener("visibilitychange",e),D("focus",e)}),initReconnect:e=>{let t=()=>{V=!0,e()},r=()=>{V=!1};return A("online",t),A("offline",r),()=>{D("online",t),D("offline",r)}}},M=!i.useId,$=!k||"Deno"in window,F=e=>Z()?window.requestAnimationFrame(e):setTimeout(e,1),I=$?i.useEffect:i.useLayoutEffect,q="undefined"!=typeof navigator&&navigator.connection,U=!$&&q&&(["slow-2g","2g"].includes(q.effectiveType)||q.saveData),W=e=>{if(b(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?C(e):"",t]},B=0,z=()=>++B;var X={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function H(...e){let[t,r,a,n]=e,i=y({populateCache:!0,throwOnError:!0},"boolean"==typeof n?{revalidate:n}:n||{}),s=i.populateCache,l=i.rollbackOnError,o=i.optimisticData,u=e=>"function"==typeof l?l(e):!1!==l,d=i.throwOnError;if(b(r)){let e=[];for(let a of t.keys())!/^\$(inf|sub)\$/.test(a)&&r(t.get(a)._k)&&e.push(a);return Promise.all(e.map(c))}return c(r);async function c(r){let n;let[l]=W(r);if(!l)return;let[c,f]=O(t,l),[p,m,h,x]=T.get(t),w=()=>{let e=p[l];return(b(i.revalidate)?i.revalidate(c().data,r):!1!==i.revalidate)&&(delete h[l],delete x[l],e&&e[0])?e[0](2).then(()=>c().data):c().data};if(e.length<3)return w();let y=a,S=z();m[l]=[S,0];let j=!v(o),C=c(),_=C.data,P=C._c,R=v(P)?_:P;if(j&&f({data:o=b(o)?o(R,_):o,_c:R}),b(y))try{y=y(R)}catch(e){n=e}if(y&&E(y)){if(y=await y.catch(e=>{n=e}),S!==m[l][0]){if(n)throw n;return y}n&&j&&u(n)&&(s=!0,f({data:R,_c:g}))}if(s&&!n&&(b(s)?f({data:s(y,R),error:g,_c:g}):f({data:y,error:g,_c:g})),m[l][1]=z(),Promise.resolve(w()).then(()=>{f({_c:g})}),n){if(d)throw n;return}return y}}let G=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},J=(e,t)=>{if(!T.has(e)){let r=y(L,t),a={},n=H.bind(g,e),i=x,s={},l=(e,t)=>{let r=s[e]||[];return s[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},o=(t,r,a)=>{e.set(t,r);let n=s[t];if(n)for(let e of n)e(r,a)},u=()=>{if(!T.has(e)&&(T.set(e,[a,{},{},{},n,o,l]),!$)){let t=r.initFocus(setTimeout.bind(g,G.bind(g,a,0))),n=r.initReconnect(setTimeout.bind(g,G.bind(g,a,1)));i=()=>{t&&t(),n&&n(),T.delete(e)}}};return u(),[e,n,u,i]}return[e,T.get(e)[4]]},[Y,K]=J(new Map),Q=y({onLoadingSlow:x,onSuccess:x,onError:x,onErrorRetry:(e,t,r,a,n)=>{let i=r.errorRetryCount,s=n.retryCount,l=~~((Math.random()+.5)*(1<<(s<8?s:8)))*r.errorRetryInterval;(v(i)||!(s>i))&&setTimeout(a,l,n)},onDiscarded:x,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:U?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:U?5e3:3e3,compare:(e,t)=>C(e)==C(t),isPaused:()=>!1,cache:Y,mutate:K,fallback:{}},{isOnline:()=>V,isVisible:()=>{let e=N&&document.visibilityState;return v(e)||"hidden"!==e}}),ee=(e,t)=>{let r=y(e,t);if(t){let{use:a,fallback:n}=e,{use:i,fallback:s}=t;a&&i&&(r.use=a.concat(i)),n&&s&&(r.fallback=y(n,s))}return r},et=(0,i.createContext)({}),er=k&&window.__SWR_DEVTOOLS_USE__,ea=er?window.__SWR_DEVTOOLS_USE__:[],en=e=>b(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],ei=()=>y(Q,(0,i.useContext)(et)),es=ea.concat(e=>(t,r,a)=>{let n=r&&((...e)=>{let[a]=W(t),[,,,n]=T.get(Y);if(a.startsWith("$inf$"))return r(...e);let i=n[a];return v(i)?r(...e):(delete n[a],i)});return e(t,n,a)}),el=(e,t,r)=>{let a=t[e]||(t[e]=[]);return a.push(r),()=>{let e=a.indexOf(r);e>=0&&(a[e]=a[a.length-1],a.pop())}};er&&(window.__SWR_DEVTOOLS_REACT__=i);let eo=i.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),eu={dedupe:!0};w.defineProperty(e=>{let{value:t}=e,r=(0,i.useContext)(et),a=b(t),n=(0,i.useMemo)(()=>a?t(r):t,[a,r,t]),s=(0,i.useMemo)(()=>a?n:ee(r,n),[a,r,n]),l=n&&n.provider,o=(0,i.useRef)(g);l&&!o.current&&(o.current=J(l(s.cache||Y),n));let u=o.current;return u&&(s.cache=u[0],s.mutate=u[1]),I(()=>{if(u)return u[2]&&u[2](),u[3]},[]),(0,i.createElement)(et.Provider,y(e,{value:s}))},"defaultValue",{value:Q});let ed=(a=(e,t,r)=>{let{cache:a,compare:n,suspense:s,fallbackData:l,revalidateOnMount:o,revalidateIfStale:u,refreshInterval:d,refreshWhenHidden:c,refreshWhenOffline:f,keepPreviousData:p}=r,[m,x,w,E]=T.get(a),[S,j]=W(e),C=(0,i.useRef)(!1),_=(0,i.useRef)(!1),P=(0,i.useRef)(S),R=(0,i.useRef)(t),k=(0,i.useRef)(r),N=()=>k.current,Z=()=>N().isVisible()&&N().isOnline(),[V,A,D,L]=O(a,S),q=(0,i.useRef)({}).current,U=v(l)?r.fallback[S]:l,B=(e,t)=>{for(let r in q)if("data"===r){if(!n(e[r],t[r])&&(!v(e[r])||!n(ea,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},G=(0,i.useMemo)(()=>{let e=!!S&&!!t&&(v(o)?!N().isPaused()&&!s&&(!!v(u)||u):o),r=t=>{let r=y(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},a=V(),n=L(),i=r(a),l=a===n?i:r(n),d=i;return[()=>{let e=r(V());return B(e,d)?(d.data=e.data,d.isLoading=e.isLoading,d.isValidating=e.isValidating,d.error=e.error,d):(d=e,e)},()=>l]},[a,S]),J=(0,h.useSyncExternalStore)((0,i.useCallback)(e=>D(S,(t,r)=>{B(r,t)||e()}),[a,S]),G[0],G[1]),Y=!C.current,K=m[S]&&m[S].length>0,Q=J.data,ee=v(Q)?U:Q,et=J.error,er=(0,i.useRef)(ee),ea=p?v(Q)?er.current:Q:ee,en=(!K||!!v(et))&&(Y&&!v(o)?o:!N().isPaused()&&(s?!v(ee)&&u:v(ee)||u)),ei=!!(S&&t&&Y&&en),es=v(J.isValidating)?ei:J.isValidating,ed=v(J.isLoading)?ei:J.isLoading,ec=(0,i.useCallback)(async e=>{let t,a;let i=R.current;if(!S||!i||_.current||N().isPaused())return!1;let s=!0,l=e||{},o=!w[S]||!l.dedupe,u=()=>M?!_.current&&S===P.current&&C.current:S===P.current,d={isValidating:!1,isLoading:!1},c=()=>{A(d)},f=()=>{let e=w[S];e&&e[1]===a&&delete w[S]},p={isValidating:!0};v(V().data)&&(p.isLoading=!0);try{if(o&&(A(p),r.loadingTimeout&&v(V().data)&&setTimeout(()=>{s&&u()&&N().onLoadingSlow(S,r)},r.loadingTimeout),w[S]=[i(j),z()]),[t,a]=w[S],t=await t,o&&setTimeout(f,r.dedupingInterval),!w[S]||w[S][1]!==a)return o&&u()&&N().onDiscarded(S),!1;d.error=g;let e=x[S];if(!v(e)&&(a<=e[0]||a<=e[1]||0===e[1]))return c(),o&&u()&&N().onDiscarded(S),!1;let l=V().data;d.data=n(l,t)?l:t,o&&u()&&N().onSuccess(t,S,r)}catch(r){f();let e=N(),{shouldRetryOnError:t}=e;!e.isPaused()&&(d.error=r,o&&u()&&(e.onError(r,S,e),(!0===t||b(t)&&t(r))&&(!N().revalidateOnFocus||!N().revalidateOnReconnect||Z())&&e.onErrorRetry(r,S,e,e=>{let t=m[S];t&&t[0]&&t[0](X.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return s=!1,c(),!0},[S,a]),ef=(0,i.useCallback)((...e)=>H(a,P.current,...e),[]);if(I(()=>{R.current=t,k.current=r,v(Q)||(er.current=Q)}),I(()=>{if(!S)return;let e=ec.bind(g,eu),t=0,r=el(S,m,(r,a={})=>{if(r==X.FOCUS_EVENT){let r=Date.now();N().revalidateOnFocus&&r>t&&Z()&&(t=r+N().focusThrottleInterval,e())}else if(r==X.RECONNECT_EVENT)N().revalidateOnReconnect&&Z()&&e();else if(r==X.MUTATE_EVENT)return ec();else if(r==X.ERROR_REVALIDATE_EVENT)return ec(a)});return _.current=!1,P.current=S,C.current=!0,A({_k:j}),en&&(v(ee)||$?e():F(e)),()=>{_.current=!0,r()}},[S]),I(()=>{let e;function t(){let t=b(d)?d(V().data):d;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!V().error&&(c||N().isVisible())&&(f||N().isOnline())?ec(eu).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[d,c,f,S]),(0,i.useDebugValue)(ea),s&&v(ee)&&S){if(!M&&$)throw Error("Fallback data is required when using suspense in SSR.");R.current=t,k.current=r,_.current=!1;let e=E[S];if(v(e)||eo(ef(e)),v(et)){let e=ec(eu);v(ea)||(e.status="fulfilled",e.value=!0),eo(e)}else throw et}return{mutate:ef,get data(){return q.data=!0,ea},get error(){return q.error=!0,et},get isValidating(){return q.isValidating=!0,es},get isLoading(){return q.isLoading=!0,ed}}},function(...e){let t=ei(),[r,n,i]=en(e),s=ee(t,i),l=a,{use:o}=s,u=(o||[]).concat(es);for(let e=u.length;e--;)l=u[e](l);return l(r,n||s.fetcher||null,s)}),ec=(0,r(68698).p)("NEXT_PUBLIC_API_URL");var ef=r(37743),ep=r(11420),em=r(49463),eh=r(24886);let ex=new Map;function eg({page:e}){let t=function(e,t){let r=(0,m.useLocale)(),a=ey(e=>e.indicateExhaustion),n=function(e,t,r,a=!0){return ed(()=>a?`${ec}${e}?${Object.entries(r).map(e=>"boolean"==typeof e[1]?e[0]:`${e[0]}=${e[1]}`).join("&")}`:null,async e=>(await fetch(e,{credentials:"include",...t})).json(),{suspense:!0})}("/publications/previews",{},{size:12,page:t,sort:"createdAt",desc:!0,language:r.toUpperCase(),type:"NEWS"},!ex.has(t));return ex.has(t)?ex.get(t):n.error?(console.error(n.error),[]):(n.data.length<12&&a(n.data.length>0?t:t-1),n.data.map(e=>new l(e.id,e.title,e.createdAt,e.summary,e.image.image)))}(0,e);return n.jsx(o.Z,{className:"gap-y-16 w-full gap-x-6 grid   max-xs:!gap-y-12   max-lg:gap-x-8   xl:gap-x-8   ",sx:{gridTemplateRows:"auto",gridTemplateColumns:"1fr 1fr 1fr",gridAutoColumns:"1fr",[`@media (max-width: ${eh.lg})`]:{gridTemplateColumns:"1fr 1fr"},[`@media (max-width: ${eh.xs})`]:{gridTemplateColumns:"1fr"}},children:t.map(e=>n.jsx(ew,{news:e},e.id))})}function ew({news:e}){return n.jsx(n.Fragment,{children:n.jsx(ef.rU,{href:`/news/${e.id}`,className:"h-full block max-w-full",children:(0,n.jsxs)(u.Z,{className:"gap-[2dvw]   max-xs:!gap-[5dvw]   max-lg:gap-[3dvw]   xl:gap-[1.5dvw]   3xl:gap-[1dvw]   h-full",sx:{"&.MuiStack-root:hover .MuiTypography-h4":{color:ep.blue}},children:[n.jsx(o.Z,{className:"aspect-video w-full relative flex items-center overflow-hidden",children:n.jsx("img",{src:e.image,alt:e.title,className:"object-cover",height:"100%"})}),(0,n.jsxs)(u.Z,{className:"gap-4   max-xs:!gap-[2dvw]   max-lg:gap-[1.5dvw]   ",children:[n.jsx(f,{date:e.date}),n.jsx(d.Z,{variant:"h4",fontSize:20,lineHeight:1.3,children:e.title})]})]})})})}function ev(){return n.jsx(o.Z,{className:"gap-y-16 w-full gap-x-6 grid   max-xs:!gap-y-12   max-lg:gap-x-8   xl:gap-x-8   ",sx:{gridTemplateRows:"auto",gridTemplateColumns:"1fr 1fr 1fr",gridAutoColumns:"1fr",[`@media (max-width: ${eh.lg})`]:{gridTemplateColumns:"1fr 1fr"},[`@media (max-width: ${eh.xs})`]:{gridTemplateColumns:"1fr"}},children:Array.from({length:12},(e,t)=>n.jsx(eb,{},t))})}function eb(){return(0,n.jsxs)(u.Z,{className:"h-full block max-w-full",children:[n.jsx(c.Z,{variant:"rectangular",width:"100%",className:"!h-auto !aspect-video w-full"}),(0,n.jsxs)(u.Z,{className:"gap-4   max-xs:!gap-[2dvw]   max-lg:gap-[1.5dvw]   ",children:[n.jsx(c.Z,{variant:"text",width:"20%",className:"mt-10"}),n.jsx(c.Z,{variant:"text",width:"100%"})]})]})}setInterval(()=>{ex.clear()},3e5);let ey=(0,p.Ue)((e,t)=>({isExhausted:!1,lastPage:0,indicateExhaustion:r=>{t().isExhausted||e({isExhausted:!0,lastPage:r})}}));function eE(){let[e,t]=(0,i.useState)(2),r=s().useRef(null),{isExhausted:a,lastPage:l}=ey(e=>({isExhausted:e.isExhausted,lastPage:e.lastPage}));return n.jsx(em.Z,{direction:"up",className:"mt-[4dvw] mb-[7dvw]   max-lg:mt-[6dvw]   2xl:mt-[3dvw] 2xl:mb-[5dvw]   3xl:mb-[5dvw]   ",delay:200,duration:600,offset:20,children:n.jsx(u.Z,{ref:r,className:"gap-16   max-xs:!gap-12   ",children:Array.from({length:e},(e,t)=>n.jsx(i.Suspense,{fallback:n.jsx(ev,{}),children:n.jsx(eg,{page:t})},t))})})}},57094:(e,t,r)=>{"use strict";r.d(t,{default:()=>f});var a=r(10326),n=r(15813),i=r(25609),s=r(54014),l=r(8505),o=r(59494),u=r(7079),d=r(23844),c=r(24886);function f(){let e=(0,d.useTranslations)("news.subscribeForm");return(0,a.jsxs)(u.Z,{formProps:{bgcolor:"secondary.main",className:`w-full md:!flex-row my-[12dvw] px-[4.5dvw] p-[5dvw] translate-y-[-2dvw] justify-between
            max-xs:pt-[20dvw] max-xs:pb-[24dvw] max-xs:px-[5dvw] max-xs:!mb-0
            max-md:gap-[7dvw]
            xl:mt-[8dvw] xl:max-w-[80dvw] xl:py-[5dvw]
            2xl:mb-[10dvw] 2xl:px-[6dvw] 2xl:py-[5dvw]
            3xl:my-[7dvw] 3xl:px-[5dvw] 3xl:py-[4dvw]
            `},onSubmit:async e=>{e.preventDefault();let t=e.currentTarget,r=new FormData(t),a=await (0,o.v_)("/subscribers",Object.fromEntries(r));if(!a.ok)throw u.T.ofProblemDetails(await a.json());t.reset()},messageOverrides:{success:e("success")},children:[(0,a.jsxs)(n.Z,{className:"gap-6 w-full   xl:,max-w-[35dvw]   2xl:max-w-[30dvw]   3xl:max-w-[22dvw]   ",children:[a.jsx(i.Z,{variant:"h2",lineHeight:1.2,children:e("wantToBeUpdated")}),a.jsx(i.Z,{variant:"body2",children:e("subscribeToNews")})]}),(0,a.jsxs)(n.Z,{className:"w-full max-w-[30dvw] mb-[15px]   max-xs:!max-w-none max-xs:gap-[4dvw]   3xl:max-w-[21dvw]   ",children:[a.jsx(s.Z,{label:e("email"),variant:"standard",fullWidth:!0,type:"email",name:"email",required:!0,inputProps:{style:{fontSize:"1rem",lineHeight:"1.5",fontFamily:"IBM Plex Mono"}},sx:{"& > *":{paddingLeft:"0 !important",paddingRight:"0 !important",paddingTop:"0.8dvw !important",paddingBottom:"0.4dvw !important"},"& > .MuiInputLabel-root":{paddingTop:"0.8dvw !important",paddingBottom:"0 !important"},"& > .MuiInputBase-root":{height:"38px"},[`@media (max-width: ${c.xs})`]:{"& > .MuiInputBase-root":{paddingBottom:"2dvw !important"}}}}),a.jsx(i.Z,{variant:"caption",lineHeight:"20px",className:"pt-[2dvw]   3xl:py-[1dvw]   ",children:"Натискаючи кнопку, ви автоматично погоджуєтесь на обробку персональних даних"}),a.jsx(l.K,{props:{className:`self-end w-full xs:w-auto h-14 mt-[3dvw] !px-[48px] gap-0
                    2xl:mt-[2dvw]
                    3xl:!px-8 3xl:py-[1dvw] 3xl:gap-4 3xl:mt-[1dvw]`,type:"submit"},children:a.jsx(i.Z,{variant:"caption",className:"text-white",letterSpacing:0,children:e("subscribeButton")})})]})]})}},97396:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var a=r(10326),n=r(37743),i=r(15813),s=r(25609),l=r(23844),o=r(49463);function u({className:e=""}){let t=["main"].concat((0,n.jD)().split("/").slice(1,-1)),r=(0,l.useTranslations)("nav");return a.jsx(o.Z,{direction:"up",offset:0,duration:400,delay:800,children:a.jsx(i.Z,{direction:"row",className:e+` backwards-nav text-themed-gray h-[30px] items-start
                max-lg:h-[21px]
                `,children:t.map((e,i)=>a.jsx(n.rU,{href:"/"+t.slice(0,i+1).map(e=>"main"===e?"":e).join("/"),className:"h-full flex items-center",children:a.jsx(s.Z,{variant:"caption",className:"hover:text-themed-darker-gray",lineHeight:1.5,letterSpacing:0,children:r(e)||e})},i))})})}},90728:(e,t,r)=>{"use strict";r.d(t,{a:()=>s});var a=r(17577),n=r(87275),i=r(10326);function s(e){let{children:t,defer:r=!1,fallback:s=null}=e,[l,o]=a.useState(!1);return(0,n.default)(()=>{r||o(!0)},[r]),a.useEffect(()=>{r&&o(!0)},[r]),(0,i.jsx)(a.Fragment,{children:l?t:s})}},91634:(e,t,r)=>{"use strict";r.r(t),r.d(t,{NoSsr:()=>a.a});var a=r(90728)},55976:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var a=r(91367),n=r(45353),i=r(17577),s=r(41135),l=r(8106),o=r(18782),u=r(19452),d=r(22553),c=r(91703),f=r(2791),p=r(44647),m=r(36004);function h(e){return(0,m.ZP)("MuiSkeleton",e)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var x=r(10326);let g=["animation","className","component","height","style","variant","width"],w=e=>e,v,b,y,E,S=e=>{let{classes:t,variant:r,animation:a,hasChildren:n,width:i,height:s}=e;return(0,o.Z)({root:["root",r,a,n&&"withChildren",n&&!i&&"fitContent",n&&!s&&"heightAuto"]},h,t)},j=(0,l.F4)(v||(v=w`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),C=(0,l.F4)(b||(b=w`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),T=(0,c.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!1!==r.animation&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let r=(0,u.Wy)(e.shape.borderRadius)||"px",a=(0,u.YL)(e.shape.borderRadius);return(0,n.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,d.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${r}/${Math.round(a/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,l.iv)(y||(y=w`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),j),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,l.iv)(E||(E=w`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),C,(t.vars||t).palette.action.hover)),_=i.forwardRef(function(e,t){let r=(0,f.i)({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:l,component:o="span",height:u,style:d,variant:c="text",width:p}=r,m=(0,a.Z)(r,g),h=(0,n.Z)({},r,{animation:i,component:o,variant:c,hasChildren:!!m.children}),w=S(h);return(0,x.jsx)(T,(0,n.Z)({as:o,ref:t,className:(0,s.Z)(w.root,l),ownerState:h},m,{style:(0,n.Z)({width:p,height:u},d)}))})},54475:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a.Z,getTypographyUtilityClass:()=>n.f,typographyClasses:()=>n.Z});var a=r(25609),n=r(79986)},69856:(e,t,r)=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(17577),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=a.useState,s=a.useEffect,l=a.useLayoutEffect,o=a.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!n(e,r)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),a=i({inst:{value:r,getSnapshot:t}}),n=a[0].inst,d=a[1];return l(function(){n.value=r,n.getSnapshot=t,u(n)&&d({inst:n})},[e,r,t]),s(function(){return u(n)&&d({inst:n}),e(function(){u(n)&&d({inst:n})})},[e]),o(r),r};t.useSyncExternalStore=void 0!==a.useSyncExternalStore?a.useSyncExternalStore:d},77513:(e,t,r)=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(17577),n=r(94095),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=n.useSyncExternalStore,l=a.useRef,o=a.useEffect,u=a.useMemo,d=a.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,a,n){var c=l(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;var p=s(e,(c=u(function(){function e(e){if(!o){if(o=!0,s=e,e=a(e),void 0!==n&&f.hasValue){var t=f.value;if(n(t,e))return l=t}return l=e}if(t=l,i(s,e))return t;var r=a(e);return void 0!==n&&n(t,r)?t:(s=e,l=r)}var s,l,o=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,a,n]))[0],c[1]);return o(function(){f.hasValue=!0,f.value=p},[p]),d(p),p}},94095:(e,t,r)=>{"use strict";e.exports=r(69856)},21508:(e,t,r)=>{"use strict";e.exports=r(77513)},87401:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var a=r(19510),n=r(22112),i=r.n(n),s=r(31045),l=r(87094),o=r.n(l),u=r(11160),d=r(53843),c=r(68570);let f=(0,c.createProxy)(String.raw`C:\ksu\front\app\[locale]\(with-header)\news\news-panel.tsx`),{__esModule:p,$$typeof:m}=f;f.default,(0,c.createProxy)(String.raw`C:\ksu\front\app\[locale]\(with-header)\news\news-panel.tsx#useNewsPreview`),(0,c.createProxy)(String.raw`C:\ksu\front\app\[locale]\(with-header)\news\news-panel.tsx#useNewsState`);let h=(0,c.createProxy)(String.raw`C:\ksu\front\app\[locale]\(with-header)\news\news-panel.tsx#default`);var x=r(7959),g=r(75866),w=r(72056),v=r(99665);r(71159);var b=r(21446);async function y({params:{locale:e}}){(0,u.k)(e);let t=await (0,d.Z)("news");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(g.Y_,{className:"!mb-0 !pb-0",children:[(0,a.jsxs)(g.tP,{children:[a.jsx(v.ZP,{}),a.jsx(w.Z,{direction:"up",offset:20,duration:500,fadeDuration:400,children:(0,a.jsxs)(i(),{variant:"h1",className:"leading-[1.15]   xl:text-[50px]   2xl:text-[54px]   3xl:text-[56px]   ",letterSpacing:"-0.01rem",sx:{fontSize:"52px",[`@media (max-width: ${b.lg})`]:{fontSize:"46px"},[`@media (max-width: ${b.md})`]:{fontSize:"38px"},[`@media (max-width: ${b.xs})`]:{fontSize:"36px"}},children:[t("title"),":"]})})]}),a.jsx(s.NoSsr,{fallback:a.jsx(o(),{className:"h-dvh"}),children:a.jsx(h,{})})]}),a.jsx(g.OB,{className:"max-xs:!px-0",children:a.jsx(x.ZP,{})})]})}},7959:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>l});var a=r(68570);let n=(0,a.createProxy)(String.raw`C:\ksu\front\app\[locale]\(with-header)\news\subscribe.tsx`),{__esModule:i,$$typeof:s}=n;n.default;let l=(0,a.createProxy)(String.raw`C:\ksu\front\app\[locale]\(with-header)\news\subscribe.tsx#default`)},99665:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>l});var a=r(68570);let n=(0,a.createProxy)(String.raw`C:\ksu\front\app\_util\components\breadcrumbs.tsx`),{__esModule:i,$$typeof:s}=n;n.default;let l=(0,a.createProxy)(String.raw`C:\ksu\front\app\_util\components\breadcrumbs.tsx#default`)},31045:(e,t,r)=>{let{createProxy:a}=r(68570);e.exports=a("C:\\ksu\\front\\node_modules\\@mui\\base\\NoSsr\\index.js")},22112:(e,t,r)=>{let{createProxy:a}=r(68570);e.exports=a("C:\\ksu\\front\\node_modules\\@mui\\material\\Typography\\index.js")},53843:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(71159),n=r(77872);let i=(0,a.cache)(function(){return new Map});var s=r(2003),l=(0,a.cache)(async function(e){let t,r;"string"==typeof e?t=e:e&&(r=e.locale,t=e.namespace);let a=await (0,s.Z)(r);return(0,n.eX)({...a,messageFormatCache:i(),namespace:t,messages:a.messages})})},60114:(e,t,r)=>{"use strict";r.d(t,{Ue:()=>f});let a=e=>{let t;let r=new Set,a=(e,a)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=a?a:"object"!=typeof n||null===n)?n:Object.assign({},t,n),r.forEach(r=>r(t,e))}},n=()=>t,i={setState:a,getState:n,getInitialState:()=>s,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},s=t=e(a,n,i);return i},n=e=>e?a(e):a;var i=r(17577),s=r(21508);let{useDebugValue:l}=i,{useSyncExternalStoreWithSelector:o}=s,u=!1,d=e=>e,c=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?n(e):e,r=(e,r)=>(function(e,t=d,r){r&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let a=o(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return l(a),a})(t,e,r);return Object.assign(r,t),r},f=e=>e?c(e):c}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[937,817,181,231,563],()=>r(37789));module.exports=a})();