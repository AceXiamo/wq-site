import{q as C,h as l,Y as L,L as k,g as B,r as $,o as E,c as q,n as z,V as A,p as D,f as F,a as I,_ as S,D as N,Z as T,$ as U}from"./entry.4af28d24.js";import{u as O}from"./asyncData.4c6af5f4.js";function J(s,e,a){var h;const[t={},r]=typeof e=="string"?[{},e]:[e,a],o=C(()=>{let i=s;return typeof i=="function"&&(i=i()),l(i)}),n=t.key||L([r,((h=l(t.method))==null?void 0:h.toUpperCase())||"GET",l(t.baseURL),typeof o.value=="string"?o.value:"",l(t.params||t.query)]);if(!n||typeof n!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+n);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const f=n===r?"$f"+n:n;if(!t.baseURL&&typeof o.value=="string"&&o.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:y,lazy:m,default:_,transform:g,pick:v,watch:p,immediate:x,...w}=t,u=k({...w,cache:typeof t.cache=="boolean"?void 0:t.cache}),b={server:y,lazy:m,default:_,transform:g,pick:v,immediate:x,watch:p===!1?[]:[u,o,...p||[]]};let c;return O(f,()=>{var d;return(d=c==null?void 0:c.abort)==null||d.call(c),c=typeof AbortController<"u"?new AbortController:{},typeof o.value=="string"&&o.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(o.value,{signal:c.signal,...u})},b)}const R=s=>(D("data-v-7ea30aac"),s=s(),F(),s),V=R(()=>I("i",{class:"i-heroicons-arrow-path-20-solid animate-spin text-[30px]"},null,-1)),W=[V],j=B({__name:"Loading",props:{hasBg:{type:Boolean,default:!0},close:{}},setup(s,{expose:e}){const a=s,t=$("show-ani");return e({close:()=>{a.close()}}),(o,n)=>(E(),q("div",{class:z([l(t),"absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-[10] min-h-[100px]"]),style:A({backgroundColor:o.hasBg?"rgba(0,0,0,.1)":""})},W,6))}});const G=S(j,[["__scopeId","data-v-7ea30aac"]]),K=s=>{var t,r;const e=document.createElement("div");e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.zIndex="9999";const a=N(G,{close:()=>{e.remove()},hasBg:s.hasBg});if(a.appContext=T().vueApp._context,U(a,e),s.element){const o=document.querySelector(s.element);o&&o.appendChild(e)}else document.body.appendChild(e);return{close:(r=(t=a.component)==null?void 0:t.exposed)==null?void 0:r.close}},M={show:K},P=s=>{document.title=`✨ 小猫 の ${s}`};export{M as L,P as s,J as u};