// sp2/portfolio.ts
function q$(selector, call) {
  const dom = (call instanceof HTMLElement ? call : document).querySelector(selector);
  call instanceof Function && dom && call(dom);
  return dom;
}
function q$$(selector, call) {
  return [].slice.call(document.querySelectorAll(selector)).map((dom) => {
    call && call(dom);
    return dom;
  });
}
function jsload(src, ismodule = true) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "module";
    script.onload = () => {
      resolve();
    };
    script.onerror = (err) => {
      reject(err);
    };
    script.src = src;
    document.body.appendChild(script);
  });
}
var q = new URLSearchParams(location.search);
var preset = q.get("portfolio") ?? "";
if (/^[\w.$-]+$/.test(preset)) {
  let n = (parseInt(q.get("o") ?? "0", 10) || 1) - 1;
  try {
    await fetch(`./portfolio/${preset}.json`).then((resp) => resp.json()).then((portfolio) => {
      const todo = () => {
        const myfolio = q$("#myfolio");
        const p = myfolio?.parentElement;
        if (!p || !p?.classList.contains("folio"))
          throw new Error("invalid folio");
        const doc = document;
        const { subject, data } = portfolio || {};
        if (!data || data.length == 0)
          throw new Error("invalid portfolio");
        const nmax = data.length - 1;
        if (doc.is_ready)
          return;
        doc.is_ready = true;
        const render = window[preset] || ((d, dom) => {
          q$("a.prev", p)?.classList.toggle("disabled", n <= 0);
          q$("a.next", p)?.classList.toggle("disabled", n >= nmax);
          const { src, desc, author, date } = d;
          let s = location.search.replace(/([&?])o=\d+/g, "$1").replace(/\?&/, "?").replace(/([&?])(portfolio=)/, `$1o=${n + 1}&$2`);
          history.replaceState(document.title, "", s + "#");
          dom.innerHTML = `<h3 class="desc">${desc || subject} (${n + 1}/${nmax + 1})</h3>${author ? `<div class="author">${date ? `<div style="float:right;color:gray;margin-left:1rem">${date}</div>` : ""}${author}</div>` : ""}`;
          const myspin = q$("spin-space");
          if (myspin.srcChange)
            myspin.srcChange(`./portfolio/${src}`);
          else
            myspin.innerHTML = `<img class="cover" src="./portfolio/${src}" />`;
        });
        document.title = `${subject} - 零末之翎 LInk❛M〇re`;
        q$("a.prev", p)?.addEventListener("click", (evt) => {
          if (n > 0)
            n -= 1;
          render(data[n], myfolio);
        });
        q$("a.next", p)?.addEventListener("click", (evt) => {
          if (n < nmax)
            n += 1;
          render(data[n], myfolio);
        });
        let qrready = false;
        myfolio.addEventListener("click", async (evt) => {
          if (!qrready) {
            await jsload("/lib/atm-qr-6rgnf01f.js");
            qrready = true;
          }
          const myqr = q$("#myqr atm-qr");
          myqr?.setAttribute("data", location.href);
          myqr?.setAttribute("logo", `https://mindon.dev/atm/link-more.svg`);
          q$("#myqr")?.showPopover(evt.target);
        });
        document.documentElement.classList.add("portfolio");
        render(data[n], myfolio);
      };
      if (/interactive|complete/.test(document.readyState)) {
        todo();
      } else {
        document.addEventListener("DOMContentLoaded", todo);
      }
    });
  } catch (err) {
    history.replaceState(document.title, "", location.search.replace(/(o=\d+&)?portfolio=[^&#]+/, ""));
    window.portfolioErr = err;
    window.dispatchEvent(new CustomEvent("portfolio-error"));
    console.error(err);
  }
}
var win = globalThis;
win.q$ = q$;
win.q$$ = q$$;
win.jsload = jsload;
export {
  q$$,
  q$,
  jsload
};
