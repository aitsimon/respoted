import{_ as w,a7 as b,m as _,x as I,o as a,c as l,w as y,a0 as t,ae as d,a as r,a3 as s,X as z,aN as C,aw as P,ay as Q,a2 as S,an as q,aO as B,ao as A,az as N,aA as $}from"./index.1c897ed3.js";import{Q as j}from"./QImg.57e6efac.js";import{Q as v}from"./QCircularProgress.00e5179d.js";import{Q as E}from"./QPage.e63976a5.js";import{u as L}from"./use-quasar.4bcd9f96.js";import{u as R}from"./auxApiService.c5a2ff45.js";import{u as T}from"./fetchService.ed6b6eff.js";import{_ as V}from"./BaseLikeBtn.703acdf8.js";import{_ as O}from"./BaseBackArrow.9cf4d403.js";import"./format.801e7424.js";const D=c=>(N("data-v-63677a54"),c=c(),$(),c),F={key:0,class:"q-px-xs-xs column no-wrap"},G={class:"column no-wrap q-mx-md-xl"},M=D(()=>s("div",{class:"column flex-start nowrap col-12 q-my-sm"},[s("h1",{class:"text-h3 q-mb-xs text-capitalize"},"Custom Playlist"),s("span",{class:"playlistDescription"},"A playlist based on your selections. You can save it by clicking in the aside button")],-1)),U={class:"row justify-between items-center q-mt-sm"},X={class:"listOfItems column col-12 no-wrap"},Y={class:"track row items-center justify-between q-py-sm"},H=["onClick"],J={class:"column col-8"},K={class:"songName ellipsis-2-lines"},W={class:"col-2 heartBtnContainer"},Z={key:1},ee={__name:"RecommendedPlaylist",setup(c){const n=L();let m=R(),{userProfile:k}=T();const x=b();let o=_(),f=_([]),p=_([]);I(async()=>{o.value=m.recommendations,o.value.tracks.forEach(i=>{f.value.push(i.id)}),p.value=await m.checkUserSavedTracks(f.value)});function g(){n.dialog({title:"Create a new playlist",message:"Enter a name for the new playlist",prompt:{model:"",isValid:i=>i.length>0},cancel:!0,persistent:!0}).onOk(async i=>{let u=await m.createPlaylist(i,k.id);if(u){let e=[];o.value.tracks.forEach(h=>{e.push(h.uri)}),m.addTracksToPlaylist(u.id,e.join(",")),n.notify({message:"Playlist created",color:"positive",icon:"playlist_add_check"})}})}return(i,u)=>(a(),l(E,{class:"full-width"},{default:y(()=>[t(o)?(a(),d("div",F,[r(O),s("div",G,[M,s("div",U,[r(z,{color:"accent",icon:"save",label:"Create",size:t(n).screen.lt.md?"md":"lg",onClick:g},null,8,["size"])]),r(C,{class:"q-my-xl",size:"1px",color:"overallBGit"}),s("div",X,[(a(!0),d(P,null,Q(t(o).tracks,e=>(a(),d("div",Y,[s("div",{class:"col-9 row justify-between items-center",onClick:h=>t(x).push({path:`/playing/${e.track.id}`})},[e.album.images[0]?(a(),l(j,{key:0,class:"col-3 trackCover",src:e.album.images[0].url,ratio:1,fit:"contain","spinner-color":"primary","spinner-size":"100%","img-class":"q-mr-sm-xs"},null,8,["src"])):(a(),l(S,{key:1,tag:"i",name:"map",color:"primary",left:!1,right:!1,size:"16px"})),s("div",J,[s("span",K,q(e.name),1)])],8,H),s("div",W,[(a(),l(B,null,{fallback:y(()=>[r(v,{indeterminate:"",rounded:"",size:"20px",color:"primary",class:"absolute-center"})]),default:y(()=>[t(p)[e.id]!==void 0?(a(),l(V,{key:0,isLiked:t(p)[e.id],idItem:e.id,typeItem:"tracks",size:t(n).screen.lt.md?"md":"lg"},null,8,["isLiked","idItem","size"])):A("",!0)]),_:2},1024))])]))),256))])])])):(a(),d("div",Z,[r(v,{indeterminate:"",rounded:"",size:"50px",color:"primary",class:"absolute-center"})]))]),_:1}))}};var de=w(ee,[["__scopeId","data-v-63677a54"]]);export{de as default};