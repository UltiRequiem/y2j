import { getFileExtension, parseFlags } from "./depts.ts";
import { JSONtoYAML, YAMLtoJSON } from "./mod.ts";

function showHelp() {
  console.error("You have to pass a file!");
}

async function main() {
  const { file, write, help } = parseFlags(Deno.args);

  if (!file || help) {
    return showHelp();
  }

  const fileExtension = await getFileExtension(file);
  let fileText;

  try {
    fileText = await Deno.readTextFile(file);
  } catch (_) {
    return console.log(
      "File not found. If you are sure that the file exists, maybe `yj` was not installed with the necessary permissions?",
    );
  }

  if (fileExtension === "json") {
    const data = JSONtoYAML(fileText);

    if (write) {
      await Deno.writeTextFile(`${file}.yaml`, data);
      return;
    }

    return console.log(data);
  }

  if (fileExtension === "yaml" || fileExtension === "yml") {
    const data = YAMLtoJSON(fileText);

    if (write) {
      await Deno.writeTextFile(`${file}.json`, data);
      return;
    }

    return console.log(data);
  }

  console.log(`Files with extension "${fileExtension}" are not supported!`);
}

if (import.meta.main) {
  main();
}
