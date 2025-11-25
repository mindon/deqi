import { academic } from "./academic.ts";
Deno.test("academic", async () => {
  console.log(await academic('hello@mit.edu'));
});
