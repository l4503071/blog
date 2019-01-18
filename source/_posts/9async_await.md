---
title: async await
cover: '/images/common/img9.jpeg'
date: 2019-01-13 16:07:29
tags: async await ES7
---

# 测试题
```javascript
async function async1 () {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2 () {
    console.log('async2');
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});

console.log('script end');

// 输入内容？
```
输出：
```
script start
async1 start
async2
promise1
script end
promise2
// 下面输出有待争议，在不同版本下，结果不确定
// 详情可以参考 https://v8.dev/blog/fast-async
async1 end
setTimeout
```

# 概念
1. javascript 是单线程的，所有任务都在主线程中执行
2. 除了主线程之后，还有一个任务队列，没当异步任务执行的时候，会加到任务队列中
3. 当主线程执行完毕后，会依次在任务队列中读取任务，进行执行
4. 异步任务的分类
  - 微任务(micro task): Promise process.nextTick
  - 宏任务(macro task): setTimeout setInterval I/O
5. 同时间任务，微任务在宏任务之前执行

# async await (generator 函数的语法糖)
## async
*** async使得函数返回的值为Promise对象 ***
*** await执行异步代码 ***



