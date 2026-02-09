import { serveFile } from "jsr:@std/http/file-server";
import { chat } from "./features/chat.ts";
import { academic, enroll } from "./features/academic.ts";
import { daily, follow } from "./features/daily.ts";

const enrollKey = Deno.env.get("ACADEMIC_ENROLL");

const mimes: { [key: string]: string } = {
  html: "text/html; charset=utf-8",
  css: "text/css",
  js: "text/javascript",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  csv: "text/csv",
};

Deno.serve(async (req: Request, info) => {
  let { pathname, search } = new URL(req.url);
  if (/\.ts$|^\/(dechat|featuers)\//i.test(pathname)) {
    return new Response(undefined, { status: 404 });
  }
  if (pathname == "/ipr") {
    try {
      const remoteIp = (info.remoteAddr as Deno.NetAddr).hostname;
      const message = `from: ${remoteIp}\n`;
      console.log(message);
      return new Response(message);
    } catch (err) {
    }
  }

  if (pathname == "/chat") {
    return chat(req);
  }
  if (pathname == "/academic") {
    if (req.method == "PUT") {
      const { headers } = req;
      const x = headers.get("x-academic-enroll");
      if (enrollKey && x == enrollKey) {
        const { email, desc } = await req.json();
        if (email && desc && email?.length < 128) {
          if (
            await enroll(
              email.replace(/\s+/g, "").toLowerCase(),
              desc.replace(/^\s+|\s+$/g, ""),
            )
          ) {
            return new Response(desc);
          }
        }
        return new Response("error", { status: 500, statusText: email });
      }
    } else if (req.method == "POST") {
      let result = "Error: not-academic";
      let status = 404;
      try {
        const data = await req.json();
        if (data?.email?.length < 128) {
          result = (await academic(data.email))?.name ?? "NOA";
          status = 200;
        } else {
          console.log(data);
        }
      } catch (err) {
        result = err;
      }
      return new Response(result, { status });
    } else {
      pathname = `${pathname}/`;
    }
  }
  if (pathname === "/atm/nasa/daily/follow") {
    return await follow(search.substring(1));
  }
  if (pathname.startsWith("/atm/nasa/daily/@")) {
    const today = pathname.substring(pathname.lastIndexOf("@") + 1).replace(
      ".",
      "",
    );
    return await daily(today);
  }
  if (pathname.startsWith("/sp2/")) {
    pathname = '/sp2/index.html';
  } if (pathname.endsWith("/")) {
    pathname = `${pathname}index.html`;
  }

  const resp = await serveFile(req, pathname.substring(1));
  const { status, statusText } = resp;
  const headers = [...resp.headers];
  let body = resp.body;
  let updated = false;
  if (resp.status >= 400) {
    body = "Hello, DeQi - from Mindon";
    updated = true;
  }
  if (/^\/(atm|lib)\//.test(pathname)) {
    headers.push(["Access-Control-Allow-Origin", "*"]);
    updated = true;
  }
  if (updated) {
    return new Response(body, {
      headers,
      status,
      statusText,
    });
  }
  return resp;
});
