import{q as j,d as m,O as Q,E as h,b as n,R as F,w as z,G as x,g as p,H as t,e as s,a8 as R,c as i,n as f,a7 as k,f as b,t as C,ar as w,as as B,u as O,r as V,F as T,I,at as H,au as L,S as q}from"./entry.927c3cf4.js";import{_ as G}from"./client-only.37435e44.js";import{b as y,e as $,l as E}from"./common.6d1fafea.js";import{M,u as D}from"./music.4349e3dc.js";const J=()=>j("color-mode").value,K=s("div",{class:"w-8 h-8"},null,-1),A=m({__name:"ColorMode",setup(c){const e=J(),o=Q({get(){return e.value==="dark"},set(){e.preference=e.value==="dark"?"light":"dark"}});return(a,u)=>{const l=R,d=G,r=h("motion");return n(),F(d,null,{fallback:z(()=>[K]),default:z(()=>[x(p(l,{icon:t(o)?"i-heroicons-moon-20-solid":"i-heroicons-sun-20-solid",color:"gray",variant:"ghost","aria-label":"Theme",onClick:u[0]||(u[0]=_=>o.value=!t(o))},null,8,["icon"]),[[r,("bottomToTop"in a?a.bottomToTop:t(y))()]])]),_:1})}}}),X=""+new URL("avatar.eab7fd22.avif",import.meta.url).href,Y=s("img",{src:X,class:"w-full h-full object-cover rounded-full"},null,-1),Z=[Y],N=m({__name:"WQAvatar",props:{size:{default:60}},setup(c){const e=c;return(o,a)=>(n(),i("div",{class:f(["bg-cover relative","before:content-[''] before:absolute before:top-0 before:scale-[1.6] before:bottom-0 before:bg-cover","before:left-0 before:right-0 before:bg-[url('~/assets/images/avatar-container.webp')]"]),style:k({width:`${e.size}px`,height:`${e.size}px`})},Z,6))}}),ee={key:0,class:"translate-y-[2px]"},W=m({__name:"Text",props:{size:{type:Number,default:14},gap:{type:Number,default:10},color:{type:String,default:"#fff"},icon:{type:String,default:""},text:{type:String,default:""}},setup(c){return(e,o)=>(n(),i("div",{class:"flex items-center",style:k({gap:`${c.gap}px`,fontSize:`${c.size}px`})},[c.icon?(n(),i("div",ee,[s("i",{class:f(c.icon)},null,2)])):b("",!0),s("span",null,C(c.text),1)],4))}}),te={class:"p-[30px_30px_0_30px]"},oe={class:"flex flex-col gap-[20px] mt-[50px]"},se=["onClick"],ne=m({__name:"Fixed",setup(c){const e=w(),o=B(),a=O();V();const u=L(),l=r=>{r.url.startsWith("http")?window.open(r.url,"_blank"):r.url==="dev"?o.add({title:"🧱 Tip",description:`待定喵. ${$[Math.floor(Math.random()*$.length)]}`}):(d(),e.active=r.value,a.push(r.url))},d=()=>{var r;(r=u.fixedMenu)==null||r.leave(()=>{e.fixedOpen=!1})};return(r,_)=>{const g=N,S=W,P=h("motion");return t(e).fixedOpen?x((n(),i("div",{key:0,class:"fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-[10]",onClick:d,initial:{opacity:0,x:5},enter:{opacity:1,x:0,transition:{duration:200,ease:"easeIn"}},leave:{opacity:0,x:5,transition:{duration:200,ease:"easeIn"}}},[s("div",{class:f(["h-full w-[220px] bg-[#EBF2ED] flex flex-col","dark:bg-[#101224]"]),onClick:_[0]||(_[0]=H(()=>{},["stop"]))},[s("div",te,[p(g,{size:50})]),s("div",oe,[(n(!0),i(T,null,I(t(e).menus,(v,U)=>(n(),i("div",{class:f(["relative px-[30px]",t(e).active===v.value&&"text-emerald-600",t(e).active===v.value&&"dark:text-blue-700",t(e).active===v.value&&"after:absolute after:right-0 after:top-0 after:h-full after:w-[2px] after:bg-emerald-500 dark:after:bg-blue-700"]),key:U,onClick:Ie=>l(v)},[p(S,{ref_for:!0,ref:"text_sec",class:"cursor-default",icon:v.icon,text:v.title},null,8,["icon","text"])],10,se))),128))])])])),[[P,"fixedMenu"]]):b("",!0)}}}),ae={class:f(["fixed top-0 left-0 right-0 h-[60px] bg-[#EBF2ED] z-[9] hidden px-[20px] shadow-lg","dark:bg-[#101224]","max-md:flex items-center"])},le=s("i",{class:"i-heroicons-swatch-solid w-5 h-5"},null,-1),ie=[le],re={class:"ml-auto"},ce=m({__name:"TopBar",setup(c){const e=w();return(o,a)=>{const u=A,l=ne;return n(),i(T,null,[s("div",ae,[s("div",{class:"grid place-content-center",onClick:a[0]||(a[0]=d=>t(e).fixedOpen=!0)},ie),s("div",re,[p(u)])]),p(l)],64)}}}),ue=m({__name:"MenuItem",props:{icon:{},title:{},value:{},delay:{}},setup(c){const e=w();return(o,a)=>{const u=W,l=h("motion");return x((n(),i("div",{class:f(["flex p-[10px] rounded-lg hover:bg-opacity-10 dark:hover:bg-opacity-20 select-none","hover:bg-emerald-500 hover:text-emerald-600","dark:hover:bg-blue-900 dark:hover:text-blue-700",t(e).active===o.value&&"bg-emerald-600 bg-opacity-10 text-emerald-600",t(e).active===o.value&&"dark:bg-blue-900 dark:bg-opacity-10 dark:text-blue-700"])},[p(u,{ref:"text_sec",class:"cursor-default",icon:o.icon,text:o.title},null,8,["icon","text"])],2)),[[l,("leftMontionConfig"in o?o.leftMontionConfig:t(E))(o.delay)]])}}}),pe={class:"flex flex-col gap-[10px] mt-[40px]"},de=m({__name:"Menu",setup(c){const e=w(),o=O(),a=B(),u=l=>{l.url.startsWith("http")?window.open(l.url,"_blank"):l.url==="dev"?a.add({title:"🧱 Tip",description:`待定喵. ${$[Math.floor(Math.random()*$.length)]}`}):(e.active=l.value,o.push(l.url))};return(l,d)=>{const r=ue;return n(),i("div",pe,[(n(!0),i(T,null,I(t(e).menus,(_,g)=>(n(),F(r,{key:g,value:_.value,title:_.title,icon:_.icon,delay:_.delay,onClick:S=>u(_)},null,8,["value","title","icon","delay","onClick"]))),128))])}}}),_e=m({__name:"Cover",props:{size:{},url:{}},setup(c){return(e,o)=>(n(),i("div",{class:f([`bg-white ${!e.size&&"h-full"} w-max p-[2px] rounded-sm`]),style:k({height:e.size&&`${e.size}px`})},[s("div",{class:f(["aspect-[1/1] bg-cover h-full"]),style:k({backgroundImage:`url(${e.url})`})},null,4)],6))}}),me={class:"flex relative h-[20px] w-[20px]"},fe={key:0,class:"i-iconamoon-playlist-repeat-list-fill text-[20px] absolute left-0 top-0"},xe={key:1,class:"i-iconamoon-playlist-repeat-song-fill text-[20px] absolute left-0 top-0"},he={key:2,class:"i-iconamoon-playlist-shuffle-fill text-[20px] absolute left-0 top-0"},ve=m({__name:"Status",props:{status:{default:M[0]}},setup(c){return(e,o)=>{const a=h("motion");return n(),i("div",me,[e.status==="repeat"?x((n(),i("i",fe,null,512)),[[a,("bottomToTop"in e?e.bottomToTop:t(y))()]]):b("",!0),e.status==="repeat-one"?x((n(),i("i",xe,null,512)),[[a,("bottomToTop"in e?e.bottomToTop:t(y))()]]):b("",!0),e.status==="shuffle"?x((n(),i("i",he,null,512)),[[a,("bottomToTop"in e?e.bottomToTop:t(y))()]]):b("",!0)])}}}),be={class:"flex gap-[5px] items-center"},ge={key:0,class:"i-heroicons-pause-circle-20-solid text-[30px] absolute top-0"},ye={key:1,class:"i-heroicons-play-circle-20-solid text-[30px] absolute top-0"},ke=m({__name:"PlayItem",setup(c){const e=D(),o=()=>{e.musics.indexOf(e.current)===0?e.current=e.musics[e.musics.length-1]:e.current=e.musics[e.musics.indexOf(e.current)-1],e.play(e.current)},a=()=>{e.musics.indexOf(e.current)===e.musics.length-1?e.current=e.musics[0]:e.current=e.musics[e.musics.indexOf(e.current)+1],e.play(e.current)};return(u,l)=>{var d;return n(),i("div",be,[s("i",{class:"i-heroicons-arrow-left-circle-solid text-[20px]",onClick:o}),s("div",{class:"relative h-[30px] w-[30px]",onClick:l[0]||(l[0]=r=>t(e).pauseHandle())},[(d=t(e).current)!=null&&d.pause?(n(),i("i",ye)):(n(),i("i",ge))]),s("i",{class:"i-heroicons-arrow-right-circle-solid text-[20px]",onClick:a})])}}}),$e={key:0,class:"absolute left-0 bottom-0 h-[70px] right-0 dark:bg-indigo-900 dark:bg-opacity-10 bg-[#F7FAF8] bg-opacity-80 p-[10px] flex items-center"},we={class:"flex flex-col gap-[5px] ml-[10px] relative z-10"},Te={class:"text-[13px] font-bold truncate w-[95px] overflow-hidden"},Ce={class:"text-[12px] text-gray-500 truncate w-[95px] overflow-hidden"},Me={class:"flex ml-auto items-center gap-[10px] relative z-10"},Se=m({__name:"Player",setup(c){const e=D(),o=()=>{e.playStatus=M[(M.indexOf(e.playStatus)+1)%3]};return(a,u)=>{const l=_e,d=ve,r=ke,_=h("motion");return t(e).current?x((n(),i("div",$e,[s("div",{class:"absolute left-0 h-full dark:bg-indigo-500 dark:bg-opacity-20 bg-emerald-600 bg-opacity-10 z-0",style:k({width:t(e).current.progress+"%"})},null,4),p(l,{class:"relative z-10",url:t(e).current.pid},null,8,["url"]),s("div",we,[s("div",Te,C(t(e).current.title),1),s("div",Ce,C(t(e).current.artist[0]),1)]),s("div",Me,[p(d,{status:t(e).playStatus,onClick:o},null,8,["status"]),p(r)])])),[[_,("bottomToTop"in a?a.bottomToTop:t(y))()]]):b("",!0)}}}),ze={class:"relative h-screen overflow-auto flex justify-center"},Fe={class:f(["sticky top-0 w-[300px] mt-[100px] h-[80%] rounded-l-lg p-[40px] overflow-hidden","bg-[#EBF2ED]","dark:bg-[#101224]","max-md:hidden"])},Be={class:f(["w-[700px] h-max my-[100px] rounded-r-lg bg-[#F6FAF8] flex flex-col","dark:bg-[#161829]","sticky top-0","max-md:rounded-lg"])},Oe={class:f(["w-max h-max sticky top-[10px] mt-[100px] ml-[10px]","max-md:hidden"])},We=m({__name:"default",setup(c){return(e,o)=>{const a=ce,u=N,l=de,d=Se,r=A,_=h("motion"),g=h("auto-animate");return n(),i(T,null,[p(a),s("div",ze,[s("div",Fe,[x(p(u,{size:50},null,512),[[_,t(E)()]]),p(l),p(d)]),s("div",Be,[q(e.$slots,"default")]),x((n(),i("div",Oe,[p(r)])),[[g]])])],64)}}});export{We as default};