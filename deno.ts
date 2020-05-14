import handler from "./handler.ts";
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
const server = serve({ port: 8000 });

console.log(Deno.args);

for await (const req of server) {
  console.log(req.url);

  if (req.url === "/") {
    req.respond({
      body: handler(req),
    });
  }
  if (req.url === "/a") {
    req.respond({
      body: handler(req),
    });
  } else {
    req.respond({});
  }
}
