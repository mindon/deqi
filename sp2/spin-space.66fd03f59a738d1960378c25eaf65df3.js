var Q=Object.defineProperty;var tt=Object.getOwnPropertyDescriptor;var u=(i,t,e,s)=>{for(var r=s>1?void 0:s?tt(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&Q(t,e,r),r};import{css as xt,html as F,LitElement as Ct}from"https://mindon.dev/lib/lit-core.min_3.3.1.js";var N=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var w=globalThis,M=w.ShadowRoot&&(w.ShadyCSS===void 0||w.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),D=new WeakMap,A=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(M&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=D.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&D.set(e,t))}return t}toString(){return this.cssText}},et=i=>new A(typeof i=="string"?i:i+"",void 0,X),st=(i,t)=>{if(M)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=w.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},L=M?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return et(e)})(i):i,{is:rt,defineProperty:it,getOwnPropertyDescriptor:ot,getOwnPropertyNames:nt,getOwnPropertySymbols:at,getPrototypeOf:ct}=Object,P=globalThis,I=P.trustedTypes,ht=I?I.emptyScript:"",lt=P.reactiveElementPolyfillSupport,E=(i,t)=>i,S={toAttribute(i,t){switch(t){case Boolean:i=i?ht:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},k=(i,t)=>!rt(i,t),H={attribute:!0,type:String,converter:S,reflect:!1,useDefault:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),P.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=H){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&it(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:o}=ot(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let a=r?.call(this);o?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??H}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;let t=ct(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){let e=this.properties,s=[...nt(e),...at(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(L(r))}else t!==void 0&&e.push(L(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return st(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:S).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:S;this._$Em=r,this[r]=n.fromAttribute(e,o.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let r=this.constructor,o=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??k)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,o]of s){let{wrapped:n}=o,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[E("elementProperties")]=new Map,v[E("finalized")]=new Map,lt?.({ReactiveElement:v}),(P.reactiveElementVersions??=[]).push("2.1.0");var dt={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:k},ut=(i=dt,t,e)=>{let{kind:s,metadata:r}=e,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){let{name:n}=e;return{set(a){let h=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,h,i)},init(a){return a!==void 0&&this.C(n,void 0,i,a),a}}}if(s==="setter"){let{name:n}=e;return function(a){let h=this[n];t.call(this,a),this.requestUpdate(n,h,i)}}throw Error("Unsupported decorator location: "+s)};function m(i){return(t,e)=>typeof e=="object"?ut(i,t,e):((s,r,o)=>{let n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}var x=globalThis,z=x.ShadowRoot&&(x.ShadyCSS===void 0||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),Y=new WeakMap,R=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(z&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Y.set(e,t))}return t}toString(){return this.cssText}},pt=i=>new R(typeof i=="string"?i:i+"",void 0,K),ft=(i,t)=>{if(z)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=x.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},B=z?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return pt(e)})(i):i,{is:mt,defineProperty:gt,getOwnPropertyDescriptor:yt,getOwnPropertyNames:vt,getOwnPropertySymbols:bt,getPrototypeOf:$t}=Object,U=globalThis,W=U.trustedTypes,Et=W?W.emptyScript:"",_t=U.reactiveElementPolyfillSupport,_=(i,t)=>i,C={toAttribute(i,t){switch(t){case Boolean:i=i?Et:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},j=(i,t)=>!mt(i,t),J={attribute:!0,type:String,converter:C,reflect:!1,useDefault:!1,hasChanged:j};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&gt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:o}=yt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let a=r?.call(this);o?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??J}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;let t=$t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){let e=this.properties,s=[...vt(e),...bt(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(B(r))}else t!==void 0&&e.push(B(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ft(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:C).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:C;this._$Em=r,this[r]=n.fromAttribute(e,o.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let r=this.constructor,o=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??j)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,o]of s){let{wrapped:n}=o,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[_("elementProperties")]=new Map,b[_("finalized")]=new Map,_t?.({ReactiveElement:b}),(U.reactiveElementVersions??=[]).push("2.1.0");var wt={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:j},St=(i=wt,t,e)=>{let{kind:s,metadata:r}=e,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){let{name:n}=e;return{set(a){let h=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,h,i)},init(a){return a!==void 0&&this.C(n,void 0,i,a),a}}}if(s==="setter"){let{name:n}=e;return function(a){let h=this[n];t.call(this,a),this.requestUpdate(n,h,i)}}throw Error("Unsupported decorator location: "+s)};function Pt(i){return(t,e)=>typeof e=="object"?St(i,t,e):((s,r,o)=>{let n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e);}function T(i){return Pt({...i,state:!0,attribute:!1})}var V=["\u975C\u614B Original","\u65CB\u8F49\u614B Spinning","\u8CBB\u7D0D\u5947\u93E1 PhenakistoScope"],Z=/^https?:\/\/|^data:image\//i,l=class extends Ct{constructor(){super(...arguments);this.clockwise=!1;this.frames=10;this.duration=1200;this.max=1600;this.withDuration=!1;this.src="";this.name="";this.state=2;this.maxdur=3650;this._moving=!1}stateChange(e){let{s="2"}=e.target.dataset,r=parseInt(s,10);isNaN(r)||(this.state=r)}maxDurChange(e){let s=e.target.valueAsNumber;!s||isNaN(s)||(this.maxdur=s<=this.duration?s:this.duration)}speedChange(e){this.duration=e.target.valueAsNumber}toggle(e){this.state=(this.state+1)%3}slotChange(e){let r=e.target.assignedElements({flatten:!0})[0];if(!r)return;let o=r.getAttribute("src");o||(o=r.outerHTML.match(/url\("?([^")]+)"?\)/)?.[1]),o&&(this.frames=10,this.clockwise=!1,this.duration=1200,o.match(/([\d]+(\.\d+)?m?s)|(\d+(f|cc)\.)/g)?.map(n=>{if(/\d(f|cc)\./.test(n)){let a=n.length;this.clockwise=n.substring(a-3)==="cc.";let h=parseInt(n.substring(0,a-(this.clockwise?3:2)),10);this.frames=h}else if(this.withDuration){let a=parseFloat(n.replace(/m?s$/,""));this.duration=n.indexOf("ms")>0?a:a*1e3}}),this.src=o)}updated(e){if(e.has("state")||e.has("frames")||e.has("clockwise")||e.has("duration")||e.has("src")){if(e.has("src")){if(!/^data:image/.test(this.src)){let d=this.src.replace(/[#?].*$/,""),p=d.lastIndexOf("/");this.name=p>-1?d.substring(p+1):d}let{_q:$={}}=this;["state","frames","clockwise","duration"].map(d=>{$[d]!==void 0&&(this[d]=$[d])}),this._q={},this.srcChange(this.src)}let{state:s,frames:r,clockwise:o,duration:n,src:a}=this,h="data:image/",c=a.substring(0,h.length)==h?"":btoa([s,r,o?1:0,n,a].join("	"));this.dispatchEvent(new CustomEvent("spin",{detail:c}))}}size(){let e=this.renderRoot.querySelector("div.params");if(e){let{width:s,height:r}=e.getBoundingClientRect();return{width:s,height:r}}return{width:0,height:0}}srcChange(e){let{host:s}=this.renderRoot;if(!e)return;s.innerHTML='<div class="cover"><div class="loading"></div></div>';let r=s.firstChild,o=document.createElement("img");o.src=e,o.className="cover",o.onload=()=>{if(o.onerror=o.onload=null,this.current=o,e&&Z.test(e)){let n=r.querySelector(".loading");n&&r.removeChild(n),r.style.backgroundImage=`url(${e})`,r.style.borderRadius="100%",this.src=e}else r.parentElement.removeChild(r),s.appendChild(o)},o.onerror=()=>{o.onerror=o.onload=null;let n=r.querySelector(".loading");n&&r.removeChild(n),r.innerHTML='<div class="err">load error</div>'}}init(e="",s=""){let{hash:r,href:o}=location,n=new URL(o).searchParams,a="",h={};try{let c=[];if(e instanceof Array){c=e;let y=c[c.length-1];typeof y=="string"&&/[a-z]/i.test(y)&&(a=y)}else{let y=(r||e).substring(1),f=y.length?atob(y).split("	"):[];if(f.length>0){let O=f.slice(-1)[0];O&&/[a-z]/i.test(O)&&(a=O.trim(),f=f.slice(0,f.length-1)),f.map(q=>{q.length>0&&c.push(parseInt(q,10))})}}let $=[2,10,0,1e3];c.map((y,f)=>isNaN(y)&&(c[f]=$[f]));let[d=2,p=10,g=0,G=1e3]=c;h={state:d,frames:p,clockwise:!!g,duration:G}}catch{}if(n.has("src")&&(a=n.get("src")),this.dispatchEvent(new CustomEvent("src-change",{detail:a})),Z.test(s)&&(a=s),n.has("n")){let c=parseInt(n.get("n")||"",10);c!=0&&(h.frames=c<0?-c:c,c<0&&(h.clockwise=!h.clockwise))}this._q=h,n.has("src")&&history.replaceState(document.title,"",o.replace(/\?[^#]*/,"")),this.srcChange(a)}mouseDown(e){e.button!=0&&!e.touches||(this._moving=!0)}mouseUp(e){e.button!=0&&!e.touches||(e.touches&&(this._lastTouch=null),this._moving=!1)}mouseMove(e){if(!this._moving||e.button!=0&&!e.touches)return;let{duration:s,clockwise:r,maxdur:o,_lastTouch:n}=this,a=e.touches?.[0];if(a)if(n)e.movementX=a.pageX-n.pageX,e.movementY=a.pageY-n.pageY,this._lastTouch=a;else{this._lastTouch=a;return}let h=e.movementX;Math.abs(e.movementY)>Math.abs(h)?h=5*(r?-e.movementY:e.movementY):h=2*h;let c=(r?1:-1)*s+h;c<0&&c<-o?c=-o:c>0&&c>o&&(c=o),c==0&&(c=e.movementX<0?-1:1),this.duration=Math.round(c<0?-c:c),this.clockwise=!(c<0)}adjustDuration(e){if(!e.target)return;let s=e.target,r=s.classList;if(r.contains("cover")||r.contains("param"))return;let{duration:o,maxdur:n}=this,{offsetWidth:a,offsetHeight:h}=s,{offsetX:c,offsetY:$}=e,d=$-h/2,p=c-a/2;if(d*d+p*p>a*a/4)return;let g=Math.atan2(d,p)*180/Math.PI;this.clockwise=p>0,p<0?this.duration=Math.round(n*(g<0?.5+(180+g)/180:(g-90)/180)):this.duration=Math.round(n*(g>0?(90-g)/180:.5-g/180))}render(){let{clockwise:e,duration:s,maxdur:r,state:o}=this;return F`
      <div class="state">${Array.from(new Array(3),(n,a)=>a).map(n=>n!=o?F`<a data-s=${n} title="${V[n]}" @click=${this.stateChange}>●</a>`:V[o])}</div>
      <div class="space">
        <div
          tabindex="1"
          class="params"
          style="--z-plus:${e?-2:-1};--fill-plus:${e?"#6999f655":"var(--cover-color, #fff)"}; --rotate-plus:${e?`rotate(${180*(r-s)/r}deg)`:"rotate(0deg)"};--z-minus: ${e?-1:-2}; --fill-minus:${e?"var(--cover-color, #fff)":"#ff8b8b55"}; --rotate-minus:${e?"rotate(0deg)":`rotate(${-180*(r-s)/r}deg)`};"
          @click=${this.adjustDuration}
        >
          <slot
            title="Double click to toggle state 雙擊切換狀態"
            @slotchange="${this.slotChange}"
            class="${this.state?this.clockwise?"spinningcc":"spinning":""} centerize"
            style="--loop-dur: ${this.duration.toFixed(5)}ms;animation-timing-function: ${this.state==1?"linear":`steps(${this.frames}, end)`}"
            @dblclick="${this.toggle}"
            @mousedown="${this.mouseDown}"
            @mouseup="${this.mouseUp}"
            @mouseout="${this.mouseUp}"
            @mousemove="${this.mouseMove}"
            @touchstart="${this.mouseDown}"
            @touchend="${this.mouseUp}"
            @touchcancel="${this.mouseUp}"
            @touchmove="${this.mouseMove}"
          >
          </slot>
          <div class="param">
          <!-- <input
            tabindex="2"
            name="maxdur"
            type="number"
            min="${1e3}"
            max="${8e3}"
            step="100"
            .value="${this.maxdur}"
            title="one circle spin max duration in milliseconds
單圈耗時最大值(ms)"
            @input="${this.maxDurChange}"
          > -->
          <input type="number" .value=${this.duration} min="1" max="${this.maxdur}" @input=${n=>this.duration=n.target.valueAsNumber||this.duration} title="duration in ms of one circle spin"><sup>ms</sup>
        </div>
        <div class="param frames">
          <input
            tabindex="3"
            name="frames"
            type="number"
            min="1"
            max="36"
            step="1"
            .value="${this.frames}"
            title="frames 幀數"
            @input="${n=>this.frames=parseInt(n.target.value,10)||this.frames}"
          ><sup>fr</sup>
        </div>
    </div>
</div>
    `}};l.styles=xt`
:host {
    display: block;
    position: relative;
    margin: 0 auto .25rem;
}
div.state {
    font-size: 1rem;
    text-align: center;
    color: #666;
}
div.state a {
    color: #ddd;
    cursor: pointer;
    padding: 1 0.125rem;
}
div.state a:hover {
    color: #d3e3fa;
}
div.state a:active {
    color: #0d6efd;
}
div.space {
    position: relative;
    overflow: hidden;
    user-select: none;
    width: 100%;
    height: 100%;
}
@keyframes spincc {
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
}
@keyframes spin {
    from {
    transform: rotate(360deg);
    }
    to {
    transform: rotate(0);
    }
}
slot {
    min-width: 4em;
    min-height: 4em;
    display: block;
    height: 100%;
    width: 100%;
}
slot * {
    pointer-events: none;
}
slot.spinning {
    animation: spin var(--loop-dur, 500ms) linear infinite;
    animation-timing-function: steps(8, end);
    animation-range: cover;
}
slot.spinningcc {
    animation: spincc var(--loop-dur, 500ms) linear infinite;
    animation-timing-function: steps(8, end);
    animation-range: cover;
}
input.duration {
    min-width: 80%;
}
.centerize {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.loading {
    position: relative;
    height: 32px;
    margin: 1rem auto;
}
.loading:after {
    content: " ";
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--loading-color, #0d6efd);
    animation: breathe 3s infinite;
    z-index: 999;
}
@keyframes breathe {
    0%, 100% {
    transform: translateX(-50%) scale(1);
    opacity: 1.0;
    }
    50% {
    transform: translateX(-50%) scale(2);
    opacity: 0.2;
    }
}
div.params {
    transform: translateZ(0);

    --ss-size: var(
    --spin-size,
    min(calc(100vw - 5rem), calc(100vh - 5rem - 160px))
    );
    --params-size: calc(2rem + var(--ss-size, 500px));
    width: var(--params-size);
    height: var(--params-size);
    padding: 1rem;
    margin: 0 auto;
    position: relative;
    border-radius: 100%;
    overflow: hidden;
}
.params::after,
.params::before {
    content: " ";
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    display: none;
}
.params::before {
    left: 0;
    background-color: var(--fill-minus, #fff);
    transform: var(--rotate-minus, rotate(0deg));
    transform-origin: right center;
    z-index: var(--z-minus, -1);
}
.params::after {
    right: 0;
    background-color: var(--fill-plus, #fff);
    transform-origin: left center;
    transform: var(--rotate-plus, rotate(0deg));
    z-index: var(--z-plus, -1);
}
.params > div.param {
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0.5em;
    display: none;
}
div.param sup {
    color: #ccc;
    zoom: .8;
    display: inline-block;
    transform: translate(-1.6em, 3px);
}
div.param input {
    border: none;
    background: none;
    text-align: center;
    color: #999;
}
.params > div.frames {
    top: auto;
    bottom: -4px;
}
.params:has(input:focus) slot,
.params:has(input:hover) slot,
.params:focus slot
{
   border-radius: 100%;
}
.params:has(input:focus)::after,
.params:has(input:focus)::before,
.params:has(input:focus) > div.param,
.params:has(input:hover)::after,
.params:has(input:hover)::before,
.params:has(input:hover) > div.param,
.params:focus::after,
.params:focus::before,
.params:focus > div.param {
    display: block;
}
::slotted(.cover) {
    background-color: var(--cover-color, #fff);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-user-drag: none;
    user-drag: none;
    border-radius: 100%;
}
slot:has(.loading) {
    pointer-events: none;
}
.err {
    color: #ff0;
}`,u([m({type:Number})],l.prototype,"clockwise",2),u([m({type:Number})],l.prototype,"frames",2),u([m({type:Number})],l.prototype,"duration",2),u([m({type:Number})],l.prototype,"max",2),u([m({type:Boolean,attribute:"with-duration"})],l.prototype,"withDuration",2),u([m({type:String})],l.prototype,"src",2),u([m({type:String})],l.prototype,"name",2),u([m()],l.prototype,"current",2),u([T()],l.prototype,"state",2),u([T()],l.prototype,"maxdur",2),l=u([N("spin-space")],l);export{l as SpinSpace};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
