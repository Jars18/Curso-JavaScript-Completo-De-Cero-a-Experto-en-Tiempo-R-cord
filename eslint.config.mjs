import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "error",
      "no-extra-semi": "error",
      eqeqeq: "error",
      camelcase: "error"
    },
    extends: ["js/recommended"],
  },
  pluginReact.configs.flat.recommended,
]);
