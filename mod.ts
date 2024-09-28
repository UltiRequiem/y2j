import {
  parse,
  stringify,
} from "https://deno.land/std@0.224.0/encoding/yaml.ts";

export function JSONtoYAML(jsonString: string) {
  return stringify(JSON.parse(jsonString));
}

export function YAMLtoJSON(yaml: string) {
  return JSON.stringify(parse(yaml), null, 2);
}
