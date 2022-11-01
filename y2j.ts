import { Command } from "https://deno.land/x/cliffy@v0.25.4/command/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v0.25.4/ansi/mod.ts";
import { fileExtension } from "https://deno.land/x/file_extension@v2.1.0/mod.ts";
import { JSONtoYAML, YAMLtoJSON } from "./mod.ts";

const root = new Command()
  .name("y2j")
  .version("0.1.0")
  .description("Convert JSON to YAML and vice versa.")
  .option("-w, --write", "Write to file?")
  .arguments("<files...:string>");

const { args, options } = await root.parse(Deno.args);

const [files] = args;

for (const file of files) {
  const ext = fileExtension(file);

  let content, result;

  try {
    content = await Deno.readTextFile(file);
  } catch {
    console.log(colors.red(`${file} does not exist!`));
    continue;
  }

  if (ext === "json") {
    result = JSONtoYAML(content);
  } else if (ext === "yaml" || ext === "yml") {
    result = YAMLtoJSON(content);
  } else {
    console.log(colors.red(`${file} is not a valid file type!`));
    continue;
  }

  if (options.write) {
    await Deno.writeTextFile(
      `${file}.${ext === "json" ? "yaml" : "json"}`,
      result,
    );
  } else {
    console.log(result);
  }
}
