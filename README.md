# Y2J - YAML to JSON and vice versa

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/y2j?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/y2j/workflows/CodeQL/badge.svg)
![Lint](https://github.com/UltiRequiem/y2j/workflows/Lint/badge.svg)
![Test](https://github.com/UltiRequiem/y2j/workflows/Tests/badge.svg)

Simple CLI tool and library to convert YAML to JSON and vice versa.

## CLI Tool

### Installation

- [deno.land/x](https://deno.land/x/y2j/cli.ts):

```bash
deno install --allow-read --allow-write https://deno.land/x/y2j/cli.ts
```

- [denopkg.com](https://denopkg.com/UltiRequiem/y2j/cli.ts):

```bash
deno install --allow-read --allow-write https://denopkg.com/UltiRequiem/y2j/cli.ts
```

- [nest.land](https://x.nest.land/y2j/cli.ts):

```bash
deno install --allow-read --allow-write https://x.nest.land/y2j@1.1.1/mod.ts
```

### Usage

Examples using [example.json](./example.json) and
[example.yaml](./example.yaml).

```bash
$ y2j --file example.json
menu:
  id: file
  value: File
  popup:
    menuitem:
      - value: New
        onclick: CreateNewDoc()
      - value: Open
        onclick: OpenDoc()
      - value: Close
        onclick: CloseDoc()

$ y2j --file example.yaml
{
  "menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        { "value": "New", "onclick": "CreateNewDoc()" },
        { "value": "Open", "onclick": "OpenDoc()" },
        { "value": "Close", "onclick": "CloseDoc()" }
      ]
    }
  }
}
```

If you pass the `--write` the output will not be printed. Instead it will be in
a new file with the same name, but with other extension.

### Built in help

If yoy don't pass any flag or you pass the `--help` flag:

```
y2j 1.0.0

    Convert JSON to YAML and vice versa

    FLAGS:

      --file: The file to change the format, if you pass a JSON,
      its YAML version will be printed on the screen and vice versa.

      --write: If you pass this flag instead of printing on the screen,
      the output will be written to a file.

      --version: Prints just the version

    If you need more help, found a bug or want to suggest a new feature:
    github.com/UltiRequiem/y2j
```

## Usage as library

```typescript
import { JSONtoYAML, YAMLtoJSON } from "https://deno.land/x/y2j/mod.ts";

const myJSON = '{"hello": "world"}';
const myYAML = "hello: world";

console.log(JSONtoYAML(myJSON));
console.log(YAMLtoJSON(myYAML));
```

Check [cli.ts](./cli.ts) or [mod_test.ts](./mod_test.ts) for more examples.

### LICENSE

This project is licensed under the [MIT License](./LICENSE.md).
