import{_ as w,ad as k,a7 as z,m as u,x as b,a0 as t,o as s,ae as r,a3 as e,a as n,aB as I,an as l,a4 as $,aw as _,ay as p,c as o,ao as f,aN as A,a2 as N,w as h,aO as Q}from"./index.1c897ed3.js";import{Q as B}from"./QImg.57e6efac.js";import{Q as C}from"./QCircularProgress.00e5179d.js";import{_ as y,Q as j}from"./BaseLikeBtn.703acdf8.js";import{u as q}from"./auxApiService.c5a2ff45.js";import{_ as S}from"./BasePlayBtn.5e662f23.js";import{_ as T}from"./BaseBackArrow.9cf4d403.js";import"./format.801e7424.js";import"./fetchService.ed6b6eff.js";const V={key:0},R={class:"column"},G={class:"column justify-end items-start"},L={class:"row justify-start text-accent full-height items-end text-h3 self-end"},M={class:"col-12 text-h3 q-my-none artistName"},D={class:"row justify-between items-center q-mt-xl"},E={class:"col-8 text-info column"},F={class:"text-subtitle1"},O={class:"text-subtitle1"},P={class:"text-capitalize"},H={class:"col-4z row flex-center"},J={class:"column"},K={class:"track row items-center justify-between q-py-sm"},U=["onClick"],W={class:"column col-8"},X={class:"songName ellipsis-2-lines"},Y={class:"col-2 heartBtnContainer row justify-end"},Z={__name:"Artist",setup(ee){const c=k(),g=z(),{getArtist:v,getTopArtistTracks:x}=q();let a=u({}),m=u([]);return b(async()=>{a.value=await v(c.params.id),m.value=await x(c.params.id)}),(d,se)=>t(a).images?(s(),r("div",V,[e("div",R,[n(T),e("div",G,[e("div",{style:I(`background-image: url(${t(a).images[0].url}); height: 30rem;`),class:"artistNameContainer full-width rounded-borders"},[e("div",L,[e("h1",M,l(t(a).name),1)])],4)]),e("div",D,[e("div",E,[e("span",F,l(t(a).followers.total)+" Monthly Listeners",1),e("span",O,[$("Genres: "),(s(!0),r(_,null,p(t(a).genres,i=>(s(),r("span",P,l(`${i} `),1))),256))])]),e("div",H,[t(a).id?(s(),o(S,{key:0,input:t(a).uri,type:"artists",size:d.$q.screen.lt.md?"md":"lg"},null,8,["input","size"])):f("",!0),n(y,{idItem:t(a).id,typeItem:"artists",size:d.$q.screen.lt.md?"md":"lg"},null,8,["idItem","size"])])]),n(A,{class:"q-my-xl",size:"1px",color:"overallBGit"}),e("div",J,[(s(!0),r(_,null,p(t(m).tracks,i=>(s(),r("div",K,[e("div",{class:"col-9 row justify-around items-center",onClick:te=>t(g).push({path:`/playing/${i.id}`})},[i.album.images[0]?(s(),o(B,{key:0,class:"col-3",src:i.album.images[0].url,ratio:1,fit:"contain",width:"5rem","spinner-color":"primary","spinner-size":"82px"},null,8,["src"])):(s(),o(N,{key:1,tag:"i",name:"map",color:"primary",left:!1,right:!1,size:"16px"})),e("div",W,[e("span",X,l(i.name),1)])],8,U),e("div",Y,[(s(),o(Q,null,{fallback:h(()=>[n(C,{indeterminate:"",rounded:"",size:"20px",color:"primary",class:"absolute-center"})]),default:h(()=>[i.id!==void 0?(s(),o(y,{key:0,idItem:i.id,typeItem:"tracks"},null,8,["idItem"])):f("",!0)]),_:2},1024))])]))),256))])])])):(s(),o(j,{key:1,color:"secondary",size:"3rem",thickness:3}))}};var ue=w(Z,[["__scopeId","data-v-257e60f0"]]);export{ue as default};