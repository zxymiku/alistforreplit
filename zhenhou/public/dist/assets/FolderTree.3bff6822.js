import{au as C,a as f,h as e,I as R,S as g,B as c,a2 as m,M as b,i as $,b6 as T,j as k,k as w,m as v,q as F,d as i,Y as M,aB as z,aP as D,bA as V,_ as P,bB as A,a9 as h,ap as H,a_ as j,y as p,aD as q,bu as J,V as N,t as X,p as Y,aw as E,b3 as G}from"./index.444cf32e.js";import{e as K}from"./index.7c95842d.js";const S=E(),x=t=>{const[r,a]=i("/");return e(M,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(S.Provider,{get value(){var o;return{value:r,onChange:n=>{a(n),t.onChange(n)},forceRoot:(o=t.forceRoot)!=null?o:!1}},get children(){return e(_,{path:"/"})}})}})},_=t=>{const[r,a]=i([]),{value:o,onChange:n,forceRoot:l}=z(S),[y,B]=D(()=>V(t.path,P(),l)),I=async()=>{if(r().length>0)return;const u=await B();G(u,a)},{isOpen:s,onToggle:O}=C(),d=()=>o()===t.path;return e(M,{get children(){return[e(m,{spacing:"$2",get children(){return[e(g,{get when(){return!y()},get fallback(){return e(A,{size:"sm",get color(){return h()}})},get children(){return e(H,{get color(){return h()},as:K,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{O(),s()&&I()}})}}),e(j,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return d()?"$info8":"transparent"},get _hover(){return{bgColor:d()?"$info8":p()}},onClick:()=>{n(t.path)},get children(){return q(()=>t.path==="/",!0)()?"root":J(t.path)}})]}}),e(g,{get when(){return s()},get children(){return e(N,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(X,{get each(){return r()},children:u=>e(_,{get path(){return Y(t.path,u.name)}})})}})}})]}})},U=t=>{var n;const r=f(),[a,o]=i((n=t.defaultValue)!=null?n:"");return e(F,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(b,{}),e($,{get children(){return[e(k,{get children(){return r("home.toolbar.choose_dst_folder")}}),e(w,{get children(){return e(x,{onChange:o})}}),e(v,{display:"flex",gap:"$2",get children(){return[e(c,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return r("global.cancel")}}),e(c,{get loading(){return t.loading},onClick:()=>{var l;return(l=t.onSubmit)==null?void 0:l.call(t,a())},get children(){return r("global.ok")}})]}})]}})]}})},W=t=>{const{isOpen:r,onOpen:a,onClose:o}=C(),n=f();return[e(m,{w:"$full",spacing:"$2",get children(){return[e(R,{get id(){return t.id},get value(){return t.value},onInput:l=>t.onChange(l.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?a:()=>{}},get placeholder(){return n(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(g,{get when(){return!t.onlyFolder},get children(){return e(c,{onClick:a,get children(){return n("global.choose")}})}})]}}),e(F,{size:"xl",get opened(){return r()},onClose:o,get children(){return[e(b,{}),e($,{get children(){return[e(T,{}),e(k,{get children(){return n("global.choose_folder")}}),e(w,{get children(){return e(x,{forceRoot:!0,get onChange(){return t.onChange}})}}),e(v,{get children(){return e(c,{onClick:o,get children(){return n("global.confirm")}})}})]}})]}})]};export{W as F,U as M};