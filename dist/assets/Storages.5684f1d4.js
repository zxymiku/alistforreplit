import{a as m,h as e,H as R,a9 as V,a2 as o,a_ as v,bY as A,aD as F,Y as T,V as x,cA as l,cx as D,b as p,aP as _,b2 as c,B as i,aR as G,b3 as h,n as O,d as k,r as W,bU as X,S as Y,bi as j,bj as q,bk as z,bl as N,bm as U,bn as E,bo as J,t as u,bp as K,bq as Q,br as Z,cd as ee,O as re,P as y,cl as te,cv as ne,cw as ae,cy as C,cz as se}from"./index.444cf32e.js";import{n as le}from"./index.b98c9c68.js";import{D as oe}from"./DeletePopover.f7a89822.js";function B(r){const n=m(),{to:g}=p(),[b,d]=_(()=>c.post(`/admin/storage/delete?id=${r.storage.id}`)),[S,a]=_(()=>c.post(`/admin/storage/${r.storage.disabled?"enable":"disable"}?id=${r.storage.id}`));return[e(i,{onClick:()=>{g(`/@manage/storages/edit/${r.storage.id}`)},get children(){return n("global.edit")}}),e(i,{get loading(){return S()},get colorScheme(){return r.storage.disabled?"success":"warning"},onClick:async()=>{const s=await a();G(s,()=>{r.refresh()})},get children(){return n(`global.${r.storage.disabled?"enable":"disable"}`)}}),e(oe,{get name(){return r.storage.mount_path},get loading(){return b()},onClick:async()=>{const s=await d();h(s,()=>{O.success(n("global.delete_success")),r.refresh()})}})]}function ce(r){const n=m();return e(x,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return R("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${V()}`}},get children(){return[e(o,{spacing:"$2",get children(){return[e(v,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return r.storage.mount_path}}),e(A,{colorScheme:"info",get children(){return n(`drivers.drivers.${r.storage.driver}`)}})]}}),e(o,{get children(){return[e(v,{get children(){return[F(()=>n("storages.common.status")),":\xA0"]}}),e(T,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return r.storage.status}})]}}),e(v,{css:{wordBreak:"break-all"},get children(){return r.storage.remark}}),e(o,{spacing:"$2",get children(){return e(B,r)}})]}})}function ie(r){const n=m();return e(D,{get children(){return[e(l,{get children(){return r.storage.mount_path}}),e(l,{get children(){return n(`drivers.drivers.${r.storage.driver}`)}}),e(l,{get children(){return r.storage.order}}),e(l,{get children(){return r.storage.status}}),e(l,{get children(){return r.storage.remark}}),e(l,{get children(){return e(o,{spacing:"$2",get children(){return e(B,r)}})}})]}})}const me=()=>{const r=m();le("manage.sidemenu.storages");const{to:n}=p(),[g,b]=_(()=>c.get("/admin/storage/list")),[d,S]=k([]),a=async()=>{const t=await b();h(t,w=>S(w.content))},[s,L]=k([]),[f,M]=k([]);(async()=>{const t=await c.get("/admin/driver/names");h(t,w=>L(w))})(),a();const I=async()=>{const t=await c.post("/admin/storage/load_all");h(t,()=>{O.success(r("storages.other.start_load_success"))})},H=W(()=>d().filter(t=>f().length===0?!0:f().includes(t.driver))),[$,P]=X("storages-layout","grid");return e(x,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[e(i,{colorScheme:"accent",get loading(){return g()},onClick:a,get children(){return r("global.refresh")}}),e(i,{onClick:()=>{n("/@manage/storages/add")},get children(){return r("global.add")}}),e(i,{colorScheme:"warning",get loading(){return g()},onClick:I,get children(){return r("storages.other.load_all")}}),e(Y,{get when(){return s().length>0},get children(){return e(j,{multiple:!0,get value(){return f()},onChange:M,get children(){return[e(q,{get children(){return[e(z,{get children(){return r("storages.other.filter_by_driver")}}),e(N,{}),e(U,{})]}}),e(E,{get children(){return e(J,{get children(){return e(u,{get each(){return s()},children:t=>e(K,{value:t,get children(){return[e(Q,{get children(){return r(`drivers.drivers.${t}`)}}),e(Z,{})]}})})}})}})]}})}}),e(ee,{get checked(){return $()==="table"},onChange:t=>{P(t.currentTarget.checked?"table":"grid")},get children(){return r("storages.other.table_layout")}})]}}),e(re,{get children(){return[e(y,{get when(){return $()==="grid"},get children(){return e(te,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(u,{get each(){return H()},children:t=>e(ce,{storage:t,refresh:a})})}})}}),e(y,{get when(){return $()==="table"},get children(){return e(T,{w:"$full",overflowX:"auto",get children(){return e(ne,{highlightOnHover:!0,dense:!0,get children(){return[e(ae,{get children(){return e(D,{get children(){return[e(u,{each:["mount_path","driver","order","status","remark"],children:t=>e(C,{get children(){return r(`storages.common.${t}`)}})}),e(C,{get children(){return r("global.operations")}})]}})}}),e(se,{get children(){return e(u,{get each(){return d()},children:t=>e(ie,{storage:t,refresh:a})})}})]}})}})}})]}})]}})};export{me as default};
