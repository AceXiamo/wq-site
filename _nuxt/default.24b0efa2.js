import{g as p,o as s,c as a,n as f,V as b,a as l,z as x,t as k,aj as w,R as g,S as m,h as o,b as d,ak as F,al as I,F as B,U as O,x as C,a6 as A,q as D,w as T,W as N,y as U}from"./entry.4af28d24.js";import{l as M,b as v}from"./motions.22830312.js";import{M as $,u as S}from"./music.ed38d2c1.js";import{_ as W}from"./client-only.1efbe733.js";const j=""+new URL("avatar.eab7fd22.avif",import.meta.url).href,P=l("img",{src:j,class:"w-full h-full object-cover rounded-full"},null,-1),V=[P],q=p({__name:"WQAvatar",props:{size:{default:60}},setup(r){const e=r;return(t,n)=>(s(),a("div",{class:f(["bg-cover relative","before:content-[''] before:absolute before:top-0 before:scale-[1.6] before:bottom-0 before:bg-cover","before:left-0 before:right-0 before:bg-[url('~/assets/images/avatar-container.webp')]"]),style:b({width:`${e.size}px`,height:`${e.size}px`})},V,6))}}),E={key:0,class:"translate-y-[2px]"},R=p({__name:"Text",props:{size:{type:Number,default:14},gap:{type:Number,default:10},color:{type:String,default:"#fff"},icon:{type:String,default:""},text:{type:String,default:""}},setup(r){return(e,t)=>(s(),a("div",{class:"flex items-center",style:b({gap:`${r.gap}px`,fontSize:`${r.size}px`})},[r.icon?(s(),a("div",E,[l("i",{class:f(r.icon)},null,2)])):x("",!0),l("span",null,k(r.text),1)],4))}}),L=p({__name:"MenuItem",props:{icon:{},title:{},value:{},delay:{}},setup(r){const e=w();return(t,n)=>{const c=R,u=g("motion");return m((s(),a("div",{class:f(["flex p-[10px] rounded-lg hover:bg-opacity-10 dark:hover:bg-opacity-20 select-none","hover:bg-emerald-500 hover:text-emerald-600","dark:hover:bg-blue-900 dark:hover:text-blue-700",o(e).active===t.value&&"bg-emerald-600 bg-opacity-10 text-emerald-600",o(e).active===t.value&&"dark:bg-blue-900 dark:bg-opacity-10 dark:text-blue-700"])},[d(c,{ref:"text_sec",class:"cursor-default",icon:t.icon,text:t.title},null,8,["icon","text"])],2)),[[u,("leftMontionConfig"in t?t.leftMontionConfig:o(M))(t.delay)]])}}}),Q={class:"flex flex-col gap-[10px] mt-[40px]"},G=p({__name:"Menu",setup(r){const e=w(),t=F(),n=I(),c=["🌱","🌲","🌳","🌴","🌵","🌾","🌿","🍀","🍁","🍂","🍃","🌤","🌥","🌦","🌧","🌨","🌩","🌪","🌫","🌬","🌈","☀️","💐","🌸","💮","🏵","🌹","🥀","🌺","🌻","🌼"],u=i=>{i.url.startsWith("http")?window.open(i.url,"_blank"):i.url==="dev"?n.add({title:"🧱 Tip",description:`待定喵. ${c[Math.floor(Math.random()*c.length)]}`}):(e.active=i.value,t.push(i.url))};return(i,_)=>{const y=L;return s(),a("div",Q,[(s(!0),a(B,null,O(o(e).menus,(h,z)=>(s(),C(y,{key:z,value:h.value,title:h.title,icon:h.icon,delay:h.delay,onClick:xe=>u(h)},null,8,["value","title","icon","delay","onClick"]))),128))])}}}),H=p({__name:"Cover",props:{size:{},url:{}},setup(r){return(e,t)=>(s(),a("div",{class:f([`bg-white ${!e.size&&"h-full"} w-max p-[2px] rounded-sm`]),style:b({height:e.size&&`${e.size}px`})},[l("div",{class:f(["aspect-[1/1] bg-cover h-full"]),style:b({backgroundImage:`url(${e.url})`})},null,4)],6))}}),J={class:"flex relative h-[20px] w-[20px]"},K={key:0,class:"i-iconamoon-playlist-repeat-list-fill text-[20px] absolute left-0 top-0"},X={key:1,class:"i-iconamoon-playlist-repeat-song-fill text-[20px] absolute left-0 top-0"},Y={key:2,class:"i-iconamoon-playlist-shuffle-fill text-[20px] absolute left-0 top-0"},Z=p({__name:"Status",props:{status:{default:$[0]}},setup(r){return(e,t)=>{const n=g("motion");return s(),a("div",J,[e.status==="repeat"?m((s(),a("i",K,null,512)),[[n,("bottomToTop"in e?e.bottomToTop:o(v))()]]):x("",!0),e.status==="repeat-one"?m((s(),a("i",X,null,512)),[[n,("bottomToTop"in e?e.bottomToTop:o(v))()]]):x("",!0),e.status==="shuffle"?m((s(),a("i",Y,null,512)),[[n,("bottomToTop"in e?e.bottomToTop:o(v))()]]):x("",!0)])}}}),ee={class:"flex gap-[5px] items-center"},te={key:0,class:"i-heroicons-pause-circle-20-solid text-[30px] absolute top-0"},oe={key:1,class:"i-heroicons-play-circle-20-solid text-[30px] absolute top-0"},se=p({__name:"PlayItem",setup(r){const e=S(),t=()=>{e.musics.indexOf(e.current)===0?e.current=e.musics[e.musics.length-1]:e.current=e.musics[e.musics.indexOf(e.current)-1],e.play(e.current)},n=()=>{e.musics.indexOf(e.current)===e.musics.length-1?e.current=e.musics[0]:e.current=e.musics[e.musics.indexOf(e.current)+1],e.play(e.current)};return(c,u)=>{var i;return s(),a("div",ee,[l("i",{class:"i-heroicons-arrow-left-circle-solid text-[20px]",onClick:t}),l("div",{class:"relative h-[30px] w-[30px]",onClick:u[0]||(u[0]=_=>o(e).pauseHandle())},[(i=o(e).current)!=null&&i.pause?(s(),a("i",oe)):(s(),a("i",te))]),l("i",{class:"i-heroicons-arrow-right-circle-solid text-[20px]",onClick:n})])}}}),ne={key:0,class:"absolute left-0 bottom-0 h-[70px] right-0 dark:bg-indigo-900 dark:bg-opacity-10 bg-[#F7FAF8] bg-opacity-80 p-[10px] flex items-center"},le={class:"flex flex-col gap-[5px] ml-[10px] relative z-10"},ae={class:"text-[13px] font-bold truncate w-[95px] overflow-hidden"},re={class:"text-[12px] text-gray-500 truncate w-[95px] overflow-hidden"},ie={class:"flex ml-auto items-center gap-[10px] relative z-10"},ce=p({__name:"Player",setup(r){const e=S(),t=()=>{e.playStatus=$[($.indexOf(e.playStatus)+1)%3]};return(n,c)=>{const u=H,i=Z,_=se,y=g("motion");return o(e).current?m((s(),a("div",ne,[l("div",{class:"absolute left-0 h-full dark:bg-indigo-500 dark:bg-opacity-20 bg-emerald-600 bg-opacity-10 z-0",style:b({width:o(e).current.progress+"%"})},null,4),d(u,{class:"relative z-10",url:"https://image.qwq.link/images/2023/08/30/WechatIMG146.png"},null,8,["url"]),l("div",le,[l("div",ae,k(o(e).current.title),1),l("div",re,k(o(e).current.artist[0]),1)]),l("div",ie,[d(i,{status:o(e).playStatus,onClick:t},null,8,["status"]),d(_)])])),[[y,("bottomToTop"in n?n.bottomToTop:o(v))()]]):x("",!0)}}}),ue=()=>A("color-mode").value,pe=l("div",{class:"w-8 h-8"},null,-1),de=p({__name:"ColorMode",setup(r){const e=ue(),t=D({get(){return e.value==="dark"},set(){e.preference=e.value==="dark"?"light":"dark"}});return(n,c)=>{const u=N,i=W,_=g("motion");return s(),C(i,null,{fallback:T(()=>[pe]),default:T(()=>[m(d(u,{icon:o(t)?"i-heroicons-moon-20-solid":"i-heroicons-sun-20-solid",color:"gray",variant:"ghost","aria-label":"Theme",onClick:c[0]||(c[0]=y=>t.value=!o(t))},null,8,["icon"]),[[_,("bottomToTop"in n?n.bottomToTop:o(v))()]])]),_:1})}}}),_e={class:"relative h-screen overflow-auto flex justify-center"},me={class:f(["sticky top-0 w-[300px] mt-[100px] h-[80%] rounded-l-lg p-[40px] overflow-hidden","bg-[#EBF2ED]","dark:bg-[#101224]"])},fe={class:f(["w-[700px] h-max my-[100px] rounded-r-lg rounded-bl-lg bg-[#F6FAF8] flex flex-col","dark:bg-[#161829]","sticky top-0"])},he={class:"w-max h-max sticky top-[10px] mt-[100px] ml-[10px]"},ke=p({__name:"default",setup(r){return(e,t)=>{const n=q,c=G,u=ce,i=de,_=g("motion");return s(),a("div",_e,[l("div",me,[m(d(n,{size:50},null,512),[[_,o(M)()]]),d(c),d(u)]),l("div",fe,[U(e.$slots,"default")]),l("div",he,[d(i)])])}}});export{ke as default};