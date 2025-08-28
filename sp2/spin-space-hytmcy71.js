var d=function(v,t,o,s){var i=arguments.length,e=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,o):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(v,t,o,s);else for(var n=v.length-1;n>=0;n--)(r=v[n])&&(e=(i<3?r(e):i>3?r(t,o,e):r(t,o))||e);return i>3&&e&&Object.defineProperty(t,o,e),e};import{css as z,html as w,LitElement as N}from"https://mindon.dev/lib/lit-core.min_3.3.1.js";import{customElement as _,property as p,state as x}from"https://cdn.jsdelivr.net/npm/lit@3.3.1/decorators/+esm";var $=["\u975C\u614B Original","\u65CB\u8F49\u614B Spinning","\u8CBB\u7D0D\u5947\u93E1 PhenakistoScope"],k=/^https?:\/\/|^data:image\//i;class u extends N{constructor(){super(...arguments),this.clockwise=!1,this.frames=10,this.duration=1200,this.max=1600,this.withDuration=!1,this.src="",this.name="",this.state=2,this.maxdur=3650}_q;_moving=!1;stateChange(t){const{s:o="2"}=t.target.dataset,s=parseInt(o,10);isNaN(s)||(this.state=s)}maxDurChange(t){const o=t.target.valueAsNumber;!o||isNaN(o)||(this.maxdur=o<=this.duration?o:this.duration)}speedChange(t){this.duration=t.target.valueAsNumber}toggle(t){this.state=(this.state+1)%3}async make(t,o){o&&(this.name=o);const{host:s}=this.renderRoot;s.innerHTML='<div class="cover"><div class="loading"></div></div>';const i=await t;i.className="cover",i.tabIndex=1;const e=s.firstChild;e.parentElement.removeChild(e),s.appendChild(i)}slotChange(t){var e,r;const s=t.target.assignedElements({flatten:!0})[0];if(!s)return;let i=s.getAttribute("src");i||(i=(e=s.outerHTML.match(/url\("?([^")]+)"?\)/))==null?void 0:e[1]),i&&(this.frames=10,this.clockwise=!1,this.duration=1200,(r=i.match(/([\d]+(\.\d+)?m?s)|(\d+(f|cc)\.)/g))==null||r.map(n=>{if(/\d(f|cc)\./.test(n)){const a=n.length;this.clockwise=n.substring(a-3)==="cc.";const m=parseInt(n.substring(0,a-(this.clockwise?3:2)),10);this.frames=m}else if(this.withDuration){const a=parseFloat(n.replace(/m?s$/,""));this.duration=n.indexOf("ms")>0?a:a*1e3}}),this.src=i)}updated(t){if(t.has("state")||t.has("frames")||t.has("clockwise")||t.has("duration")||t.has("src")){if(t.has("src")){if(!/^data:image/.test(this.src)){const c=this.src.replace(/[#?].*$/,""),l=c.lastIndexOf("/");this.name=l>-1?c.substring(l+1):c}const{_q:m={}}=this;["state","frames","clockwise","duration"].map(c=>{m[c]!==void 0&&(this[c]=m[c])}),this._q={},this.srcChange(this.src)}const{state:o,frames:s,clockwise:i,duration:e,src:r}=this,n="data:image/",a=r.substring(0,n.length)==n?"":btoa([o,s,i?1:0,e,r].join("	"));this.dispatchEvent(new CustomEvent("spin",{detail:a}))}}size(){const t=this.renderRoot.querySelector("div.params");if(t){const{width:o,height:s}=t.getBoundingClientRect();return{width:o,height:s}}return{width:0,height:0}}srcChange(t){const{host:o}=this.renderRoot;if(!t)return;o.innerHTML='<div class="cover"><div class="loading"></div></div>';const s=o.firstChild,i=document.createElement("img");i.src=t,i.className="cover",i.onload=()=>{if(i.onerror=i.onload=null,this.current=i,t&&k.test(t)){const e=s.querySelector(".loading");e&&s.removeChild(e),s.style.backgroundImage=`url(${t})`,s.style.borderRadius="100%",this.src=t}else s.parentElement.removeChild(s),o.appendChild(i)},i.onerror=()=>{i.onerror=i.onload=null;const e=s.querySelector(".loading");e&&s.removeChild(e),s.innerHTML='<div class="err">load error</div>'}}init(t="",o=""){const{hash:s,href:i}=location;let e=new URL(i).searchParams,r="",n={};try{let a=[];if(t instanceof Array){a=t;const g=a[a.length-1];typeof g=="string"&&/[a-z]/i.test(g)&&(r=g)}else{const g=(s||t).substring(1);let h=g.length?atob(g).split("	"):[];if(h.length>0){const b=h.slice(-1)[0];b&&/[a-z]/i.test(b)&&(r=b.trim(),h=h.slice(0,h.length-1)),h.map(y=>{y.length>0&&a.push(parseInt(y,10))})}}const m=[2,10,0,1e3];a.map((g,h)=>isNaN(g)&&(a[h]=m[h]));const[c=2,l=10,f=0,C=1e3]=a;n={state:c,frames:l,clockwise:!!f,duration:C}}catch{}if(e.has("src")&&(r=e.get("src")),this.dispatchEvent(new CustomEvent("src-change",{detail:r})),k.test(o)&&(r=o),e.has("n")){const a=parseInt(e.get("n")||"",10);a!=0&&(n.frames=a<0?-a:a,a<0&&(n.clockwise=!n.clockwise))}this._q=n,e.has("src")&&history.replaceState(document.title,"",i.replace(/\?[^#]*/,"")),r&&this.srcChange(r)}mouseDown(t){t.button!=0&&!t.touches||(this._moving=!0)}mouseUp(t){t.button!=0&&!t.touches||(t.touches&&(this._lastTouch=null),this._moving=!1)}mouseMove(t){var m;if(!this._moving||t.button!=0&&!t.touches)return;const{duration:o,clockwise:s,maxdur:i,_lastTouch:e}=this,r=(m=t.touches)==null?void 0:m[0];if(r)if(e)t.movementX=r.pageX-e.pageX,t.movementY=r.pageY-e.pageY,this._lastTouch=r;else{this._lastTouch=r;return}let n=t.movementX;Math.abs(t.movementY)>Math.abs(n)?n=5*(s?-t.movementY:t.movementY):n=2*n;let a=(s?1:-1)*o+n;a<0&&a<-i?a=-i:a>0&&a>i&&(a=i),a==0&&(a=t.movementX<0?-1:1),this.duration=Math.round(a<0?-a:a),this.clockwise=!(a<0)}adjustDuration(t){if(!t.target)return;const o=t.target,s=o.classList;if(s.contains("cover")||s.contains("param"))return;const{duration:i,maxdur:e}=this,{offsetWidth:r,offsetHeight:n}=o,{offsetX:a,offsetY:m}=t,c=m-n/2,l=a-r/2;if(console.log(l,c,c*c+l*l,r*r/4,(r/2-16)*(r/2-16)),Math.abs(l)<25||c*c+l*l>r*r/4||c*c+l*l<(r/2-16)*(r/2-16))return;const f=Math.atan2(c,l)*180/Math.PI;this.clockwise=l>0,l<0?this.duration=Math.round(e*(f<0?.5+(180+f)/180:(f-90)/180)):this.duration=Math.round(e*(f>0?(90-f)/180:.5-f/180))}render(){const{clockwise:t,duration:o,maxdur:s,state:i}=this;return w`
      <div class="state">${Array.from(new Array(3),(e,r)=>r).map(e=>e!=i?w`<a data-s=${e} title="${$[e]}" @click=${this.stateChange}>●</a>`:$[i])}</div>
      <div class="space">
        <div
          tabindex="1"
          class="params"
          style="--z-plus:${t?-2:-1};--fill-plus:${t?"#6999f655":"var(--cover-color, #fff)"}; --rotate-plus:${t?`rotate(${180*(s-o)/s}deg)`:"rotate(0deg)"};--z-minus: ${t?-1:-2}; --fill-minus:${t?"var(--cover-color, #fff)":"#ff8b8b55"}; --rotate-minus:${t?"rotate(0deg)":`rotate(${-180*(s-o)/s}deg)`};"
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
          <input type="number" .value=${this.duration} min="1" max="${this.maxdur}" @input=${e=>this.duration=e.target.valueAsNumber||this.duration} title="duration in ms of one circle spin"><sup>ms</sup>
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
            @input="${e=>this.frames=parseInt(e.target.value,10)||this.frames}"
          ><sup>fr</sup>
        </div>
    </div>
</div>
    `}static styles=z`
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
}`}d([p({type:Number})],u.prototype,"clockwise",void 0),d([p({type:Number})],u.prototype,"frames",void 0),d([p({type:Number})],u.prototype,"duration",void 0),d([p({type:Number})],u.prototype,"max",void 0),d([p({type:Boolean,attribute:"with-duration"})],u.prototype,"withDuration",void 0),d([p({type:String})],u.prototype,"src",void 0),d([p({type:ArrayBuffer})],u.prototype,"data",void 0),d([p({type:String})],u.prototype,"name",void 0),d([p()],u.prototype,"current",void 0),d([x()],u.prototype,"state",void 0),d([x()],u.prototype,"maxdur",void 0),u=d([_("spin-space")],u);export{u as SpinSpace};
