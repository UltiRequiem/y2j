# Y2J

[![Code Coverage](https://codecov.io/gh/ultirequiem/y2j/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/y2j)
[![Deno Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/y2j/mod.ts)

YAML to JSON and vice versa 🚀

## Usage

The API is the same on all this platforms ✔️

### [Deno 🦕](https://deno.land/x/y2j)

```javascript
import { JSONtoYAML, YAMLtoJSON } from "https://deno.land/x/y2j/mod.ts";
```

### [Node.js 🦖](https://npmjs.com/package/@ultirequiem/y2j)

```javascript
import { JSONtoYAML, YAMLtoJSON } from "@ultirequiem/y2j";
```

### [Browser 🌐](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg 👉
[ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) ↔️
[SkyPack](https://cdn.skypack.dev/@ultirequiem/y2j) 🆚
[Script Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
↔️ [JSDelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/y2j)

## Documentation

Is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/y2j/mod.ts) 📚

## CLI

### Install

#### Deno 🐼

```sh
deno install https://deno.land/x/y2j/y2j.ts
```

#### Node.js 🎃

```sh
npm install -g @ultirequiem/y2j
```

### Usage

```sh
$ y2j example.json
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

$ y2j example.yaml
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

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to start the repo ⭐

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/y2j/tags) 🏷️

## Authors

[Eliaz Bobadilla](https://ultirequiem.com) - Creator and Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/y2j/contributors) who participated
in this project ✨

## Licence

Licensed under the MIT License 📄
