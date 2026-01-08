var M=function(z,F,B,C){var A=arguments.length,D=A<3?F:C===null?C=Object.getOwnPropertyDescriptor(F,B):C,I;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")D=Reflect.decorate(z,F,B,C);else for(var G=z.length-1;G>=0;G--)if(I=z[G])D=(A<3?I(D):A>3?I(F,B,D):I(F,B))||D;return A>3&&D&&Object.defineProperty(F,B,D),D};import{css as E,html as $,LitElement as b}from"https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";import{customElement as T,property as O,state as j}from"https://cdn.jsdelivr.net/npm/lit@3.3.1/decorators/+esm";var L=["靜態 Original","旋轉態 Spinning","費納奇鏡 PhenakistoScope"],X=/^https?:\/\/|^data:image\//i;class V extends b{constructor(){super(...arguments);this.clockwise=!1;this.frames=10;this.duration=1200;this.max=1600;this.withDuration=!1;this.src="";this.name="";this.state=2;this.maxdur=3650}_q={};_moving=!1;stateChange(z){let{s:F="2"}=z.target?.dataset||{},B=parseInt(F,10);if(!isNaN(B))this.state=B}maxDurChange(z){let F=z.target.valueAsNumber;if(!F||isNaN(F))return;this.maxdur=F<=this.duration?F:this.duration}speedChange(z){this.duration=z.target.valueAsNumber}toggle(z){this.state=(this.state+1)%3}async make(z,F){if(F)this.name=F;let{host:B}=this.renderRoot;B.innerHTML='<div class="cover"><div class="loading"></div></div>';let C=await z;C.className="cover",C.tabIndex=1;let A=B.firstChild;A.parentElement.removeChild(A),B.appendChild(C)}slotChange(z){let B=z.target.assignedElements({flatten:!0})[0];if(!B)return;let C=B.getAttribute("src");if(!C)C=B.outerHTML.match(/url\("?([^")]+)"?\)/)?.[1];if(!C)return;this.frames=10,this.clockwise=!1,this.duration=1200,C.match(/([\d]+(\.\d+)?m?s)|(\d+(f|cc)\.)/g)?.map((A)=>{if(/\d(f|cc)\./.test(A)){let D=A.length;this.clockwise=A.substring(D-3)==="cc.";let I=parseInt(A.substring(0,D-(this.clockwise?3:2)),10);this.frames=I}else if(this.withDuration){let D=parseFloat(A.replace(/m?s$/,""));this.duration=A.indexOf("ms")>0?D:D*1000}}),this.src=C}updated(z){if(z.has("state")||z.has("frames")||z.has("clockwise")||z.has("duration")||z.has("src")){if(z.has("src")){if(!/^data:image/.test(this.src)){let J=this.src.replace(/[#?].*$/,""),K=J.lastIndexOf("/");this.name=K>-1?J.substring(K+1):J}let{_q:R={}}=this;["state","frames","clockwise","duration"].map((J)=>{if(R[J]!==void 0)this[J]=R[J]}),this._q={},this.srcChange(this.src)}let{state:F,frames:B,clockwise:C,duration:A,src:D}=this,I="data:image/",G=D.substring(0,I.length)==I?"":btoa([F,B,C?1:0,A,D].join("\t"));this.dispatchEvent(new CustomEvent("spin",{detail:G}))}}size(){let z=this.renderRoot.querySelector("div.params");if(z){let{width:F,height:B}=z.getBoundingClientRect();return{width:F,height:B}}return{width:0,height:0}}srcChange(z){let{host:F}=this.renderRoot;if(!z)return;F.innerHTML='<div class="cover"><div class="loading"></div></div>';let B=F.firstChild,C=document.createElement("img");C.src=z,C.className="cover",C.onload=()=>{if(C.onerror=C.onload=null,this.current=C,z&&X.test(z)){let A=B.querySelector(".loading");if(A)B.removeChild(A);B.style.backgroundImage=`url(${z})`,B.style.borderRadius="100%",this.src=z}else B.parentElement?.removeChild(B),F.appendChild(C)},C.onerror=()=>{C.onerror=C.onload=null;let A=B.querySelector(".loading");if(A)B.removeChild(A);B.innerHTML='<div class="err">load error</div>'}}init(z="",F=""){let{hash:B,href:C}=location,A=new URL(C).searchParams,D="",I={};try{let G=[];if(z instanceof Array){G=z;let Q=G[G.length-1];if(typeof Q==="string"&&/[a-z]/i.test(Q))D=Q}else{let Q=(B||z).substring(1),N=Q.length?atob(Q).split("\t"):[];if(N.length>0){let U=N.slice(-1)[0];if(U&&/[a-z]/i.test(U))D=U.trim(),N=N.slice(0,N.length-1);N.map((Z)=>{if(Z.length>0)G.push(parseInt(Z,10))})}}let R=[2,10,0,1000];G.map((Q,N)=>isNaN(Q)&&(G[N]=R[N]));let[J=2,K=10,P=0,Y=1000]=G;I={state:J,frames:K,clockwise:P?!0:!1,duration:Y}}catch(G){}if(A.has("src"))D=A.get("src");if(this.dispatchEvent(new CustomEvent("src-change",{detail:D})),X.test(F))D=F;if(A.has("n")){let G=parseInt(A.get("n")||"",10);if(G!=0){if(I.frames=G<0?-G:G,G<0)I.clockwise=!I.clockwise}}if(this._q=I,A.has("src"))history.replaceState(document.title,"",C.replace(/\?[^#]*/,""));if(D)this.srcChange(D)}mouseDown(z){if(z.button!=0&&!z.touches)return;this._moving=!0}mouseUp(z){if(z.button!=0&&!z.touches)return;if(z.touches)this._lastTouch=null;this._moving=!1}mouseMove(z){if(!this._moving||z.button!=0&&!z.touches)return;let{duration:F,clockwise:B,maxdur:C,_lastTouch:A}=this,D=z.touches?.[0];if(D)if(A)z.movementX=D.pageX-A.pageX,z.movementY=D.pageY-A.pageY,this._lastTouch=D;else{this._lastTouch=D;return}let I=z.movementX;if(Math.abs(z.movementY)>Math.abs(I))I=5*(B?-z.movementY:z.movementY);else I=2*I;let G=(B?1:-1)*F+I;if(G<0&&G<-C)G=-C;else if(G>0&&G>C)G=C;if(G==0)G=z.movementX<0?-1:1;this.duration=Math.round(G<0?-G:G),this.clockwise=G<0?!1:!0}adjustDuration(z){if(!z.target)return;let F=z.target;if(!F.classList.contains("params"))return;let{duration:C,maxdur:A}=this,{offsetWidth:D,offsetHeight:I}=F,{offsetX:G,offsetY:R}=z,J=R-I/2,K=G-D/2;if(Math.abs(K)<25||J*J+K*K>D*D/4||J*J+K*K<(D/2-16)*(D/2-16))return;let P=Math.atan2(J,K)*180/Math.PI;if(this.clockwise=K>0,K<0)this.duration=Math.round(A*(P<0?0.5+(180+P)/180:(P-90)/180));else this.duration=Math.round(A*(P>0?(90-P)/180:0.5-P/180))}render(){let{clockwise:z,duration:F,maxdur:B,state:C}=this;return $`
      <div class="state">${Array.from([,,,],(A,D)=>D).map((A)=>A!=C?$`<a data-s=${A} title="${L[A]}" @click=${this.stateChange}>●</a>`:L[C])}</div>
      <div class="space">
        <div
          tabindex="1"
          class="params"
          style=${`--z-plus:${z?-2:-1};--fill-plus:${z?"#6999f655":"var(--cover-color, #fff)"}; --rotate-plus:${z?`rotate(${180*(B-F)/B}deg)`:"rotate(0deg)"};--z-minus: ${z?-1:-2}; --fill-minus:${z?"var(--cover-color, #fff)":"#ff8b8b55"}; --rotate-minus:${z?"rotate(0deg)":`rotate(${-180*(B-F)/B}deg)`};`}
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
          <input type="number" .value=${this.duration} min="1" max="${this.maxdur}" @input=${(A)=>this.duration=A.target.valueAsNumber||this.duration} title="duration in ms of one circle spin"><sup>ms</sup>
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
            @input="${(A)=>this.frames=parseInt(A.target.value,10)||this.frames}"
          ><sup>fr</sup>
        </div>
    </div>
</div>
    `}static styles=E`
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
}`}M([O({type:Number})],V.prototype,"clockwise",void 0),M([O({type:Number})],V.prototype,"frames",void 0),M([O({type:Number})],V.prototype,"duration",void 0),M([O({type:Number})],V.prototype,"max",void 0),M([O({type:Boolean,attribute:"with-duration"})],V.prototype,"withDuration",void 0),M([O({type:String})],V.prototype,"src",void 0),M([O({type:ArrayBuffer})],V.prototype,"data",void 0),M([O({type:String})],V.prototype,"name",void 0),M([O()],V.prototype,"current",void 0),M([j()],V.prototype,"state",void 0),M([j()],V.prototype,"maxdur",void 0),V=M([T("spin-space")],V);export{V as SpinSpace};
