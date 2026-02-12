var J=function(A,q,F,D){var B=arguments.length,G=B<3?q:D===null?D=Object.getOwnPropertyDescriptor(q,F):D,H;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")G=Reflect.decorate(A,q,F,D);else for(var I=A.length-1;I>=0;I--)if(H=A[I])G=(B<3?H(G):B>3?H(q,F,G):H(q,F))||G;return B>3&&G&&Object.defineProperty(q,F,G),G};import{css as Z,html as K,LitElement as $}from"https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";import{customElement as g,property as N,state as O}from"https://cdn.jsdelivr.net/npm/lit@3.3.1/decorators/+esm";var z="➊➋➌➍➎➏➐➑➒",U=/^https?:\/\//i,Y=(A,q="",F="")=>K`<a title="${F}"
          class="${q}" style="${q?"":"margin-top:.5rem"}"
          href="mailto:mindon@live.com?subject=%E7%94%B3%E8%AB%8B%E5%8A%A0%E5%85%A5 Join%20Lucky%20Charm%20of%20%E2%9D%9D%E6%97%8B%E5%9C%88SP%C2%B2&body=%E8%AB%8B%E7%A2%BA%E8%AA%8D%E5%8F%AF%E4%BB%A5%E5%85%AC%E9%96%8B%E4%B8%A6%E6%8F%90%E4%BE%9B%E6%94%B6%E6%AC%BE%E9%80%94%E5%BE%91%EF%BC%9A%0A%E6%8E%A5%E5%8F%97%E6%94%B6%E6%AC%BE%E7%9A%84%E4%BA%8C%E7%B6%AD%E7%A2%BC%20QR%20Code%20to%20receive%20money%20%0A%E6%88%96%E8%80%85%E6%94%B6%E6%AC%BE%E9%80%A3%E6%8E%A5%20or%20Link%20to%20receive%20money%0A%E6%88%96%E5%85%B6%E4%BB%96%E6%94%B6%E6%AC%BE%E6%96%B9%E5%BC%8F%20or%20Other%20way%20to%20receive%20money">${A}</a>`;function L(A,q,F,D){let{src:B,way:G}=A,H=[null,null];if(B instanceof Array){if(B.length==0)return{};if(G=="cc"){if(q>0)H[0]=K`<a @click=${D} data-v="-1" class="prev">➜</a>`;if(q<B.length-1)H[1]=K`<a @click=${D} data-v="1" class="next">➜</a>`}else if(G=="lucky"){if(q>=B.length)q=B.length-1;if(q>0)H[0]=Y("+","prev","加入 Join Lukcy Charm of ❝旋圈SP²");if(B.length>0)H[1]=K`<a @click=${D} data-v="rand" class="next" title="刷新下一位幸運者
Refresh to next lucky charm">↺</a>`}F=`${F}${G}/`,A=B[q]}let{src:I,way:S,desc:M}=A;if(typeof I=="object")return{pxn:H,payment:A,dom:I};if(I instanceof Function)return{pxn:H,payment:A,dom:I(F)};let Q=U.test(I);if(/\.(png|gif|jpg|jpeg|webp|avif|svg)$/i.test(I))return{pxn:H,payment:A,dom:K`<pre class="memo">${M}</pre>
      <img src="${Q?"":F}${I}" title="${M}" alt="${M}" />
    `};if(Q)return{pxn:H,payment:A,dom:K`
      <a href="${I}" target="_${S||"donate"}">${M}</a>
    `};return{pxn:H,payment:A,dom:K`
    <div class="info"><pre>${I||M}</pre></div>
  `}}class V extends ${constructor(){super(...arguments);this.size=180;this.assets="./payments/";this.payments=[{way:"wechat",desc:"微信 WeChat",src:"mindon_wechat.png"},{way:"alipay",desc:"支付寶 Alipay",src:"mindon_alipay.png"},{way:"paypal",desc:"貝寶 PayPal",memo:"n × $0.99 to developer",src:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YSVEJMBLM3AFG"},{way:"cc",desc:"公益金 Comm-Chest",src:[]},{way:"lucky",desc:"幸運符 Lucky Charm",src:[{way:"join",src:K`
            <pre class="memo">隨機收錢人
幸運隨時降臨
Lucky Charm</pre>${Y("加入 JOIN +")}
      `}]},{way:"free",desc:"不想花錢 Enjoy Freely",src:(A)=>K`
          <pre class="memo">就是不想花錢
just don't want to pay</pre><p>
            <img src="${A}free.png" alt="Free" width="80" height="54" />
          </p>
        `}];this.current=0;this.idx=0;this.enabled=!1;this.countdown=0;this.selected=!1}_tid=null;firstUpdated(){let{assets:A,cc:q,lucky:F}=this;q&&fetch(U.test(q)?q:`${A}cc/${q}`).then((D)=>D.json()).then((D)=>{this.payments.map((B,G)=>{if(B.way=="cc")this.payments[G].src=D,this.requestUpdate()})}),F&&fetch(U.test(F)?F:`${A}lucky/${F}`).then((D)=>D.json()).then((D)=>{this.payments.map((B,G)=>{if(B.way=="lucky")this.payments[G].src.push(...D),this.requestUpdate()})})}updated(A){if(A.has("current")){let{current:q,payments:F}=this,{src:D}=F[q];if(D instanceof Array)this.idx=Math.floor(Math.random()*D.length)}}subnav(A){let{v:q="0"}=A.target.dataset,{current:F,payments:D}=this,{src:B}=D[F];if(q=="rand"){if(B instanceof Array)this.idx=Math.floor(Math.random()*B.length);return}if(this.idx+=parseInt(q,10),B instanceof Array){if(this.idx<0)this.idx=0;else if(this.idx>=B.length)this.idx=B.length-1}}wayChange(A){let{value:q}=A.target;this.current=parseInt(q,10);let{payments:F,current:D,_tid:B}=this;if(B)clearTimeout(B);this.selected=!0,this.enabled=!1,this.countdown=F[D]?.way=="free"?6:3;let G=()=>{if(this.countdown>1)this.countdown--,this._tid=setTimeout(G,1000);else this.countdown=0,this.enabled=!0};this._tid=setTimeout(G,1000)}reset(){let{_tid:A}=this;if(A)clearTimeout(A);if(this.selected=!1,this.enabled)this.enabled=!1;this.current=0;let q=this.renderRoot.querySelector('input[name="pay"]:checked');if(q)q.checked=!1}render(){let{size:A,current:q,idx:F,payments:D,assets:B,enabled:G,selected:H,countdown:I}=this,{pxn:S,payment:M,dom:Q}=L(D[q],F,B,(T)=>this.subnav(T));if(!M)return"...";return K`
      <div id="ways">
        <div class="way ${D[q].way}" style="--size: ${A}px">
          ${S}
          ${M.memo?K`
              <pre class="memo">${M.memo}</pre>
            `:""} ${Q}
        </div>
        <ul style="--ways-bg: url(${B}follow-my-heart.png) 10px 0px no-repeat">
          ${D.map(({desc:T},X)=>K`
              <li>
                <label>${T} <input
                 ?checked=${H&&X==q}
                  type="radio"
                  name="pay"
                  value="${X}"
                  @click="${this.wayChange}"
                ></label>
              </li>
            `)}
          <li><slot class=${G&&this.countdown==0?"":"disabled"} style="--countdown: '${z[I-1]||""}';"></slot></li>
        </ul>
      </div>
    `}static styles=Z`
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
  `}J([N()],V.prototype,"size",void 0),J([N()],V.prototype,"assets",void 0),J([N({attribute:"cc-data"})],V.prototype,"cc",void 0),J([N({attribute:"lucky-data"})],V.prototype,"lucky",void 0),J([N()],V.prototype,"payments",void 0),J([O()],V.prototype,"current",void 0),J([O()],V.prototype,"idx",void 0),J([O()],V.prototype,"enabled",void 0),J([O()],V.prototype,"countdown",void 0),J([O()],V.prototype,"selected",void 0),V=J([g("pay-ways")],V);export{V as PayWays};
