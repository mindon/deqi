import { serve } from "https://deno.land/std@0.183.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.183.0/http/file_server.ts";
import { chat } from "./features/chat.ts";
import { academic, enroll } from "./features/academic.ts";

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

async function handler(request: Request): Promise<Response> {
  let { pathname } = new URL(request.url);
  if (/\.ts$|^\/(dechat|featuers)\//i.test(pathname)) {
    return new Response(undefined, { status: 404 });
  }
  if (pathname == "/chat") {
    return chat(request);
  }
  if (pathname == "/academic") {
    if (request.method == "PUT") {
      const { headers } = request;
      const x = headers.get("x-academic-enroll");
      if (enrollKey && x == enrollKey) {
        const {email, desc} = await request.json();
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
    } else if (request.method == "POST") {
      let result = "Error: not-academic";
      try {
        const data = await request.json();
        if (data.email.length < 128) {
          result = (await academic(data.email))?.name ?? "NOA";
        }
      } catch (err) {
        result = err;
      }
      return new Response(result, { status: 404 });
    } else {
      pathname = `${pathname}/`;
    }
  }
  if (pathname.endsWith("/")) {
    pathname = `${pathname}index.html`;
  }

  const resp = await serveFile(request, pathname.substring(1));
  const { status, statusText } = resp;
  const headers = [...resp.headers];
  let body = resp.body;
  let updated = false;
  if (resp.status >= 400) {
    body = "Hello, DeQi - from Mindon";
    updated = true;
  }
  if (pathname.startsWith("/lib/")) {
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
}

serve(handler, {
  port: 80,
});
