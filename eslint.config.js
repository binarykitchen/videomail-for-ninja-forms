import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "node_modules/**", "target/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        Backbone: "readonly",
        jQuery: "readonly",
        Marionette: "readonly",
        nfRadio: "readonly",
        VideomailClient: "readonly",
      },
    },
  },
];
