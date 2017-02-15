module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true,
  },
  "extends": [
    "airbnb",
    "plugin:destructuring/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  "installedESLint": true,
  "plugins": [
    "react",
    "destructuring",
  ],
  "rules": {
    "import/prefer-default-export": 0,
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react/no-danger": 1,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
          "src",
        ],
      },
    },
  },
};
