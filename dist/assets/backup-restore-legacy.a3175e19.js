!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=c(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var h={};function p(){}function d(){}function m(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(E([])));v&&v!==n&&o.call(v,i)&&(y=v);var b=m.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(a,i,c,u){var s=l(e[a],e,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=m,s(b,"constructor",m),s(m,"constructor",d),d.displayName=s(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(x.prototype),s(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),s(b,u,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}function a(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.fd54cbd7.js","./index-legacy.6eb9021c.js"],(function(t){"use strict";var n,c,u,s,f,l,h,p,d,m,y,g,v,b;return{setters:[function(t){n=t.d,c=t.a,u=t.aP,s=t.b2,f=t.h,l=t.a2,h=t.B,p=t.cd,d=t.V,m=t.t,y=t.a_,g=t.by,v=t.n},function(t){b=t.n}],execute:function(){var w={success:{icon:"✅",color:"$success9"},error:{icon:"❌",color:"$danger9"},info:{icon:"ℹ️",color:"$info9"}},x=function(t){return f(l,{w:"$full",spacing:"$1",get children(){return[f(y,{get children(){return w[t.type].icon}}),f(y,{get color(){return w[t.type].color},get children(){return t.msg}})]}})};t("default",(function(){var t,y=i(n(!1),2),w=y[0],_=y[1],L=c();b("manage.sidemenu.backup-restore");var S=i(n([]),2),E=S[0],j=S[1],O=function(e,r){j((function(t){return[].concat(a(t),[{type:r,msg:e}])})),t.scrollTop=t.scrollHeight},$=i(u((function(){return s.get("/admin/setting/list")})),2),A=$[0],I=$[1],T=i(u((function(){return s.get("/admin/user/list")})),2),N=T[0],P=T[1],G=i(u((function(){return s.get("/admin/meta/list")})),2),Y=G[0],F=G[1],R=i(u((function(){return s.get("/admin/storage/list")})),2),U=R[0],C=R[1],B=function(){var t=o(r().mark((function t(){var e,n,o,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(L("br.start_backup"),"info"),e={settings:[],users:[],storages:[],metas:[]},n=r().mark((function t(){var n,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a[o],t.next=3,n.fn();case 3:i=t.sent,g(i,(function(t){O(L("br.success_backup_item",{item:L("manage.sidemenu.".concat(n.name))}),"success"),n.page?e[n.name]=t.content:e[n.name]=t}),(function(t){O(L("br.failed_backup_item",{item:L("manage.sidemenu.".concat(n.name))})+":"+t,"error")}));case 5:case"end":return t.stop()}}),t)})),o=0,a=[{name:"settings",fn:I,page:!1},{name:"users",fn:P,page:!0},{name:"storages",fn:C,page:!0},{name:"metas",fn:F,page:!0}];case 4:if(!(o<a.length)){t.next=9;break}return t.delegateYield(n(),"t0",6);case 6:o++,t.next=4;break;case 9:k("alist_backup_"+(new Date).toLocaleString()+".json",e),O(L("br.finish_backup"),"info");case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J=i(u((function(t){return s.post("/admin/setting/save",t)})),2),D=J[0],H=J[1],M=i(u((function(t){return s.post("/admin/user/create",t)})),2),V=M[0],q=M[1],z=i(u((function(t){return s.post("/admin/storage/create",t)})),2),K=z[0],Q=z[1],W=i(u((function(t){return s.post("/admin/meta/create",t)})),2),X=W[0],Z=W[1],tt=i(u((function(t){return s.post("/admin/user/update",t)})),2),et=tt[0],rt=tt[1],nt=i(u((function(t){return s.post("/admin/storage/update",t)})),2),ot=nt[0],at=nt[1],it=i(u((function(t){return s.post("/admin/meta/update",t)})),2),ct=it[0],ut=it[1];function st(t,e,r,n,o,a){return ft.apply(this,arguments)}function ft(){return(ft=o(r().mark((function t(e,n,o,a,i,c){var u,s,f;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:u=t.sent.data.content,s=r().mark((function t(n){var s,f,l,h;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e[n],f=s[i],l=u.find((function(t){return t[i]===f})),h="add"===(l?"update":"add")?o:a,t.t0=g,t.next=8,h(s);case 8:return t.t1=t.sent,t.t2=function(){O(L("br.success_restore_item",{item:L(c)})+"-"+"[".concat(f,"]"),"success")},t.t3=function(t){O(L("br.failed_restore_item",{item:L(c)})+"-"+"[".concat(f,"]")+":"+t,"error")},t.next=13,(0,t.t0)(t.t1,t.t2,t.t3);case 13:case"end":return t.stop()}}),t)})),t.t0=r().keys(e);case 5:if((t.t1=t.t0()).done){t.next=10;break}return f=t.t1.value,t.delegateYield(s(f),"t2",8);case 8:t.next=5;break;case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var lt=function(){var t=o(r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(L("br.start_restore"),"info"),(n=document.createElement("input")).type="file",n.accept="application/json",n.onchange=function(){var t=o(r().mark((function t(n){var a,i,c;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((a=n.target.files)&&0!==a.length){t.next=4;break}return v.warning(L("br.no_file")),t.abrupt("return");case 4:i=a[0],(c=new FileReader).onload=o(r().mark((function t(){var n,o,a,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=JSON.parse(c.result),!w()){t.next=4;break}return t.next=4,B();case 4:if(t.t0=n.settings,!t.t0){t.next=13;break}return t.t1=g,t.next=9,H(n.settings.filter((function(t){return!["version","index_progress"].includes(t.key)})));case 9:t.t2=t.sent,t.t3=function(){O(L("br.success_restore_item",{item:L("manage.sidemenu.settings")}),"success")},t.t4=function(t){O(L("br.failed_restore_item",{item:L("manage.sidemenu.settings")})+":"+t,"error")},(0,t.t1)(t.t2,t.t3,t.t4);case 13:if(!w()){t.next=22;break}return t.next=16,st(n.users,P,q,rt,"username","manage.sidemenu.users");case 16:return t.next=18,st(n.storages,C,Q,at,"mount_path","manage.sidemenu.storages");case 18:return t.next=20,st(n.metas,F,Z,ut,"path","manage.sidemenu.metas");case 20:t.next=29;break;case 22:o=r().mark((function t(){var n,o,c,u;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=i[a],o=e(n.data||[]),t.prev=2,u=r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=c.value).id=0,t.t0=g,t.next=5,n.fn(e);case 5:t.t1=t.sent,t.t2=function(){O(L("br.success_restore_item",{item:L("manage.sidemenu.".concat(n.name))})+"-"+"[".concat(e[n.key],"]"),"success")},t.t3=function(t){O(L("br.failed_restore_item",{item:L("manage.sidemenu.".concat(n.name))})+" [ ".concat(e[n.key]," ] ")+":"+t,"error")},(0,t.t0)(t.t1,t.t2,t.t3);case 9:case"end":return t.stop()}}),t)})),o.s();case 5:if((c=o.n()).done){t.next=9;break}return t.delegateYield(u(),"t0",7);case 7:t.next=5;break;case 9:t.next=14;break;case 11:t.prev=11,t.t1=t.catch(2),o.e(t.t1);case 14:return t.prev=14,o.f(),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[2,11,14,17]])})),a=0,i=[{name:"users",fn:q,data:n.users,key:"username"},{name:"storages",fn:Q,data:n.storages,key:"mount_path"},{name:"metas",fn:Z,data:n.metas,key:"path"}];case 24:if(!(a<i.length)){t.next=29;break}return t.delegateYield(o(),"t5",26);case 26:a++,t.next=24;break;case 29:O(L("br.finish_restore"),"info");case 30:case"end":return t.stop()}}),t)}))),c.readAsText(i);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.click();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return f(d,{spacing:"$2",w:"$full",get children(){return[f(l,{spacing:"$2",w:"$full",get children(){return[f(h,{get loading(){return A()||N()||Y()||U()},onClick:function(){B()},colorScheme:"accent",get children(){return L("br.backup")}}),f(h,{get loading(){return D()||V()||K()||X()||et()||ot()||ct()},onClick:function(){lt()},get children(){return L("br.restore")}}),f(p,{id:"restore-override",get checked(){return w()},onChange:function(t){return _(t.currentTarget.checked)},get children(){return L("br.override")}})]}}),f(d,{p:"$2",ref:function(e){"function"==typeof t?t(e):t=e},w:"$full",alignItems:"start",rounded:"$md",h:"70vh",bg:"$neutral3",overflowY:"auto",spacing:"$1",get children(){return f(m,{get each(){return E()},children:function(t){return f(x,t)}})}})]}})}));function k(t,e){var r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download=t,o.click(),URL.revokeObjectURL(n)}}}}))}();
