import { blue, getFileExtension, parseFlags, red } from "./depts.ts";
import { JSONtoYAML, YAMLtoJSON } from "./mod.ts";

function showHelp() {
  console.error("You have to pass a file!");
}

async function readFile(filePath: string): Promise<string> | never {
  try {
    return await Deno.readTextFile(filePath);
  } catch (_) {
    console.log(red(
      "The file does not exist or I don't have permissions to read it.",
    ));
    Deno.exit();
  }
}

async function main() {
  const { file, write, help } = parseFlags(Deno.args);

  if (!file || help) {
    return showHelp();
  }

  const fileExtension = await getFileExtension(file);
  const fileText = await readFile(file);

  if (fileExtension === "json") {
    const data = JSONtoYAML(fileText);

    if (write) {
      await Deno.writeTextFile(`${file}.yaml`, data);
      return;
    }

    return console.log(blue(data));
  }

  if (fileExtension === "yaml" || fileExtension === "yml") {
    const data = YAMLtoJSON(fileText);

    if (write) {
      await Deno.writeTextFile(`${file}.json`, data);
      return;
    }

    return console.log(blue(data));
  }

  console.log(`Files with extension "${fileExtension}" are not supported!`);
}

if (import.meta.main) {
  main();
}
