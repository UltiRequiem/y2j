import { getFileExtension, parseFlags, yamlParse,yamlStringify } from "./depts.js";

async function main() {
  const { file } = parseFlags(Deno.args);

  const fileExtension = await getFileExtension(file);
  let fileText;

  try {
    fileText = await Deno.readTextFile(file);
  } catch (_) {
    console.log(
      "File not found. If you are sure that the file exists, maybe `yj` was not installed with the necessary permissions?",
    );
    return;
  }

  if (fileExtension === "json") {
    const data = yamlStringify(JSON.parse(fileText))
    console.log(data)
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
