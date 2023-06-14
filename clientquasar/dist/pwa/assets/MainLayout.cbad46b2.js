import{a as j}from"./QResizeObserver.d4ca912a.js";import{d as A,i as H,e as B,l as D,m as q,f,t as x,y as W,af as oe,h as d,j as N,n as ne,v as R,z as le,ag as E,X as F,a2 as U,ah as re,ai as ie,aj as se,ak as ue,p as ce,g as de,a7 as K,o as $,c as O,w as Q,a as g,a0 as p,a1 as fe,ac as J,_ as X,ae as I,al as me,am as ve,x as he,a3 as z,an as T,ao as G,r as ge}from"./index.1c897ed3.js";import{Q as be,a as pe}from"./QLayout.4fa937d1.js";import{u as Y}from"./use-quasar.4bcd9f96.js";import{u as ye}from"./auxApiService.c5a2ff45.js";import{u as _e}from"./fetchService.ed6b6eff.js";import{u as M}from"./playerService.0b7b5f0b.js";import{Q as we}from"./QImg.57e6efac.js";import{_ as ke}from"./BaseLikeBtn.703acdf8.js";var xe=A({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:r}){const{proxy:{$q:s}}=N(),t=H(D,B);if(t===B)return console.error("QHeader needs to be child of QLayout"),B;const m=q(parseInt(e.heightHint,10)),u=q(!0),o=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||s.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(o.value===!0)return u.value===!0?m.value:0;const a=m.value-t.scroll.value.position;return a>0?a:0}),n=f(()=>e.modelValue!==!0||o.value===!0&&u.value!==!0),v=f(()=>e.modelValue===!0&&n.value===!0&&e.reveal===!0),h=f(()=>"q-header q-layout__section--marginal "+(o.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(n.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=f(()=>{const a=t.rows.value.top,_={};return a[0]==="l"&&t.left.space===!0&&(_[s.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(_[s.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),_});function b(a,_){t.update("header",a,_)}function S(a,_){a.value!==_&&(a.value=_)}function y({height:a}){S(m,a),b("size",a)}function w(a){v.value===!0&&S(u,!0),r("focusin",a)}x(()=>e.modelValue,a=>{b("space",a),S(u,!0),t.animate()}),x(c,a=>{b("offset",a)}),x(()=>e.reveal,a=>{a===!1&&S(u,e.modelValue)}),x(u,a=>{t.animate(),r("reveal",a)}),x(t.scroll,a=>{e.reveal===!0&&S(u,a.direction==="up"||a.position<=e.revealOffset||a.position-a.inflectionPoint<100)});const L={};return t.instances.header=L,e.modelValue===!0&&b("size",m.value),b("space",e.modelValue),b("offset",c.value),W(()=>{t.instances.header===L&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const a=oe(l.default,[]);return e.elevated===!0&&a.push(d("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(d(j,{debounce:0,onResize:y})),d("header",{class:h.value,style:C.value,onFocusin:w},a)}}}),Se=A({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:r}){const{proxy:{$q:s}}=N(),t=H(D,B);if(t===B)return console.error("QFooter needs to be child of QLayout"),B;const m=q(parseInt(e.heightHint,10)),u=q(!0),o=q(ne.value===!0||t.isContainer.value===!0?0:window.innerHeight),c=f(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||s.platform.is.ios&&t.isContainer.value===!0),n=f(()=>t.isContainer.value===!0?t.containerHeight.value:o.value),v=f(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return u.value===!0?m.value:0;const i=t.scroll.value.position+n.value+m.value-t.height.value;return i>0?i:0}),h=f(()=>e.modelValue!==!0||c.value===!0&&u.value!==!0),C=f(()=>e.modelValue===!0&&h.value===!0&&e.reveal===!0),b=f(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(h.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),S=f(()=>{const i=t.rows.value.bottom,k={};return i[0]==="l"&&t.left.space===!0&&(k[s.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),i[2]==="r"&&t.right.space===!0&&(k[s.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),k});function y(i,k){t.update("footer",i,k)}function w(i,k){i.value!==k&&(i.value=k)}function L({height:i}){w(m,i),y("size",i)}function a(){if(e.reveal!==!0)return;const{direction:i,position:k,inflectionPoint:ae}=t.scroll.value;w(u,i==="up"||k-ae<100||t.height.value-n.value-k-m.value<300)}function _(i){C.value===!0&&w(u,!0),r("focusin",i)}x(()=>e.modelValue,i=>{y("space",i),w(u,!0),t.animate()}),x(v,i=>{y("offset",i)}),x(()=>e.reveal,i=>{i===!1&&w(u,e.modelValue)}),x(u,i=>{t.animate(),r("reveal",i)}),x([m,t.scroll,t.height],a),x(()=>s.screen.height,i=>{t.isContainer.value!==!0&&w(o,i)});const V={};return t.instances.footer=V,e.modelValue===!0&&y("size",m.value),y("space",e.modelValue),y("offset",v.value),W(()=>{t.instances.footer===V&&(t.instances.footer=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const i=R(l.default,[d(j,{debounce:0,onResize:L})]);return e.elevated===!0&&i.push(d("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d("footer",{class:b.value,style:S.value,onFocusin:_},i)}}});const Ce=["top","right","bottom","left"],Z={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>Ce.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function ee(e,l){return{formClass:f(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:f(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:f(()=>{if(e.externalLabel===!0){const r=e.hideLabel===null?l.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(r===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const te={start:"self-end",center:"self-center",end:"self-start"},qe=Object.keys(te);var P=A({name:"QFabAction",props:{...Z,icon:{type:String,default:""},anchor:{type:String,validator:e=>qe.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:l,emit:r}){const s=H(E,()=>({showing:{value:!0},onChildClick:le})),{formClass:t,labelProps:m}=ee(e,s.showing),u=f(()=>{const h=te[e.anchor];return t.value+(h!==void 0?` ${h}`:"")}),o=f(()=>e.disable===!0||s.showing.value!==!0);function c(h){s.onChildClick(h),r("click",h)}function n(){const h=[];return l.icon!==void 0?h.push(l.icon()):e.icon!==""&&h.push(d(U,{name:e.icon})),(e.label!==""||l.label!==void 0)&&h[m.value.action](d("div",m.value.data,l.label!==void 0?l.label():[e.label])),R(l.default,h)}const v=N();return Object.assign(v.proxy,{click:c}),()=>d(F,{class:u.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:o.value,onClick:c},n)}});const $e=["up","right","down","left"],Pe=["left","center","right"];var Le=A({name:"QFab",props:{...Z,...re,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>$e.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>Pe.includes(e)}},emits:ie,setup(e,{slots:l}){const r=q(null),s=q(e.modelValue===!0),t=se(),{proxy:{$q:m}}=N(),{formClass:u,labelProps:o}=ee(e,s),c=f(()=>e.persistent!==!0),{hide:n,toggle:v}=ue({showing:s,hideOnRouteChange:c}),h=f(()=>({opened:s.value})),C=f(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${u.value}`+(s.value===!0?" q-fab--opened":" q-fab--closed")),b=f(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${s.value===!0?"opened":"closed"}`),S=f(()=>{const a={id:t,role:"menu"};return s.value!==!0&&(a["aria-hidden"]="true"),a}),y=f(()=>`q-fab__icon-holder  q-fab__icon-holder--${s.value===!0?"opened":"closed"}`);function w(a,_){const V=l[a],i=`q-fab__${a} absolute-full`;return V===void 0?d(U,{class:i,name:e[_]||m.iconSet.fab[_]}):d("div",{class:i},V(h.value))}function L(){const a=[];return e.hideIcon!==!0&&a.push(d("div",{class:y.value},[w("icon","icon"),w("active-icon","activeIcon")])),(e.label!==""||l.label!==void 0)&&a[o.value.action](d("div",o.value.data,l.label!==void 0?l.label(h.value):[e.label])),R(l.tooltip,a)}return ce(E,{showing:s,onChildClick(a){n(a),r.value!==null&&r.value.$el.focus()}}),()=>d("div",{class:C.value},[d(F,{ref:r,class:u.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":s.value===!0?"true":"false","aria-haspopup":"true","aria-controls":t,onClick:v},L),d("div",{class:b.value,...S.value},de(l.default))])}});const Be={__name:"TheMenuButton",setup(e){const l=K();let r=q(!1);const s=Y(),t=async()=>{const c=window.deferredPrompt;if(console.log("promptEvent",c),!!c&&(console.log(o()),!m.value&&o()!=="safari"&&o()!=="firefox"&&(console.log("installApp"),c.prompt(),await deferredPrompt.userChoice==="dismissed")))return console.log(`User response to the install prompt: ${outcome}`),deferredPrompt=null,""},m=f(()=>window.matchMedia("(display-mode: standalone)").matches?(console.log("This IS running as standalone."),!0):(console.log("This is NOT running as standalone."),!1));function u(c){switch(c){case"profile":l.push({name:"Profile"});break;case"theme":s.dark.toggle();break;case"logout":J().$reset(),ye().$reset(),_e().$reset(),M().$reset(),sessionStorage.clear(),l.push({name:"Login"});break;case"home":l.push({name:"Dashboard"});break;case"library":l.push({name:"Library"});break;case"recommender":l.push({name:"Recommender"});break;case"activatePlayer":M().player.activateElement();break;case"download":t();break}}const o=()=>{const c=navigator.userAgent;let n;return c.match(/chrome|chromium|crios/i)?n="chrome":c.match(/firefox|fxios/i)?n="firefox":c.match(/safari/i)?n="safari":c.match(/opr\//i)?n="opera":c.match(/edg/i)?n="edge":n="No browser detection",n};return(c,n)=>($(),O(Le,{modelValue:p(r),"onUpdate:modelValue":n[7]||(n[7]=v=>fe(r)?r.value=v:r=v),"vertical-actions-align":"left",padding:"md",color:"primary",icon:"menu","text-color":"accent",direction:"down",flat:"",unelevated:""},{default:Q(()=>[g(P,{"text-color":"primary","label-position":"left",color:"secondary",onClick:n[0]||(n[0]=v=>u("home")),icon:"home",label:"Home"}),g(P,{"text-color":"primary","label-position":"left",color:"secondary",onClick:n[1]||(n[1]=v=>u("library")),icon:"library_music",label:"Library"}),g(P,{"text-color":"primary","label-position":"left",color:"secondary",onClick:n[2]||(n[2]=v=>u("recommender")),icon:"assistant",label:"Recommender"}),g(P,{"text-color":"primary","label-position":"left",color:"secondary",onClick:n[3]||(n[3]=v=>u("profile")),icon:"account_circle",label:"Profile"}),g(P,{"text-color":"primary","label-position":"left",color:"secondary",onClick:n[4]||(n[4]=v=>u("theme")),icon:p(s).dark.isActive?"light_mode":"dark_mode",label:"Theme"},null,8,["icon"]),g(P,{"text-color":"primary","label-position":"left",color:"secondary",onClick:n[5]||(n[5]=v=>u("download")),icon:"install_mobile",label:"Download"}),g(P,{"text-color":"primary","label-position":"left",color:"secondary",onClick:n[6]||(n[6]=v=>u("logout")),icon:"logout",label:"Log out"})]),_:1},8,["modelValue"]))}},Ve={};function ze(e,l){return $(),O(F,{color:"primary",icon:"search",flat:"",round:"",size:"md",to:"/search"})}var Qe=X(Ve,[["render",ze]]);const Ae={class:"full-width bg-secondary row justify-between items-center flex-nowrap q-px-xs"},Ie={__name:"TheMenu",props:{deferredPrompt:Object},setup(e){return(l,r)=>($(),I("div",Ae,[g(Be,{"deferred-prompt":e.deferredPrompt},null,8,["deferred-prompt"]),g(Qe)]))}},Ne=[d("g",{transform:"matrix(1 0 0 -1 0 80)"},[d("rect",{width:"10",height:"20",rx:"3"},[d("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})]),d("rect",{x:"15",width:"10",height:"80",rx:"3"},[d("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})]),d("rect",{x:"30",width:"10",height:"50",rx:"3"},[d("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})]),d("rect",{x:"45",width:"10",height:"30",rx:"3"},[d("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})])])];var Fe=A({name:"QSpinnerAudio",props:me,setup(e){const{cSize:l,classes:r}=ve(e);return()=>d("svg",{class:r.value,fill:"currentColor",width:l.value,height:l.value,viewBox:"0 0 55 80",xmlns:"http://www.w3.org/2000/svg"},Ne)}});const Oe={key:0,class:"row col-12 justify-around items-center q-pa-sm q-ma-xs bg-secondaryLighter rounded-borders full-height"},Me={key:1,class:"row col-12 justify-around items-center q-pa-sm q-ma-xs bg-secondaryLighter rounded-borders full-height"},He={class:"informacion row col-9 now-playing__side justify-around items-center no-wrap"},Re={class:"infoSong now-playing__name ellipsis"},Te={class:"infoSong now-playing__artist text-info"},je={class:"botones row flex-center col-5"},De={__name:"WebPlayer",props:{token:{type:String,default:""}},setup(e){const l=e,r=Y(),s=K(),t=M(),m=document.createElement("script");return m.src="https://sdk.scdn.co/spotify-player.js",m.async=!0,document.body.appendChild(m),he(()=>{window.onSpotifyWebPlaybackSDKReady=()=>{const u=new window.Spotify.Player({name:"Web Playback SDK",getOAuthToken:o=>{o(l.token||JSON.parse(sessionStorage.getItem("tokens")).access_token)},volume:.5});t.setPlayer(u),t.player.addListener("ready",({device_id:o})=>{console.log("Ready with Device ID",o),t.changeDevice(o)}),t.player.addListener("not_ready",({device_id:o})=>{console.log("Device ID has gone offline",o)}),t.player.addListener("player_state_changed",o=>{!o||(t.setTrack(o.track_window.current_track),t.setPaused(o.paused),t.player.getCurrentState().then(c=>{c?t.setActive(!0):t.setActive(!1)}))}),t.player.addListener("initialization_error",({message:o})=>{r.notify({message:o,color:"negative",position:"top",icon:"report_problem"})}),t.player.addListener("authentication_error",({message:o})=>{r.notify({message:o,color:"negative",position:"top",icon:"report_problem"})}),t.player.addListener("account_error",({message:o})=>{r.notify({message:o,color:"negative",position:"top",icon:"report_problem"})}),t.player.addListener("playback_error",({message:o})=>{r.notify({message:o,color:"negative",position:"top",icon:"report_problem"})}),t.player.addListener("autoplay_failed",({message:o})=>{r.notify({message:o,color:"negative",position:"top",icon:"report_problem"})}),t.player.connect()}}),(u,o)=>{var c,n,v,h,C;return p(t).is_active?($(),I("div",Me,[g(we,{src:(c=p(t).current_track)==null?void 0:c.album.images[0].url,id:"trackImg","spinner-color":"primary","spinner-size":"100%",fit:"contain",ratio:"1",class:"col-2 flex-center now-playing__cover full-height","img-class":"rounded-borders",onClick:o[0]||(o[0]=b=>p(s).push({name:"NowPlaying"}))},null,8,["src"]),z("div",He,[z("div",{class:"column col-7 no-wrap",onClick:o[1]||(o[1]=b=>p(s).push({name:"NowPlaying"}))},[z("div",Re,T((n=p(t).current_track)==null?void 0:n.name),1),z("div",Te,T((v=p(t).current_track)==null?void 0:v.artists[0].name),1)]),z("div",je,[(h=p(t).current_track)!=null&&h.id?($(),O(ke,{key:0,"type-item":"tracks",idItem:(C=p(t).current_track)==null?void 0:C.id,size:p(r).screen.lt.md?"md":"lg",class:"q-mr-sm-xs q-mr-md-md"},null,8,["idItem","size"])):G("",!0),g(F,{color:"white",onClick:o[2]||(o[2]=b=>p(t).player.togglePlay()),size:p(r).screen.lt.md?"md":"lg",icon:p(t).is_paused?"fa-solid fa-play":"fa-solid fa-pause",flat:"",round:""},null,8,["size","icon"])])])])):($(),I("div",Oe,[g(Fe,{color:"white",size:"3rem",thickness:3})]))}}};var We=X(De,[["__scopeId","data-v-2b523da4"]]);const Ee={key:0,id:"playerContainer",class:"full-height cursor-pointer"},Ue={__name:"ThePlayerWrapper",setup(e){let r=J().access_token||JSON.parse(sessionStorage.getItem("tokens")).access_token;return(s,t)=>p(r)?($(),I("div",Ee,[g(We,{token:p(r)},null,8,["token"])])):G("",!0)}};const ot={__name:"MainLayout",setup(e){return(l,r)=>{const s=ge("router-view");return $(),O(be,{view:"hHh lpR fFf"},{default:Q(()=>[g(xe,null,{default:Q(()=>[g(Ie)]),_:1}),g(pe,{class:"q-px-sm bg-overallBg"},{default:Q(()=>[g(s,{class:"q-my-md"})]),_:1}),g(Se,{id:"footer"},{default:Q(()=>[g(Ue)]),_:1})]),_:1})}}};export{ot as default};