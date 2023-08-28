module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "next",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:compat/recommended", // browser
    "plugin:tailwindcss/recommended", // tailwind
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "compat", "tailwindcss", "react", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
      files: [".eslintrc.{js,cjs}", "scripts/**/*.ts"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": 0,
    "tailwindcss/no-custom-classname": ["warn", { whitelist: ["^mdx-"] }],
  },
  settings: {
    next: {
      rootDir: ["./src/"],
    },
    tailwindcss: {
      callees: ["cn"],
      config: "tailwind.config.ts",
    },
  },
};
