module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "mocha",
    "prettier",
    "import",
    "no-null",
    "unused-imports",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@src", "./src"],
          ["@test", "./test"],
        ],
        extensions: [".ts", ".js", ".json"],
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:mocha/recommended",
    "prettier/@typescript-eslint",
  ],
  rules: {
    /*************************/
    /*   Import statements   */
    /*************************/
    "sort-imports": "off",
    "import/first": "warn",
    "import/extensions": ["warn", "never", { json: "always" }],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        // TODO: as of Oct 25, 2019, this plugin does not allow to order inside groups, nor imported variables.
        // Update the plugin as soon as it is allowed and update the config.
        // For the record, this other plugins / rules don't work either:
        //  - simple-import-sort: because it sorts alphabetically, without respecting groups.
        //  - sort-imports: because it just sorts based on the type of import (single, multiple, or *)
      },
    ],
    "import/no-duplicates": "warn",
    "import/newline-after-import": "warn",
    "import/no-unassigned-import": "warn",

    /*************************/
    /*      TypeScript       */
    /*************************/
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports-ts": 1,
    "unused-imports/no-unused-vars-ts": [
      1,
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],

    /*************************/
    /*         Mocha         */
    /*************************/
    "mocha/no-mocha-arrows": 0,
    "mocha/no-hooks-for-single-case": 0,
    "mocha/no-top-level-hooks": 0,

    /*************************/
    /*        General        */
    /*************************/
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/camelcase": "off",
    "import/no-unassigned-import": "off",
    "no-extra-semi": "off",
    // FIXME: This rule should be on, but needs further discussion
    "require-atomic-updates": "off",
    "no-extra-boolean-cast": "off", // Allow "bang-bang" operator.
    "no-undef": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: { "@typescript-eslint/no-var-requires": ["off"] },
    },
  ],
};
