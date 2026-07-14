var f_=Object.create;var B_=Object.defineProperty;var d_=Object.getOwnPropertyDescriptor;var M_=(_,E)=>{return Object.defineProperty(_,"name",{value:E,enumerable:!1,configurable:!0}),_};var I_=(_,E)=>(E=Symbol[_])?E:Symbol.for("Symbol."+_),y=(_)=>{throw TypeError(_)},g_=(_,E,R)=>(E in _)?B_(_,E,{enumerable:!0,configurable:!0,writable:!0,value:R}):_[E]=R;var E_=(_,E,R)=>E.has(_)||y("Cannot "+R),m_=(_,E)=>Object(E)!==E?y('Cannot use the "in" operator on this value'):_.has(E),V_=(_,E,R)=>(E_(_,E,"read from private field"),R?R.call(_):E.get(_)),Z=(_,E,R)=>E.has(_)?y("Cannot add the same private member more than once"):E instanceof WeakSet?E.add(_):E.set(_,R),x_=(_,E,R,A)=>(E_(_,E,"write to private field"),A?A.call(_,R):E.set(_,R),R),v_=(_,E,R)=>(E_(_,E,"access private method"),R),S_=(_)=>[,,,f_(_?.[I_("metadata")]??null)],z_=["class","method","getter","setter","accessor","field","value","get","set"],h=(_)=>_!==void 0&&typeof _!=="function"?y("Function expected"):_,p_=(_,E,R,A,U)=>({kind:z_[_],name:E,metadata:A,addInitializer:(C)=>R._?y("Already initialized"):U.push(h(C||null))}),R_=(_,E)=>g_(E,I_("metadata"),_[3]),Y=(_,E,R,A)=>{for(var U=0,C=_[E>>1],O=C&&C.length;U<O;U++)E&1?C[U].call(R):A=C[U].call(R,A);return A},X=(_,E,R,A,U,C)=>{var O,L,x,G,V,N=E&7,D=!!(E&8),M=!!(E&16),z=N>3?_.length+1:N?D?1:2:0,w=z_[N+5],P=N>3&&(_[z-1]=[]),T=_[z]||(_[z]=[]),B=N&&(!M&&!D&&(U=U.prototype),N<5&&(N>3||!M)&&d_(N<4?U:{get[R](){return V_(this,C)},set[R](Q){x_(this,C,Q)}},R));N?M&&N<4&&M_(C,(N>2?"set ":N>1?"get ":"")+R):M_(U,R);for(var k=A.length-1;k>=0;k--){if(G=p_(N,R,x={},_[3],T),N){if(G.static=D,G.private=M,V=G.access={has:M?(Q)=>m_(U,Q):(Q)=>(R in Q)},N^3)V.get=M?(Q)=>(N^1?V_:v_)(Q,U,N^4?C:B.get):(Q)=>Q[R];if(N>2)V.set=M?(Q,__)=>x_(Q,U,__,N^4?C:B.set):(Q,__)=>Q[R]=__}if(L=(0,A[k])(N?N<4?M?C:B[w]:N>4?void 0:{get:B.get,set:B.set}:U,G),x._=1,N^4||L===void 0)h(L)&&(N>4?P.unshift(L):N?M?C=L:B[w]=L:U=L);else if(typeof L!=="object"||L===null)y("Object expected");else h(O=L.get)&&(B.get=O),h(O=L.set)&&(B.set=O),h(O=L.init)&&P.unshift(O)}return N||R_(_,U),B&&B_(U,R,B),M?N^4?C:B:U};import{css as CE,html as h_,LitElement as LE}from"https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";var J_=(_)=>(E,R)=>{R!==void 0?R.addInitializer(()=>{customElements.define(_,E)}):customElements.define(_,E)};var Q_=class{get shadowRoot(){return this.__host.__shadowRoot}constructor(E){this.ariaActiveDescendantElement=null,this.ariaAtomic="",this.ariaAutoComplete="",this.ariaBrailleLabel="",this.ariaBrailleRoleDescription="",this.ariaBusy="",this.ariaChecked="",this.ariaColCount="",this.ariaColIndex="",this.ariaColIndexText="",this.ariaColSpan="",this.ariaControlsElements=null,this.ariaCurrent="",this.ariaDescribedByElements=null,this.ariaDescription="",this.ariaDetailsElements=null,this.ariaDisabled="",this.ariaErrorMessageElements=null,this.ariaExpanded="",this.ariaFlowToElements=null,this.ariaHasPopup="",this.ariaHidden="",this.ariaInvalid="",this.ariaKeyShortcuts="",this.ariaLabel="",this.ariaLabelledByElements=null,this.ariaLevel="",this.ariaLive="",this.ariaModal="",this.ariaMultiLine="",this.ariaMultiSelectable="",this.ariaOrientation="",this.ariaOwnsElements=null,this.ariaPlaceholder="",this.ariaPosInSet="",this.ariaPressed="",this.ariaReadOnly="",this.ariaRelevant="",this.ariaRequired="",this.ariaRoleDescription="",this.ariaRowCount="",this.ariaRowIndex="",this.ariaRowIndexText="",this.ariaRowSpan="",this.ariaSelected="",this.ariaSetSize="",this.ariaSort="",this.ariaValueMax="",this.ariaValueMin="",this.ariaValueNow="",this.ariaValueText="",this.role="",this.form=null,this.labels=[],this.states=new Set,this.validationMessage="",this.validity={},this.willValidate=!0,this.__host=E}checkValidity(){return console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true."),!0}reportValidity(){return!0}setFormValue(){}setValidity(){}};var W=function(_,E,R,A,U){if(A==="m")throw TypeError("Private method is not writable");if(A==="a"&&!U)throw TypeError("Private accessor was defined without a setter");if(typeof E==="function"?_!==E||!U:!E.has(_))throw TypeError("Cannot write private member to an object whose class did not declare it");return A==="a"?U.call(_,R):U?U.value=R:E.set(_,R),R},I=function(_,E,R,A){if(R==="a"&&!A)throw TypeError("Private accessor was defined without a getter");if(typeof E==="function"?_!==E||!A:!E.has(_))throw TypeError("Cannot read private member from an object whose class did not declare it");return R==="m"?A:R==="a"?A.call(_):A?A.value:E.get(_)},b,c,i,u,A_,l,o,q,f,H,r,X_,Z_=(_)=>typeof _==="boolean"?_:_?.capture??!1,n=0,U_=1,a=2,C_=3;class $_{constructor(){this.__eventListeners=new Map,this.__captureEventListeners=new Map}addEventListener(_,E,R){if(E===void 0||E===null)return;let A=Z_(R)?this.__captureEventListeners:this.__eventListeners,U=A.get(_);if(U===void 0)U=new Map,A.set(_,U);else if(U.has(E))return;let C=typeof R==="object"&&R?R:{};C.signal?.addEventListener("abort",()=>this.removeEventListener(_,E,R)),U.set(E,C??{})}removeEventListener(_,E,R){if(E===void 0||E===null)return;let A=Z_(R)?this.__captureEventListeners:this.__eventListeners,U=A.get(_);if(U!==void 0){if(U.delete(E),!U.size)A.delete(_)}}dispatchEvent(_){let E=[this],R=this.__eventTargetParent;if(_.composed)while(R)E.push(R),R=R.__eventTargetParent;else while(R&&R!==this.__host)E.push(R),R=R.__eventTargetParent;let A=!1,U=!1,C=n,O=null,L=null,x=null,G=_.stopPropagation,V=_.stopImmediatePropagation;Object.defineProperties(_,{target:{get(){return O??L},...F},srcElement:{get(){return _.target},...F},currentTarget:{get(){return x},...F},eventPhase:{get(){return C},...F},composedPath:{value:()=>E,...F},stopPropagation:{value:()=>{A=!0,G.call(_)},...F},stopImmediatePropagation:{value:()=>{U=!0,V.call(_)},...F}});let N=(P,T,B)=>{if(typeof P==="function")P(_);else if(typeof P?.handleEvent==="function")P.handleEvent(_);if(T.once)B.delete(P)},D=()=>{return x=null,C=n,!_.defaultPrevented},M=E.slice().reverse();O=!this.__host||!_.composed?this:null;let z=(P)=>{L=this;while(L.__host&&P.includes(L.__host))L=L.__host};for(let P of M){if(!O&&(!L||L===P.__host))z(M.slice(M.indexOf(P)));x=P,C=P===_.target?a:U_;let T=P.__captureEventListeners.get(_.type);if(T){for(let[B,k]of T)if(N(B,k,T),U)return D()}if(A)return D()}let w=_.bubbles?E:[this];L=null;for(let P of w){if(!O&&(!L||P===L.__host))z(w.slice(0,w.indexOf(P)+1));x=P,C=P===_.target?a:C_;let T=P.__eventListeners.get(_.type);if(T){for(let[B,k]of T)if(N(B,k,T),U)return D()}if(A)return D()}return D()}}var L_=$_;var F={__proto__:null};F.enumerable=!0;Object.freeze(F);var O_=(H=class{constructor(E,R={}){if(b.set(this,!1),c.set(this,!1),i.set(this,!1),u.set(this,!1),A_.set(this,Date.now()),l.set(this,!1),o.set(this,void 0),q.set(this,void 0),f.set(this,void 0),this.NONE=n,this.CAPTURING_PHASE=U_,this.AT_TARGET=a,this.BUBBLING_PHASE=C_,arguments.length===0)throw Error("The type argument must be specified");if(typeof R!=="object"||!R)throw Error('The "options" argument must be an object');let{bubbles:A,cancelable:U,composed:C}=R;W(this,b,!!U,"f"),W(this,c,!!A,"f"),W(this,i,!!C,"f"),W(this,o,`${E}`,"f"),W(this,q,null,"f"),W(this,f,!1,"f")}initEvent(E,R,A){throw Error("Method not implemented.")}stopImmediatePropagation(){this.stopPropagation()}preventDefault(){W(this,u,!0,"f")}get target(){return I(this,q,"f")}get currentTarget(){return I(this,q,"f")}get srcElement(){return I(this,q,"f")}get type(){return I(this,o,"f")}get cancelable(){return I(this,b,"f")}get defaultPrevented(){return I(this,b,"f")&&I(this,u,"f")}get timeStamp(){return I(this,A_,"f")}composedPath(){return I(this,f,"f")?[I(this,q,"f")]:[]}get returnValue(){return!I(this,b,"f")||!I(this,u,"f")}get bubbles(){return I(this,c,"f")}get composed(){return I(this,i,"f")}get eventPhase(){return I(this,f,"f")?H.AT_TARGET:H.NONE}get cancelBubble(){return I(this,l,"f")}set cancelBubble(E){if(E)W(this,l,!0,"f")}stopPropagation(){W(this,l,!0,"f")}get isTrusted(){return!1}},b=new WeakMap,c=new WeakMap,i=new WeakMap,u=new WeakMap,A_=new WeakMap,l=new WeakMap,o=new WeakMap,q=new WeakMap,f=new WeakMap,H.NONE=n,H.CAPTURING_PHASE=U_,H.AT_TARGET=a,H.BUBBLING_PHASE=C_,H);Object.defineProperties(O_.prototype,{initEvent:F,stopImmediatePropagation:F,preventDefault:F,target:F,currentTarget:F,srcElement:F,type:F,cancelable:F,defaultPrevented:F,timeStamp:F,composedPath:F,returnValue:F,bubbles:F,composed:F,eventPhase:F,cancelBubble:F,stopPropagation:F,isTrusted:F});var D_=(X_=class extends O_{constructor(E,R={}){super(E,R);r.set(this,void 0),W(this,r,R?.detail??null,"f")}initCustomEvent(E,R,A,U){throw Error("Method not implemented.")}get detail(){return I(this,r,"f")}},r=new WeakMap,X_);Object.defineProperties(D_.prototype,{detail:F});var N_=O_,F_=D_;var J;var YE=(J=class{constructor(){this.STYLE_RULE=1,this.CHARSET_RULE=2,this.IMPORT_RULE=3,this.MEDIA_RULE=4,this.FONT_FACE_RULE=5,this.PAGE_RULE=6,this.NAMESPACE_RULE=10,this.KEYFRAMES_RULE=7,this.KEYFRAME_RULE=8,this.SUPPORTS_RULE=12,this.COUNTER_STYLE_RULE=11,this.FONT_FEATURE_VALUES_RULE=14,this.__parentStyleSheet=null,this.cssText=""}get parentRule(){return null}get parentStyleSheet(){return this.__parentStyleSheet}get type(){return 0}},J.STYLE_RULE=1,J.CHARSET_RULE=2,J.IMPORT_RULE=3,J.MEDIA_RULE=4,J.FONT_FACE_RULE=5,J.PAGE_RULE=6,J.NAMESPACE_RULE=10,J.KEYFRAMES_RULE=7,J.KEYFRAME_RULE=8,J.SUPPORTS_RULE=12,J.COUNTER_STYLE_RULE=11,J.FONT_FEATURE_VALUES_RULE=14,J);globalThis.Event??=N_;globalThis.CustomEvent??=F_;var T_=new WeakMap,d=(_)=>{let E=T_.get(_);if(E===void 0)T_.set(_,E=new Map);return E},c_=class extends L_{constructor(){super(...arguments);this.__shadowRootMode=null,this.__shadowRoot=null,this.__internals=null}get attributes(){return Array.from(d(this)).map(([E,R])=>({name:E,value:R}))}get shadowRoot(){if(this.__shadowRootMode==="closed")return null;return this.__shadowRoot}get localName(){return this.constructor.__localName}get tagName(){return this.localName?.toUpperCase()}setAttribute(E,R){d(this).set(E,String(R))}removeAttribute(E){d(this).delete(E)}toggleAttribute(E,R){if(this.hasAttribute(E)){if(R===void 0||!R)return this.removeAttribute(E),!1}else if(R===void 0||R)return this.setAttribute(E,""),!0;else return!1;return!0}hasAttribute(E){return d(this).has(E)}attachShadow(E){let R={host:this};if(this.__shadowRootMode=E.mode,E&&E.mode==="open")this.__shadowRoot=R;return R}attachInternals(){if(this.__internals!==null)throw Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");let E=new Q_(this);return this.__internals=E,E}getAttribute(E){return d(this).get(E)??null}};var i_=class extends c_{},P_=i_;globalThis.litServerRoot??=Object.defineProperty(new P_,"localName",{get(){return"lit-server-root"}});function o_(){let _,E;return{promise:new Promise((A,U)=>{_=A,E=U}),resolve:_,reject:E}}class w_{constructor(){this.__definitions=new Map,this.__reverseDefinitions=new Map,this.__pendingWhenDefineds=new Map}define(_,E){if(this.__definitions.has(_))console.warn(`'CustomElementRegistry' already has "${_}" defined. This may have been caused by live reload or hot module replacement in which case it can be safely ignored.
Make sure to test your application with a production build as repeat registrations will throw in production.`);if(this.__reverseDefinitions.has(E))throw Error(`Failed to execute 'define' on 'CustomElementRegistry': the constructor has already been used with this registry for the tag name ${this.__reverseDefinitions.get(E)}`);E.__localName=_,this.__definitions.set(_,{ctor:E,observedAttributes:E.observedAttributes??[]}),this.__reverseDefinitions.set(E,_),this.__pendingWhenDefineds.get(_)?.resolve(E),this.__pendingWhenDefineds.delete(_)}get(_){return this.__definitions.get(_)?.ctor}getName(_){return this.__reverseDefinitions.get(_)??null}upgrade(_){throw Error("customElements.upgrade is not currently supported in SSR. Please file a bug if you need it.")}async whenDefined(_){let E=this.__definitions.get(_);if(E)return E.ctor;let R=this.__pendingWhenDefineds.get(_);if(!R)R=o_(),this.__pendingWhenDefineds.set(_,R);return R.promise}}var r_=w_;var W_=new r_;var g=globalThis,s=g.ShadowRoot&&(g.ShadyCSS===void 0||g.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k_=Symbol(),H_=new WeakMap;class Y_{constructor(_,E,R){if(this._$cssResult$=!0,R!==k_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=_,this.t=E}get styleSheet(){let _=this.o,E=this.t;if(s&&_===void 0){let R=E!==void 0&&E.length===1;R&&(_=H_.get(E)),_===void 0&&((this.o=_=new CSSStyleSheet).replaceSync(this.cssText),R&&H_.set(E,_))}return _}toString(){return this.cssText}}var q_=(_)=>new Y_(typeof _=="string"?_:_+"",void 0,k_);var y_=(_,E)=>{if(s)_.adoptedStyleSheets=E.map((R)=>R instanceof CSSStyleSheet?R:R.styleSheet);else for(let R of E){let A=document.createElement("style"),U=g.litNonce;U!==void 0&&A.setAttribute("nonce",U),A.textContent=R.cssText,_.appendChild(A)}},K_=s||g.CSSStyleSheet===void 0?(_)=>_:(_)=>_ instanceof CSSStyleSheet?((E)=>{let R="";for(let A of E.cssRules)R+=A.cssText;return q_(R)})(_):_;var{is:n_,defineProperty:a_,getOwnPropertyDescriptor:s_,getOwnPropertyNames:e_,getOwnPropertySymbols:t_,getPrototypeOf:_E}=Object,p=globalThis;p.customElements??=W_;var b_=p.trustedTypes,EE=b_?b_.emptyScript:"",RE=p.reactiveElementPolyfillSupport,m=(_,E)=>_,v={toAttribute(_,E){switch(E){case Boolean:_=_?EE:null;break;case Object:case Array:_=_==null?_:JSON.stringify(_)}return _},fromAttribute(_,E){let R=_;switch(E){case Boolean:R=_!==null;break;case Number:R=_===null?null:Number(_);break;case Object:case Array:try{R=JSON.parse(_)}catch(A){R=null}}return R}},e=(_,E)=>!n_(_,E),j_={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:e};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class j extends(globalThis.HTMLElement??P_){static addInitializer(_){this._$Ei(),(this.l??=[]).push(_)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(_,E=j_){if(E.state&&(E.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(_)&&((E=Object.create(E)).wrapped=!0),this.elementProperties.set(_,E),!E.noAccessor){let R=Symbol(),A=this.getPropertyDescriptor(_,R,E);A!==void 0&&a_(this.prototype,_,A)}}static getPropertyDescriptor(_,E,R){let{get:A,set:U}=s_(this.prototype,_)??{get(){return this[E]},set(C){this[E]=C}};return{get:A,set(C){let O=A?.call(this);U?.call(this,C),this.requestUpdate(_,O,R)},configurable:!0,enumerable:!0}}static getPropertyOptions(_){return this.elementProperties.get(_)??j_}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;let _=_E(this);_.finalize(),_.l!==void 0&&(this.l=[..._.l]),this.elementProperties=new Map(_.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){let E=this.properties,R=[...e_(E),...t_(E)];for(let A of R)this.createProperty(A,E[A])}let _=this[Symbol.metadata];if(_!==null){let E=litPropertyMetadata.get(_);if(E!==void 0)for(let[R,A]of E)this.elementProperties.set(R,A)}this._$Eh=new Map;for(let[E,R]of this.elementProperties){let A=this._$Eu(E,R);A!==void 0&&this._$Eh.set(A,E)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(_){let E=[];if(Array.isArray(_)){let R=new Set(_.flat(1/0).reverse());for(let A of R)E.unshift(K_(A))}else _!==void 0&&E.push(K_(_));return E}static _$Eu(_,E){let R=E.attribute;return R===!1?void 0:typeof R=="string"?R:typeof _=="string"?_.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((_)=>this.enableUpdating=_),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((_)=>_(this))}addController(_){(this._$EO??=new Set).add(_),this.renderRoot!==void 0&&this.isConnected&&_.hostConnected?.()}removeController(_){this._$EO?.delete(_)}_$E_(){let _=new Map,E=this.constructor.elementProperties;for(let R of E.keys())this.hasOwnProperty(R)&&(_.set(R,this[R]),delete this[R]);_.size>0&&(this._$Ep=_)}createRenderRoot(){let _=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return y_(_,this.constructor.elementStyles),_}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((_)=>_.hostConnected?.())}enableUpdating(_){}disconnectedCallback(){this._$EO?.forEach((_)=>_.hostDisconnected?.())}attributeChangedCallback(_,E,R){this._$AK(_,R)}_$ET(_,E){let R=this.constructor.elementProperties.get(_),A=this.constructor._$Eu(_,R);if(A!==void 0&&R.reflect===!0){let U=(R.converter?.toAttribute!==void 0?R.converter:v).toAttribute(E,R.type);this._$Em=_,U==null?this.removeAttribute(A):this.setAttribute(A,U),this._$Em=null}}_$AK(_,E){let R=this.constructor,A=R._$Eh.get(_);if(A!==void 0&&this._$Em!==A){let U=R.getPropertyOptions(A),C=typeof U.converter=="function"?{fromAttribute:U.converter}:U.converter?.fromAttribute!==void 0?U.converter:v;this._$Em=A;let O=C.fromAttribute(E,U.type);this[A]=O??this._$Ej?.get(A)??O,this._$Em=null}}requestUpdate(_,E,R,A=!1,U){if(_!==void 0){let C=this.constructor;if(A===!1&&(U=this[_]),R??=C.getPropertyOptions(_),!((R.hasChanged??e)(U,E)||R.useDefault&&R.reflect&&U===this._$Ej?.get(_)&&!this.hasAttribute(C._$Eu(_,R))))return;this.C(_,E,R)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(_,E,{useDefault:R,reflect:A,wrapped:U},C){R&&!(this._$Ej??=new Map).has(_)&&(this._$Ej.set(_,C??E??this[_]),U!==!0||C!==void 0)||(this._$AL.has(_)||(this.hasUpdated||R||(E=void 0),this._$AL.set(_,E)),A===!0&&this._$Em!==_&&(this._$Eq??=new Set).add(_))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(E){Promise.reject(E)}let _=this.scheduleUpdate();return _!=null&&await _,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[A,U]of this._$Ep)this[A]=U;this._$Ep=void 0}let R=this.constructor.elementProperties;if(R.size>0)for(let[A,U]of R){let{wrapped:C}=U,O=this[A];C!==!0||this._$AL.has(A)||O===void 0||this.C(A,void 0,U,O)}}let _=!1,E=this._$AL;try{_=this.shouldUpdate(E),_?(this.willUpdate(E),this._$EO?.forEach((R)=>R.hostUpdate?.()),this.update(E)):this._$EM()}catch(R){throw _=!1,this._$EM(),R}_&&this._$AE(E)}willUpdate(_){}_$AE(_){this._$EO?.forEach((E)=>E.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(_)),this.updated(_)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(_){return!0}update(_){this._$Eq&&=this._$Eq.forEach((E)=>this._$ET(E,this[E])),this._$EM()}updated(_){}firstUpdated(_){}}j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[m("elementProperties")]=new Map,j[m("finalized")]=new Map,RE?.({ReactiveElement:j}),(p.reactiveElementVersions??=[]).push("2.1.2");var AE={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:e},UE=(_=AE,E,R)=>{let{kind:A,metadata:U}=R,C=globalThis.litPropertyMetadata.get(U);if(C===void 0&&globalThis.litPropertyMetadata.set(U,C=new Map),A==="setter"&&((_=Object.create(_)).wrapped=!0),C.set(R.name,_),A==="accessor"){let{name:O}=R;return{set(L){let x=E.get.call(this);E.set.call(this,L),this.requestUpdate(O,x,_,!0,L)},init(L){return L!==void 0&&this.C(O,void 0,_,L),L}}}if(A==="setter"){let{name:O}=R;return function(L){let x=this[O];E.call(this,L),this.requestUpdate(O,x,_,!0,L)}}throw Error("Unsupported decorator location: "+A)};function $(_){return(E,R)=>typeof R=="object"?UE(_,E,R):((A,U,C)=>{let O=U.hasOwnProperty(C);return U.constructor.createProperty(C,A),O?Object.getOwnPropertyDescriptor(U,C):void 0})(_,E,R)}function G_(_){return $({..._,state:!0,attribute:!1})}var u_=["靜態 Original","旋轉態 Spinning","費納奇鏡 PhenakistoScope"],l_=/^https?:\/\/|^data:image\//i,FR=[J_("spin-space")],NR=LE,PR=[$({type:Number})],YR=[$({type:Number})],KR=[$({type:Number})],GR=[$({type:Number})],MR=[$({type:Boolean,attribute:"with-duration"})],VR=[$({type:String})],xR=[$({type:ArrayBuffer})],BR=[$({type:String})],IR=[$()],SR=[G_()],zR=[G_()],JR=new WeakMap,QR=new WeakMap,XR=new WeakMap,ZR=new WeakMap,$R=new WeakMap,DR=new WeakMap,TR=new WeakMap,wR=new WeakMap,WR=new WeakMap,HR=new WeakMap,kR=new WeakMap,K=S_(NR);class S extends NR{constructor(){super(...arguments);Y(K,5,this);Z(this,JR,Y(K,8,this,!1));Y(K,11,this);Z(this,QR,Y(K,12,this,10));Y(K,15,this);Z(this,XR,Y(K,16,this,1200));Y(K,19,this);Z(this,ZR,Y(K,20,this,1600));Y(K,23,this);Z(this,$R,Y(K,24,this,!1));Y(K,27,this);Z(this,DR,Y(K,28,this,""));Y(K,31,this);Z(this,TR,Y(K,32,this));Y(K,35,this);Z(this,wR,Y(K,36,this,""));Y(K,39,this);Z(this,WR,Y(K,40,this));Y(K,43,this);Z(this,HR,Y(K,44,this,2));Y(K,47,this);Z(this,kR,Y(K,48,this,3650));Y(K,51,this)}_q={};_moving=!1;stateChange(_){let{s:E="2"}=_.target?.dataset||{},R=parseInt(E,10);if(!isNaN(R))this.state=R}maxDurChange(_){let E=_.target.valueAsNumber;if(!E||isNaN(E))return;this.maxdur=E<=this.duration?E:this.duration}speedChange(_){this.duration=_.target.valueAsNumber}toggle(_){this.state=(this.state+1)%3}async make(_,E){if(E)this.name=E;let{host:R}=this.renderRoot;R.innerHTML='<div class="cover"><div class="loading"></div></div>';let A=await _;A.className="cover",A.tabIndex=1;let U=R.firstChild;U.parentElement.removeChild(U),R.appendChild(A)}slotChange(_){let R=_.target.assignedElements({flatten:!0})[0];if(!R)return;let A=R.getAttribute("src");if(!A)A=R.outerHTML.match(/url\("?([^")]+)"?\)/)?.[1];if(!A)return;this.frames=10,this.clockwise=!1,this.duration=1200,A.match(/([\d]+(\.\d+)?m?s)|(\d+(f|cc)\.)/g)?.map((U)=>{if(/\d(f|cc)\./.test(U)){let C=U.length;this.clockwise=U.substring(C-3)==="cc.";let O=parseInt(U.substring(0,C-(this.clockwise?3:2)),10);this.frames=O}else if(this.withDuration){let C=parseFloat(U.replace(/m?s$/,""));this.duration=U.indexOf("ms")>0?C:C*1000}}),this.src=A}updated(_){if(_.has("state")||_.has("frames")||_.has("clockwise")||_.has("duration")||_.has("src")){if(_.has("src")){if(!/^data:image/.test(this.src)){let G=this.src.replace(/[#?].*$/,""),V=G.lastIndexOf("/");this.name=V>-1?G.substring(V+1):G}let{_q:x={}}=this;["state","frames","clockwise","duration"].map((G)=>{if(x[G]!==void 0)this[G]=x[G]}),this._q={},this.srcChange(this.src)}let{state:E,frames:R,clockwise:A,duration:U,src:C}=this,O="data:image/",L=C.substring(0,O.length)==O?"":btoa([E,R,A?1:0,U,C].join("\t"));this.dispatchEvent(new CustomEvent("spin",{detail:L}))}}size(){let _=this.renderRoot.querySelector("div.params");if(_){let{width:E,height:R}=_.getBoundingClientRect();return{width:E,height:R}}return{width:0,height:0}}srcChange(_){let{host:E}=this.renderRoot;if(!_)return;E.innerHTML='<div class="cover"><div class="loading"></div></div>',this._busying=_;let R=E.firstChild,A=document.createElement("img");A.src=_,A.className="cover",A.onload=()=>{if(A.onerror=A.onload=null,this.current=A,this._busying!=_)return;if(_&&l_.test(_)){let U=R.querySelector(".loading");if(U)R.removeChild(U);R.style.backgroundImage=`url(${_})`,R.style.borderRadius="100%",this.src=_}else R.parentElement?.removeChild(R),E.appendChild(A);this._busying=""},A.onerror=()=>{A.onerror=A.onload=null;let U=R.querySelector(".loading");if(U)R.removeChild(U);R.innerHTML='<div class="err">load error</div>'}}init(_="",E=""){let{hash:R,href:A}=location,U=new URL(A).searchParams,C="",O={};try{let L=[];if(_ instanceof Array){L=_;let M=L[L.length-1];if(typeof M==="string"&&/[a-z]/i.test(M))C=M}else{let M=(R||_).substring(1),z=M.length?atob(M).split("\t"):[];if(z.length>0){let w=z.slice(-1)[0];if(w&&/[a-z]/i.test(w))C=w.trim(),z=z.slice(0,z.length-1);z.map((P)=>{if(P.length>0)L.push(parseInt(P,10))})}}let x=[2,10,0,1000];L.map((M,z)=>isNaN(M)&&(L[z]=x[z]));let[G=2,V=10,N=0,D=1000]=L;O={state:G,frames:V,clockwise:N?!0:!1,duration:D}}catch(L){}if(U.has("src"))C=U.get("src");if(this.dispatchEvent(new CustomEvent("src-change",{detail:C})),l_.test(E))C=E;if(U.has("n")){let L=parseInt(U.get("n")||"",10);if(L!=0){if(O.frames=L<0?-L:L,L<0)O.clockwise=!O.clockwise}}if(this._q=O,U.has("src"))history.replaceState(document.title,"",A.replace(/\?[^#]*/,""));if(C)this.srcChange(C)}mouseDown(_){if(_.button!=0&&!_.touches)return;this._moving=!0}mouseUp(_){if(_.button!=0&&!_.touches)return;if(_.touches)this._lastTouch=null;this._moving=!1}mouseMove(_){if(!this._moving||_.button!=0&&!_.touches)return;let{duration:E,clockwise:R,maxdur:A,_lastTouch:U}=this,C=_.touches?.[0];if(C)if(U)_.movementX=C.pageX-U.pageX,_.movementY=C.pageY-U.pageY,this._lastTouch=C;else{this._lastTouch=C;return}let O=_.movementX;if(Math.abs(_.movementY)>Math.abs(O))O=5*(R?-_.movementY:_.movementY);else O=2*O;let L=(R?1:-1)*E+O;if(L<0&&L<-A)L=-A;else if(L>0&&L>A)L=A;if(L==0)L=_.movementX<0?-1:1;this.duration=Math.round(L<0?-L:L),this.clockwise=L<0?!1:!0}adjustDuration(_){if(!_.target)return;let E=_.target;if(!E.classList.contains("params"))return;let{duration:A,maxdur:U}=this,{offsetWidth:C,offsetHeight:O}=E,{offsetX:L,offsetY:x}=_,G=x-O/2,V=L-C/2;if(Math.abs(V)<25||G*G+V*V>C*C/4||G*G+V*V<(C/2-16)*(C/2-16))return;let N=Math.atan2(G,V)*180/Math.PI;if(this.clockwise=V>0,V<0)this.duration=Math.round(U*(N<0?0.5+(180+N)/180:(N-90)/180));else this.duration=Math.round(U*(N>0?(90-N)/180:0.5-N/180))}render(){let{clockwise:_,duration:E,maxdur:R,state:A}=this;return h_`
      <div class="state">${Array.from([,,,],(U,C)=>C).map((U)=>U!=A?h_`<a data-s=${U} title="${u_[U]}" @click=${this.stateChange}>●</a>`:u_[A])}</div>
      <div class="space">
        <div
          tabindex="1"
          class="params"
          style=${`--z-plus:${_?-2:-1};--fill-plus:${_?"#6999f655":"var(--cover-color, #fff)"}; --rotate-plus:${_?`rotate(${180*(R-E)/R}deg)`:"rotate(0deg)"};--z-minus: ${_?-1:-2}; --fill-minus:${_?"var(--cover-color, #fff)":"#ff8b8b55"}; --rotate-minus:${_?"rotate(0deg)":`rotate(${-180*(R-E)/R}deg)`};`}
          @click=${this.adjustDuration}
        >
          <slot
            title="Double click to toggle state 雙擊切換狀態"
            @slotchange="${this.slotChange}"
            class=${`${this.state?this.clockwise?"spinningcc":"spinning":""} centerize`}
            style=${`--loop-dur: ${this.duration.toFixed(5)}ms;animation-timing-function: ${this.state==1?"linear":`steps(${this.frames}, end)`}`}
            @dblclick=${this.toggle}
            @mousedown=${this.mouseDown}
            @mouseup=${this.mouseUp}
            @mouseout=${this.mouseUp}
            @mousemove=${this.mouseMove}
            @touchstart=${this.mouseDown}
            @touchend=${this.mouseUp}
            @touchcancel=${this.mouseUp}
            @touchmove=${this.mouseMove}
          ></slot>
          <div class="param">
          ${""}
          <input type="number" .value=${this.duration} min="1" max="${this.maxdur}" @input=${(U)=>this.duration=U.target.valueAsNumber||this.duration} title="duration in ms of one circle spin"><sup>ms</sup>
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
            @input="${(U)=>this.frames=parseInt(U.target.value,10)||this.frames}"
          ><sup>fr</sup>
        </div>
    </div>
</div>
    `}static styles=CE`
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
    cursor: pointer;
}
.params::after,
.params::before {
    content: " ";
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    display: none;
    pointer-events: none;
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
    pointer-events: none;
}
slot:has(.loading) {
    pointer-events: none;
}
.err {
    color: #ff0;
}`}X(K,4,"clockwise",PR,S,JR),X(K,4,"frames",YR,S,QR),X(K,4,"duration",KR,S,XR),X(K,4,"max",GR,S,ZR),X(K,4,"withDuration",MR,S,$R),X(K,4,"src",VR,S,DR),X(K,4,"data",xR,S,TR),X(K,4,"name",BR,S,wR),X(K,4,"current",IR,S,WR),X(K,4,"state",SR,S,HR),X(K,4,"maxdur",zR,S,kR),S=X(K,0,"SpinSpace",FR,S),Y(K,1,S),R_(K,S);let _SpinSpace=S;export{S as SpinSpace};
