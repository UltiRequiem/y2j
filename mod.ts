import { yamlParse, yamlStringify } from "./depts.ts";

export { yamlParse as YAMLtoObject, yamlStringify as ObjecToYAML };

export function JSONtoYAML(jsonString: string): string {
  return yamlStringify(JSON.parse(jsonString));
}

export function YAMLtoJSON(yamlString: string): string {
  return JSON.stringify(yamlParse(yamlString), null, 2);
}
