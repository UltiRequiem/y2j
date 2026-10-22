# Y2J

[![npm](https://img.shields.io/npm/v/@ultirequiem/y2j?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/y2j)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/y2j?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/y2j)
[![CI](https://github.com/UltiRequiem/y2j/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/y2j/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/y2j/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/y2j)

YAML to JSON and vice versa 🚀

## Usage

The API is the same on all these platforms ✔️

### [Node.js 🐢🚀](https://npmjs.com/package/@ultirequiem/y2j)

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

Types are included with the package.
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

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

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
