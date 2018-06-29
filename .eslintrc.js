module.exports = {
  "plugins": [
    "react", "jsdoc"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  // 规则文档：http://eslint.cn/docs/rules/
  "rules": {
    // 0: 'off'
    // 1: 'warn'
    // 2: 'error
    // Common js rules
    // 强制使用骆驼拼写法命名约定
    "camelcase": 1, 
    // 强制所有控制语句使用一致的括号风格，if,else等{} 不可省略
    "curly": 2,
    // 要求使用 === 和 !==
    "eqeqeq": 1,
    // 禁用 __proto__ 属性
    // "no-proto": 2,
    // 禁用 arguments.caller 或 arguments.callee
    "no-caller": 2,
    // 警告出现未使用过的变量
    "no-unused-vars": [
      0, {
        "vars": "all", // 检查所有变量
        "args": "none" // 不检查参数
      }
    ],
    // 要求构造函数首字母大写
    "new-cap": 0,
    // 强制使用一致的反勾号、双引号或单引号
    "quotes": [
      0//1, "single"
    ],
    // 强制可嵌套的块的最大深度
    "max-depth": [
      0, 3
    ],
    // 强制函数块最多允许的的语句数量
    "max-statements": [
      0, 45
    ],
    // 强制一行的最大长度
    "max-len": [
      0, 200
    ],
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    "no-eq-null": 2,
    // 禁止出现多行空行
    "no-multiple-empty-lines": [
      1, {
        max: 2
      }
    ],
    // 禁止空格和 tab 的混合缩进
    "no-mixed-spaces-and-tabs": 0,
    // 强制在一元操作符前后使用一致的空格
    "space-unary-ops": 1,
    // 禁止使用多个空格
    "no-multi-spaces": 1,
    // 强制在块之前使用一致的空格: function () {}
    "space-before-blocks": 0,
    // 强制在关键字前后使用一致的空格: if () {} else {}
    "keyword-spacing": 0,
    // 要求操作符周围有空格: 1 + 2
    "space-infix-ops": 0,
    // 强制在逗号前后使用一致的空格
    "comma-spacing": [
      0, {
        "before": false,
        "after": true
      }
    ],
    // 要求或禁止末尾逗号
    "comma-dangle": 0,
    // 要求 IIFE 使用括号括起来
    "wrap-iife": 2,
    // 禁止不必要的分号
    "no-extra-semi": 2,
    // 强制分号之前和之后使用一致的空格
    "semi-spacing": 2,
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": 0,
    // 要求或禁止使用命名的 function 表达式
    "func-names": 0,

    // NodeJs rules
    // 强制把变量的使用限制在其定义的作用域范围内
    "block-scoped-var": 2,
    // 要求 require() 出现在顶层模块作用域中
    "global-require": 0,
    // 禁止混合常规变量声明和 require 调用
    "no-mixed-requires": 2,
    // 禁止调用 require 时使用 new 操作符
    "no-new-require": 2,

    // ES6 rules
    // 强制箭头函数的箭头前后使用一致的空格
    "arrow-spacing": [
      2, { 
        "before": true, 
        "after": true 
      }
    ],
    // 禁止修改 const 声明的变量
    "no-const-assign": 2,
    // 要求使用 let 或 const 而不是 var
    "no-var": 0,
    // 要求使用 const 声明那些声明后不再被修改的变量
    "prefer-const": 0,

    // React
    // 强制在 JSX 属性中一致地使用双引号或单引号
    "jsx-quotes": [
      0//1, "prefer-single"
    ],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/prop-types": 0
  }
};
