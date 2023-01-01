import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";

import { JSONtoYAML, YAMLtoJSON } from "./mod.ts";

const exampleJSON = `{
  "name": "John",
  "age": 30,
  "cars": [
    "Ford",
    "BMW",
    "Fiat"
  ]
}`;

const exampleYAML = `name: John
age: 30
cars:
  - Ford
  - BMW
  - Fiat
`;

Deno.test("JSON to YAML", () => {
  assertEquals(JSONtoYAML(exampleJSON), exampleYAML);
});

Deno.test("YAML to JSON", () => {
  assertEquals(YAMLtoJSON(exampleYAML), exampleJSON);
});
