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
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
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
