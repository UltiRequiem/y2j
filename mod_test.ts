import { JSONtoYAML as _JSONtoYAML, YAMLtoJSON } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.110.0/testing/asserts.ts";

Deno.test("Test JSON to YAML", () => {
  // const yaml= `hello: world`
  // assertEquals(yaml, JSONtoYAML(JSON.stringify({ hello: "world" })));
});

Deno.test("Test YAML to JSON", async () => {
  const json = `{
  "hello": "world"
}`;
  assertEquals(json, await YAMLtoJSON("hello: world"));
});
