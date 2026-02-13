var M=function(F,A,G,H){var D=arguments.length,I=D<3?A:H===null?H=Object.getOwnPropertyDescriptor(A,G):H,K;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")I=Reflect.decorate(F,A,G,H);else for(var J=F.length-1;J>=0;J--)if(K=F[J])I=(D<3?K(I):D>3?K(A,G,I):K(A,G))||I;return D>3&&I&&Object.defineProperty(A,G,I),I};import{css as V,html as N,LitElement as j}from"https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";import{customElement as R,property as U,state as X}from"https://cdn.jsdelivr.net/npm/lit@3.3.1/decorators/+esm";var S=!1,k="➊➋➌➍➎➏➐➑➒",z=/^https?:\/\//i,E=(F,A="",G="")=>N`<a title="${G}"
          class="${A}" style="${A?"":"margin-top:.5rem"}"
          href="mailto:mindon@live.com?subject=%E7%94%B3%E8%AB%8B%E5%8A%A0%E5%85%A5 Join%20Lucky%20Charm%20of%20%E2%9D%9D%E6%97%8B%E5%9C%88SP%C2%B2&body=%E8%AB%8B%E7%A2%BA%E8%AA%8D%E5%8F%AF%E4%BB%A5%E5%85%AC%E9%96%8B%E4%B8%A6%E6%8F%90%E4%BE%9B%E6%94%B6%E6%AC%BE%E9%80%94%E5%BE%91%EF%BC%9A%0A%E6%8E%A5%E5%8F%97%E6%94%B6%E6%AC%BE%E7%9A%84%E4%BA%8C%E7%B6%AD%E7%A2%BC%20QR%20Code%20to%20receive%20money%20%0A%E6%88%96%E8%80%85%E6%94%B6%E6%AC%BE%E9%80%A3%E6%8E%A5%20or%20Link%20to%20receive%20money%0A%E6%88%96%E5%85%B6%E4%BB%96%E6%94%B6%E6%AC%BE%E6%96%B9%E5%BC%8F%20or%20Other%20way%20to%20receive%20money">${F}</a>`;function P(F,A,G,H){let{src:D,way:I}=F,K=[null,null];if(D instanceof Array){if(D.length==0)return{};if(I=="cc"){if(A>0)K[0]=N`<a @click=${H} data-v="-1" class="prev">➜</a>`;if(A<D.length-1)K[1]=N`<a @click=${H} data-v="1" class="next">➜</a>`}else if(I=="lucky"){if(A>=D.length)A=D.length-1;if(A>0)K[0]=E("+","prev","加入 Join Lukcy Charm of ❝旋圈SP²");if(D.length>0)K[1]=N`<a @click=${H} data-v="rand" class="next" title="刷新下一位幸運者
Refresh to next lucky charm">↺</a>`}G=`${G}${I}/`,F=D[A]}let{src:J,way:O,desc:Q}=F;if(typeof J=="object")return{pxn:K,payment:F,dom:J};if(J instanceof Function)return{pxn:K,payment:F,dom:J(G)};let Z=z.test(J);if(/\.(png|gif|jpg|jpeg|webp|avif|svg)$/i.test(J))return{pxn:K,payment:F,dom:N`<pre class="memo">${Q}</pre>
      <img src="${Z?"":G}${J}" title="${Q}" alt="${Q}" />
    `};if(Z)return{pxn:K,payment:F,dom:N`
      <a href="${J}" target="_${O||"donate"}">${Q}</a>
    `};return{pxn:K,payment:F,dom:N`
    <div class="info"><pre>${J||Q}</pre></div>
  `}}class L extends j{constructor(){super(...arguments);this.size=180;this.assets=import.meta.resolve("./payments/");this.payments=[{way:"wechat",desc:"微信 WeChat",src:"mindon_wechat.png"},{way:"alipay",desc:"支付寶 Alipay",src:"mindon_alipay.png"},{way:"paypal",desc:"貝寶 PayPal",memo:"n × $0.99 to developer",src:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YSVEJMBLM3AFG"},{way:"cc",desc:"公益金 Comm-Chest",src:[]},{way:"lucky",desc:"幸運符 Lucky Charm",src:[{way:"join",src:N`
            <pre class="memo">隨機收錢人
幸運隨時降臨
Lucky Charm</pre>${E("加入 JOIN +")}
      `}]},{way:"free",desc:"不想花錢 Enjoy Freely",src:(F)=>N`
          <pre class="memo">就是不想花錢
just don't want to pay</pre><p>
            <img src="${F}free.png" alt="Free" width="80" height="54" />
          </p>
        `}];this.current=0;this.idx=0;this.enabled=!1;this.countdown=0;this.selected=!1}_tid=null;firstUpdated(){let{assets:F,cc:A,lucky:G}=this;A&&fetch(z.test(A)?A:`${F}cc/${A}`).then((H)=>H.json()).then((H)=>{this.payments.map((D,I)=>{if(D.way=="cc")this.payments[I].src=H,this.requestUpdate()})}),G&&fetch(z.test(G)?G:`${F}lucky/${G}`).then((H)=>H.json()).then((H)=>{this.payments.map((D,I)=>{if(D.way=="lucky")this.payments[I].src.push(...H),this.requestUpdate()})})}updated(F){if(F.has("current")){let{current:A,payments:G}=this,{src:H}=G[A];if(H instanceof Array)this.idx=Math.floor(Math.random()*H.length)}}subnav(F){let{v:A="0"}=F.target.dataset,{current:G,payments:H}=this,{src:D}=H[G];if(A=="rand"){if(D instanceof Array)this.idx=Math.floor(Math.random()*D.length);return}if(this.idx+=parseInt(A,10),D instanceof Array){if(this.idx<0)this.idx=0;else if(this.idx>=D.length)this.idx=D.length-1}}wayChange(F){let{value:A}=F.target;this.current=parseInt(A,10);let{payments:G,current:H,_tid:D}=this;if(D)clearTimeout(D);this.selected=!0,this.enabled=!1,this.countdown=G[H]?.way=="free"?6:3;let I=()=>{if(this.countdown>1)this.countdown--,this._tid=setTimeout(I,1000);else this.countdown=0,this.enabled=!0};this._tid=setTimeout(I,1000)}reset(){let{_tid:F}=this;if(F)clearTimeout(F);if(this.selected=!1,this.enabled)this.enabled=!1;this.current=0;let A=this.renderRoot.querySelector('input[name="pay"]:checked');if(A)A.checked=!1}render(){let{size:F,current:A,idx:G,payments:H,assets:D,enabled:I,selected:K,countdown:J}=this,{pxn:O,payment:Q,dom:Z}=P(H[A],G,D,(g)=>this.subnav(g));if(!Q)return"...";return N`
      <div id="ways">
        <div class="way ${H[A].way}" style="--size: ${F}px">
          ${O}
          ${Q.memo?N`
              <pre class="memo">${Q.memo}</pre>
            `:""} ${Z}
        </div>
        <ul style="--ways-bg: url(${D}follow-my-heart.png) 10px 0px no-repeat">
          ${H.map(({desc:g},C)=>N`
              <li>
                <label>${g} <input
                 ?checked=${K&&C==A}
                  type="radio"
                  name="pay"
                  value="${C}"
                  @click="${this.wayChange}"
                ></label>
              </li>
            `)}
          <li><slot class=${`${S?"mov":"mp4"} ${I&&this.countdown==0?"":"disabled"}`} style="--countdown: '${k[J-1]||""}';"></slot></li>
        </ul>
      </div>
    `}listen(F,A,G=0){let{host:H}=this.renderRoot,D=[].slice.call(H.querySelectorAll(F));D.map((I)=>{I.addEventListener("click",async(K)=>{let J=K.target;if(D.map((O)=>O.disabled=!0),J.tid)clearTimeout(J.tid);if(G)J.tid=setTimeout(()=>D.map((O)=>O.disabled=!1),G);try{await A(J,()=>{if(J.tid)clearTimeout(J.tid);D.map((O)=>O.disabled=!1)},this.current!=5||/[&?]VIP/.test(location.search))}catch(O){if(J.tid)clearTimeout(J.tid);D.map((Q)=>Q.disabled=!1),console.error(O),alert("download video error")}})})}static styles=V`
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
  `}M([U()],L.prototype,"size",void 0),M([U()],L.prototype,"assets",void 0),M([U({attribute:"cc-data"})],L.prototype,"cc",void 0),M([U({attribute:"lucky-data"})],L.prototype,"lucky",void 0),M([U()],L.prototype,"payments",void 0),M([X()],L.prototype,"current",void 0),M([X()],L.prototype,"idx",void 0),M([X()],L.prototype,"enabled",void 0),M([X()],L.prototype,"countdown",void 0),M([X()],L.prototype,"selected",void 0),L=M([R("pay-ways")],L);var T=(F,A=document)=>A.querySelector(F),Y=T("button.donate");if(Y){let{dataset:F}=Y,A=document.createElement("link");A.rel="stylesheet",A.href=import.meta.resolve("./donate-pay.css"),T("head").appendChild(A);let G=document.createElement("dialog");G.id="mypay",G.closedby="any",G.innerHTML=`<a class="off">×</a><pay-ways cc-data="${F.cc??"cc.json?20250825"}" lucky-data="lucky.json?20250825" style="--slot-direction: row">
      <button class="download" data-as="webm" style="width:35%;height:3rem;">
          <small>.WebM</small>
      </button>
      <button class="download" data-as="mp4" style="width:65%;height:3rem;margin-left:2px">
          <div>下載動畫<br/><small>.MP4</small></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6"/>
          </svg>
      </button>
  </pay-ways>`,Y.addEventListener("click",()=>{let D=T("#mypay");T("pay-ways",D).reset(),D.showModal()}),T("a.off",G).onclick=()=>T("#mypay").close();let{body:H}=document;H.insertBefore(G,H.firstChild),T("pay-ways",G).listen("button",Y.todo??((D,I,K)=>{return Y.todo?.(D,I,K)}))}export{L as PayWays};
