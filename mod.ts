import { serve } from "https://deno.land/std@0.122.0/http/server.ts";
import { OpenAI } from "https://deno.land/x/openai/mod.ts";

const openAI = new OpenAI(Deno.env.get("OPENAI_API_KEY")!);

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
  if (pathname == "/chat") {
    if (request.method !== "POST") {
      return new Response(null, {
        status: 405,
        statusText: "Method Not Allowed",
      });
    }
    const messages = await request.json();
    const completion = await openAI.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      messages,
      temperature: 0.9,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
    });
    return new Response(JSON.stringify(completion), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
  }
  if (pathname.endsWith("/")) {
    pathname = `${pathname}index.html`;
  }
  const m = pathname.match(/\.(html|css|js|jpg|jpeg|png|svg|csv)$/);
  if (m && mimes[m[1]]) {
    try {
      const file = await Deno.readFile(`.${pathname}`);
      const headers = {
        "content-type": mimes[m[1]],
      };
      if (pathname.startsWith("/lib/")) {
        headers["Access-Control-Allow-Origin"] = "*";
      }
      return new Response(file, {
        headers,
      });
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        return new Response("Not found in deqi - from mindon", { status: 404 });
      } else {
        throw err;
      }
    }
  } else {
    return new Response("Hello, DeQi - from Mindon");
  }
}

serve(handler, {
  port: 80,
});
