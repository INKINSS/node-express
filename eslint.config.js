import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], rules: {
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  }, languageOptions: { globals: { ...globals.node, ...globals.browser } } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);
