((e)=>{let t=new URL(e.src).searchParams,n=function(r,i){let c=document.createElement(r);return Object.keys(i).map((m)=>c[m]=i[m]),c},s=[n("script",{type:"importmap",textContent:`{
  "imports": {
      "@lit/reactive-element/": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.1.2/"${t.has("three")?`,"three": "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.min.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/",
      "three/fonts/": "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/fonts/"`:""}${t.has("qr")?',"qrcode-generator": "https://cdn.jsdelivr.net/npm/qrcode-generator@2.0.4/+esm"':""}}
}`})];if(t.has("d3"))s.push(n("script",{src:"https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js",crossOrigin:"anonymous"}));if(t.has("bootstrap"))s.push(n("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css",integrity:"sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB",crossOrigin:"anonymous"}));let a=document.querySelector("head");s.map((r)=>document.write(r.outerHTML)),e&&setTimeout(()=>e.parentElement?.removeChild(e))})(document.currentScript);
