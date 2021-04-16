module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  env: {
    browser: true,
    node: true
  },
  plugins: ["babel", "import", "jsx-a11y", "react"],
  rules: {
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/no-multi-comp": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/sort-comp": 0,
    "react/no-array-index-key": 0,
    "react/no-danger": 0,
    "react/require-default-props": 0,
    "react/no-unescaped-entities": 0,
    "react/forbid-prop-types": 0,
    "react/destructuring-assignment": 0,
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "consistent-return": 0,
    "no-mixed-operators": 0,
    "no-use-before-define": ["error", { functions: false, classes: false }],
    "no-console": 0,
    "no-alert": 0,
    "no-nested-ternary": 0,
    "no-shadow": 0,
    "no-param-reassign": 0,
    radix: 0,
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
    "no-underscore-dangle": 0,
    "global-require": 0,
    "no-cond-assign": 0,
    "class-methods-use-this": 0,
    "no-confusing-arrow": 0,
    "space-infix-ops": 0,
    camelcase: 0,
    "prefer-destructuring": [
      "error",
      {
        AssignmentExpression: {
          array: false,
          object: false
        }
      }
    ],
    "no-plusplus": [
      2,
      {
        allowForLoopAfterthoughts: true
      }
    ],
    "space-before-function-paren": 0
  }
};
