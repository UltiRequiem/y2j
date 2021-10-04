import { yamlParse, yamlStringify } from "./depts.js";

export { yamlParse as YAMLtoObject, yamlStringify as ObjecToYAML };

export function JSONtoYAML(jsonString) {
  return yamlStringify(JSON.parse(jsonString));
}

export function YAMLtoJSON(yamlString) {
  JSON.stringify(yamlParse(yamlString), null, 2);
}
