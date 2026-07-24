const based = "/flippize/nasa/daily/";
const prefix = "."; //"../../src";
let cacheOne: string[] = [];

const cached365: { [date: string]: string } = {};
const datexp = /^(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
const feb = /^023/;
export async function daily(date: string, force = false) {
  if (date === "today") {
    const now = new Date();
    date = `${`0${now.getMonth() + 1}`.slice(-2)}${
      `0${now.getDate()}`.slice(-2)
    }`;
  }
  if (!datexp.test(date) || feb.test(date)) {
    return Response.redirect(`https://mindon.dev${based}`, 302);
  }
  const km = date.substring(0, 2);
  const kd = date.substring(2);
  const latest = cachedDay[km]?.[kd];
  let flips = cached365[date];
  const headers = {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  };
  if (cacheOne.length == 0) {
    cacheOne = await (async (src) => {
      const c = await Deno.readTextFile(src);
      const tag = "[ONEDAY]";
      const i = c.indexOf(tag);
      return [c.substring(0, i), c.substring(i + tag.length)];
    })(`${prefix}${based}one.html`);
  }
  if (flips && !force) {
    return new Response(
      [cacheOne[0], !latest ? flips : `${latest}\n${flips}`, cacheOne[1]].join(
        "",
      ),
      headers,
    );
  }

  const mtag = `<serie name="${km}"`;
  const serieEnd = "</serie>";
  const dtag = `<flip key="${kd}"`;
  const small = `<small>${kd}/`;
  const flipBegin = "<flip ";
  const flipEnd = "</flip>";
  const doy: [number, string][] = [];
  for await (const dirEntry of Deno.readDir(`${prefix}${based}`)) {
    if (!dirEntry.isDirectory) continue;
    try {
      const year: string = dirEntry.name;
      const body = await Deno.readTextFile(
        `${prefix}${based}${dirEntry.name}/index.html`,
      );
      let i = body.indexOf(mtag);
      if (i < 0) {
        // console.log(year, date);
        continue;
      }
      i += mtag.length;
      let j = body.indexOf(serieEnd, i);
      const monthSerie = body.substring(i, j);
      i = monthSerie.indexOf(dtag);
      // console.log(j, i, dtag, monthSerie, year);
      if (i < 0) {
        i = monthSerie.indexOf(small);
        if (i < 0) {
          // console.log(year, date);
          continue;
        }
        i = monthSerie.lastIndexOf(flipBegin, i);
        if (i < 0) {
          // console.log(year, date);
          continue;
        }
      }
      j = monthSerie.indexOf(flipEnd, i);
      if (j < 0) {
        // console.log(year, date);
        continue;
      }
      j += flipEnd.length;
      const flip = monthSerie.substring(i, j);
      // console.log(flip, year);
      // console.assert(flip.match(/\/flip/g)?.length === 1, flip.match(/\/flip/g)?.length);
      doy.push([
        parseInt(year, 10),
        flip.replace(/<flip (key=\"\d+\")?/, `<flip key="${year}"`),
      ]);
    } catch (err) {
      // console.log(err);
      continue;
    }
  }
  doy.sort((a, b) => +(a[0] < b[0]) + (-(a[0] > b[0])));
  flips = doy.map((d) => d[1]).join("\n");
  cached365[date] = flips;
  return new Response(
    [cacheOne[0], !latest ? flips : `${latest}\n${flips}`, cacheOne[1]].join(
      "",
    ),
    headers,
  );
}

// console.log(await daily("0101"));

const cachedDay: { [m: string]: { [d: string]: string } } = {};
export async function follow(date: string) {
  const empty = new Response("{}");
  if (!/^\d{4}([0][1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/.test(date)) {
    return empty;
  }
  const now = new Date();
  const y = parseInt(date.substring(0, 4), 10);
  const nasa = new Date(
    now.getTime() + (now.getTimezoneOffset() - 5 * 60) * 60 * 1000,
  );
  if (y !== nasa.getFullYear()) return empty;
  const month = parseInt(date.substring(4, 6), 10);
  let m = nasa.getMonth() + 1;
  if (m < month) return empty;
  const the = parseInt(date.substring(6), 10);
  let d = nasa.getDate();
  if (month === m && the >= d) return empty;
  const series: { [key: string]: string[] } = {};
  const step = 24 * 3600 * 1000;
  while (m > month || (m === month && d > the)) {
    const km = `0${m}`.slice(-2);
    const kd = `0${d}`.slice(-2);
    if (!series[km]) series[km] = [];
    let flip = cachedDay[km]?.[kd];
    if (!flip) {
      const my = `/${km}, ${y}`;
      const line = `../ap${date.substring(2, 4)}${km}${kd}.html`;
      flip = await day(line, my) || "";
      if (flip) {
        if (!cachedDay[km]) cachedDay[km] = {};
        cachedDay[km][kd] = flip;
      }
    }
    series[km].unshift(flip);
    nasa.setTime(nasa.getTime() - step);
    m = nasa.getMonth() + 1;
    const nd = nasa.getDate();
    if (nd === d) break; // if anything wrong
    d = nd;
  }
  return new Response(JSON.stringify(series));
}

// -----
const kex = /\d+/;
const startTag = "</h1>";
const stopTag = "<b> Explanation: </b>";
const ifrx =
  /<iframe[^>]*\s+src=['"]([^"']+)['"]|<param\s+name="movie"\s+value="([^"]+)"|<param\s+name=["']fileName["']\s+value="([^"]+)"/;
const aimg = /<a href="([^"]+)"[^>]*>\s*<IMG\s+SRC="([^"]+)"/;
const imgx = /<img[^>]*\s+src="([^"]+)"[^>]*>/i;
const videox = /<video[^>]+>\s*<source src="([^"]+)"/i;
const clean = /<\/?\w+([^>]+)?>|[\r\n]+|^\s+|\s+$/g;
const clueB = /<b>/i;
const clueP = /<p>|<\/td>/i;
const clueBR = /<\/?br\/?>/i;

const headers = {
  "Connection": "keep-alive",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
};

export async function day(src: string, my: string) {
  const key = src.match(kex)?.[0];
  if (!key) return;
  const uri = src.substring(src.indexOf("/") + 1);
  const url = `https://apod.nasa.gov/apod/${uri}`;
  const resp = await fetch(url, { headers });
  if (resp.status === 404) return;
  const body = await resp.text();
  let i = body.indexOf(startTag);
  if (i < 0) return;
  i += startTag.length;
  let raw = body.substring(i);
  i = raw.indexOf(stopTag);
  if (i < 0) return;
  raw = raw.substring(0, i);
  let [imgsrc, downsrc, mediasrd, topic, credit] = ["", "", "", "", ""];

  let j = raw.search(ifrx);
  if (j > -1) {
    raw = raw.substring(j);
    const m = raw.match(ifrx);
    if (m) {
      mediasrd = m[1] || m[2] || m[3] || "";
      raw = raw.substring(m[0].length);
    }
  } else {
    j = raw.search(aimg);
    if (j > -1) {
      raw = raw.substring(j);
      const m = raw.match(aimg);
      if (m) {
        imgsrc = `/${m[2]}`;
        if (m[2] != "#" && m[2] !== m[1]) {
          downsrc = `/${m[1]}`;
        }
        raw = raw.substring(m[0].length);
      }
    }
  }
  if (!mediasrd && !imgsrc) {
    const mx = raw.match(imgx);
    if (mx) {
      imgsrc = `/${mx[1]}`;
    } else {
      const mv = raw.match(videox);
      if (mv) {
        mediasrd = `https://apod.nasa.gov/apod/${mv[1]}`;
      } else {
        console.log(raw, videox);
        console.warn(key, "no img or media");
        return;
      }
    }
  }

  j = raw.search(clueB);
  if (j > -1) {
    raw = raw.substring(j);
    j = raw.search(clueP);
    if (j > -1) {
      raw = raw.substring(0, j);
      j = raw.search(clueBR);
      if (j > -1) {
        topic = raw.substring(0, j).replace(clean, "");
        credit = raw.substring(j).replace(clean, "");
      } else {
        topic = raw.replace(clean, "");
      }
    } else {
      console.warn(raw, "<p>");
    }
  } else {
    console.warn(raw, "<b>");
  }
  if (!topic) {
    console.warn(key, raw);
  }

  return `<flip key="${key.slice(-2)}" ${
    imgsrc ? `data-src="${imgsrc}"` : ""
  } ${mediasrd ? ' class="o[orange]"' : ""}>${
    mediasrd ? `<a href="${mediasrd}" target="_nasa">MEDIA ▶</a>` : ""
  }<div class="subject[lt]"><small>${
    key.slice(-2)
  }${my}</small></div><div class="subject[rb]">${topic}
  <small>${credit} <a href="/${uri}" target="_nasa">➜</a>${
    downsrc ? `<a href="${downsrc}" target="_nasa">↯</a>` : ""
  }</small></div>${imgsrc ? '<a class="v"></a>' : ""}</flip>`;
}
