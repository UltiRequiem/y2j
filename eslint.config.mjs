// @ts-check
import tseslint from "typescript-eslint";
import tsdoc from "eslint-plugin-tsdoc";
import unicorn from "eslint-plugin-unicorn";

export default tseslint.config(
  { ignores: ["lib/**", "docs/**", "*.js", "*.mjs", "*.cjs", "node_modules/**"] },
  tseslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    plugins: { tsdoc, unicorn },
    rules: {
      "tsdoc/syntax": "warn",
      "unicorn/prefer-node-protocol": "error",
    },
  },
  {
    // tests deliberately feed wrong types to the API
    files: ["src/**/*.test.ts"],
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  }
);
