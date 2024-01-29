module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "airbnb",
  plugins: ["prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    linebreak-style: 0,
    semi: 0,
    "comma-dangle": 0,
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    quotes: ["error", "double"],
  },
};
