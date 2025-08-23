var K=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var d=(i,t,e,s)=>{for(var r=s>1?void 0:s?H(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&K(t,e,r),r};import{css as gt,html as h,LitElement as $t}from"https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";var R=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var g=globalThis,A=g.ShadowRoot&&(g.ShadyCSS===void 0||g.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,T=Symbol(),k=new WeakMap,P=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==T)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(A&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=k.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&k.set(e,t))}return t}toString(){return this.cssText}},V=i=>new P(typeof i=="string"?i:i+"",void 0,T),G=(i,t)=>{if(A)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=g.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},B=A?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return V(e)})(i):i,{is:Q,defineProperty:X,getOwnPropertyDescriptor:Y,getOwnPropertyNames:Z,getOwnPropertySymbols:W,getPrototypeOf:tt}=Object,b=globalThis,z=b.trustedTypes,et=z?z.emptyScript:"",st=b.reactiveElementPolyfillSupport,m=(i,t)=>i,$={toAttribute(i,t){switch(t){case Boolean:i=i?et:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},C=(i,t)=>!Q(i,t),q={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;var u=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=q){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&X(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:o}=Y(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let a=r?.call(this);o?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??q}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;let t=tt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){let e=this.properties,s=[...Z(e),...W(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(B(r))}else t!==void 0&&e.push(B(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return G(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:$).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:$;this._$Em=r,this[r]=n.fromAttribute(e,o.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let r=this.constructor,o=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??C)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,o]of s){let{wrapped:n}=o,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};u.elementStyles=[],u.shadowRootOptions={mode:"open"},u[m("elementProperties")]=new Map,u[m("finalized")]=new Map,st?.({ReactiveElement:u}),(b.reactiveElementVersions??=[]).push("2.1.0");var rt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:C},it=(i=rt,t,e)=>{let{kind:s,metadata:r}=e,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){let{name:n}=e;return{set(a){let c=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,c,i)},init(a){return a!==void 0&&this.C(n,void 0,i,a),a}}}if(s==="setter"){let{name:n}=e;return function(a){let c=this[n];t.call(this,a),this.requestUpdate(n,c,i)}}throw Error("Unsupported decorator location: "+s)};function v(i){return(t,e)=>typeof e=="object"?it(i,t,e):((s,r,o)=>{let n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}var _=globalThis,x=_.ShadowRoot&&(_.ShadyCSS===void 0||_.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),L=new WeakMap,U=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(x&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=L.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&L.set(e,t))}return t}toString(){return this.cssText}},ot=i=>new U(typeof i=="string"?i:i+"",void 0,J),nt=(i,t)=>{if(x)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=_.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},D=x?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ot(e)})(i):i,{is:at,defineProperty:ct,getOwnPropertyDescriptor:ht,getOwnPropertyNames:lt,getOwnPropertySymbols:pt,getPrototypeOf:dt}=Object,S=globalThis,N=S.trustedTypes,ut=N?N.emptyScript:"",ft=S.reactiveElementPolyfillSupport,E=(i,t)=>i,w={toAttribute(i,t){switch(t){case Boolean:i=i?ut:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},O=(i,t)=>!at(i,t),F={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:O};Symbol.metadata??=Symbol("metadata"),S.litPropertyMetadata??=new WeakMap;var f=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&ct(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:o}=ht(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let a=r?.call(this);o?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??F}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;let t=dt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){let e=this.properties,s=[...lt(e),...pt(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(D(r))}else t!==void 0&&e.push(D(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:w).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:w;this._$Em=r,this[r]=n.fromAttribute(e,o.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let r=this.constructor,o=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??O)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,o]of s){let{wrapped:n}=o,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[E("elementProperties")]=new Map,f[E("finalized")]=new Map,ft?.({ReactiveElement:f}),(S.reactiveElementVersions??=[]).push("2.1.0");var yt={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:O},mt=(i=yt,t,e)=>{let{kind:s,metadata:r}=e,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){let{name:n}=e;return{set(a){let c=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,c,i)},init(a){return a!==void 0&&this.C(n,void 0,i,a),a}}}if(s==="setter"){let{name:n}=e;return function(a){let c=this[n];t.call(this,a),this.requestUpdate(n,c,i)}}throw Error("Unsupported decorator location: "+s)};function Et(i){return(t,e)=>typeof e=="object"?mt(i,t,e):((s,r,o)=>{let n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e);}function j(i){return Et({...i,state:!0,attribute:!1})}var I=(i,t="",e="")=>h`<a title="${e}"
          class="${t}" style="${t?"":"margin-top:.5rem"}"
          href="mailto:mindon@live.com?subject=%E7%94%B3%E8%AB%8B%E5%8A%A0%E5%85%A5 Join%20Lucky%20Charm%20of%20%E2%9D%9D%E6%97%8B%E5%9C%88SP%C2%B2&body=%E8%AB%8B%E7%A2%BA%E8%AA%8D%E5%8F%AF%E4%BB%A5%E5%85%AC%E9%96%8B%E4%B8%A6%E6%8F%90%E4%BE%9B%E6%94%B6%E6%AC%BE%E9%80%94%E5%BE%91%EF%BC%9A%0A%E6%8E%A5%E5%8F%97%E6%94%B6%E6%AC%BE%E7%9A%84%E4%BA%8C%E7%B6%AD%E7%A2%BC%20QR%20Code%20to%20receive%20money%20%0A%E6%88%96%E8%80%85%E6%94%B6%E6%AC%BE%E9%80%A3%E6%8E%A5%20or%20Link%20to%20receive%20money%0A%E6%88%96%E5%85%B6%E4%BB%96%E6%94%B6%E6%AC%BE%E6%96%B9%E5%BC%8F%20or%20Other%20way%20to%20receive%20money">${i}</a>`;function bt(i,t,e,s){let r=i.src,o=i.way,n=[null,null];if(r instanceof Array){if(r.length==0)return{};o=="cc"?(t>0&&(n[0]=h`<a @click=${s} data-v="-1" class="prev">➜</a>`),t<r.length-1&&(n[1]=h`<a @click=${s} data-v="1" class="next">➜</a>`)):o=="lucky"&&(t==0&&r.length>1?t=1:t>=r.length&&(t=r.length-1),t>0&&(n[0]=I("+","prev","\u52A0\u5165 Join Lukcy Charm of \u275D\u65CB\u5708SP\xB2")),t>0&&(n[1]=h`<a @click=${s} data-v="rand" class="next" title="刷新下一位幸運者
Refresh to next lucky charm">↺</a>`)),e=`${e}${o}/`,i=r[t]}let{src:a,way:c,desc:p}=i;if(typeof a=="object")return{pxn:n,payment:i,dom:a};if(a instanceof Function)return{pxn:n,payment:i,dom:a(e)};let y=/^https?:\/\//i.test(a);return/\.(png|gif|jpg|jpeg|webp|avif|svg)$/i.test(a)?{pxn:n,payment:i,dom:h`<pre class="memo">${p}</pre>
      <img src="${y?"":e}${a}" title="${p}" alt="${p}" />
    `}:y?{pxn:n,payment:i,dom:h`
      <a href="${a}" target="_${c||"donate"}">${p}</a>
    `}:{pxn:n,payment:i,dom:h`
    <div class="info"><pre>${a||p}</pre></div>
  `}}var l=class extends $t{constructor(){super();this.size=180;this.assets="./payments/";this.payments=[{way:"wechat",desc:"\u5FAE\u4FE1 WeChat",src:"mindon_wechat.png"},{way:"alipay",desc:"\u652F\u4ED8\u5BF6 Alipay",src:"mindon_alipay.png"},{way:"paypal",desc:"\u8C9D\u5BF6 PayPal",memo:"n \xD7 $0.99 to developer",src:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YSVEJMBLM3AFG"},{way:"cc",desc:"\u516C\u76CA\u91D1 Community Chest",src:[]},{way:"lucky",desc:"\u5E78\u904B\u7B26 Lucky Charm",src:[{way:"join",src:h`
            <pre class="memo">隨機收錢人
幸運隨時降臨
Lucky Charm</pre>${I("\u52A0\u5165 JOIN +")}
      `}]},{way:"free",desc:"\u4E0D\u60F3\u82B1\u9322 Enjoy Freely",src:e=>h`
          <pre class="memo">就是不想花錢
just don't want to pay</pre><p>
            <img src="${e}free.png" alt="Free" width="80" height="54" />
          </p>
        `}];this.current=0;this.idx=0;let{assets:e}=this;fetch(`${e}cc/cc.json`).then(s=>s.json()).then(s=>{this.payments.map((r,o)=>{r.way=="cc"&&(this.payments[o].src=s,this.requestUpdate())})}),fetch(`${e}lucky/lucky.json`).then(s=>s.json()).then(s=>{this.payments.map((r,o)=>{r.way=="lucky"&&(this.payments[o].src.push(...s),this.requestUpdate())})})}updated(e){if(e.has("current")){let{current:s,payments:r}=this,{src:o}=r[s];o instanceof Array&&(this.idx=Math.floor(Math.random()*o.length))}}subnav(e){let{v:s="0"}=e.target.dataset,{current:r,payments:o}=this,{src:n}=o[r];if(s=="rand"){n instanceof Array&&(this.idx=Math.ceil(Math.random()*(n.length-1)));return}this.idx+=parseInt(s,10),n instanceof Array&&(this.idx<0?this.idx=0:this.idx>=n.length&&(this.idx=n.length-1))}render(){let{size:e,current:s,idx:r,payments:o,assets:n}=this,{pxn:a,payment:c,dom:p}=bt(o[s],r,n,y=>this.subnav(y));return c?h`
      <div id="ways">
        <div class="way ${o[s].way}" style="--size: ${e}px">
          ${a}
          ${c.memo?h`
              <pre class="memo">${c.memo}</pre>
            `:""} ${p}
        </div>
        <ul style="--ways-bg: url(${n}follow-my-heart.png) 10px 0px no-repeat">
          ${o.map(({desc:y},M)=>h`
              <li>
                <label>${y} <input
                  type="radio"
                  name="pay"
                  value="${M}"
                  @click="${()=>this.current=M}"
                ></label>
              </li>
            `)}
          <li><slot></slot></li>
        </ul>
      </div>
    `:"..."}};l.styles=gt`
    :host {
      display: inline-block;
    }
    #ways {
      display: flex;
      align-items: center;
      padding: 1rem 1.5rem;
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
    }
    a.prev {
        transform: scaleX(-1);
        right: auto;
        left: 0;
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
        top: -8px;
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
    }
    ::slotted(a),
    ::slotted(input),
    ::slotted(button) {
      width: 100%;
      pointer-events: none;
      color: #666;
      opacity: 0.8;
    }
    .way:has(img) pre {
        margin-block-end: 0;
    }
  `,d([v()],l.prototype,"size",2),d([v()],l.prototype,"assets",2),d([v()],l.prototype,"payments",2),d([j()],l.prototype,"current",2),d([j()],l.prototype,"idx",2),l=d([R("pay-ways")],l);export{l as PayWays};
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
