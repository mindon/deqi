const _DONE = '[DONE]';
const dots = '❞';

// for openai playground
async function chat(cl, cb, streaming = false) {
  const resp = await fetch(`/chat${streaming ? '?stream' : ''}`, {method: 'POST', mode: 'cors',
    headers: [["Content-Type", "application/json"]], body: JSON.stringify(cl)});

  if (!streaming) {
    const d = await resp.json();
    cb(d && d.choices && d.choices.length > 0 && d.choices[0].content, true);
    return;
  }

  const reader = resp.body.pipeThrough(new TextDecoderStream()).getReader();
  while (true) {
    const {value, done} = await reader.read();
    if (done) break;
    let fin = false;
    cb(value.split('data: ').map(v => {
      if (!v?.startsWith('{')) {
        fin = v.trim() == _DONE;
        return fin ? '' : v;
      }
      return JSON.parse(v.trim());
    }).map(v => !v ? '' : typeof v === 'string' ? v : v.choices[0].delta.content || '').join(''), fin);
  }
}

import { css, html, LitElement } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class QiChat extends LitElement {
  static properties = {
    notes: {type: Array},
    streaming: {type: Boolean},
    _waitting: {type: String},
  };
  static styles = css`
:host {
  display: block;
  font-size: 1rem;
  padding-top: .5rem;
  padding-bottom: 2rem;
}
:host(.fin) .next {
  display: none;
}
#dots {clear:both; text-align:center; color:#d63;-webkit-animation: loading 1s 32; animation: loading 1s 32}
#dots a {color:inherit;text-decoration:none}
@-webkit-keyframes loading { 50% {color:#333} }
@keyframes loading { 50% {color:#333} }

.user,
.assistant,
.next {
  background: #fff;
  padding: 1rem;
  border-radius: 0.375rem;
  position: relative;
}

.user {
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  margin-bottom: .5rem;
  text-align: right;
  padding-right: 3.2rem;
}
.user::after {
  width: 20px;
  height: 20px;
  content: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22%23174ea6%22%20class%3D%22bi%20bi-chat-right-text-fill%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M16%202a2%202%200%200%200-2-2H2a2%202%200%200%200-2%202v8a2%202%200%200%200%202%202h9.586a1%201%200%200%201%20.707.293l2.853%202.853a.5.5%200%200%200%20.854-.353V2zM3.5%203h9a.5.5%200%200%201%200%201h-9a.5.5%200%200%201%200-1zm0%202.5h9a.5.5%200%200%201%200%201h-9a.5.5%200%200%201%200-1zm0%202.5h5a.5.5%200%200%201%200%201h-5a.5.5%200%200%201%200-1z%22/%3E%0A%3C/svg%3E);
  position: absolute;
  right: 1rem;
  top: 1.2em;
  z-index: 0;
}
.assistant {
  box-shadow: 0 .5rem .5rem rgba(0,0,0,.15);
  background: #d1ecff;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
}
.user > p,
.assistant > p {
  text-indent: 2.4rem;
  margin: 0;
  padding: 0;
  unicode-bidi: embed;
  white-space: pre-wrap;       /* css-3 */
 white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
 white-space: -pre-wrap;      /* Opera 4-6 */
 white-space: -o-pre-wrap;    /* Opera 7 */
 word-wrap: break-word;       /* Internet Explorer 5.5+ */
  max-width: 100%;
}
.user > p {
  text-index: 0rem;
}

.assistant::before {
  width: 24px;
  height: 24px;
  content: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22%23f66%22%20viewBox%3D%220%200%2032%2032%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22m29.7%2013.1c.4-1.1.5-2.2.4-3.3s-.5-2.2-1-3.2c-.9-1.5-2.2-2.7-3.7-3.4-1.6-.7-3.3-.9-5-.5-.8-.8-1.7-1.5-2.7-2s-2.2-.7-3.3-.7c-1.7%200-3.4.5-4.8%201.5s-2.4%202.4-2.9%204c-1.2.3-2.2.8-3.2%201.4-.9.7-1.6%201.6-2.2%202.5-.9%201.5-1.2%203.2-1%204.9s.9%203.3%202%204.6c-.4%201.1-.5%202.2-.4%203.3s.5%202.2%201%203.2c.9%201.5%202.2%202.7%203.7%203.4%201.6.7%203.3.9%205%20.5.8.8%201.7%201.5%202.7%202s2.2.7%203.3.7c1.7%200%203.4-.5%204.8-1.5s2.4-2.4%202.9-4c1.1-.2%202.2-.7%203.1-1.4s1.7-1.5%202.2-2.5c.9-1.5%201.2-3.2%201-4.9s-.8-3.3-1.9-4.6zm-12%2016.8c-1.6%200-2.8-.5-3.9-1.4%200%200%20.1-.1.2-.1l6.4-3.7c.2-.1.3-.2.4-.4s.1-.3.1-.5v-9l2.7%201.6v7.4c.1%203.5-2.7%206.1-5.9%206.1zm-12.9-5.5c-.7-1.2-1-2.6-.7-4%200%200%20.1.1.2.1l6.4%203.7c.2.1.3.1.5.1s.4%200%20.5-.1l7.8-4.5v3.1l-6.5%203.8c-1.4.8-3%201-4.5.6-1.6-.4-2.9-1.4-3.7-2.8zm-1.7-13.9c.7-1.2%201.8-2.1%203.1-2.6v.2%207.4c0%20.2%200%20.4.1.5.1.2.2.3.4.4l7.8%204.5-2.7%201.6-6.4-3.7c-1.4-.8-2.4-2.1-2.8-3.6s-.3-3.3.5-4.7zm22.1%205.1-7.8-4.5%202.7-1.6%206.4%203.7c1%20.6%201.8%201.4%202.3%202.4s.8%202.1.7%203.3c-.1%201.1-.5%202.2-1.2%203.1s-1.6%201.6-2.7%202v-7.6c0-.2%200-.4-.1-.5%200%200-.1-.2-.3-.3zm2.7-4s-.1-.1-.2-.1l-6.4-3.7c-.2-.1-.3-.1-.5-.1s-.4%200-.5.1l-7.8%204.5v-3.1l6.5-3.8c1-.6%202.1-.8%203.3-.8%201.1%200%202.2.4%203.2%201.1.9.7%201.7%201.6%202.1%202.6s.5%202.2.3%203.3zm-16.8%205.6-2.7-1.6v-7.5c0-1.1.3-2.3.9-3.2.6-1%201.5-1.7%202.5-2.2s2.2-.7%203.3-.5c1.1.1%202.2.6%203.1%201.3%200%200-.1.1-.2.1l-6.4%203.7c-.2.1-.3.2-.4.4s-.1.3-.1.5zm1.4-3.2%203.5-2%203.5%202v4l-3.5%202-3.5-2z%22/%3E%0A%20%20%3C/svg%3E);
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 0;
}
.assistant a.btn {
  display: none;
}
.assistant:hover a.btn {
  display: inline-flex;
}
.next {
  padding: 0;
  display: flex;
  box-shadow: 0 .5rem .5rem rgba(0,0,0,.15);
}
.next input {
  flex: 1;
  padding: .5rem 1rem;
  font-size: 1.4rem;
  line-height: 1.2em;
  outline: none;
  text-align: center;
}
.copix {
  padding: 1rem!important;
  width: 32px;
  height: 32px;
  position: absolute!important;
  right: 1rem;
  bottom: 1rem;
  z-index: 1;
  opacity: .8;
}
.copix::before {
  width: 16px;
  height: 16px;
  content: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%23933%22%20class%3D%22bi%20bi-clipboard-pulse%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M10%201.5a.5.5%200%200%200-.5-.5h-3a.5.5%200%200%200-.5.5v1a.5.5%200%200%200%20.5.5h3a.5.5%200%200%200%20.5-.5v-1Zm-5%200A1.5%201.5%200%200%201%206.5%200h3A1.5%201.5%200%200%201%2011%201.5v1A1.5%201.5%200%200%201%209.5%204h-3A1.5%201.5%200%200%201%205%202.5v-1Zm-2%200h1v1H3a1%201%200%200%200-1%201V14a1%201%200%200%200%201%201h10a1%201%200%200%200%201-1V3.5a1%201%200%200%200-1-1h-1v-1h1a2%202%200%200%201%202%202V14a2%202%200%200%201-2%202H3a2%202%200%200%201-2-2V3.5a2%202%200%200%201%202-2Zm6.979%203.856a.5.5%200%200%200-.968.04L7.92%2010.49l-.94-3.135a.5.5%200%200%200-.895-.133L4.232%2010H3.5a.5.5%200%200%200%200%201h1a.5.5%200%200%200%20.416-.223l1.41-2.115%201.195%203.982a.5.5%200%200%200%20.968-.04L9.58%207.51l.94%203.135A.5.5%200%200%200%2011%2011h1.5a.5.5%200%200%200%200-1h-1.128L9.979%205.356Z%22/%3E%0A%3C/svg%3E);
}

.continue {
  width: 32px;
  height: 32px;
  position: absolute!important;
  right: 4.5rem;
  bottom: 1rem;
  z-index: 1;
}

.btn {
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 1rem;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: .25rem 1rem;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
  --a: rgba(60, 64, 67, .3);
  --b: rgba(60, 64, 67, .15);
}

.btn:hover { background: #F6F9FE; color: #174ea6;}
.btn:active { box-shadow: 0 4px 4px 0 var(--a), 0 8px 12px 6px var(--b); outline: none;}
.btn:focus { outline: none; border: 2px solid #4285f4;}
.btn:not(:disabled) { box-shadow: var(--a) 0 1px 3px 0, var(--b) 0 4px 8px 3px;}
.btn:not(:disabled):hover { box-shadow: var(--a) 0 2px 3px 0, var(--b) 0 6px 10px 4px;}
.btn:not(:disabled):focus { box-shadow: var(--a) 0 1px 3px 0, var(--b) 0 4px 8px 3px;}
.btn:not(:disabled):active { box-shadow: var(--a) 0 4px 4px 0, var(--b) 0 8px 12px 6px;}
.btn:disabled { box-shadow: var(--a) 0 1px 3px 0, var(--b) 0 4px 8px 3px;pointer-events:none;cursor:default}


.next .btn { box-shadow: none; background: #0055ff; color: #fff;}
.next .btn[disabled] {background: #ccc!important;pointer-events:none}
.rl { border: thin solid #0055ff;border-radius: .25rem 0 0 .25rem; border-right-width: 0}
.r0 { border: thin solid #0055ff; border-radius: 0; border-width: thin 0; background: #666!important}
.rr { border: thin solid #0055ff;border-radius: 0 .25rem .25rem 0; border-left-width: 0}
`;

  ask(something) {
    const {notes = [], streaming} = this;
    notes.push({role: 'user', content: something});
    this.notes = notes.slice(0);
    this._waitting = dots;

    chat(notes, (c, fin) => {
      if (!streaming) {
        this._waitting = '';
        notes.push({role: 'assistant', content: c});
        this.notes = notes.slice(0);
        return;
      }
      if (fin || !c) {
        notes.push({role: 'assistant', content: this._waitting});
        this.notes = notes;
        this._waitting = '';
        document.dispatchEvent(new CustomEvent('qi-changed', {}));
        return;
      }
      if (this._waitting == dots) {
        this._waitting = c;
      } else {
        this._waitting += c;
      }
    }, streaming);
  }

  next() {
    const {renderRoot} = this;
    const mysay = q$('#mysay', renderRoot);
    if (/^\s*$/.test(mysay.value)) {
      mysay.focus();
      return;
    }
    this.ask(mysay.value.trim());
    this.input('');
  }

  input(c) {
    const {renderRoot} = this;
    const mysay = q$('#mysay', renderRoot);
    if (c || typeof c === 'string') mysay.value = c.trim();
    setTimeout(() => {
      q$('#mysay', renderRoot).focus();
    }, 300);
  }

  focus() {
    const {renderRoot} = this;
    if (renderRoot.host.classList.contains('fin')) {
      const p = this.renderRoot.host.parentNode;
      q$$('qi-chat', p, (t) => {
        const cl = t.classList;
        if (cl.contains('fin')) return;
        cl.add('fin');
      });
      renderRoot.host.classList.remove('fin');
    }
    this.input();
  }

  _enter(evt) {
    if (evt.key == 'Enter') {
      this.next();
    }
  }

  render() {
    const {notes = [], _waitting} = this;
    const imax = notes.length;
    return html`${
      imax > 0 
      ? notes.map((note, i) => {
      const {role, content} = note;
      return html`<div class="${role}"><p>${content}</p>${role == 'assistant'
      ? html`${
        i == imax -1
        ? html`<a class="btn continue" title="继续 " @click=${() => this.focus()}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-quote-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/>
</svg>
          </a>`
        :''}<a class="btn copix" title="拷贝" @click=${() => {
            copix(content);
          }}></a>`
      : ''}</div>`;
    })
      : ''}${
      _waitting
      ? html`<div class="assistant">${
        _waitting === dots
        ? html`<div id="dots">${_waitting}</div>`
        : html`<p>${_waitting }</p>`
      }</div>`
      : ''
    }<div class="next">
      <input autofocus id="mysay" class="rl" type="text" @keypress=${this._enter}>
      <a class="btn rr" ?disabled=${_waitting ? true: false} role="button" @click=${this.new}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg>
      </a>
    </div>`;
  }
}
customElements.define('qi-chat', QiChat);

function q$(id, doc, clickFn) {
  if (doc instanceof Function) {
    clickFn = doc;
    doc = document;
  }
  const t = (doc||document).querySelector(id);
  if (clickFn && t) {
    t.addEventListener('click', clickFn);
  }
  return t;
}
window.q$ = q$;

function q$$(id, doc, cb) {
  if (doc instanceof Function) {
    cb = doc;
    doc = document;
  }
  const l = (doc||document).querySelectorAll(id);
  if (cb)  [].slice.apply(l).forEach(cb);
  return l;
}
window.q$$ = q$$;

function fallback(msg, cb) {
  let t;
  let text = msg;
  const aid = !text.tagName;
  if (aid) {
    t = document.createElement("textarea");
    t.value = text;
    t.readOnly = true;
    t.style.top = "-200px";
    t.style.left = "0";
    t.style.height = "100px";
    t.style.width = "100px";
    t.style.position = "fixed";

    document.body.appendChild(t);
  } else {
    t = text;
    text = t.value;
  }
  t.setSelectionRange(0, Number.MAX_VALUE);
  t.select();

  setTimeout(() => {
    t.focus();
    try {
      const ret = document.execCommand("copy");
      if (cb) cb(ret);
    } catch (err) {
      if (cb) cb(false, err);
    }

    if (aid) {
      document.body.removeChild(t);
    }
  }, 50);
}

function copix(msg, cb) {
  if (navigator.clipboard) {
    navigator.permissions.query({name: "clipboard-write"}).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        navigator.clipboard.writeText(msg.value || msg || "").then((d) => {
          if (cb) cb(d);
        }).catch(() => fallback(msg, cb));
      }
    });
    return;
  }
  fallback(msg, cb);
}
window.copix = copix;

// -----
document.addEventListener('qi-changed', () => {
  const data = [];
  q$$('qi-chat', (q) => {
    if (q.notes && q.notes.length >0) {
      data.push(q.notes);
    }
  });
  if (data.length > 0) {
    localStorage.setItem('ai', JSON.stringify(data));
  }
});

const raw = localStorage.getItem('ai');
if (raw) {
  try {
    const data = JSON.parse(raw);
    if (data && data.length > 0) {
      const qi = q$('qi-chat');
      data.forEach(d  => {
        const c = document.createElement('qi-chat');
        c.className = 'fin';
        c.notes = d;
        c.streaming = true;
        qi.parentElement.insertBefore(c, qi);
      });
    }
  } catch(err) {
    console.error(err);
  }
}

q$('#newchat').addEventListener('click', (evt) => {
  const qi = q$$('qi-chat');
  let last = qi[qi.length -1];
  if (!last || (last.notes && last.notes.length > 0)) {
    const c = document.createElement('qi-chat');
    c.streaming = true;
    evt.parentElement.insertBefore(c, evt.target);
    last = c;
  }
  last.focus();
});

function todo() {
  alert('TODO');
}
q$('#mykey').onclick = todo;
q$('#myimport').onclick = todo;
q$('#myexport').onclick = todo;

