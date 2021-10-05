import { blue, getFileExtension, parseFlags, red } from "./depts.ts";
import { JSONtoYAML, VERSION, YAMLtoJSON } from "./mod.ts";

function showHelp() {
  console.error(red(`
    yj ${VERSION}

    Convert JSON to YAML and vice versa

    FLAGS:

      --file: The file to change the format, if you pass a JSON,
      its YAML version will be printed on the screen and vice versa.

      --write: If you pass this flag instead of printing on the screen,
      the output will be written to a file.

      --version: Prints just the version

    If you need more help, found a bug or want to suggest a new feature:
    github.com/UltiRequiem/y2j
`));
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
  const { file, write, help, version } = parseFlags(Deno.args);

  if (version) {
    console.log(blue(VERSION));
    Deno.exit();
  }

  if (!file || help) {
    return showHelp();
  }

  const fileExtension = await getFileExtension(file);
  const fileText = await readFile(file);

  if (fileExtension === "json") {
    const data = await JSONtoYAML(fileText);

    if (write) {
      return await Deno.writeTextFile(`${file}.yaml`, data);
    }

    return console.log(blue(data));
  }

  if (fileExtension === "yaml" || fileExtension === "yml") {
    const data = await YAMLtoJSON(fileText);

    if (write) {
      return await Deno.writeTextFile(`${file}.json`, data);
    }

    return console.log(blue(data));
  }

  console.log(`Files with extension "${fileExtension}" are not supported!`);
}

if (import.meta.main) {
  main();
}
