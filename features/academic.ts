const kv = await Deno.openKv();

const spaces = /^\s+|\s+$/g;
const mailbox =
  /^(([^\/<>()\[\]\\.,;:\s@"]+(\.[^\/<>()\[\]\\.,;:\s@"]+)*)|("[^"@\/\n\r\v\t<>]+"))@((\[\d{1,3}(\.\d{1,3}){3}\])|(([\w-]+\.)+[a-zA-Z]{2,}))$/;
const ignoreKey = /^(mail[a-z0-9]?|[a-z]?mail|student|teacher|stu|tea|gs|air)$/;

// isNoA: in a blacklist
async function isNoA(key: Array<string>) {
  return (await kv.get(["NOA", ...key])).value === false;
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
  const key = (i > -1 ? addr.substring(i + 1) : addr).trim().toLowerCase()
    .split(".").reverse();
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
    if (key.length > 2) {
      console.log(key);
      if (key[0] == "edu") {
        key = key.slice(0, 2);
      } else if (
        key.length > 3 || (key[1] != "edu" && ignoreKey.test(key.slice(-1)[0]))
      ) {
        key = key.slice(0, -1);
      } else {
        throw new Error("not-academic");
      }
      if (await isNoA(key)) {
        throw new Error("blacklist");
      }
      name = (await kv.get(key))?.value;
    }
    if (!name) {
      throw new Error("not-academic");
    }
  }
  return { key, name: name.toString() };
}
