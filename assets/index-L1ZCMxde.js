import{d as M,s as V,q as x,D as N,E as P,G as u,H as b,B as $,I as m,J as I,b as L,o as l,l as A,e as i,f as o,K as _,h as s,w as g,T as B,c as d,L as D,M as E,N as R,O as T,n as h,P as W}from"./index-BlgixNEh.js";import H from"./index-C9mAlbx-.js";import K from"./index-CUVN7X3C.js";import z from"./index-DRzEJTLj.js";import q from"./index-B0WnJQEv.js";import{_ as G}from"./index.vue_vue_type_script_setup_true_lang-rcl1FhHv.js";import{_ as J}from"./index.vue_vue_type_script_setup_true_lang-C5rAWs1R.js";/* empty css                                                              */import O from"./link-BYnrnHIV.js";import U from"./index-DTRLUAHy.js";import{_ as j}from"./index.vue_vue_type_script_setup_true_lang-fewvkMX7.js";import{u as F}from"./useMainPage-DOKzjgPU.js";import{u as Q}from"./useMenu-8tVJ7jqC.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index.vue_vue_type_script_setup_true_lang-CiOWhvPy.js";import"./logo-CnmYMRkt.js";import"./rightSide.vue_vue_type_script_setup_true_lang--ILY0U_j.js";import"./HDropdownMenu.vue_vue_type_script_setup_true_lang-zbWPSgXc.js";import"./index.vue_vue_type_script_setup_true_lang-C0jeRadY.js";import"./HKbd-BhYtjMbM.js";import"./index.vue_vue_type_script_setup_true_lang-BIrBT34b.js";import"./index-C16XLoGm.js";import"./index.vue_vue_type_script_setup_true_lang-CV9Qg5MR.js";import"./index.vue_vue_type_script_setup_true_lang-C42N4iZt.js";import"./HDropdown-CtPwvtiY.js";import"./HTabList.vue_vue_type_script_setup_true_lang-DLXqcAxU.js";import"./use-resolve-button-type-De2W5GoE.js";import"./index.vue_vue_type_script_setup_true_lang-DllFbTAu.js";import"./sub.vue_vue_type_script_setup_true_lang-zMiA_DgX.js";import"./item.vue_vue_type_script_setup_true_lang-C48uPSjl.js";import"./HTooltip.vue_vue_type_script_setup_true_lang-I5Pkcemd.js";import"./index-CvkTfku2.js";import"./index-CTNl4gkl.js";import"./leftSide.vue_vue_type_script_setup_true_lang-D7DP3xmb.js";import"./index-BMLy_KCS.js";import"./index-izY0vDZg.js";import"./item.vue_vue_type_script_setup_true_lang-DDXLEptD.js";import"./HDialog.vue_vue_type_script_setup_true_lang-JwesndYz.js";const Y={id:"app-main"},Z={class:"wrapper"},ee={class:"main-container"},te={class:"main"},oe=M({name:"Layout",__name:"index",setup(se){const p=V(),e=x(),v=N(),a=P(),w=F(),y=Q(),S=u(()=>{let t=Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--g-main-sidebar-width"));return(e.settings.menu.mode==="single"||e.settings.menu.mode==="head"&&e.mode!=="mobile")&&(t=0),`${t}px`}),C=u(()=>{let t=Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--g-sub-sidebar-width"));return e.settings.menu.subMenuCollapse&&e.mode!=="mobile"&&(t=Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--g-sub-sidebar-collapse-width"))),a.sidebarMenus.every(n=>{var r;return((r=n.meta)==null?void 0:r.menu)===!1})&&(t=0),`${t}px`}),c=u(()=>!!p.meta.link);return b(()=>e.settings.menu.subMenuCollapse,t=>{e.mode==="mobile"&&(t?document.body.classList.remove("overflow-hidden"):document.body.classList.add("overflow-hidden"))}),b(()=>p.path,()=>{e.mode==="mobile"&&e.$patch(t=>{t.settings.menu.subMenuCollapse=!0})}),$(()=>{m("f5",t=>{e.settings.toolbar.pageReload&&(t.preventDefault(),w.reload())}),m("alt+`",t=>{e.settings.menu.enableHotkeys&&(t.preventDefault(),y.switchTo(a.actived+1<a.allMenus.length?a.actived+1:0))})}),I(()=>{m.unbind("f5"),m.unbind("alt+`")}),(t,n)=>{const r=L("RouterView");return l(),A("div",{class:"layout",style:W({"--g-main-sidebar-actual-width":s(S),"--g-sub-sidebar-actual-width":s(C)})},[i("div",Y,[o(H),i("div",Z,[i("div",{class:_(["sidebar-container",{show:s(e).mode==="mobile"&&!s(e).settings.menu.subMenuCollapse}])},[o(K),o(z)],2),i("div",{class:_(["sidebar-mask",{show:s(e).mode==="mobile"&&!s(e).settings.menu.subMenuCollapse}]),onClick:n[0]||(n[0]=f=>s(e).toggleSidebarCollapse())},null,2),i("div",ee,[o(q),i("div",te,[o(r,null,{default:g(({Component:f,route:k})=>[o(B,{name:"slide-right",mode:"out-in",appear:""},{default:g(()=>[(l(),d(T,{include:s(v).list},[D((l(),d(R(f),{key:k.fullPath})),[[E,!s(c)]])],1032,["include"]))]),_:2},1024)]),_:1}),s(c)?(l(),d(O,{key:0})):h("",!0)]),o(U)])])]),o(G),o(J),h("",!0),o(j)],4)}}}),ze=X(oe,[["__scopeId","data-v-5e2c6aa9"]]);export{ze as default};