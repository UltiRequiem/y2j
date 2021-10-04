import {
  getFileExtension,
  parseFlags,
  yamlParse,
  yamlStringify,
} from "./depts.js";

function showHelp() {
  console.error("You have to pass a file!");
}

async function main() {
  const { file, write, help } = parseFlags(Deno.args);

  if (!file | help) {
    showHelp();
    return;
  }

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
    const data = yamlStringify(JSON.parse(fileText));
    console.log(data);
    return;
  }

  if (fileExtension === "yaml" || fileExtension === "yml") {
    const data = JSON.stringify(yamlParse(fileText), null, 2);

    if (write) {
      await Deno.writeTextFile(`${file}.yaml`, data);
      return;
    }

    console.log(data);
  }

  console.log(`"${fileExtension}" not supported!`);
}

if (import.meta.main) {
  main();
}
