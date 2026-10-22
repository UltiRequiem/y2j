import { parse, stringify } from "yaml";

export function JSONtoYAML(jsonString: string) {
  return stringify(JSON.parse(jsonString));
}

export function YAMLtoJSON(yaml: string) {
  return JSON.stringify(parse(yaml), null, 2);
}
