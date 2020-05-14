import {
  listenAndServe,
  ServerRequest,
  Response,
} from "https://deno.land/std@0.50.0/http/server.ts";

export default (req: ServerRequest) => {
  return `request!! ${req.url}`;
};
