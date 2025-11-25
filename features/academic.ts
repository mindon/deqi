const kv = await Deno.openKv();

const spaces = /^\s+|\s+$/g;
const mailbox =
  /^(([^\/<>()\[\]\\.,;:\s@"]+(\.[^\/<>()\[\]\\.,;:\s@"]+)*)|("[^"@\/\n\r\v\t<>]+"))@((\[\d{1,3}(\.\d{1,3}){3}\])|(([\w-]+\.)+[a-zA-Z]{2,}))$/;
const ignoreKey =
  /^(mail[a-z0-9]?|[a-z]?mail|student|teacher|stu|tea|gs|air|[a-z])$/;

// isNoA: in a blacklist
async function isNoA(key: Array<string>) {
  return (await kv.get(["NOA", ...key])).value === false;
}

function strip(key: Array<string>, desc?: string) {
  if (key.length < 3) return key;
  const last = key.slice(-1)[0];
  if (
    key.length > 3 && (last == desc?.replace(/\s+/g, "").toLowerCase() ||
      last ==
        desc?.match(/[A-Z]/g)?.join("").toLowerCase().substring(
          0,
          last.length,
        ) ||
      last == desc?.split(" ")[0].toLowerCase())
  ) {
    return key;
  }
  if (key[0] == "edu") {
    key = key.slice(0, 2);
  } else if (key[1] == "edu") {
    key = key.slice(0, 3);
  } else if (
    key.length > 3 ||
    ignoreKey.test(last)
  ) {
    key = key.slice(0, -1);
  }
  return key;
}

export async function blacklist() {
  const iter = await kv.list({ prefix: ["NOA"] });
  const blocked: Array<any> = [];
  for await (const res of iter) {
    blocked.push({ key: res.key, value: res.value });
  }
  return blocked;
}

export async function stats() {
  const iter = await kv.list({ prefix: [] });
  const result: any = {};
  for await (const res of iter) {
    if (res.key[0] === "NOA") {
      result["NOA"] = (result["NOA"] || 0) + 1;
    } else {
      const k = res.key.length;
      result[k] = (result[k] || 0) + 1;
    }
  }
  return result;
}

export async function checking(keys: Array<string>) {
  return Promise.all(
    keys.map(async (key) => await kv.get(key.split(".").reverse())),
  );
}

export async function enroll(addr: string, desc: string) {
  try {
    const info = await academic(addr);
    if (info?.name == desc) {
      return true;
    }
  } catch (err) {
    if (err.message !== "not-academic") {
      return false;
    }
  }
  const i = addr.indexOf("@");
  const key = strip(
    (i > -1 ? addr.substring(i + 1) : addr).trim().toLowerCase()
      .split(".").reverse(),
    desc,
  );
  console.log("[NEW]", key, desc);
  return await kv.set(key, desc);
}

// get ?{key, value, versionstamp}
export async function academic(addr: string): Promise<
  | { key: Array<string>; name: string }
  | void
> {
  const v = addr.replace(spaces, "");
  if (!mailbox.test(addr)) {
    throw new Error("invalid-email");
  }
  let key = addr.substring(addr.indexOf("@") + 1)
    .toLowerCase()
    .split(".").reverse();
  if (await isNoA(key)) {
    throw new Error("blacklist");
  }

  let { value: name } = await kv.get(key);
  if (!name) {
    const n = key.length;
    key = strip(key);
    if (n == key.length) {
      throw new Error("not-academic");
    }
    if (await isNoA(key)) {
      throw new Error("blacklist");
    }
    name = (await kv.get(key))?.value;
    if (!name) {
      throw new Error("not-academic");
    }
  }
  return { key, name: name.toString() };
}
