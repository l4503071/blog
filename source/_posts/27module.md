---
title: 模块化规范
cover: '/images/common/img27.jpg'
date: 2019-03-02 16:29:59
tags: AMD CMD UMD CommonJS import
---

# 模块化规范

## 1. CommonJS

- 第一种使用方式

```js
// a.js
exports.A = () => {}
// b.js
const a = require('./a.js');
a.A();
```

- 第二种使用方式
  
```js
// a.js
module.exports = () => {}
// b.js
const a = require('./a.js');
a();
```

> 只用使用 `module.exports = ` 和 `exports.A = `，而不能使用 `exports =`!
> 因为导出的对象是 `module.exports`，如果对 `exports` 赋值，不会影响导出的内容

```js
var moudle = { exports: {} };

return module.exports;
```

## import 

> `import` 使用的时候，直接将变量指向导出文件变量的内存，即使是原始数据类型。

```js
// a.js
export let a = 1;
setTimeout(()=>{
  a += 1;
}, 500)
// b.js
import { a } from './a.js';
console.log(a); // 输出 1
setTimeout(()=>{
  console.log(a); // 输出 2, 而 require 输出 1
}, 1000)
```