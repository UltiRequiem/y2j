import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.12/node_support.ts";

buildPackage(
  {
    repoName: "@ultirequiem/y2j",
    description: "YAML to JSON and vice versa",
    homepage: "https://y2j.js.org",
    keywords: ["parse", "yaml", "json"],
    version: "2.0.0",
  },
  {
    entryPoints: ["./mod.ts", { name: "y2j", path: "./y2j.ts", kind: "bin" }],
    supportCJS: false,
  },
);
