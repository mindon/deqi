import { serve } from "https://deno.land/std@0.122.0/http/server.ts";

const mimes : {[key: string]: string} = {
  html: 'text/html; charset=utf-8',
  css: 'text/css',
  js: 'text/javascript',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
};

async function handler(request: Request): Promise<Response> {
  let { pathname } = new URL(request.url);
  if (pathname.endsWith('/')) {
    pathname = `${pathname}index.html`;
  }
  const m = pathname.match(/\.(html|css|js|jpg|jpeg|png|svg)$/);
  if (m && mimes[m[1]]) {
    try {
      const file = await Deno.readFile(`.${pathname}`);
      const headers = {
        'content-type': mimes[m[1]],
      };
      if (pathname.startsWith('/lib/')) {
        headers['Access-Control-Allow-Origin'] = '*';
      }
      return new Response(file, {
        headers,
      });
    } catch(err)  {
      if (err instanceof Deno.errors.NotFound) {
        return new Response("Not found in deqi - from mindon", {status: 404});
      } else {
        throw err;
      }
    }
  } else {
    return new Response("Hello, DeQi - from Mindon");
  }
}

serve(handler, {
  port: 80
});
