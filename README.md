# Y2J - YAML to JSON and vice versa

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/y2j?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/y2j/workflows/CodeQL/badge.svg)
![Lint](https://github.com/UltiRequiem/y2j/workflows/Lint/badge.svg)
![Test](https://github.com/UltiRequiem/y2j/workflows/Tests/badge.svg)
![Compile](https://github.com/UltiRequiem/y2j/workflows/Tests/badge.svg)

Simple CLI tool and library to convert YAML to JSON and vice versa.

## CLI Tool

### Installation

- [deno.land/x/y2j/cli.ts]():

```bash
deno install https://deno.land/x/y2j/cli.ts
```

- [denopkg.com/UltiRequiem/y2j/cli.ts]():

```bash
deno install denopkg.com/UltiRequiem/y2j/cli.ts
```

- [nest.land/package/y2j/cli.ts]():

```bash
deno install https://x.nest.land/y2j/cli.ts
```

Or get a binary from [releases](https://github.com/UltiRequiem/deno-clear/releases/latest).

### Built in help

If yoy don't pass any flag or you pass the `--help` flag:

```
    yj 1.0.0

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
```

Check [cli.ts](./cli.ts) or [mod_test.ts](./mod_test.ts) for more examples.

### LICENSE

This project is licensed under the [MIT License](./LICENSE.md).
