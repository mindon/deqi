var vS=Object.create;var QS=Object.defineProperty;var cS=Object.getOwnPropertyDescriptor;var TS=(S,_)=>{return Object.defineProperty(S,"name",{value:_,enumerable:!1,configurable:!0}),S};var VS=(S,_)=>(_=Symbol[S])?_:Symbol.for("Symbol."+S),j=(S)=>{throw TypeError(S)},yS=(S,_,E)=>(_ in S)?QS(S,_,{enumerable:!0,configurable:!0,writable:!0,value:E}):S[_]=E;var US=(S,_,E)=>_.has(S)||j("Cannot "+E),mS=(S,_)=>Object(_)!==_?j('Cannot use the "in" operator on this value'):S.has(_),XS=(S,_,E)=>(US(S,_,"read from private field"),E?E.call(S):_.get(S)),D=(S,_,E)=>_.has(S)?j("Cannot add the same private member more than once"):_ instanceof WeakSet?_.add(S):_.set(S,E),JS=(S,_,E,R)=>(US(S,_,"write to private field"),R?R.call(S,E):_.set(S,E),E),pS=(S,_,E)=>(US(S,_,"access private method"),E),ZS=(S)=>[,,,vS(S?.[VS("metadata")]??null)],zS=["class","method","getter","setter","accessor","field","value","get","set"],g=(S)=>S!==void 0&&typeof S!=="function"?j("Function expected"):S,iS=(S,_,E,R,A)=>({kind:zS[S],name:_,metadata:R,addInitializer:(U)=>E._?j("Already initialized"):A.push(g(U||null))}),CS=(S,_)=>yS(_,VS("metadata"),S[3]),h=(S,_,E,R)=>{for(var A=0,U=S[_>>1],L=U&&U.length;A<L;A++)_&1?U[A].call(E):R=U[A].call(E,R);return R},V=(S,_,E,R,A,U)=>{var L,C,Y,G,H,O=_&7,Q=!!(_&8),T=!!(_&16),P=O>3?S.length+1:O?Q?1:2:0,f=zS[O+5],F=O>3&&(S[P-1]=[]),z=S[P]||(S[P]=[]),M=O&&(!T&&!Q&&(A=A.prototype),O<5&&(O>3||!T)&&cS(O<4?A:{get[E](){return XS(this,U)},set[E](J){JS(this,U,J)}},E));O?T&&O<4&&TS(U,(O>2?"set ":O>1?"get ":"")+E):TS(A,E);for(var $=R.length-1;$>=0;$--){if(G=iS(O,E,Y={},S[3],z),O){if(G.static=Q,G.private=T,H=G.access={has:T?(J)=>mS(A,J):(J)=>(E in J)},O^3)H.get=T?(J)=>(O^1?XS:pS)(J,A,O^4?U:M.get):(J)=>J[E];if(O>2)H.set=T?(J,AS)=>JS(J,A,AS,O^4?U:M.set):(J,AS)=>J[E]=AS}if(C=(0,R[$])(O?O<4?T?U:M[f]:O>4?void 0:{get:M.get,set:M.set}:A,G),Y._=1,O^4||C===void 0)g(C)&&(O>4?F.unshift(C):O?T?U=C:M[f]=C:A=C);else if(typeof C!=="object"||C===null)j("Object expected");else g(L=C.get)&&(M.get=L),g(L=C.set)&&(M.set=L),g(L=C.init)&&F.unshift(L)}return O||CS(S,A),M&&QS(A,E,M),T?O^4?U:M:A};import{css as L_,html as Z,LitElement as O_}from"https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";var DS=(S)=>(_,E)=>{E!==void 0?E.addInitializer(()=>{customElements.define(S,_)}):customElements.define(S,_)};var HS=class{get shadowRoot(){return this.__host.__shadowRoot}constructor(_){this.ariaActiveDescendantElement=null,this.ariaAtomic="",this.ariaAutoComplete="",this.ariaBrailleLabel="",this.ariaBrailleRoleDescription="",this.ariaBusy="",this.ariaChecked="",this.ariaColCount="",this.ariaColIndex="",this.ariaColIndexText="",this.ariaColSpan="",this.ariaControlsElements=null,this.ariaCurrent="",this.ariaDescribedByElements=null,this.ariaDescription="",this.ariaDetailsElements=null,this.ariaDisabled="",this.ariaErrorMessageElements=null,this.ariaExpanded="",this.ariaFlowToElements=null,this.ariaHasPopup="",this.ariaHidden="",this.ariaInvalid="",this.ariaKeyShortcuts="",this.ariaLabel="",this.ariaLabelledByElements=null,this.ariaLevel="",this.ariaLive="",this.ariaModal="",this.ariaMultiLine="",this.ariaMultiSelectable="",this.ariaOrientation="",this.ariaOwnsElements=null,this.ariaPlaceholder="",this.ariaPosInSet="",this.ariaPressed="",this.ariaReadOnly="",this.ariaRelevant="",this.ariaRequired="",this.ariaRoleDescription="",this.ariaRowCount="",this.ariaRowIndex="",this.ariaRowIndexText="",this.ariaRowSpan="",this.ariaSelected="",this.ariaSetSize="",this.ariaSort="",this.ariaValueMax="",this.ariaValueMin="",this.ariaValueNow="",this.ariaValueText="",this.role="",this.form=null,this.labels=[],this.states=new Set,this.validationMessage="",this.validity={},this.willValidate=!0,this.__host=_}checkValidity(){return console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true."),!0}reportValidity(){return!0}setFormValue(){}setValidity(){}};var k=function(S,_,E,R,A){if(R==="m")throw TypeError("Private method is not writable");if(R==="a"&&!A)throw TypeError("Private accessor was defined without a setter");if(typeof _==="function"?S!==_||!A:!_.has(S))throw TypeError("Cannot write private member to an object whose class did not declare it");return R==="a"?A.call(S,E):A?A.value=E:_.set(S,E),E},w=function(S,_,E,R){if(E==="a"&&!R)throw TypeError("Private accessor was defined without a getter");if(typeof _==="function"?S!==_||!R:!_.has(S))throw TypeError("Cannot read private member from an object whose class did not declare it");return E==="m"?R:E==="a"?R.call(S):R?R.value:_.get(S)},W,n,a,b,LS,v,s,q,c,x,e,kS,xS=(S)=>typeof S==="boolean"?S:S?.capture??!1,t=0,OS=1,SS=2,NS=3;class BS{constructor(){this.__eventListeners=new Map,this.__captureEventListeners=new Map}addEventListener(S,_,E){if(_===void 0||_===null)return;let R=xS(E)?this.__captureEventListeners:this.__eventListeners,A=R.get(S);if(A===void 0)A=new Map,R.set(S,A);else if(A.has(_))return;let U=typeof E==="object"&&E?E:{};U.signal?.addEventListener("abort",()=>this.removeEventListener(S,_,E)),A.set(_,U??{})}removeEventListener(S,_,E){if(_===void 0||_===null)return;let R=xS(E)?this.__captureEventListeners:this.__eventListeners,A=R.get(S);if(A!==void 0){if(A.delete(_),!A.size)R.delete(S)}}dispatchEvent(S){let _=[this],E=this.__eventTargetParent;if(S.composed)while(E)_.push(E),E=E.__eventTargetParent;else while(E&&E!==this.__host)_.push(E),E=E.__eventTargetParent;let R=!1,A=!1,U=t,L=null,C=null,Y=null,G=S.stopPropagation,H=S.stopImmediatePropagation;Object.defineProperties(S,{target:{get(){return L??C},...N},srcElement:{get(){return S.target},...N},currentTarget:{get(){return Y},...N},eventPhase:{get(){return U},...N},composedPath:{value:()=>_,...N},stopPropagation:{value:()=>{R=!0,G.call(S)},...N},stopImmediatePropagation:{value:()=>{A=!0,H.call(S)},...N}});let O=(F,z,M)=>{if(typeof F==="function")F(S);else if(typeof F?.handleEvent==="function")F.handleEvent(S);if(z.once)M.delete(F)},Q=()=>{return Y=null,U=t,!S.defaultPrevented},T=_.slice().reverse();L=!this.__host||!S.composed?this:null;let P=(F)=>{C=this;while(C.__host&&F.includes(C.__host))C=C.__host};for(let F of T){if(!L&&(!C||C===F.__host))P(T.slice(T.indexOf(F)));Y=F,U=F===S.target?SS:OS;let z=F.__captureEventListeners.get(S.type);if(z){for(let[M,$]of z)if(O(M,$,z),A)return Q()}if(R)return Q()}let f=S.bubbles?_:[this];C=null;for(let F of f){if(!L&&(!C||F===C.__host))P(f.slice(0,f.indexOf(F)+1));Y=F,U=F===S.target?SS:NS;let z=F.__eventListeners.get(S.type);if(z){for(let[M,$]of z)if(O(M,$,z),A)return Q()}if(R)return Q()}return Q()}}var YS=BS;var N={__proto__:null};N.enumerable=!0;Object.freeze(N);var hS=(x=class{constructor(_,E={}){if(W.set(this,!1),n.set(this,!1),a.set(this,!1),b.set(this,!1),LS.set(this,Date.now()),v.set(this,!1),s.set(this,void 0),q.set(this,void 0),c.set(this,void 0),this.NONE=t,this.CAPTURING_PHASE=OS,this.AT_TARGET=SS,this.BUBBLING_PHASE=NS,arguments.length===0)throw Error("The type argument must be specified");if(typeof E!=="object"||!E)throw Error('The "options" argument must be an object');let{bubbles:R,cancelable:A,composed:U}=E;k(this,W,!!A,"f"),k(this,n,!!R,"f"),k(this,a,!!U,"f"),k(this,s,`${_}`,"f"),k(this,q,null,"f"),k(this,c,!1,"f")}initEvent(_,E,R){throw Error("Method not implemented.")}stopImmediatePropagation(){this.stopPropagation()}preventDefault(){k(this,b,!0,"f")}get target(){return w(this,q,"f")}get currentTarget(){return w(this,q,"f")}get srcElement(){return w(this,q,"f")}get type(){return w(this,s,"f")}get cancelable(){return w(this,W,"f")}get defaultPrevented(){return w(this,W,"f")&&w(this,b,"f")}get timeStamp(){return w(this,LS,"f")}composedPath(){return w(this,c,"f")?[w(this,q,"f")]:[]}get returnValue(){return!w(this,W,"f")||!w(this,b,"f")}get bubbles(){return w(this,n,"f")}get composed(){return w(this,a,"f")}get eventPhase(){return w(this,c,"f")?x.AT_TARGET:x.NONE}get cancelBubble(){return w(this,v,"f")}set cancelBubble(_){if(_)k(this,v,!0,"f")}stopPropagation(){k(this,v,!0,"f")}get isTrusted(){return!1}},W=new WeakMap,n=new WeakMap,a=new WeakMap,b=new WeakMap,LS=new WeakMap,v=new WeakMap,s=new WeakMap,q=new WeakMap,c=new WeakMap,x.NONE=t,x.CAPTURING_PHASE=OS,x.AT_TARGET=SS,x.BUBBLING_PHASE=NS,x);Object.defineProperties(hS.prototype,{initEvent:N,stopImmediatePropagation:N,preventDefault:N,target:N,currentTarget:N,srcElement:N,type:N,cancelable:N,defaultPrevented:N,timeStamp:N,composedPath:N,returnValue:N,bubbles:N,composed:N,eventPhase:N,cancelBubble:N,stopPropagation:N,isTrusted:N});var $S=(kS=class extends hS{constructor(_,E={}){super(_,E);e.set(this,void 0),k(this,e,E?.detail??null,"f")}initCustomEvent(_,E,R,A){throw Error("Method not implemented.")}get detail(){return w(this,e,"f")}},e=new WeakMap,kS);Object.defineProperties($S.prototype,{detail:N});var FS=hS,KS=$S;var X;var w_=(X=class{constructor(){this.STYLE_RULE=1,this.CHARSET_RULE=2,this.IMPORT_RULE=3,this.MEDIA_RULE=4,this.FONT_FACE_RULE=5,this.PAGE_RULE=6,this.NAMESPACE_RULE=10,this.KEYFRAMES_RULE=7,this.KEYFRAME_RULE=8,this.SUPPORTS_RULE=12,this.COUNTER_STYLE_RULE=11,this.FONT_FEATURE_VALUES_RULE=14,this.__parentStyleSheet=null,this.cssText=""}get parentRule(){return null}get parentStyleSheet(){return this.__parentStyleSheet}get type(){return 0}},X.STYLE_RULE=1,X.CHARSET_RULE=2,X.IMPORT_RULE=3,X.MEDIA_RULE=4,X.FONT_FACE_RULE=5,X.PAGE_RULE=6,X.NAMESPACE_RULE=10,X.KEYFRAMES_RULE=7,X.KEYFRAME_RULE=8,X.SUPPORTS_RULE=12,X.COUNTER_STYLE_RULE=11,X.FONT_FEATURE_VALUES_RULE=14,X);globalThis.Event??=FS;globalThis.CustomEvent??=KS;var qS=new WeakMap,y=(S)=>{let _=qS.get(S);if(_===void 0)qS.set(S,_=new Map);return _},oS=class extends YS{constructor(){super(...arguments);this.__shadowRootMode=null,this.__shadowRoot=null,this.__internals=null}get attributes(){return Array.from(y(this)).map(([_,E])=>({name:_,value:E}))}get shadowRoot(){if(this.__shadowRootMode==="closed")return null;return this.__shadowRoot}get localName(){return this.constructor.__localName}get tagName(){return this.localName?.toUpperCase()}setAttribute(_,E){y(this).set(_,String(E))}removeAttribute(_){y(this).delete(_)}toggleAttribute(_,E){if(this.hasAttribute(_)){if(E===void 0||!E)return this.removeAttribute(_),!1}else if(E===void 0||E)return this.setAttribute(_,""),!0;else return!1;return!0}hasAttribute(_){return y(this).has(_)}attachShadow(_){let E={host:this};if(this.__shadowRootMode=_.mode,_&&_.mode==="open")this.__shadowRoot=E;return E}attachInternals(){if(this.__internals!==null)throw Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");let _=new HS(this);return this.__internals=_,_}getAttribute(_){return y(this).get(_)??null}};var rS=class extends oS{},GS=rS;globalThis.litServerRoot??=Object.defineProperty(new GS,"localName",{get(){return"lit-server-root"}});function nS(){let S,_;return{promise:new Promise((R,A)=>{S=R,_=A}),resolve:S,reject:_}}class uS{constructor(){this.__definitions=new Map,this.__reverseDefinitions=new Map,this.__pendingWhenDefineds=new Map}define(S,_){if(this.__definitions.has(S))console.warn(`'CustomElementRegistry' already has "${S}" defined. This may have been caused by live reload or hot module replacement in which case it can be safely ignored.
Make sure to test your application with a production build as repeat registrations will throw in production.`);if(this.__reverseDefinitions.has(_))throw Error(`Failed to execute 'define' on 'CustomElementRegistry': the constructor has already been used with this registry for the tag name ${this.__reverseDefinitions.get(_)}`);_.__localName=S,this.__definitions.set(S,{ctor:_,observedAttributes:_.observedAttributes??[]}),this.__reverseDefinitions.set(_,S),this.__pendingWhenDefineds.get(S)?.resolve(_),this.__pendingWhenDefineds.delete(S)}get(S){return this.__definitions.get(S)?.ctor}getName(S){return this.__reverseDefinitions.get(S)??null}upgrade(S){throw Error("customElements.upgrade is not currently supported in SSR. Please file a bug if you need it.")}async whenDefined(S){let _=this.__definitions.get(S);if(_)return _.ctor;let E=this.__pendingWhenDefineds.get(S);if(!E)E=nS(),this.__pendingWhenDefineds.set(S,E);return E.promise}}var aS=uS;var PS=new aS;var m=globalThis,_S=m.ShadowRoot&&(m.ShadyCSS===void 0||m.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jS=Symbol(),fS=new WeakMap;class MS{constructor(S,_,E){if(this._$cssResult$=!0,E!==jS)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=S,this.t=_}get styleSheet(){let S=this.o,_=this.t;if(_S&&S===void 0){let E=_!==void 0&&_.length===1;E&&(S=fS.get(_)),S===void 0&&((this.o=S=new CSSStyleSheet).replaceSync(this.cssText),E&&fS.set(_,S))}return S}toString(){return this.cssText}}var WS=(S)=>new MS(typeof S=="string"?S:S+"",void 0,jS);var lS=(S,_)=>{if(_S)S.adoptedStyleSheets=_.map((E)=>E instanceof CSSStyleSheet?E:E.styleSheet);else for(let E of _){let R=document.createElement("style"),A=m.litNonce;A!==void 0&&R.setAttribute("nonce",A),R.textContent=E.cssText,S.appendChild(R)}},wS=_S||m.CSSStyleSheet===void 0?(S)=>S:(S)=>S instanceof CSSStyleSheet?((_)=>{let E="";for(let R of _.cssRules)E+=R.cssText;return WS(E)})(S):S;var{is:sS,defineProperty:eS,getOwnPropertyDescriptor:tS,getOwnPropertyNames:S_,getOwnPropertySymbols:__,getPrototypeOf:E_}=Object,o=globalThis;o.customElements??=PS;var dS=o.trustedTypes,R_=dS?dS.emptyScript:"",A_=o.reactiveElementPolyfillSupport,p=(S,_)=>S,i={toAttribute(S,_){switch(_){case Boolean:S=S?R_:null;break;case Object:case Array:S=S==null?S:JSON.stringify(S)}return S},fromAttribute(S,_){let E=S;switch(_){case Boolean:E=S!==null;break;case Number:E=S===null?null:Number(S);break;case Object:case Array:try{E=JSON.parse(S)}catch(R){E=null}}return E}},ES=(S,_)=>!sS(S,_),gS={attribute:!0,type:String,converter:i,reflect:!1,useDefault:!1,hasChanged:ES};Symbol.metadata??=Symbol("metadata"),o.litPropertyMetadata??=new WeakMap;class l extends(globalThis.HTMLElement??GS){static addInitializer(S){this._$Ei(),(this.l??=[]).push(S)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(S,_=gS){if(_.state&&(_.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(S)&&((_=Object.create(_)).wrapped=!0),this.elementProperties.set(S,_),!_.noAccessor){let E=Symbol(),R=this.getPropertyDescriptor(S,E,_);R!==void 0&&eS(this.prototype,S,R)}}static getPropertyDescriptor(S,_,E){let{get:R,set:A}=tS(this.prototype,S)??{get(){return this[_]},set(U){this[_]=U}};return{get:R,set(U){let L=R?.call(this);A?.call(this,U),this.requestUpdate(S,L,E)},configurable:!0,enumerable:!0}}static getPropertyOptions(S){return this.elementProperties.get(S)??gS}static _$Ei(){if(this.hasOwnProperty(p("elementProperties")))return;let S=E_(this);S.finalize(),S.l!==void 0&&(this.l=[...S.l]),this.elementProperties=new Map(S.elementProperties)}static finalize(){if(this.hasOwnProperty(p("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p("properties"))){let _=this.properties,E=[...S_(_),...__(_)];for(let R of E)this.createProperty(R,_[R])}let S=this[Symbol.metadata];if(S!==null){let _=litPropertyMetadata.get(S);if(_!==void 0)for(let[E,R]of _)this.elementProperties.set(E,R)}this._$Eh=new Map;for(let[_,E]of this.elementProperties){let R=this._$Eu(_,E);R!==void 0&&this._$Eh.set(R,_)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(S){let _=[];if(Array.isArray(S)){let E=new Set(S.flat(1/0).reverse());for(let R of E)_.unshift(wS(R))}else S!==void 0&&_.push(wS(S));return _}static _$Eu(S,_){let E=_.attribute;return E===!1?void 0:typeof E=="string"?E:typeof S=="string"?S.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((S)=>this.enableUpdating=S),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((S)=>S(this))}addController(S){(this._$EO??=new Set).add(S),this.renderRoot!==void 0&&this.isConnected&&S.hostConnected?.()}removeController(S){this._$EO?.delete(S)}_$E_(){let S=new Map,_=this.constructor.elementProperties;for(let E of _.keys())this.hasOwnProperty(E)&&(S.set(E,this[E]),delete this[E]);S.size>0&&(this._$Ep=S)}createRenderRoot(){let S=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lS(S,this.constructor.elementStyles),S}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((S)=>S.hostConnected?.())}enableUpdating(S){}disconnectedCallback(){this._$EO?.forEach((S)=>S.hostDisconnected?.())}attributeChangedCallback(S,_,E){this._$AK(S,E)}_$ET(S,_){let E=this.constructor.elementProperties.get(S),R=this.constructor._$Eu(S,E);if(R!==void 0&&E.reflect===!0){let A=(E.converter?.toAttribute!==void 0?E.converter:i).toAttribute(_,E.type);this._$Em=S,A==null?this.removeAttribute(R):this.setAttribute(R,A),this._$Em=null}}_$AK(S,_){let E=this.constructor,R=E._$Eh.get(S);if(R!==void 0&&this._$Em!==R){let A=E.getPropertyOptions(R),U=typeof A.converter=="function"?{fromAttribute:A.converter}:A.converter?.fromAttribute!==void 0?A.converter:i;this._$Em=R;let L=U.fromAttribute(_,A.type);this[R]=L??this._$Ej?.get(R)??L,this._$Em=null}}requestUpdate(S,_,E,R=!1,A){if(S!==void 0){let U=this.constructor;if(R===!1&&(A=this[S]),E??=U.getPropertyOptions(S),!((E.hasChanged??ES)(A,_)||E.useDefault&&E.reflect&&A===this._$Ej?.get(S)&&!this.hasAttribute(U._$Eu(S,E))))return;this.C(S,_,E)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(S,_,{useDefault:E,reflect:R,wrapped:A},U){E&&!(this._$Ej??=new Map).has(S)&&(this._$Ej.set(S,U??_??this[S]),A!==!0||U!==void 0)||(this._$AL.has(S)||(this.hasUpdated||E||(_=void 0),this._$AL.set(S,_)),R===!0&&this._$Em!==S&&(this._$Eq??=new Set).add(S))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(_){Promise.reject(_)}let S=this.scheduleUpdate();return S!=null&&await S,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[R,A]of this._$Ep)this[R]=A;this._$Ep=void 0}let E=this.constructor.elementProperties;if(E.size>0)for(let[R,A]of E){let{wrapped:U}=A,L=this[R];U!==!0||this._$AL.has(R)||L===void 0||this.C(R,void 0,A,L)}}let S=!1,_=this._$AL;try{S=this.shouldUpdate(_),S?(this.willUpdate(_),this._$EO?.forEach((E)=>E.hostUpdate?.()),this.update(_)):this._$EM()}catch(E){throw S=!1,this._$EM(),E}S&&this._$AE(_)}willUpdate(S){}_$AE(S){this._$EO?.forEach((_)=>_.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(S)),this.updated(S)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(S){return!0}update(S){this._$Eq&&=this._$Eq.forEach((_)=>this._$ET(_,this[_])),this._$EM()}updated(S){}firstUpdated(S){}}l.elementStyles=[],l.shadowRootOptions={mode:"open"},l[p("elementProperties")]=new Map,l[p("finalized")]=new Map,A_?.({ReactiveElement:l}),(o.reactiveElementVersions??=[]).push("2.1.2");var U_={attribute:!0,type:String,converter:i,reflect:!1,hasChanged:ES},C_=(S=U_,_,E)=>{let{kind:R,metadata:A}=E,U=globalThis.litPropertyMetadata.get(A);if(U===void 0&&globalThis.litPropertyMetadata.set(A,U=new Map),R==="setter"&&((S=Object.create(S)).wrapped=!0),U.set(E.name,S),R==="accessor"){let{name:L}=E;return{set(C){let Y=_.get.call(this);_.set.call(this,C),this.requestUpdate(L,Y,S,!0,C)},init(C){return C!==void 0&&this.C(L,void 0,S,C),C}}}if(R==="setter"){let{name:L}=E;return function(C){let Y=this[L];_.call(this,C),this.requestUpdate(L,Y,S,!0,C)}}throw Error("Unsupported decorator location: "+R)};function B(S){return(_,E)=>typeof E=="object"?C_(S,_,E):((R,A,U)=>{let L=A.hasOwnProperty(U);return A.constructor.createProperty(U,R),L?Object.getOwnPropertyDescriptor(A,U):void 0})(S,_,E)}function d(S){return B({...S,state:!0,attribute:!1})}var N_=!1,Y_="➊➋➌➍➎➏➐➑➒",IS=/^https?:\/\//i,bS=(S,_="",E="")=>Z`<a title="${E}"
          class="${_}" style="${_?"":"margin-top:.5rem"}"
          href="mailto:mindon@live.com?subject=%E7%94%B3%E8%AB%8B%E5%8A%A0%E5%85%A5 Join%20Lucky%20Charm%20of%20%E2%9D%9D%E6%97%8B%E5%9C%88SP%C2%B2&body=%E8%AB%8B%E7%A2%BA%E8%AA%8D%E5%8F%AF%E4%BB%A5%E5%85%AC%E9%96%8B%E4%B8%A6%E6%8F%90%E4%BE%9B%E6%94%B6%E6%AC%BE%E9%80%94%E5%BE%91%EF%BC%9A%0A%E6%8E%A5%E5%8F%97%E6%94%B6%E6%AC%BE%E7%9A%84%E4%BA%8C%E7%B6%AD%E7%A2%BC%20QR%20Code%20to%20receive%20money%20%0A%E6%88%96%E8%80%85%E6%94%B6%E6%AC%BE%E9%80%A3%E6%8E%A5%20or%20Link%20to%20receive%20money%0A%E6%88%96%E5%85%B6%E4%BB%96%E6%94%B6%E6%AC%BE%E6%96%B9%E5%BC%8F%20or%20Other%20way%20to%20receive%20money">${S}</a>`;function h_(S,_,E,R){let{src:A,way:U}=S,L=[null,null];if(A instanceof Array){if(A.length==0)return{};if(U=="cc"){if(_>0)L[0]=Z`<a @click=${R} data-v="-1" class="prev">➜</a>`;if(_<A.length-1)L[1]=Z`<a @click=${R} data-v="1" class="next">➜</a>`}else if(U=="lucky"){if(_>=A.length)_=A.length-1;if(_>0)L[0]=bS("+","prev","加入 Join Lukcy Charm of ❝旋圈SP²");if(A.length>0)L[1]=Z`<a @click=${R} data-v="rand" class="next" title="刷新下一位幸運者
Refresh to next lucky charm">↺</a>`}E=`${E}${U}/`,S=A[_]}let{src:C,way:Y,desc:G}=S;if(typeof C=="object")return{pxn:L,payment:S,dom:C};if(C instanceof Function)return{pxn:L,payment:S,dom:C(E)};let H=IS.test(C);if(/\.(png|gif|jpg|jpeg|webp|avif|svg)$/i.test(C))return{pxn:L,payment:S,dom:Z`<pre class="memo">${G}</pre>
      <img src="${H?"":E}${C}" title="${G}" alt="${G}" />
    `};if(H)return{pxn:L,payment:S,dom:Z`
      <a href="${C}" target="_${Y||"donate"}">${G}</a>
    `};return{pxn:L,payment:S,dom:Z`
    <div class="info"><pre>${C||G}</pre></div>
  `}}var GE=[DS("pay-ways")],KE=O_,ME=[B()],wE=[B()],IE=[B({attribute:"cc-data"})],TE=[B({attribute:"lucky-data"})],XE=[B()],JE=[d()],QE=[d()],VE=[d()],ZE=[d()],zE=[d()],DE=new WeakMap,HE=new WeakMap,kE=new WeakMap,xE=new WeakMap,BE=new WeakMap,$E=new WeakMap,qE=new WeakMap,uE=new WeakMap,PE=new WeakMap,fE=new WeakMap,K=ZS(KE);class I extends KE{constructor(){super(...arguments);h(K,5,this);D(this,DE,h(K,8,this,180));h(K,11,this);D(this,HE,h(K,12,this,import.meta.resolve("./payments/")));h(K,15,this);D(this,kE,h(K,16,this));h(K,19,this);D(this,xE,h(K,20,this));h(K,23,this);D(this,BE,h(K,24,this,[{way:"wechat",desc:"微信 WeChat",src:"mindon_wechat.png"},{way:"alipay",desc:"支付寶 Alipay",src:"mindon_alipay.png"},{way:"paypal",desc:"貝寶 PayPal",memo:"n × $0.99 to developer",src:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YSVEJMBLM3AFG"},{way:"cc",desc:"公益金 Comm-Chest",src:[]},{way:"lucky",desc:"幸運符 Lucky Charm",src:[{way:"join",src:Z`
            <pre class="memo">隨機收錢人
幸運隨時降臨
Lucky Charm</pre>${bS("加入 JOIN +")}
      `}]},{way:"free",desc:"不想花錢 Enjoy Freely",src:(S)=>Z`
          <pre class="memo">就是不想花錢
just don't want to pay</pre><p>
            <img src="${S}free.png" alt="Free" width="80" height="54" />
          </p>
        `}]));h(K,27,this);D(this,$E,h(K,28,this,0));h(K,31,this);D(this,qE,h(K,32,this,0));h(K,35,this);D(this,uE,h(K,36,this,!1));h(K,39,this);D(this,PE,h(K,40,this,0));h(K,43,this);D(this,fE,h(K,44,this,!1));h(K,47,this)}_tid=null;firstUpdated(){let{assets:S,cc:_,lucky:E}=this;_&&fetch(IS.test(_)?_:`${S}cc/${_}`).then((R)=>R.json()).then((R)=>{this.payments.map((A,U)=>{if(A.way=="cc")this.payments[U].src=R,this.requestUpdate()})}),E&&fetch(IS.test(E)?E:`${S}lucky/${E}`).then((R)=>R.json()).then((R)=>{this.payments.map((A,U)=>{if(A.way=="lucky")this.payments[U].src.push(...R),this.requestUpdate()})})}updated(S){if(S.has("current")){let{current:_,payments:E}=this,{src:R}=E[_];if(R instanceof Array)this.idx=Math.floor(Math.random()*R.length)}}subnav(S){let{v:_="0"}=S.target.dataset,{current:E,payments:R}=this,{src:A}=R[E];if(_=="rand"){if(A instanceof Array)this.idx=Math.floor(Math.random()*A.length);return}if(this.idx+=parseInt(_,10),A instanceof Array){if(this.idx<0)this.idx=0;else if(this.idx>=A.length)this.idx=A.length-1}}wayChange(S){let{value:_}=S.target;this.current=parseInt(_,10);let{payments:E,current:R,_tid:A}=this;if(A)clearTimeout(A);this.selected=!0,this.enabled=!1,this.countdown=E[R]?.way=="free"?6:3;let U=()=>{if(this.countdown>1)this.countdown--,this._tid=setTimeout(U,1000);else this.countdown=0,this.enabled=!0};this._tid=setTimeout(U,1000)}reset(){let{_tid:S}=this;if(S)clearTimeout(S);if(this.selected=!1,this.enabled)this.enabled=!1;this.current=0;let _=this.renderRoot.querySelector('input[name="pay"]:checked');if(_)_.checked=!1}render(){let{size:S,current:_,idx:E,payments:R,assets:A,enabled:U,selected:L,countdown:C}=this,{pxn:Y,payment:G,dom:H}=h_(R[_],E,A,(O)=>this.subnav(O));if(!G)return"...";return Z`
      <div id="ways">
        <div class="way ${R[_].way}" style="--size: ${S}px">
          ${Y}
          ${G.memo?Z`
              <pre class="memo">${G.memo}</pre>
            `:""} ${H}
        </div>
        <ul style="--ways-bg: url(${A}follow-my-heart.png) 10px 0px no-repeat">
          ${R.map(({desc:O},Q)=>Z`
              <li>
                <label>${O} <input
                 ?checked=${L&&Q==_}
                  type="radio"
                  name="pay"
                  value="${Q}"
                  @click="${this.wayChange}"
                ></label>
              </li>
            `)}
          <li><slot class=${`${N_?"mov":"mp4"} ${U&&this.countdown==0?"":"disabled"}`} style="--countdown: '${Y_[C-1]||""}';"></slot></li>
        </ul>
      </div>
    `}listen(S,_,E=0){let{host:R}=this.renderRoot,A=[].slice.call(R.querySelectorAll(S));A.map((U)=>{U.addEventListener("click",async(L)=>{let C=L.target;if(A.map((Y)=>Y.disabled=!0),C.tid)clearTimeout(C.tid);if(E)C.tid=setTimeout(()=>A.map((Y)=>Y.disabled=!1),E);try{await _(C,()=>{if(C.tid)clearTimeout(C.tid);A.map((Y)=>Y.disabled=!1)},this.current!=5||/[&?]VIP/.test(location.search))}catch(Y){if(C.tid)clearTimeout(C.tid);A.map((G)=>G.disabled=!1),console.error(Y),alert("download video error")}})})}static styles=L_`
    :host {
      display: inline-block;
      user-select: none;
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
      flex-direction: var(--slot-direction, column);
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
    slot.mp4::slotted(button[data-as="mov"]),
    slot.mov::slotted(button[data-as="mp4"]) {
        display: none!important;
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
  `}V(K,4,"size",ME,I,DE),V(K,4,"assets",wE,I,HE),V(K,4,"cc",IE,I,kE),V(K,4,"lucky",TE,I,xE),V(K,4,"payments",XE,I,BE),V(K,4,"current",JE,I,$E),V(K,4,"idx",QE,I,qE),V(K,4,"enabled",VE,I,uE),V(K,4,"countdown",ZE,I,PE),V(K,4,"selected",zE,I,fE),I=V(K,0,"PayWays",GE,I),h(K,1,I),CS(K,I);let _PayWays=I;var u=(S,_=document)=>_.querySelector(S),r=u("button.donate");if(r){let{dataset:S}=r,_=document.createElement("link");_.rel="stylesheet",_.href=import.meta.resolve("./donate-pay.css"),u("head").appendChild(_);let E=document.createElement("dialog");E.id="mypay",E.closedby="any",E.innerHTML=`<a class="off">×</a><pay-ways cc-data="${S.cc??"cc.json?20250825"}" lucky-data="lucky.json?20250825" style="--slot-direction: row">
      <button class="download" data-as="webm" style="width:35%;height:3rem;">
          <small>.WebM</small>
      </button>
      <button class="download" data-as="mp4" style="width:65%;height:3rem;margin-left:2px">
          <div>下載動畫<br/><small>.MP4</small></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6"/>
          </svg>
      </button>
  </pay-ways>`,r.addEventListener("click",()=>{let A=u("#mypay");u("pay-ways",A).reset(),A.showModal()}),u("a.off",E).onclick=()=>u("#mypay").close();let{body:R}=document;R.insertBefore(E,R.firstChild),u("pay-ways",E).listen("button",r.todo??((A,U,L)=>{return r.todo?.(A,U,L)}))}export{I as PayWays};
