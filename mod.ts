import { serve } from "https://deno.land/std@0.122.0/http/server.ts";
import { OpenAI } from "https://raw.githubusercontent.com/mindon/openai/master/mod.ts";

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
    const { headers } = request;
    const xraw = headers.get("x-openai-args");
    let xai = {
      messages,
      model: "gpt-3.5-turbo-0301",
      temperature: 0.9,
      max_tokens: 512, // 2048
      top_p: 1,
      stream: false,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      ...(() => {
        try {
          const args: { [key: string]: string | number } = Object.fromEntries(
            new URL(`about:blank?${atob(xraw || "")}`).searchParams,
          );
          Object.keys(args).map(k => {
            const s = args[k].toString();          
            if(/[^\d.-+]/.test(s)) {
              if (s.includes('.')) {
                args[k] = parseFloat(s);
              } else {
                args[k] = parseInt(s, 10);
              }
            }
          })
          return args;
        } catch (_) {
          return {};
        }
      })(),
    };
    if (request.url.includes("?")) {
      const q = new URL(request.url).searchParams;
      if (q.has("stream")) {
        xai.stream = true;
      }
    }
    const key = headers.get("x-openai-key");
    const completion = await (key ? new OpenAI(key) : openAI)
      .createChatCompletion({
        ...xai,
      });
    if (xai.stream) {
      const headers = new Headers(completion.headers);
      headers.set("Content-Type", "application/octet-stream");

      return new Response(completion.body, {
        status: completion.status,
        statusText: completion.statusText,
        headers,
      });
    }
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
