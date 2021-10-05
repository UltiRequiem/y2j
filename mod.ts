import { yamlParse, yamlStringify } from "./depts.ts";

/**
 * Receives a string with a valid JSON Object and returns a string with
 * its version in YAML. */
export function JSONtoYAML(jsonString: string): string {
  return yamlStringify(JSON.parse(jsonString));
}

/**
 * Receives a string with a valid YAML and returns a string with
 * its version in JSON. */
export function YAMLtoJSON(yamlString: string): string {
  return JSON.stringify(yamlParse(yamlString), null, 2);
}

export { yamlParse as YAMLtoObject, yamlStringify as ObjecToYAML };
