const based = "/atm/nasa/daily/";
const cacheOne = await (async (src) => {
  const c = await Deno.readTextFile(src);
  const tag = "[ONEDAY]";
  const i = c.indexOf(tag);
  return [c.substring(0, i), c.substring(i + tag.length)];
})(`.${based}one.html`);

const cached365: { [date: string]: string } = {};
const datexp = /^(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
const feb = /^023/;
export async function daily(date: string, force = false) {
  if (!datexp.test(date) || feb.test(date)) {
    return Response.redirect(`https://mindon.dev${based}`, 302);
  }
  let flips = cached365[date];
  const headers = {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  };
  if (flips && !force) {
    return new Response([cacheOne[0], flips, cacheOne[1]].join(""), headers);
  }

  const mtag = `<serie name="${date.substring(0, 2)}"`;
  const serieEnd = "</serie>";
  const dtag = `<flip key="${date.substring(2)}"`;
  const small = `<small>${date.substring(2)}/`;
  const flipBegin = "<flip ";
  const flipEnd = "</flip>";
  const doy: string[][] = [];
  for await (const dirEntry of Deno.readDir(`.${based}`)) {
    if (!dirEntry.isDirectory) continue;
    try {
      const year = dirEntry.name;
      const body = await Deno.readTextFile(
        `.${based}${dirEntry.name}/index.html`,
      );
      let i = body.indexOf(mtag);
      if (i < 0) {
        console.log(year, date);
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
          console.log(year, date);
          continue;
        }
        i = monthSerie.lastIndexOf(flipBegin, i);
        if (i < 0) {
          console.log(year, date);
          continue;
        }
      }
      j = monthSerie.indexOf(flipEnd, i);
      if (j < 0) {
        console.log(year, date);
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
      console.log(err);
      continue;
    }
  }
  doy.sort((a, b) => +(a[0] < b[0]) + (-(a[0] > b[0])));
  flips = doy.map((d) => d[1]).join("\n");
  cached365[date] = flips;
  return new Response([cacheOne[0], flips, cacheOne[1]].join(""), headers);
}

// console.log(await daily("0101"));
