var Q=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var l=(i,t,e,s)=>{for(var r=s>1?void 0:s?X(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&Q(t,e,r),r};import{css as wt,html as h,LitElement as _t}from"https://mindon.dev/lib/lit-core.min_3.3.1.js";var z=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var $=globalThis,U=$.ShadowRoot&&($.ShadyCSS===void 0||$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,N=Symbol(),T=new WeakMap,x=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==N)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(U&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=T.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&T.set(e,t))}return t}toString(){return this.cssText}},Y=i=>new x(typeof i=="string"?i:i+"",void 0,N),Z=(i,t)=>{if(U)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=$.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},q=U?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Y(e)})(i):i,{is:W,defineProperty:tt,getOwnPropertyDescriptor:et,getOwnPropertyNames:st,getOwnPropertySymbols:rt,getPrototypeOf:it}=Object,w=globalThis,L=w.trustedTypes,ot=L?L.emptyScript:"",nt=w.reactiveElementPolyfillSupport,E=(i,t)=>i,v={toAttribute(i,t){switch(t){case Boolean:i=i?ot:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},O=(i,t)=>!W(i,t),D={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:O};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;var u=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=D){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&tt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:o}=et(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let a=r?.call(this);o?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??D}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;let t=it(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){let e=this.properties,s=[...st(e),...rt(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(q(r))}else t!==void 0&&e.push(q(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Z(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:v).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:v;this._$Em=r,this[r]=n.fromAttribute(e,o.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let r=this.constructor,o=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??O)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,o]of s){let{wrapped:n}=o,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};u.elementStyles=[],u.shadowRootOptions={mode:"open"},u[E("elementProperties")]=new Map,u[E("finalized")]=new Map,nt?.({ReactiveElement:u}),(w.reactiveElementVersions??=[]).push("2.1.0");var at={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:O},ct=(i=at,t,e)=>{let{kind:s,metadata:r}=e,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){let{name:n}=e;return{set(a){let d=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,d,i)},init(a){return a!==void 0&&this.C(n,void 0,i,a),a}}}if(s==="setter"){let{name:n}=e;return function(a){let d=this[n];t.call(this,a),this.requestUpdate(n,d,i)}}throw Error("Unsupported decorator location: "+s)};function m(i){return(t,e)=>typeof e=="object"?ct(i,t,e):((s,r,o)=>{let n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}var _=globalThis,M=_.ShadowRoot&&(_.ShadyCSS===void 0||_.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),F=new WeakMap,k=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(M&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&F.set(e,t))}return t}toString(){return this.cssText}},lt=i=>new k(typeof i=="string"?i:i+"",void 0,K),ht=(i,t)=>{if(M)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=_.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},J=M?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return lt(e)})(i):i,{is:dt,defineProperty:pt,getOwnPropertyDescriptor:ut,getOwnPropertyNames:ft,getOwnPropertySymbols:mt,getPrototypeOf:yt}=Object,A=globalThis,I=A.trustedTypes,Et=I?I.emptyScript:"",gt=A.reactiveElementPolyfillSupport,g=(i,t)=>i,S={toAttribute(i,t){switch(t){case Boolean:i=i?Et:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},j=(i,t)=>!dt(i,t),H={attribute:!0,type:String,converter:S,reflect:!1,useDefault:!1,hasChanged:j};Symbol.metadata??=Symbol("metadata"),A.litPropertyMetadata??=new WeakMap;var f=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=H){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&pt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:o}=ut(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let a=r?.call(this);o?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??H}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;let t=yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){let e=this.properties,s=[...ft(e),...mt(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(J(r))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ht(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:S).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:S;this._$Em=r,this[r]=n.fromAttribute(e,o.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let r=this.constructor,o=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??j)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,o]of s){let{wrapped:n}=o,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[g("elementProperties")]=new Map,f[g("finalized")]=new Map,gt?.({ReactiveElement:f}),(A.reactiveElementVersions??=[]).push("2.1.0");var bt={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:j},$t=(i=bt,t,e)=>{let{kind:s,metadata:r}=e,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){let{name:n}=e;return{set(a){let d=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,d,i)},init(a){return a!==void 0&&this.C(n,void 0,i,a),a}}}if(s==="setter"){let{name:n}=e;return function(a){let d=this[n];t.call(this,a),this.requestUpdate(n,d,i)}}throw Error("Unsupported decorator location: "+s)};function vt(i){return(t,e)=>typeof e=="object"?$t(i,t,e):((s,r,o)=>{let n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e);}function y(i){return vt({...i,state:!0,attribute:!1})}var St="\u278A\u278B\u278C\u278D\u278E\u278F\u2790\u2791\u2792",R=/^https?:\/\//i,V=(i,t="",e="")=>h`<a title="${e}"
          class="${t}" style="${t?"":"margin-top:.5rem"}"
          href="mailto:mindon@live.com?subject=%E7%94%B3%E8%AB%8B%E5%8A%A0%E5%85%A5 Join%20Lucky%20Charm%20of%20%E2%9D%9D%E6%97%8B%E5%9C%88SP%C2%B2&body=%E8%AB%8B%E7%A2%BA%E8%AA%8D%E5%8F%AF%E4%BB%A5%E5%85%AC%E9%96%8B%E4%B8%A6%E6%8F%90%E4%BE%9B%E6%94%B6%E6%AC%BE%E9%80%94%E5%BE%91%EF%BC%9A%0A%E6%8E%A5%E5%8F%97%E6%94%B6%E6%AC%BE%E7%9A%84%E4%BA%8C%E7%B6%AD%E7%A2%BC%20QR%20Code%20to%20receive%20money%20%0A%E6%88%96%E8%80%85%E6%94%B6%E6%AC%BE%E9%80%A3%E6%8E%A5%20or%20Link%20to%20receive%20money%0A%E6%88%96%E5%85%B6%E4%BB%96%E6%94%B6%E6%AC%BE%E6%96%B9%E5%BC%8F%20or%20Other%20way%20to%20receive%20money">${i}</a>`;function At(i,t,e,s){let r=i.src,o=i.way,n=[null,null];if(r instanceof Array){if(r.length==0)return{};o=="cc"?(t>0&&(n[0]=h`<a @click=${s} data-v="-1" class="prev">➜</a>`),t<r.length-1&&(n[1]=h`<a @click=${s} data-v="1" class="next">➜</a>`)):o=="lucky"&&(t>=r.length&&(t=r.length-1),t>0&&(n[0]=V("+","prev","\u52A0\u5165 Join Lukcy Charm of \u275D\u65CB\u5708SP\xB2")),r.length>0&&(n[1]=h`<a @click=${s} data-v="rand" class="next" title="刷新下一位幸運者
Refresh to next lucky charm">↺</a>`)),e=`${e}${o}/`,i=r[t]}let{src:a,way:d,desc:p}=i;if(typeof a=="object")return{pxn:n,payment:i,dom:a};if(a instanceof Function)return{pxn:n,payment:i,dom:a(e)};let b=R.test(a);return/\.(png|gif|jpg|jpeg|webp|avif|svg)$/i.test(a)?{pxn:n,payment:i,dom:h`<pre class="memo">${p}</pre>
      <img src="${b?"":e}${a}" title="${p}" alt="${p}" />
    `}:b?{pxn:n,payment:i,dom:h`
      <a href="${a}" target="_${d||"donate"}">${p}</a>
    `}:{pxn:n,payment:i,dom:h`
    <div class="info"><pre>${a||p}</pre></div>
  `}}var c=class extends _t{constructor(){super(...arguments);this.size=180;this.assets="./payments/";this.payments=[{way:"wechat",desc:"\u5FAE\u4FE1 WeChat",src:"mindon_wechat.png"},{way:"alipay",desc:"\u652F\u4ED8\u5BF6 Alipay",src:"mindon_alipay.png"},{way:"paypal",desc:"\u8C9D\u5BF6 PayPal",memo:"n \xD7 $0.99 to developer",src:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YSVEJMBLM3AFG"},{way:"cc",desc:"\u516C\u76CA\u91D1 Comm-Chest",src:[]},{way:"lucky",desc:"\u5E78\u904B\u7B26 Lucky Charm",src:[{way:"join",src:h`
            <pre class="memo">隨機收錢人
幸運隨時降臨
Lucky Charm</pre>${V("\u52A0\u5165 JOIN +")}
      `}]},{way:"free",desc:"\u4E0D\u60F3\u82B1\u9322 Enjoy Freely",src:e=>h`
          <pre class="memo">就是不想花錢
just don't want to pay</pre><p>
            <img src="${e}free.png" alt="Free" width="80" height="54" />
          </p>
        `}];this.current=0;this.idx=0;this.enabled=!1;this.countdown=0;this.selected=!1;this._tid=null}firstUpdated(){let{assets:e,cc:s,lucky:r}=this;s&&fetch(R.test(s)?s:`${e}cc/${s}`).then(o=>o.json()).then(o=>{this.payments.map((n,a)=>{n.way=="cc"&&(this.payments[a].src=o,this.requestUpdate())})}),r&&fetch(R.test(r)?r:`${e}lucky/${r}`).then(o=>o.json()).then(o=>{this.payments.map((n,a)=>{n.way=="lucky"&&(this.payments[a].src.push(...o),this.requestUpdate())})})}updated(e){if(e.has("current")){let{current:s,payments:r}=this,{src:o}=r[s];o instanceof Array&&(this.idx=Math.floor(Math.random()*o.length))}}subnav(e){let{v:s="0"}=e.target.dataset,{current:r,payments:o}=this,{src:n}=o[r];if(s=="rand"){n instanceof Array&&(this.idx=Math.floor(Math.random()*n.length));return}this.idx+=parseInt(s,10),n instanceof Array&&(this.idx<0?this.idx=0:this.idx>=n.length&&(this.idx=n.length-1))}wayChange(e){let{value:s}=e.target;this.current=parseInt(s,10);let{payments:r,current:o,_tid:n}=this;n&&clearTimeout(n),this.selected=!0,this.enabled=!1,this.countdown=r[o]?.way=="free"?6:3;let a=()=>{this.countdown>1?(this.countdown--,this._tid=setTimeout(a,1e3)):(this.countdown=0,this.enabled=!0)};this._tid=setTimeout(a,1e3)}reset(){let{_tid:e}=this;e&&clearTimeout(e),this.selected=!1,this.enabled&&(this.enabled=!1),this.current=0;let s=this.renderRoot.querySelector('input[name="pay"]:checked');s&&(s.checked=!1)}render(){let{size:e,current:s,idx:r,payments:o,assets:n,enabled:a,selected:d,countdown:p}=this,{pxn:b,payment:P,dom:G}=At(o[s],r,n,C=>this.subnav(C));return P?h`
      <div id="ways">
        <div class="way ${o[s].way}" style="--size: ${e}px">
          ${b}
          ${P.memo?h`
              <pre class="memo">${P.memo}</pre>
            `:""} ${G}
        </div>
        <ul style="--ways-bg: url(${n}follow-my-heart.png) 10px 0px no-repeat">
          ${o.map(({desc:C},B)=>h`
              <li>
                <label>${C} <input
                 ?checked=${d&&B==s}
                  type="radio"
                  name="pay"
                  value="${B}"
                  @click="${this.wayChange}"
                ></label>
              </li>
            `)}
          <li><slot class=${a&&this.countdown==0?"":"disabled"} style="--countdown: '${St[p-1]||""}';"></slot></li>
        </ul>
      </div>
    `:"..."}};c.styles=wt`
    :host {
      display: inline-block;
    }
    #ways {
      display: flex;
      align-items: center;
      padding: 1rem 0;
      background: #fff;
    }
    div.way {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(8px + var(--size, 180));
      height: calc(8px + var(--size, 180));
      padding: 8px 8px 8px 0;
      flex-direction: column;
      position: relative;
    }
    div.way > img {
      withd: var(--size, 180);
      height: var(--size, 180);
    }
    a.prev,
    a.next {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        text-decoration: none;
        font-size: 1.2rem;
        color: #9bf;
    }
    a.prev {
        transform: scaleX(-1);
        right: auto;
        left: 0;
    }
    .lucky a.prev,
    .lucky a.next {
        font-size: 1.6rem;
    }
    .lucky a.prev {
        transform: none;
    }
    div.way a:visited {
        color: #000;
    }
    div.way a:hover {
        color: #ff703b;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      background: var(--ways-bg);
      background-size: 72px 72px;
    }
    label {
      cursor: pointer;
      display: block;
      text-align: right;
      color: #003857;
      position: relative;
    }
    label:hover {
      color: #ff703b;
    }
    label:has(input:checked) {
      color: #0d6efd;
    }
    label:hover::before {
        position: absolute;
        content: '💰';
        font-size: 1.4em;
        top: -6px;
        right: 0;
    }

    pre {
      text-align: center;
    }
    pre.memo {
      color: #333;
      font-size: 0.8em;
    }
    slot {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 0.5rem;
      position: relative;
    }
    ::slotted(a.btn),
    ::slotted(input[type="submit"]),
    ::slotted(button) {
        width: 100%;
        background: #0d6efd;
        border: 1px solid #0d6efd;
        color: #fff;
        padding: 0.375rem 0.75rem;
        border-radius: 0.375rem;
        line-height: 1.5;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    ::slotted(a.btn:hover),
    ::slotted(input[type="submit"]:hover),
    ::slotted(button:hover) {
        background: #0b5ed7;
        border-color: #0a58ca;
    }
    ::slotted(a.btn:active),
    ::slotted(input[type="submit"]:active),
    ::slotted(button:active) {
        background: #0a58ca;
        border-color: #0a53be;
    }
    slot.disabled::slotted(a.btn),
    slot.disabled::slotted(input),
    slot.disabled::slotted(button) {
      background: #ccc;
      border-color: #999;
      pointer-events: none;
      color: #666;
      opacity: 0.65;
    }
    slot.disabled::after{
      content: var(--countdown);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3em;
      color: #0d6efdcc;
    }
    .way:has(img) pre {
        margin-block-end: 0;
    }
  `,l([m()],c.prototype,"size",2),l([m()],c.prototype,"assets",2),l([m({attribute:"cc-data"})],c.prototype,"cc",2),l([m({attribute:"lucky-data"})],c.prototype,"lucky",2),l([m()],c.prototype,"payments",2),l([y()],c.prototype,"current",2),l([y()],c.prototype,"idx",2),l([y()],c.prototype,"enabled",2),l([y()],c.prototype,"countdown",2),l([y()],c.prototype,"selected",2),c=l([z("pay-ways")],c);export{c as PayWays};
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
