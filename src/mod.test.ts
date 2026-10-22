import { expect, it } from "vitest";

import { JSONtoYAML, YAMLtoJSON } from "./index.js";

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

it("JSON to YAML", () => {
  expect(JSONtoYAML(exampleJSON)).toEqual(exampleYAML);
});

it("YAML to JSON", () => {
  expect(YAMLtoJSON(exampleYAML)).toEqual(exampleJSON);
});
