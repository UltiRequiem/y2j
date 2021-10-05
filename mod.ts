import { yamlParse, yamlStringify } from "./depts.ts";

/**
 * Receives a string with a valid JSON Object and returns a string with
 * its version in YAML. */
export function JSONtoYAMLSync(jsonString: string): string {
  return yamlStringify(JSON.parse(jsonString));
}

/**
 * Receives a string with a valid JSON Object and returns a string with
 * its version in YAML. */
export function JSONtoYAML(jsonString: string): Promise<string> {
  return Promise.resolve(JSONtoYAMLSync(jsonString));
}

/**
 * Receives a string with a valid YAML and returns a string with
 * its version in JSON. */
export function YAMLtoJSONSync(yamlString: string): string {
  return JSON.stringify(yamlParse(yamlString), null, 2);
}

/**
 * Receives a string with a valid YAML and returns a string with
 * its version in JSON. */
export function YAMLtoJSON(yamlString: string): Promise<string> {
  return Promise.resolve(YAMLtoJSONSync(yamlString));
}

export const VERSION = "1.0.0";

export { yamlParse as YAMLtoObject, yamlStringify as ObjecToYAML };
