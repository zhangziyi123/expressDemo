// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // 箭头函数用小括号括起来
    'arrow-parens': 0,
    // 生成器函数*的前后空格
    'generator-star-spacing': 0,
    // "no-debugger": 2,//禁止使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //空行最多不能超过2行
    "no-multiple-empty-lines": [1, {"max": 10}],
    //一行结束后面不要有空格
    "no-trailing-spaces": 0,
    "new-cap": "off",
    //语句以分号结尾
    semi: "off",
    //禁止在使用new构造一个实例后不赋值
    "no-new": "off",
    "no-eval": "off",
    // "no-undef": 1,
    "quotes": "off",
    "no-unused-vars": "off",
    "camelcase": 0,
    "space-before-function-paren": [0, "always"],
    "spaced-comment": 0,
    "template-curly-spacing": 0,
    "no-throw-literal": 0,
    "no-useless-call": 0,
    "no-undef": 0,
    "no-empty-pattern": 0,
    "no-useless-escape": 0,
    "no-callback-literal": 'off',
    "no-mixed-operators": 'off',
    "no-useless-computed-key": 0,
    "no-proto": 0,
    "no-unsafe-finally": 0,
    "one-var": 1 //连续声明
  }
}
