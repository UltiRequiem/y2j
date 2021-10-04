import {
  getFileExtension,
  parseFlags,
  yamlParse,
  yamlStringify,
} from "./depts.ts";

async function main() {
  const { file } = parseFlags(Deno.args);

  const fileExtension = await getFileExtension(file);

  const _isYAML = fileExtension === "yaml" || fileExtension === "yml";
  const isJSON = await getFileExtension(file) === "json";

  if (isJSON) {
    console.log("JSON to YAML is not supported yet!");
    return;
  }

  const data = yamlParse(await Deno.readTextFile(file));

  console.log(JSON.stringify(data, null, 2));
}

if (import.meta.main) {
  main();
}
