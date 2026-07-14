var l_=Object.create;var x_=Object.defineProperty;var f_=Object.getOwnPropertyDescriptor;var G_=(_,E)=>{return Object.defineProperty(_,"name",{value:E,enumerable:!1,configurable:!0}),_};var B_=(_,E)=>(E=Symbol[_])?E:Symbol.for("Symbol."+_),j=(_)=>{throw TypeError(_)},d_=(_,E,R)=>(E in _)?x_(_,E,{enumerable:!0,configurable:!0,writable:!0,value:R}):_[E]=R;var __=(_,E,R)=>E.has(_)||j("Cannot "+R),g_=(_,E)=>Object(E)!==E?j('Cannot use the "in" operator on this value'):_.has(E),M_=(_,E,R)=>(__(_,E,"read from private field"),R?R.call(_):E.get(_));var V_=(_,E,R,A)=>(__(_,E,"write to private field"),A?A.call(_,R):E.set(_,R),R),m_=(_,E,R)=>(__(_,E,"access private method"),R),I_=(_)=>[,,,l_(_?.[B_("metadata")]??null)],S_=["class","method","getter","setter","accessor","field","value","get","set"],b=(_)=>_!==void 0&&typeof _!=="function"?j("Function expected"):_,v_=(_,E,R,A,U)=>({kind:S_[_],name:E,metadata:A,addInitializer:(C)=>R._?j("Already initialized"):U.push(b(C||null))}),E_=(_,E)=>d_(E,B_("metadata"),_[3]),Y=(_,E,R,A)=>{for(var U=0,C=_[E>>1],O=C&&C.length;U<O;U++)E&1?C[U].call(R):A=C[U].call(R,A);return A},X=(_,E,R,A,U,C)=>{var O,L,x,K,V,N=E&7,$=!!(E&8),G=!!(E&16),z=N>3?_.length+1:N?$?1:2:0,T=S_[N+5],P=N>3&&(_[z-1]=[]),D=_[z]||(_[z]=[]),B=N&&(!G&&!$&&(U=U.prototype),N<5&&(N>3||!G)&&f_(N<4?U:{get[R](){return M_(this,C)},set[R](Q){V_(this,C,Q)}},R));N?G&&N<4&&G_(C,(N>2?"set ":N>1?"get ":"")+R):G_(U,R);for(var H=A.length-1;H>=0;H--){if(K=v_(N,R,x={},_[3],D),N){if(K.static=$,K.private=G,V=K.access={has:G?(Q)=>g_(U,Q):(Q)=>(R in Q)},N^3)V.get=G?(Q)=>(N^1?M_:m_)(Q,U,N^4?C:B.get):(Q)=>Q[R];if(N>2)V.set=G?(Q,t)=>V_(Q,U,t,N^4?C:B.set):(Q,t)=>Q[R]=t}if(L=(0,A[H])(N?N<4?G?C:B[T]:N>4?void 0:{get:B.get,set:B.set}:U,K),x._=1,N^4||L===void 0)b(L)&&(N>4?P.unshift(L):N?G?C=L:B[T]=L:U=L);else if(typeof L!=="object"||L===null)j("Object expected");else b(O=L.get)&&(B.get=O),b(O=L.set)&&(B.set=O),b(O=L.init)&&P.unshift(O)}return N||E_(_,U),B&&x_(U,R,B),G?N^4?C:B:U};import{css as UE,html as j_,LitElement as CE}from"https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";var z_=(_)=>(E,R)=>{R!==void 0?R.addInitializer(()=>{customElements.define(_,E)}):customElements.define(_,E)};var J_=class{get shadowRoot(){return this.__host.__shadowRoot}constructor(E){this.ariaActiveDescendantElement=null,this.ariaAtomic="",this.ariaAutoComplete="",this.ariaBrailleLabel="",this.ariaBrailleRoleDescription="",this.ariaBusy="",this.ariaChecked="",this.ariaColCount="",this.ariaColIndex="",this.ariaColIndexText="",this.ariaColSpan="",this.ariaControlsElements=null,this.ariaCurrent="",this.ariaDescribedByElements=null,this.ariaDescription="",this.ariaDetailsElements=null,this.ariaDisabled="",this.ariaErrorMessageElements=null,this.ariaExpanded="",this.ariaFlowToElements=null,this.ariaHasPopup="",this.ariaHidden="",this.ariaInvalid="",this.ariaKeyShortcuts="",this.ariaLabel="",this.ariaLabelledByElements=null,this.ariaLevel="",this.ariaLive="",this.ariaModal="",this.ariaMultiLine="",this.ariaMultiSelectable="",this.ariaOrientation="",this.ariaOwnsElements=null,this.ariaPlaceholder="",this.ariaPosInSet="",this.ariaPressed="",this.ariaReadOnly="",this.ariaRelevant="",this.ariaRequired="",this.ariaRoleDescription="",this.ariaRowCount="",this.ariaRowIndex="",this.ariaRowIndexText="",this.ariaRowSpan="",this.ariaSelected="",this.ariaSetSize="",this.ariaSort="",this.ariaValueMax="",this.ariaValueMin="",this.ariaValueNow="",this.ariaValueText="",this.role="",this.form=null,this.labels=[],this.states=new Set,this.validationMessage="",this.validity={},this.willValidate=!0,this.__host=E}checkValidity(){return console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true."),!0}reportValidity(){return!0}setFormValue(){}setValidity(){}};var w=function(_,E,R,A,U){if(A==="m")throw TypeError("Private method is not writable");if(A==="a"&&!U)throw TypeError("Private accessor was defined without a setter");if(typeof E==="function"?_!==E||!U:!E.has(_))throw TypeError("Cannot write private member to an object whose class did not declare it");return A==="a"?U.call(_,R):U?U.value=R:E.set(_,R),R},I=function(_,E,R,A){if(R==="a"&&!A)throw TypeError("Private accessor was defined without a getter");if(typeof E==="function"?_!==E||!A:!E.has(_))throw TypeError("Cannot read private member from an object whose class did not declare it");return R==="m"?A:R==="a"?A.call(_):A?A.value:E.get(_)},q,p,c,h,R_,u,i,k,l,W,o,Q_,X_=(_)=>typeof _==="boolean"?_:_?.capture??!1,r=0,A_=1,n=2,U_=3;class Z_{constructor(){this.__eventListeners=new Map,this.__captureEventListeners=new Map}addEventListener(_,E,R){if(E===void 0||E===null)return;let A=X_(R)?this.__captureEventListeners:this.__eventListeners,U=A.get(_);if(U===void 0)U=new Map,A.set(_,U);else if(U.has(E))return;let C=typeof R==="object"&&R?R:{};C.signal?.addEventListener("abort",()=>this.removeEventListener(_,E,R)),U.set(E,C??{})}removeEventListener(_,E,R){if(E===void 0||E===null)return;let A=X_(R)?this.__captureEventListeners:this.__eventListeners,U=A.get(_);if(U!==void 0){if(U.delete(E),!U.size)A.delete(_)}}dispatchEvent(_){let E=[this],R=this.__eventTargetParent;if(_.composed)while(R)E.push(R),R=R.__eventTargetParent;else while(R&&R!==this.__host)E.push(R),R=R.__eventTargetParent;let A=!1,U=!1,C=r,O=null,L=null,x=null,K=_.stopPropagation,V=_.stopImmediatePropagation;Object.defineProperties(_,{target:{get(){return O??L},...F},srcElement:{get(){return _.target},...F},currentTarget:{get(){return x},...F},eventPhase:{get(){return C},...F},composedPath:{value:()=>E,...F},stopPropagation:{value:()=>{A=!0,K.call(_)},...F},stopImmediatePropagation:{value:()=>{U=!0,V.call(_)},...F}});let N=(P,D,B)=>{if(typeof P==="function")P(_);else if(typeof P?.handleEvent==="function")P.handleEvent(_);if(D.once)B.delete(P)},$=()=>{return x=null,C=r,!_.defaultPrevented},G=E.slice().reverse();O=!this.__host||!_.composed?this:null;let z=(P)=>{L=this;while(L.__host&&P.includes(L.__host))L=L.__host};for(let P of G){if(!O&&(!L||L===P.__host))z(G.slice(G.indexOf(P)));x=P,C=P===_.target?n:A_;let D=P.__captureEventListeners.get(_.type);if(D){for(let[B,H]of D)if(N(B,H,D),U)return $()}if(A)return $()}let T=_.bubbles?E:[this];L=null;for(let P of T){if(!O&&(!L||P===L.__host))z(T.slice(0,T.indexOf(P)+1));x=P,C=P===_.target?n:U_;let D=P.__eventListeners.get(_.type);if(D){for(let[B,H]of D)if(N(B,H,D),U)return $()}if(A)return $()}return $()}}var C_=Z_;var F={__proto__:null};F.enumerable=!0;Object.freeze(F);var L_=(W=class{constructor(E,R={}){if(q.set(this,!1),p.set(this,!1),c.set(this,!1),h.set(this,!1),R_.set(this,Date.now()),u.set(this,!1),i.set(this,void 0),k.set(this,void 0),l.set(this,void 0),this.NONE=r,this.CAPTURING_PHASE=A_,this.AT_TARGET=n,this.BUBBLING_PHASE=U_,arguments.length===0)throw Error("The type argument must be specified");if(typeof R!=="object"||!R)throw Error('The "options" argument must be an object');let{bubbles:A,cancelable:U,composed:C}=R;w(this,q,!!U,"f"),w(this,p,!!A,"f"),w(this,c,!!C,"f"),w(this,i,`${E}`,"f"),w(this,k,null,"f"),w(this,l,!1,"f")}initEvent(E,R,A){throw Error("Method not implemented.")}stopImmediatePropagation(){this.stopPropagation()}preventDefault(){w(this,h,!0,"f")}get target(){return I(this,k,"f")}get currentTarget(){return I(this,k,"f")}get srcElement(){return I(this,k,"f")}get type(){return I(this,i,"f")}get cancelable(){return I(this,q,"f")}get defaultPrevented(){return I(this,q,"f")&&I(this,h,"f")}get timeStamp(){return I(this,R_,"f")}composedPath(){return I(this,l,"f")?[I(this,k,"f")]:[]}get returnValue(){return!I(this,q,"f")||!I(this,h,"f")}get bubbles(){return I(this,p,"f")}get composed(){return I(this,c,"f")}get eventPhase(){return I(this,l,"f")?W.AT_TARGET:W.NONE}get cancelBubble(){return I(this,u,"f")}set cancelBubble(E){if(E)w(this,u,!0,"f")}stopPropagation(){w(this,u,!0,"f")}get isTrusted(){return!1}},q=new WeakMap,p=new WeakMap,c=new WeakMap,h=new WeakMap,R_=new WeakMap,u=new WeakMap,i=new WeakMap,k=new WeakMap,l=new WeakMap,W.NONE=r,W.CAPTURING_PHASE=A_,W.AT_TARGET=n,W.BUBBLING_PHASE=U_,W);Object.defineProperties(L_.prototype,{initEvent:F,stopImmediatePropagation:F,preventDefault:F,target:F,currentTarget:F,srcElement:F,type:F,cancelable:F,defaultPrevented:F,timeStamp:F,composedPath:F,returnValue:F,bubbles:F,composed:F,eventPhase:F,cancelBubble:F,stopPropagation:F,isTrusted:F});var $_=(Q_=class extends L_{constructor(E,R={}){super(E,R);o.set(this,void 0),w(this,o,R?.detail??null,"f")}initCustomEvent(E,R,A,U){throw Error("Method not implemented.")}get detail(){return I(this,o,"f")}},o=new WeakMap,Q_);Object.defineProperties($_.prototype,{detail:F});var O_=L_,N_=$_;var J;var PE=(J=class{constructor(){this.STYLE_RULE=1,this.CHARSET_RULE=2,this.IMPORT_RULE=3,this.MEDIA_RULE=4,this.FONT_FACE_RULE=5,this.PAGE_RULE=6,this.NAMESPACE_RULE=10,this.KEYFRAMES_RULE=7,this.KEYFRAME_RULE=8,this.SUPPORTS_RULE=12,this.COUNTER_STYLE_RULE=11,this.FONT_FEATURE_VALUES_RULE=14,this.__parentStyleSheet=null,this.cssText=""}get parentRule(){return null}get parentStyleSheet(){return this.__parentStyleSheet}get type(){return 0}},J.STYLE_RULE=1,J.CHARSET_RULE=2,J.IMPORT_RULE=3,J.MEDIA_RULE=4,J.FONT_FACE_RULE=5,J.PAGE_RULE=6,J.NAMESPACE_RULE=10,J.KEYFRAMES_RULE=7,J.KEYFRAME_RULE=8,J.SUPPORTS_RULE=12,J.COUNTER_STYLE_RULE=11,J.FONT_FEATURE_VALUES_RULE=14,J);globalThis.Event??=O_;globalThis.CustomEvent??=N_;var D_=new WeakMap,f=(_)=>{let E=D_.get(_);if(E===void 0)D_.set(_,E=new Map);return E},p_=class extends C_{constructor(){super(...arguments);this.__shadowRootMode=null,this.__shadowRoot=null,this.__internals=null}get attributes(){return Array.from(f(this)).map(([E,R])=>({name:E,value:R}))}get shadowRoot(){if(this.__shadowRootMode==="closed")return null;return this.__shadowRoot}get localName(){return this.constructor.__localName}get tagName(){return this.localName?.toUpperCase()}setAttribute(E,R){f(this).set(E,String(R))}removeAttribute(E){f(this).delete(E)}toggleAttribute(E,R){if(this.hasAttribute(E)){if(R===void 0||!R)return this.removeAttribute(E),!1}else if(R===void 0||R)return this.setAttribute(E,""),!0;else return!1;return!0}hasAttribute(E){return f(this).has(E)}attachShadow(E){let R={host:this};if(this.__shadowRootMode=E.mode,E&&E.mode==="open")this.__shadowRoot=R;return R}attachInternals(){if(this.__internals!==null)throw Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");let E=new J_(this);return this.__internals=E,E}getAttribute(E){return f(this).get(E)??null}};var c_=class extends p_{},F_=c_;globalThis.litServerRoot??=Object.defineProperty(new F_,"localName",{get(){return"lit-server-root"}});function i_(){let _,E;return{promise:new Promise((A,U)=>{_=A,E=U}),resolve:_,reject:E}}class T_{constructor(){this.__definitions=new Map,this.__reverseDefinitions=new Map,this.__pendingWhenDefineds=new Map}define(_,E){if(this.__definitions.has(_))console.warn(`'CustomElementRegistry' already has "${_}" defined. This may have been caused by live reload or hot module replacement in which case it can be safely ignored.
Make sure to test your application with a production build as repeat registrations will throw in production.`);if(this.__reverseDefinitions.has(E))throw Error(`Failed to execute 'define' on 'CustomElementRegistry': the constructor has already been used with this registry for the tag name ${this.__reverseDefinitions.get(E)}`);E.__localName=_,this.__definitions.set(_,{ctor:E,observedAttributes:E.observedAttributes??[]}),this.__reverseDefinitions.set(E,_),this.__pendingWhenDefineds.get(_)?.resolve(E),this.__pendingWhenDefineds.delete(_)}get(_){return this.__definitions.get(_)?.ctor}getName(_){return this.__reverseDefinitions.get(_)??null}upgrade(_){throw Error("customElements.upgrade is not currently supported in SSR. Please file a bug if you need it.")}async whenDefined(_){let E=this.__definitions.get(_);if(E)return E.ctor;let R=this.__pendingWhenDefineds.get(_);if(!R)R=i_(),this.__pendingWhenDefineds.set(_,R);return R.promise}}var o_=T_;var w_=new o_;var d=globalThis,a=d.ShadowRoot&&(d.ShadyCSS===void 0||d.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,H_=Symbol(),W_=new WeakMap;class P_{constructor(_,E,R){if(this._$cssResult$=!0,R!==H_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=_,this.t=E}get styleSheet(){let _=this.o,E=this.t;if(a&&_===void 0){let R=E!==void 0&&E.length===1;R&&(_=W_.get(E)),_===void 0&&((this.o=_=new CSSStyleSheet).replaceSync(this.cssText),R&&W_.set(E,_))}return _}toString(){return this.cssText}}var k_=(_)=>new P_(typeof _=="string"?_:_+"",void 0,H_);var q_=(_,E)=>{if(a)_.adoptedStyleSheets=E.map((R)=>R instanceof CSSStyleSheet?R:R.styleSheet);else for(let R of E){let A=document.createElement("style"),U=d.litNonce;U!==void 0&&A.setAttribute("nonce",U),A.textContent=R.cssText,_.appendChild(A)}},Y_=a||d.CSSStyleSheet===void 0?(_)=>_:(_)=>_ instanceof CSSStyleSheet?((E)=>{let R="";for(let A of E.cssRules)R+=A.cssText;return k_(R)})(_):_;var{is:r_,defineProperty:n_,getOwnPropertyDescriptor:a_,getOwnPropertyNames:s_,getOwnPropertySymbols:e_,getPrototypeOf:t_}=Object,v=globalThis;v.customElements??=w_;var y_=v.trustedTypes,_E=y_?y_.emptyScript:"",EE=v.reactiveElementPolyfillSupport,g=(_,E)=>_,m={toAttribute(_,E){switch(E){case Boolean:_=_?_E:null;break;case Object:case Array:_=_==null?_:JSON.stringify(_)}return _},fromAttribute(_,E){let R=_;switch(E){case Boolean:R=_!==null;break;case Number:R=_===null?null:Number(_);break;case Object:case Array:try{R=JSON.parse(_)}catch(A){R=null}}return R}},s=(_,E)=>!r_(_,E),b_={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:s};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class y extends(globalThis.HTMLElement??F_){static addInitializer(_){this._$Ei(),(this.l??=[]).push(_)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(_,E=b_){if(E.state&&(E.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(_)&&((E=Object.create(E)).wrapped=!0),this.elementProperties.set(_,E),!E.noAccessor){let R=Symbol(),A=this.getPropertyDescriptor(_,R,E);A!==void 0&&n_(this.prototype,_,A)}}static getPropertyDescriptor(_,E,R){let{get:A,set:U}=a_(this.prototype,_)??{get(){return this[E]},set(C){this[E]=C}};return{get:A,set(C){let O=A?.call(this);U?.call(this,C),this.requestUpdate(_,O,R)},configurable:!0,enumerable:!0}}static getPropertyOptions(_){return this.elementProperties.get(_)??b_}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;let _=t_(this);_.finalize(),_.l!==void 0&&(this.l=[..._.l]),this.elementProperties=new Map(_.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){let E=this.properties,R=[...s_(E),...e_(E)];for(let A of R)this.createProperty(A,E[A])}let _=this[Symbol.metadata];if(_!==null){let E=litPropertyMetadata.get(_);if(E!==void 0)for(let[R,A]of E)this.elementProperties.set(R,A)}this._$Eh=new Map;for(let[E,R]of this.elementProperties){let A=this._$Eu(E,R);A!==void 0&&this._$Eh.set(A,E)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(_){let E=[];if(Array.isArray(_)){let R=new Set(_.flat(1/0).reverse());for(let A of R)E.unshift(Y_(A))}else _!==void 0&&E.push(Y_(_));return E}static _$Eu(_,E){let R=E.attribute;return R===!1?void 0:typeof R=="string"?R:typeof _=="string"?_.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((_)=>this.enableUpdating=_),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((_)=>_(this))}addController(_){(this._$EO??=new Set).add(_),this.renderRoot!==void 0&&this.isConnected&&_.hostConnected?.()}removeController(_){this._$EO?.delete(_)}_$E_(){let _=new Map,E=this.constructor.elementProperties;for(let R of E.keys())this.hasOwnProperty(R)&&(_.set(R,this[R]),delete this[R]);_.size>0&&(this._$Ep=_)}createRenderRoot(){let _=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return q_(_,this.constructor.elementStyles),_}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((_)=>_.hostConnected?.())}enableUpdating(_){}disconnectedCallback(){this._$EO?.forEach((_)=>_.hostDisconnected?.())}attributeChangedCallback(_,E,R){this._$AK(_,R)}_$ET(_,E){let R=this.constructor.elementProperties.get(_),A=this.constructor._$Eu(_,R);if(A!==void 0&&R.reflect===!0){let U=(R.converter?.toAttribute!==void 0?R.converter:m).toAttribute(E,R.type);this._$Em=_,U==null?this.removeAttribute(A):this.setAttribute(A,U),this._$Em=null}}_$AK(_,E){let R=this.constructor,A=R._$Eh.get(_);if(A!==void 0&&this._$Em!==A){let U=R.getPropertyOptions(A),C=typeof U.converter=="function"?{fromAttribute:U.converter}:U.converter?.fromAttribute!==void 0?U.converter:m;this._$Em=A;let O=C.fromAttribute(E,U.type);this[A]=O??this._$Ej?.get(A)??O,this._$Em=null}}requestUpdate(_,E,R,A=!1,U){if(_!==void 0){let C=this.constructor;if(A===!1&&(U=this[_]),R??=C.getPropertyOptions(_),!((R.hasChanged??s)(U,E)||R.useDefault&&R.reflect&&U===this._$Ej?.get(_)&&!this.hasAttribute(C._$Eu(_,R))))return;this.C(_,E,R)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(_,E,{useDefault:R,reflect:A,wrapped:U},C){R&&!(this._$Ej??=new Map).has(_)&&(this._$Ej.set(_,C??E??this[_]),U!==!0||C!==void 0)||(this._$AL.has(_)||(this.hasUpdated||R||(E=void 0),this._$AL.set(_,E)),A===!0&&this._$Em!==_&&(this._$Eq??=new Set).add(_))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(E){Promise.reject(E)}let _=this.scheduleUpdate();return _!=null&&await _,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[A,U]of this._$Ep)this[A]=U;this._$Ep=void 0}let R=this.constructor.elementProperties;if(R.size>0)for(let[A,U]of R){let{wrapped:C}=U,O=this[A];C!==!0||this._$AL.has(A)||O===void 0||this.C(A,void 0,U,O)}}let _=!1,E=this._$AL;try{_=this.shouldUpdate(E),_?(this.willUpdate(E),this._$EO?.forEach((R)=>R.hostUpdate?.()),this.update(E)):this._$EM()}catch(R){throw _=!1,this._$EM(),R}_&&this._$AE(E)}willUpdate(_){}_$AE(_){this._$EO?.forEach((E)=>E.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(_)),this.updated(_)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(_){return!0}update(_){this._$Eq&&=this._$Eq.forEach((E)=>this._$ET(E,this[E])),this._$EM()}updated(_){}firstUpdated(_){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[g("elementProperties")]=new Map,y[g("finalized")]=new Map,EE?.({ReactiveElement:y}),(v.reactiveElementVersions??=[]).push("2.1.2");var RE={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:s},AE=(_=RE,E,R)=>{let{kind:A,metadata:U}=R,C=globalThis.litPropertyMetadata.get(U);if(C===void 0&&globalThis.litPropertyMetadata.set(U,C=new Map),A==="setter"&&((_=Object.create(_)).wrapped=!0),C.set(R.name,_),A==="accessor"){let{name:O}=R;return{set(L){let x=E.get.call(this);E.set.call(this,L),this.requestUpdate(O,x,_,!0,L)},init(L){return L!==void 0&&this.C(O,void 0,_,L),L}}}if(A==="setter"){let{name:O}=R;return function(L){let x=this[O];E.call(this,L),this.requestUpdate(O,x,_,!0,L)}}throw Error("Unsupported decorator location: "+A)};function Z(_){return(E,R)=>typeof R=="object"?AE(_,E,R):((A,U,C)=>{let O=U.hasOwnProperty(C);return U.constructor.createProperty(C,A),O?Object.getOwnPropertyDescriptor(U,C):void 0})(_,E,R)}function K_(_){return Z({..._,state:!0,attribute:!1})}var h_=["靜態 Original","旋轉態 Spinning","費納奇鏡 PhenakistoScope"],u_=/^https?:\/\/|^data:image\//i,NR=[z_("spin-space")],OR=CE,FR=[Z({type:Number})],PR=[Z({type:Number})],YR=[Z({type:Number})],KR=[Z({type:Number})],GR=[Z({type:Boolean,attribute:"with-duration"})],MR=[Z({type:String})],VR=[Z({type:ArrayBuffer})],xR=[Z({type:String})],BR=[Z()],IR=[K_()],SR=[K_()],M=I_(OR);class S extends OR{constructor(){super(...arguments);this.clockwise=Y(M,8,this,!1);Y(M,11,this);this.frames=Y(M,12,this,10);Y(M,15,this);this.duration=Y(M,16,this,1200);Y(M,19,this);this.max=Y(M,20,this,1600);Y(M,23,this);this.withDuration=Y(M,24,this,!1);Y(M,27,this);this.src=Y(M,28,this,"");Y(M,31,this);this.data=Y(M,32,this);Y(M,35,this);this.name=Y(M,36,this,"");Y(M,39,this);this.current=Y(M,40,this);Y(M,43,this);this.state=Y(M,44,this,2);Y(M,47,this);this.maxdur=Y(M,48,this,3650);Y(M,51,this)}_q={};_moving=!1;stateChange(_){let{s:E="2"}=_.target?.dataset||{},R=parseInt(E,10);if(!isNaN(R))this.state=R}maxDurChange(_){let E=_.target.valueAsNumber;if(!E||isNaN(E))return;this.maxdur=E<=this.duration?E:this.duration}speedChange(_){this.duration=_.target.valueAsNumber}toggle(_){this.state=(this.state+1)%3}async make(_,E){if(E)this.name=E;let{host:R}=this.renderRoot;R.innerHTML='<div class="cover"><div class="loading"></div></div>';let A=await _;A.className="cover",A.tabIndex=1;let U=R.firstChild;U.parentElement.removeChild(U),R.appendChild(A)}slotChange(_){let R=_.target.assignedElements({flatten:!0})[0];if(!R)return;let A=R.getAttribute("src");if(!A)A=R.outerHTML.match(/url\("?([^")]+)"?\)/)?.[1];if(!A)return;this.frames=10,this.clockwise=!1,this.duration=1200,A.match(/([\d]+(\.\d+)?m?s)|(\d+(f|cc)\.)/g)?.map((U)=>{if(/\d(f|cc)\./.test(U)){let C=U.length;this.clockwise=U.substring(C-3)==="cc.";let O=parseInt(U.substring(0,C-(this.clockwise?3:2)),10);this.frames=O}else if(this.withDuration){let C=parseFloat(U.replace(/m?s$/,""));this.duration=U.indexOf("ms")>0?C:C*1000}}),this.src=A}updated(_){if(_.has("state")||_.has("frames")||_.has("clockwise")||_.has("duration")||_.has("src")){if(_.has("src")){if(!/^data:image/.test(this.src)){let K=this.src.replace(/[#?].*$/,""),V=K.lastIndexOf("/");this.name=V>-1?K.substring(V+1):K}let{_q:x={}}=this;["state","frames","clockwise","duration"].map((K)=>{if(x[K]!==void 0)this[K]=x[K]}),this._q={},this.srcChange(this.src)}let{state:E,frames:R,clockwise:A,duration:U,src:C}=this,O="data:image/",L=C.substring(0,O.length)==O?"":btoa([E,R,A?1:0,U,C].join("\t"));this.dispatchEvent(new CustomEvent("spin",{detail:L}))}}size(){let _=this.renderRoot.querySelector("div.params");if(_){let{width:E,height:R}=_.getBoundingClientRect();return{width:E,height:R}}return{width:0,height:0}}srcChange(_){let{host:E}=this.renderRoot;if(!_)return;E.innerHTML='<div class="cover"><div class="loading"></div></div>',this._busying=_;let R=E.firstChild,A=document.createElement("img");A.src=_,A.className="cover",A.onload=()=>{if(A.onerror=A.onload=null,this.current=A,this._busying!=_)return;if(_&&u_.test(_)){let U=R.querySelector(".loading");if(U)R.removeChild(U);R.style.backgroundImage=`url(${_})`,R.style.borderRadius="100%"}else R.parentElement?.removeChild(R),E.appendChild(A);this.src=_},A.onerror=()=>{A.onerror=A.onload=null;let U=R.querySelector(".loading");if(U)R.removeChild(U);R.innerHTML='<div class="err">load error</div>'}}init(_="",E=""){let{hash:R,href:A}=location,U=new URL(A).searchParams,C="",O={};try{let L=[];if(_ instanceof Array){L=_;let G=L[L.length-1];if(typeof G==="string"&&/[a-z]/i.test(G))C=G}else{let G=(R||_).substring(1),z=G.length?atob(G).split("\t"):[];if(z.length>0){let T=z.slice(-1)[0];if(T&&/[a-z]/i.test(T))C=T.trim(),z=z.slice(0,z.length-1);z.map((P)=>{if(P.length>0)L.push(parseInt(P,10))})}}let x=[2,10,0,1000];L.map((G,z)=>isNaN(G)&&(L[z]=x[z]));let[K=2,V=10,N=0,$=1000]=L;O={state:K,frames:V,clockwise:N?!0:!1,duration:$}}catch(L){}if(U.has("src"))C=U.get("src");if(this.dispatchEvent(new CustomEvent("src-change",{detail:C})),u_.test(E))C=E;if(U.has("n")){let L=parseInt(U.get("n")||"",10);if(L!=0){if(O.frames=L<0?-L:L,L<0)O.clockwise=!O.clockwise}}if(this._q=O,U.has("src"))history.replaceState(document.title,"",A.replace(/\?[^#]*/,""));if(C)this.srcChange(C)}mouseDown(_){if(_.button!=0&&!_.touches)return;this._moving=!0}mouseUp(_){if(_.button!=0&&!_.touches)return;if(_.touches)this._lastTouch=null;this._moving=!1}mouseMove(_){if(!this._moving||_.button!=0&&!_.touches)return;let{duration:E,clockwise:R,maxdur:A,_lastTouch:U}=this,C=_.touches?.[0];if(C)if(U)_.movementX=C.pageX-U.pageX,_.movementY=C.pageY-U.pageY,this._lastTouch=C;else{this._lastTouch=C;return}let O=_.movementX;if(Math.abs(_.movementY)>Math.abs(O))O=5*(R?-_.movementY:_.movementY);else O=2*O;let L=(R?1:-1)*E+O;if(L<0&&L<-A)L=-A;else if(L>0&&L>A)L=A;if(L==0)L=_.movementX<0?-1:1;this.duration=Math.round(L<0?-L:L),this.clockwise=L<0?!1:!0}adjustDuration(_){if(!_.target)return;let E=_.target;if(!E.classList.contains("params"))return;let{duration:A,maxdur:U}=this,{offsetWidth:C,offsetHeight:O}=E,{offsetX:L,offsetY:x}=_,K=x-O/2,V=L-C/2;if(Math.abs(V)<25||K*K+V*V>C*C/4||K*K+V*V<(C/2-16)*(C/2-16))return;let N=Math.atan2(K,V)*180/Math.PI;if(this.clockwise=V>0,V<0)this.duration=Math.round(U*(N<0?0.5+(180+N)/180:(N-90)/180));else this.duration=Math.round(U*(N>0?(90-N)/180:0.5-N/180))}render(){let{clockwise:_,duration:E,maxdur:R,state:A}=this;return j_`
      <div class="state">${Array.from([,,,],(U,C)=>C).map((U)=>U!=A?j_`<a data-s=${U} title="${h_[U]}" @click=${this.stateChange}>●</a>`:h_[A])}</div>
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
    `}static styles=UE`
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
}`}X(M,5,"clockwise",FR,S),X(M,5,"frames",PR,S),X(M,5,"duration",YR,S),X(M,5,"max",KR,S),X(M,5,"withDuration",GR,S),X(M,5,"src",MR,S),X(M,5,"data",VR,S),X(M,5,"name",xR,S),X(M,5,"current",BR,S),X(M,5,"state",IR,S),X(M,5,"maxdur",SR,S),S=X(M,0,"SpinSpace",NR,S),Y(M,1,S),E_(M,S);let _SpinSpace=S;export{S as SpinSpace};
