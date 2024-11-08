import{_ as F,w as V,r,a as E,b as A,o as s,c as n,d,F as L,e as $,n as D,u as l,t as y,f as g,g as I,h as C,i as w,j as M,k,l as S,m as G,s as B}from"./index-BrrqEwHz.js";const H={key:0,class:"lib-channel-container"},N=["onClick"],R={style:{"padding-right":"4px"}},U={key:0,class:"pi pi-chevron-down"},P={key:1,class:"pi pi-chevron-up"},T={__name:"ListItem",props:{modelValue:{type:[String,Number]},list:{type:Array,required:!0},itemHeight:{type:String,default:"28px"}},emits:["change","update:modelValue"],setup(p,{emit:h}){I(f=>({ddf4a51e:l(c)}));const a=h,o=p;V(()=>o.modelValue,()=>{m.value=o.modelValue});const c=r(o.itemHeight),v=r(null),m=r(o.modelValue),i=r(!1),e=r(!1),u=f=>{m.value=f.value,a("update:modelValue",f.value),a("change",f.value)},t=()=>{const f=v.value;i.value=f.scrollHeight>parseInt(c.value)},_=()=>{e.value=!e.value,v.value.style.height=e.value?"auto":c.value};return E(()=>{o.list.length&&(t(),window.addEventListener("resize",t))}),A(()=>{window.removeEventListener("resize",t)}),(f,s2)=>p.list.length?(s(),n("div",H,[d("div",{class:"lib-channel",ref_key:"channelRef",ref:v},[(s(!0),n(L,null,$(p.list,(x,z)=>(s(),n("span",{key:z,class:D(["channel-item",{active:x.value===l(m)}]),onClick:a2=>u(x)},y(x.label),11,N))),128))],512),l(i)?(s(),n("div",{key:0,class:"lib-expand-btn",onClick:_},[d("span",R,y(l(e)?"收起":"展开"),1),l(e)?(s(),n("i",P)):(s(),n("i",U))])):g("",!0)])):g("",!0)}},b=F(T,[["__scopeId","data-v-5e0f96a2"]]),j="data:image/svg+xml,%3csvg%20width='130'%20height='80'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20x1='52.348%25'%20y1='74.611%25'%20x2='52.348%25'%20y2='-17.635%25'%20id='a'%3e%3cstop%20stop-color='%23DEDEDE'%20stop-opacity='0'%20offset='0%25'/%3e%3cstop%20stop-color='%23A9A9A9'%20stop-opacity='.3'%20offset='100%25'/%3e%3c/linearGradient%3e%3clinearGradient%20x1='44.79%25'%20y1='100%25'%20x2='44.79%25'%20y2='0%25'%20id='b'%3e%3cstop%20stop-color='%23FFF'%20stop-opacity='0'%20offset='0%25'/%3e%3cstop%20stop-color='%2396A1C5'%20stop-opacity='.373'%20offset='100%25'/%3e%3c/linearGradient%3e%3clinearGradient%20x1='50%25'%20y1='100%25'%20x2='50%25'%20y2='-19.675%25'%20id='c'%3e%3cstop%20stop-color='%23FFF'%20stop-opacity='0'%20offset='0%25'/%3e%3cstop%20stop-color='%23919191'%20stop-opacity='.15'%20offset='100%25'/%3e%3c/linearGradient%3e%3clinearGradient%20x1='50%25'%20y1='0%25'%20x2='50%25'%20y2='44.95%25'%20id='d'%3e%3cstop%20stop-color='%235389F5'%20offset='0%25'/%3e%3cstop%20stop-color='%23416FDC'%20offset='100%25'/%3e%3c/linearGradient%3e%3clinearGradient%20x1='63.345%25'%20y1='100%25'%20x2='63.345%25'%20y2='-5.316%25'%20id='e'%3e%3cstop%20stop-color='%23DCE9FF'%20offset='0%25'/%3e%3cstop%20stop-color='%23B6CFFF'%20offset='100%25'/%3e%3c/linearGradient%3e%3clinearGradient%20x1='50%25'%20y1='0%25'%20x2='50%25'%20y2='100%25'%20id='f'%3e%3cstop%20stop-color='%237CA5F7'%20offset='0%25'/%3e%3cstop%20stop-color='%23C4D6FC'%20offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20transform='translate(-1.866%20.364)'%20fill='none'%20fill-rule='evenodd'%3e%3cpath%20d='M27.94%2014.864c1.326-4.192%202.56-6.802%203.7-7.831%203.157-2.848%207.522-1.298%208.45-1.076%203.26.782%202.2-4.364%204.997-5.41%201.864-.697%203.397.155%204.6%202.556C50.752.863%2052.375-.163%2054.556.02c3.272.277%204.417%2011.328%208.913%208.909%204.497-2.42%2010.01-2.973%2012.365.623.509.778.704-.429%204.166-4.55C83.462.88%2086.914-.936%2093.996%201.464c3.22%201.09%205.868%204.045%207.947%208.864%200%206.878%205.06%2010.95%2015.178%2012.213%2015.179%201.895%203.397%2018.214-15.178%2022.993-18.576%204.78-61.343%207.36-84.551-4.716C1.92%2032.769%205.436%2024.117%2027.939%2014.864z'%20fill='url(%23a)'%20opacity='.8'/%3e%3cellipse%20fill='url(%23b)'%20cx='66'%20cy='69.166'%20rx='27.987'%20ry='6.478'/%3e%3cpath%20d='M113.25%2077.249c-21.043%205.278-92.87-.759-100.515-3.516-3.721-1.343-7.075-3.868-10.061-7.576a2.822%202.822%200%200%201%202.198-4.593h125.514c2.605%206.938-3.107%2012.166-17.136%2015.685z'%20fill='url(%23c)'%20opacity='.675'/%3e%3cg%20fill-rule='nonzero'%3e%3cpath%20d='M43.396%2012.098L33.825.906a2.434%202.434%200%200%200-1.837-.86h-20.58c-.706%200-1.377.324-1.837.86L0%2012.098v6.144h43.396v-6.144z'%20fill='url(%23d)'%20transform='translate(44.08%2039.707)'/%3e%3cpath%20d='M40.684%2018.468L32.307%208.72a2.136%202.136%200%200%200-1.622-.725H12.711c-.617%200-1.22.256-1.622.725l-8.377%209.748v5.354h37.972v-5.354z'%20fill='url(%23e)'%20transform='translate(44.08%2039.707)'/%3e%3cpath%20d='M43.396%2025.283c0%20.853-.384%201.62-.99%202.134l-.123.1a2.758%202.758%200%200%201-1.67.56H2.784c-.342%200-.669-.062-.971-.176l-.15-.06A2.802%202.802%200%200%201%200%2025.282V12.165h10.529c1.163%200%202.1.957%202.1%202.118v.015c0%201.162.948%202.099%202.111%202.099h13.916a2.113%202.113%200%200%200%202.111-2.107c0-1.166.938-2.125%202.1-2.125h10.53z'%20fill='url(%23f)'%20transform='translate(44.08%2039.707)'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",q={class:"empty"},O=["src"],J={__name:"index",props:{emptyText:{type:String,default:"暂无数据"},url:{type:String,default:j}},setup(p){return(h,a)=>(s(),n("div",q,[d("img",{src:p.url,alt:"empty"},null,8,O),d("p",null,y(p.emptyText),1)]))}},K=F(J,[["__scopeId","data-v-969e7d5f"]]),Q={class:"resource"},W={key:0,class:"resource-body"},X=["onClick"],Y={class:"name"},Z=["src"],e2={class:"label"},t2=["title"],l2={__name:"index",setup(p){const h=r(k[0].value),a=r(null),o=r([]),c=r([]),v=i=>{var u,t;const e=k.find(_=>_.value===i)||{};e.hasChildren?(o.value=e.children,a.value=(t=(u=e.children)==null?void 0:u[0])==null?void 0:t.value,c.value=[]):(o.value=[],a.value=null,c.value=e.children||[])},m=i=>{var e;i&&(a.value=i,c.value=((e=o.value.find(u=>u.value===i))==null?void 0:e.children)||[])};return V(()=>h.value,v,{immediate:!0}),V(()=>a.value,m,{immediate:!0}),(i,e)=>{const u=B;return s(),n("div",Q,[C(b,{modelValue:l(h),"onUpdate:modelValue":e[0]||(e[0]=t=>w(h)?h.value=t:null),list:l(k)},null,8,["modelValue","list"]),C(b,{modelValue:l(a),"onUpdate:modelValue":e[1]||(e[1]=t=>w(a)?a.value=t:null),list:l(o)},null,8,["modelValue","list"]),l(c).length?(s(),n("div",W,[(s(!0),n(L,null,$(l(c),(t,_)=>(s(),n("div",{class:"item landing",key:_,onClick:()=>l(S)(t.link)},[C(u,null,{title:G(()=>[d("div",Y,[d("span",null,[d("img",{style:{width:"30px",height:"30px"},src:t.logo},null,8,Z)]),d("span",e2,y(t.label),1)])]),content:G(()=>[d("div",{class:"content-desc",title:t.desc},y(t.desc),9,t2)]),_:2},1024)],8,X))),128))])):g("",!0),l(c).length?g("",!0):(s(),M(K,{key:1,style:{"margin-top":"10px"}}))])}}},o2=F(l2,[["__scopeId","data-v-6380c670"]]);export{o2 as default};