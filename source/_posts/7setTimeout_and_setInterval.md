---
title: setTimeout and setInterval
cover: '/images/common/img7.jpeg'
date: 2019-01-13 14:35:55
tags: setTimeout setInterval
---

# Node 定时器

## 定时器种类

- setTimeout()
- setInterval()
- setImmediate()
- process.nextTick()

## 执行规则

- process.nextTick 和 Promise 的函数优先于 setTimeout、setInterval和setImmediate
- process.nextTick 执行完同步任务后立即执行，是最先执行的
- Promise 属于微任务，会在 process.nextTick 后执行
- setTimeout、setInterval 和 setImmediate 属于宏任务，最后执行
- setTimeout 优先于 setImmediate 执行，但当 setTimeout 第二个参数为 0 的时候，因为 Node 做不到 0 ms，所以其取值在 [1, 2147483647] 之间，默认为 1 ms