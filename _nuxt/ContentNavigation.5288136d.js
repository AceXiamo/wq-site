import{q as f,w as m,e as v,s as d,j as g,u as l,a as h}from"./query.5752cd7c.js";import{l as _,ad as c,_ as y,d as C,ae as w,K as P,m as $,ab as N,S as r,D as j}from"./entry.b135350b.js";import{u as D}from"./preview.8eaac11c.js";const T=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(d())return(await y(()=>import("./client-db.b661fe12.js"),["./client-db.b661fe12.js","./entry.b135350b.js","./query.5752cd7c.js","./preview.8eaac11c.js","./index.288f722b.js","./_commonjsHelpers.725317a4.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:g(a),previewToken:D().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=C({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&$("dd-navigation").value){const{navigation:n}=l();return{navigation:n}}const{data:s}=await h(`content-navigation-${c(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=N(),{navigation:a}=e,s=o=>r(j,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),L=E;export{L as default};