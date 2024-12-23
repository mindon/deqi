var de,ce=function(r,e,t,i){var s=arguments.length,a=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,e,t,i);else for(var h=r.length-1;h>=0;h--)(n=r[h])&&(a=(s<3?n(a):s>3?n(e,t,a):n(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a},ue=class{get shadowRoot(){return this.__host.__shadowRoot}constructor(e){this.ariaAtomic="",this.ariaAutoComplete="",this.ariaBrailleLabel="",this.ariaBrailleRoleDescription="",this.ariaBusy="",this.ariaChecked="",this.ariaColCount="",this.ariaColIndex="",this.ariaColSpan="",this.ariaCurrent="",this.ariaDescription="",this.ariaDisabled="",this.ariaExpanded="",this.ariaHasPopup="",this.ariaHidden="",this.ariaInvalid="",this.ariaKeyShortcuts="",this.ariaLabel="",this.ariaLevel="",this.ariaLive="",this.ariaModal="",this.ariaMultiLine="",this.ariaMultiSelectable="",this.ariaOrientation="",this.ariaPlaceholder="",this.ariaPosInSet="",this.ariaPressed="",this.ariaReadOnly="",this.ariaRequired="",this.ariaRoleDescription="",this.ariaRowCount="",this.ariaRowIndex="",this.ariaRowSpan="",this.ariaSelected="",this.ariaSetSize="",this.ariaSort="",this.ariaValueMax="",this.ariaValueMin="",this.ariaValueNow="",this.ariaValueText="",this.role="",this.form=null,this.labels=[],this.states=new Set,this.validationMessage="",this.validity={},this.willValidate=!0,this.__host=e}checkValidity(){return console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true."),!0}reportValidity(){return!0}setFormValue(){}setValidity(){}},q=new WeakMap,E=r=>{let e=q.get(r);return e===void 0&&q.set(r,e=new Map),e},fe=class{constructor(){this.__shadowRootMode=null,this.__shadowRoot=null,this.__internals=null}get attributes(){return Array.from(E(this)).map(([e,t])=>({name:e,value:t}))}get shadowRoot(){return this.__shadowRootMode==="closed"?null:this.__shadowRoot}get localName(){return this.constructor.__localName}get tagName(){var e;return(e=this.localName)==null?void 0:e.toUpperCase()}setAttribute(e,t){E(this).set(e,String(t))}removeAttribute(e){E(this).delete(e)}toggleAttribute(e,t){if(this.hasAttribute(e)){if(t===void 0||!t)return this.removeAttribute(e),!1}else return t===void 0||t?(this.setAttribute(e,""),!0):!1;return!0}hasAttribute(e){return E(this).has(e)}attachShadow(e){const t={host:this};return this.__shadowRootMode=e.mode,e&&e.mode==="open"&&(this.__shadowRoot=t),t}attachInternals(){if(this.__internals!==null)throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");const e=new ue(this);return this.__internals=e,e}getAttribute(e){return E(this).get(e)??null}},pe=class extends fe{},me=pe,_e=class{constructor(){this.__definitions=new Map}define(e,t){this.__definitions.has(e)&&console.warn(`'CustomElementRegistry' already has "${e}" defined. This may have been caused by live reload or hot module replacement in which case it can be safely ignored.
Make sure to test your application with a production build as repeat registrations will throw in production.`),t.__localName=e,this.__definitions.set(e,{ctor:t,observedAttributes:t.observedAttributes??[]})}get(e){const t=this.__definitions.get(e);return t==null?void 0:t.ctor}},ge=_e,ye=new ge,w=globalThis,N=w.ShadowRoot&&(w.ShadyCSS===void 0||w.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),K=new WeakMap;class J{constructor(e,t,i){if(this._$cssResult$=!0,i!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(N&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=K.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(t,e))}return e}toString(){return this.cssText}}var $e=r=>new J(typeof r=="string"?r:r+"",void 0,I),ve=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,a)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[a+1],r[0]);return new J(t,r,I)},Ae=(r,e)=>{if(N)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=w.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Z=N||w.CSSStyleSheet===void 0?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return $e(t)})(r):r,{is:be,defineProperty:Se,getOwnPropertyDescriptor:Ee,getOwnPropertyNames:we,getOwnPropertySymbols:Ce,getPrototypeOf:xe}=Object,f=globalThis;f.customElements??(f.customElements=ye);var G=f.trustedTypes,Re=G?G.emptyScript:"",z=f.reactiveElementPolyfillSupport,C=(r,e)=>r,L={toAttribute(r,e){switch(e){case Boolean:r=r?Re:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Q=(r,e)=>!be(r,e),X={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:Q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);class v extends(globalThis.HTMLElement??me){static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=X){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Se(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:a}=Ee(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const h=s==null?void 0:s.call(this);a.call(this,n),this.requestUpdate(e,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??X}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,i=[...we(t),...Ce(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Z(s))}else e!==void 0&&t.push(Z(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ae(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var a;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:L).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var a;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((a=n.converter)==null?void 0:a.fromAttribute)!==void 0?n.converter:L;this._$Em=s,this[s]=h.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Q)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,n]of s)n.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[C("elementProperties")]=new Map,v[C("finalized")]=new Map,z==null||z({ReactiveElement:v}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.0.4");var A=globalThis,O=A.trustedTypes,Y=O?O.createPolicy("lit-html",{createHTML:r=>r}):void 0,ee="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,te="?"+_,Pe=`<${te}>`,g=A.document===void 0?{createTreeWalker:()=>({})}:document,x=()=>g.createComment(""),R=r=>r===null||typeof r!="object"&&typeof r!="function",D=Array.isArray,Te=r=>D(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",V=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ie=/-->/g,se=/>/g,y=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),re=/'/g,ne=/"/g,ae=/^(?:script|style|textarea|title)$/i,j=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),Ue=j(1),Fe=j(2),qe=j(3),b=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),oe=new WeakMap,$=g.createTreeWalker(g,129);function he(r,e){if(!D(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(e):e}var Me=(r,e)=>{const t=r.length-1,i=[];let s,a=e===2?"<svg>":e===3?"<math>":"",n=P;for(let h=0;h<t;h++){const o=r[h];let d,u,l=-1,p=0;for(;p<o.length&&(n.lastIndex=p,u=n.exec(o),u!==null);)p=n.lastIndex,n===P?u[1]==="!--"?n=ie:u[1]!==void 0?n=se:u[2]!==void 0?(ae.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=y):u[3]!==void 0&&(n=y):n===y?u[0]===">"?(n=s??P,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?y:u[3]==='"'?ne:re):n===ne||n===re?n=y:n===ie||n===se?n=P:(n=y,s=void 0);const m=n===y&&r[h+1].startsWith("/>")?" ":"";a+=n===P?o+Pe:l>=0?(i.push(d),o.slice(0,l)+ee+o.slice(l)+_+m):o+_+(l===-2?h:m)}return[he(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class U{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,n=0;const h=e.length-1,o=this.parts,[d,u]=Me(e,t);if(this.el=U.createElement(d,i),$.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=$.nextNode())!==null&&o.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ee)){const p=u[n++],m=s.getAttribute(l).split(_),H=/([.?@])?(.*)/.exec(p);o.push({type:1,index:a,name:H[2],strings:m,ctor:H[1]==="."?Oe:H[1]==="?"?ke:H[1]==="@"?Ne:k}),s.removeAttribute(l)}else l.startsWith(_)&&(o.push({type:6,index:a}),s.removeAttribute(l));if(ae.test(s.tagName)){const l=s.textContent.split(_),p=l.length-1;if(p>0){s.textContent=O?O.emptyScript:"";for(let m=0;m<p;m++)s.append(l[m],x()),$.nextNode(),o.push({type:2,index:++a});s.append(l[p],x())}}}else if(s.nodeType===8)if(s.data===te)o.push({type:2,index:a});else{let l=-1;for(;(l=s.data.indexOf(_,l+1))!==-1;)o.push({type:7,index:a}),l+=_.length-1}a++}}static createElement(e,t){const i=g.createElement("template");return i.innerHTML=e,i}}function S(r,e,t=r,i){var n,h;if(e===b)return e;let s=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const a=R(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),a===void 0?s=void 0:(s=new a(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=S(r,s._$AS(r,e.values),s,i)),e}class He{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??g).importNode(t,!0);$.currentNode=s;let a=$.nextNode(),n=0,h=0,o=i[0];for(;o!==void 0;){if(n===o.index){let d;o.type===2?d=new M(a,a.nextSibling,this,e):o.type===1?d=new o.ctor(a,o.name,o.strings,this,e):o.type===6&&(d=new Ie(a,this,e)),this._$AV.push(d),o=i[++h]}n!==(o==null?void 0:o.index)&&(a=$.nextNode(),n++)}return $.currentNode=g,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class M{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),R(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==b&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Te(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==c&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(g.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=U.createElement(he(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(t);else{const n=new He(s,this),h=n.u(this.options);n.p(t),this.T(h),this._$AH=n}}_$AC(e){let t=oe.get(e.strings);return t===void 0&&oe.set(e.strings,t=new U(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const a of e)s===t.length?t.push(i=new M(this.O(x()),this.O(x()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,a){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=c}_$AI(e,t=this,i,s){const a=this.strings;let n=!1;if(a===void 0)e=S(this,e,t,0),n=!R(e)||e!==this._$AH&&e!==b,n&&(this._$AH=e);else{const h=e;let o,d;for(e=a[0],o=0;o<a.length-1;o++)d=S(this,h[i+o],t,o),d===b&&(d=this._$AH[o]),n||(n=!R(d)||d!==this._$AH[o]),d===c?e=c:e!==c&&(e+=(d??"")+a[o+1]),this._$AH[o]=d}n&&!s&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Oe extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}}class ke extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}}class Ne extends k{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??c)===b)return;const i=this._$AH,s=e===c&&i!==c||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==c&&(i===c||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ie{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}var B=A.litHtmlPolyfillSupport;B==null||B(U,M),(A.litHtmlVersions??(A.litHtmlVersions=[])).push("3.2.1");var ze=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const a=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new M(e.insertBefore(x(),a),a,void 0,t??{})}return s._$AI(r),s};class T extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return b}}T._$litElement$=!0,T.finalized=!0,(de=globalThis.litElementHydrateSupport)==null||de.call(globalThis,{LitElement:T});var W=globalThis.litElementPolyfillSupport;W==null||W({LitElement:T}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var Le=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};function De(r,e){if(r.length===0)return;const t=sessionStorage.getItem(e);if(!t)return;const i=t.split(",").map(s=>parseFloat(s));Array.from(r).some((s,a)=>(s.pause(),s.startTime=i[0]||0,s.currentTime=i[1]||0,s.play(),!1))}function le(r,e,t){if(!r.length)return;Array.from(r).some(o=>{o.pause()});const{effect:i,startTime:s,timeline:a}=r[0],n=i.target;if(!n)return;const{currentTime:h}=a;t=t||getComputedStyle(n).animationDuration,sessionStorage.setItem(e,[(s||0).toFixed(2),((h||0)%parseInt(t.replace("ms","").replace("s","000"),10)).toFixed(2)].join(","))}class F extends T{static styles=ve`
:host {
    --size: 360px;
    --dot: 60px;
    --yin: #222;
    --yang: #c30;
    --duration: 8s;
}
.yinyang {
    width: var(--size);
    height: var(--size);
    position: relative;
    overflow: hidden;
    transform: rotate(90deg);
    animation-name: loop;
    animation-duration: var(--duration);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.yin, .yang {
    width: 50%;
    height: 100%;
    position: absolute;
}

.yin {
    --front: var(--yin);
    --back: var(--yang);
    background-color: var(--front);
    border-radius: calc(var(--size) / 2) 0 0 calc(var(--size) / 2);
}

.yin, .yin::before, .yin::after, .yang, .yang::before, .yang::after {
    animation-duration: var(--duration);
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
}
.yin::after,
.yang::after {
    animation-timing-function: ease-out;
}
.yin, .yin::before, .yang::after {
    animation-name: yin;
}
.yang, .yang::before, .yin::after {
    animation-name: yang;
}
.yang {
    --front: var(--yang);
    --back: var(--yin);
    right: 0;
    background-color: var(--front);
    border-radius: 0 calc(var(--size) / 2) calc(var(--size) / 2) 0;
}
.yin::before,
.yang::before {
    content: " ";
    width: 100%;
    height: 50%;
    background-color: var(--front);
    border-radius: 50%;
    position: absolute;
    z-index: 9;
}
.yin::before {
    bottom: 0;
    left: 50%;
}
.yang::before {
    top: 0;
    right: 50%;
}
.yin::after,
.yang::after {
    content: "";
    width: var(--dot);
    height: var(--dot);
    background-color: var(--back);
    border-radius: calc(var(--dot) / 2);
    z-index: 12;
    position: absolute;
    --x: calc(var(--dot) / -2);
    --y: calc(25% - var(--dot) / 2);
}
.yin::after {
    right: var(--x);
    bottom: var(--y);
}
.yang::after {
    left: var(--x);
    top: var(--y);
}
@keyframes loop {
    from {
        transform: rotate(90deg);
    }
    to {
        transform: rotate(-270deg);
    }
}
@keyframes yin {
    from {
        background-color: var(--yin);
    }
    50% {
        background-color: var(--yang);
    }
    to {
        background-color: var(--yin);
    }
}
@keyframes yang {
    from {
        background-color: var(--yang);
    }
    50% {
        background-color: var(--yin);
    }
    to {
        background-color: var(--yang);
    }
}
`;_animations;firstUpdated(){var t;const e=Array.from((t=this.renderRoot)==null?void 0:t.getAnimations());e.length&&(this._animations=e,globalThis._seamless||(globalThis.addEventListener("beforeunload",()=>{var i;(i=this._animations)!=null&&i.length&&le(this._animations,"tai-chi","8s")}),globalThis._seamless=!0),De(e,"tai-chi"))}disconnectedCallback(){const e=this._animations;e!=null&&e.length&&le(e,"tai-chi","8s")}render(){return Ue`<div class="yinyang">
        <div class="yin"></div>
        <div class="yang"></div>
      </div>`}}F=ce([Le("tai-chi")],F);export{F as TaiChi};
