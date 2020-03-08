module.exports = {
  env: {
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": "error",
    "@typescript-eslint/member-delimiter-style": [
      "off",
      {
        multiline: {
          delimiter: "none",
          requireLast: true
        },
        singleline: {
          delimiter: "semi",
          requireLast: false
        }
      }
    ],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "_", argsIgnorePattern: "_" }
    ],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/semi": ["off", null],
    "@typescript-eslint/space-within-parens": ["off", "never"],
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "error",
    "arrow-parens": ["off", "as-needed"],
    camelcase: "off",
    "@typescript-eslint/camelcase": ["error", { properties: "never" }],
    "comma-dangle": "off",
    complexity: "off",
    "constructor-super": "error",
    curly: ["error", "multi-line"],
    "dot-notation": "error",
    "eol-last": "off",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    "id-match": "error",
    "linebreak-style": "off",
    "max-classes-per-file": ["error", 1],
    "max-len": "off",
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-extra-semi": "off",
    "no-fallthrough": "error",
    "no-invalid-regexp": "error",
    "no-invalid-this": "off",
    "no-irregular-whitespace": "off",
    "no-multiple-empty-lines": "off",
    "no-new-wrappers": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-return-await": "error",
    "no-shadow": [
      "error",
      {
        hoist: "all"
      }
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-undef": "off",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true,
        allowShortCircuit: true
      }
    ],
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "prefer-const": "error",
    "quote-props": "off",
    radix: "error",
    "react/display-name": "off",
    "react/prop-types": "off",
    "space-before-function-paren": "off",
    "spaced-comment": "error",
    "use-isnan": "error",
    "valid-typeof": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
