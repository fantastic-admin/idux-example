
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{r as S,_ as x}from"./item.vue_vue_type_script_setup_true_lang-rmLVKuPZ.js";import{_ as B}from"./sub.vue_vue_type_script_setup_true_lang-y-7iUrqa.js";import{d as J,n as f,a as P,I as y,aj as b,ak as w,o as i,j as d,J as k,L as E,C as q,u as z,b as g,Q as j,al as A}from"./index-CzEB2guM.js";const Q=J({name:"MainMenu",__name:"index",props:{menu:{},value:{},accordion:{type:Boolean,default:!0},defaultOpeneds:{default:()=>[]},mode:{default:"vertical"},collapse:{type:Boolean,default:!1},showCollapseName:{type:Boolean,default:!1}},setup(I){const n=I,o=f(n.value),s=f({}),c=f({}),t=f(n.defaultOpeneds.slice(0)),N=f([]),p=P(()=>n.mode==="horizontal"||n.mode==="vertical"&&n.collapse);function M(e,l=[]){e.forEach(a=>{const u=a.path??JSON.stringify(a);if(a.children){const r=[...l,u];c.value[u]={index:u,indexPath:r,active:!1},M(a.children,r)}else s.value[u]={index:u,indexPath:l}})}const h=(e,l)=>{t.value.includes(e)||(n.accordion&&(t.value=t.value.filter(a=>l.includes(a))),t.value.push(e))},v=e=>{if(Array.isArray(e)){A(()=>{v(e.at(-1)),e.length>1&&v(e.slice(0,-1))});return}t.value=t.value.filter(l=>l!==e)};function _(e){var l,a;for(const u in c.value)c.value[u].active=!1;(l=c.value[e])==null||l.indexPath.forEach(u=>{c.value[u].active=!0}),(a=s.value[e])==null||a.indexPath.forEach(u=>{c.value[u].active=!0})}const C=e=>{(n.mode==="horizontal"||n.collapse)&&(t.value=[]),_(e)},O=(e,l)=>{t.value.includes(e)?v(e):h(e,l)};function m(){const e=o.value&&s.value[o.value];_(o.value),!(!e||p.value||n.collapse)&&e.indexPath.forEach(l=>{const a=c.value[l];a&&h(l,a.indexPath)})}return y(()=>n.menu,e=>{M(e),m()},{deep:!0,immediate:!0}),y(()=>n.value,e=>{s.value[e]||(o.value="");const l=s.value[e]||o.value&&s.value[o.value]||s.value[n.value];l?o.value=l.index:o.value=e,m()}),y(()=>n.collapse,e=>{e&&(t.value=[]),m()}),b(S,w({props:n,items:s,subMenus:c,activeIndex:o,openedMenus:t,mouseInMenu:N,isMenuPopup:p,openMenu:h,closeMenu:v,handleMenuItemClick:C,handleSubMenuClick:O})),(e,l)=>(i(),d("div",{class:q(["h-full w-full flex flex-col of-hidden transition-all-300",{"flex-row! w-auto!":z(p)&&n.mode==="horizontal","py-1":n.mode==="vertical"}])},[(i(!0),d(k,null,E(e.menu,a=>{var u,r;return i(),d(k,{key:a.path??JSON.stringify(a)},[((u=a.meta)==null?void 0:u.menu)!==!1?(i(),d(k,{key:0},[(r=a.children)!=null&&r.length?(i(),g(B,{key:0,menu:a,"unique-key":[a.path??JSON.stringify(a)]},null,8,["menu","unique-key"])):(i(),g(x,{key:1,item:a,"unique-key":[a.path??JSON.stringify(a)],onClick:$=>C(a.path??JSON.stringify(a))},null,8,["item","unique-key","onClick"]))],64)):j("",!0)],64)}),128))],2))}});export{Q as _};
