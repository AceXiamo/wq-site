import{d as r,O as n,al as c,ad as h,l,am as o,b as d,c as u,H as f}from"./entry.89a40982.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=c(h(l().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return o(s,t.src)}return t.src});return(a,s)=>(d(),u("img",{src:f(i),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};
