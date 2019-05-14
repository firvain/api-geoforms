
module.exports = {
  env: {
    "node": true,
    "es6": true,
    "jest": true
  },
  extends: [    "prettier"  ],
  plugins: [
    "import",
    "prettier",
  ],
  parserOptions: {
    "ecmaVersion": 2017 
  },
  "rules": {
    "space-before-function-paren": 0,
    "new-cap": 0,
    "prettier/prettier": 2
  }
}
