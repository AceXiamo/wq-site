import{K as k,a2 as l,aa as C,Z as B,d as L,r as $,b as E,c as S,n as z,a7 as A,p as F,i as I,e as q,k as D,S as N,j as T,ab as U}from"./entry.aeabdbc9.js";import{u as O}from"./asyncData.e6455837.js";function M(s,e,o){var h;const[t={},r]=typeof e=="string"?[{},e]:[e,o],a=k(()=>{let i=s;return typeof i=="function"&&(i=i()),l(i)}),n=t.key||C([r,((h=l(t.method))==null?void 0:h.toUpperCase())||"GET",l(t.baseURL),typeof a.value=="string"?a.value:"",l(t.params||t.query)]);if(!n||typeof n!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+n);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const f=n===r?"$f"+n:n;if(!t.baseURL&&typeof a.value=="string"&&a.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:y,lazy:m,default:_,transform:g,pick:v,watch:p,immediate:b,...x}=t,u=B({...x,cache:typeof t.cache=="boolean"?void 0:t.cache}),w={server:y,lazy:m,default:_,transform:g,pick:v,immediate:b,watch:p===!1?[]:[u,a,...p||[]]};let c;return O(f,()=>{var d;return(d=c==null?void 0:c.abort)==null||d.call(c),c=typeof AbortController<"u"?new AbortController:{},typeof a.value=="string"&&a.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(a.value,{signal:c.signal,...u})},w)}const R=s=>(F("data-v-7ea30aac"),s=s(),I(),s),j=R(()=>q("i",{class:"i-heroicons-arrow-path-20-solid animate-spin text-[30px]"},null,-1)),K=[j],W=L({__name:"Loading",props:{hasBg:{type:Boolean,default:!0},close:{}},setup(s,{expose:e}){const o=s,t=$("show-ani");return e({close:()=>{o.close()}}),(a,n)=>(E(),S("div",{class:z([l(t),"absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-[10] min-h-[100px]"]),style:A({backgroundColor:a.hasBg?"rgba(0,0,0,.1)":""})},K,6))}});const G=D(W,[["__scopeId","data-v-7ea30aac"]]),V=s=>{var t,r;const e=document.createElement("div");e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.zIndex="9999";const o=N(G,{close:()=>{e.remove()},hasBg:s.hasBg});if(o.appContext=T().vueApp._context,U(o,e),s.element){const a=document.querySelector(s.element);a&&a.appendChild(e)}else document.body.appendChild(e);return{close:(r=(t=o.component)==null?void 0:t.exposed)==null?void 0:r.close}},P={show:V},Q=s=>{document.title=`✨ 小猫 の ${s}`};export{P as L,Q as s,M as u};