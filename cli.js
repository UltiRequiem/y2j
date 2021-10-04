import { getFileExtension, parseFlags, yamlParse } from "./depts.js";

async function main() {
  const { file } = parseFlags(Deno.args);

  const fileExtension = await getFileExtension(file);
  const fileText = await Deno.readTextFile(file);

  if (fileExtension === "json") {
    console.log("JSON to YAML is not supported yet!");
    return;
  }

  if (fileExtension === "yaml" || fileExtension === "yml") {
    const data = yamlParse(fileText);

    console.log(JSON.stringify(data, null, 2));
    return;
  }

  console.log(`"${fileExtension}" not supported!`);
}

if (import.meta.main) {
  main();
}
