!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.fd54cbd7.js","./Folder-legacy.ecd97f72.js","./index-legacy.83e9434e.js","./index-legacy.6add8f43.js","./icon-legacy.9b17d0dd.js","./Layout-legacy.dc9e3594.js","./video_box-legacy.f4c6d713.js","./index-legacy.6eb9021c.js","./Paginator-legacy.568f9364.js","./index-legacy.7b1fdd18.js","./FolderTree-legacy.22f271ad.js"],(function(n){"use strict";var t,r,i,o,c,a,l,u,s,d,g,f,h,m,b,y,j,p,w,x,v,A,$,S,k,C,M,z,I,O,P,_;return{setters:[function(e){t=e.ct,r=e.h,i=e.a2,o=e.y,c=e.aG,a=e.aJ,l=e.cK,u=e.S,s=e.aH,d=e.bV,g=e.ap,f=e.a9,h=e.ak,m=e.a_,b=e.bZ,y=e.ce,j=e.a,p=e.d,w=e.e,x=e.cL,v=e.cM,A=e.cN,$=e.aq,S=e.t,k=e.Q,C=e.V},function(e){M=e.b},function(e){z=e.u},function(e){I=e.u},function(e){O=e.g,P=e.O},function(e){_=e.M},function(){},function(){},function(){},function(){},function(){}],execute:function(){var E=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],F=function(e){if((0,t().isHide)(e.obj))return null;var n=z().setPathAs,j=M({id:1}).show;return r(_.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(i,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:o()}},as:I,get href(){return e.obj.name},onMouseEnter:function(){n(e.obj.name,e.obj.is_dir,!0)},onContextMenu:function(n){c((function(){a(!1),l(e.index,!0,!0)})),j(n,{props:e.obj})},get children(){return[r(i,{class:"name-box",spacing:"$1",get w(){return E[0].w},get children(){return[r(u,{get when(){return s()},get children(){return r(d,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){l(e.index,n.target.checked)}})}}),r(g,{class:"icon",boxSize:"$6",get color(){return f()},get as(){return O(e.obj)},mr:"$1","on:click":function(n){e.obj.type===P.IMAGE&&(n.stopPropagation(),n.preventDefault(),h.emit("gallery",e.obj.name))}}),r(m,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),r(m,{class:"size",get w(){return E[1].w},get textAlign(){return E[1].textAlign},get children(){return b(e.obj.size)}}),r(m,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return E[2].w},get textAlign(){return E[2].textAlign},get children(){return y(e.obj.modified)}})]}})}})};n("default",(function(){var n=j(),t=e(p(),2),o=t[0],l=t[1],g=e(p(!1),2),f=g[0],h=g[1];w((function(){o()&&x(o(),f())}));var b=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===o()?h(!f()):c((function(){l(e.name),h(!1)}))}}};return r(C,{class:"list",w:"$full",spacing:"$1",get children(){return[r(i,{class:"title",w:"$full",p:"$2",get children(){return[r(i,{get w(){return E[0].w},spacing:"$1",get children(){return[r(u,{get when(){return s()},get children(){return r(d,{get checked(){return v()},get indeterminate(){return A()},onChange:function(e){a(e.target.checked)}})}}),r(m,$((function(){return b(E[0])}),{get children(){return n("home.obj.".concat(E[0].name))}}))]}}),r(m,$({get w(){return E[1].w}},(function(){return b(E[1])}),{get children(){return n("home.obj.".concat(E[1].name))}})),r(m,$({get w(){return E[2].w}},(function(){return b(E[2])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(E[2].name))}}))]}}),r(S,{get each(){return k.objs},children:function(e,n){return r(F,{obj:e,get index(){return n()}})}})]}})}))}}}))}();
