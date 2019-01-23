---
title: requestAnimationFrame
cover: '/images/common/img17.jpg'
date: 2019-01-22 16:26:14
tags: requestAnimationFrame
---

# requestAnimationFrame

> 大部分浏览器的刷新频率为 60Hz, 即每帧之间的间隔为 1/60 *1000 = 16.7ms
> setTimeout, setInterval 的最小时间间隔为 4ms

> window.requestAnimationFrame(callback)
> callback 会传递一个参数，表示当前回调被触发的时间( = window.performance.now()）
> performance.timing.navigationStart + performance.now() 约等于 Date.now()

# 兼容方法
```js
(funtion(){
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var i = 0; i < vendors.length && !window.requestAnimationFrame; i++) {
    window.requestAnimationFrame = window[vendors[i]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[i]+'CancelAnimationFrame'] || window[vendors[i]+'CancelRequestAnimationFrame'];
  }
  if(!window.requestAnimationFrame) {
    window.requestAnimationFrame = funtion(callback) {
      var currentTime = new Date().getTime();
      var timeToCall = Math.max(0, 16.7 - (currentTime - lastTime));
      var id = window.setTimeout(function(){
        callback(currentTime + timeToCall);
      }, timeToCall);
      lastTime = currentTime + timeToCall;
      return id;
    }
  }
  if(!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    }
  }
})();

```

# 代码测试

> `请刷新当前页面，否则无法加载对应js文件`

## 1.requestAnimationFrame 实现定时器

<input type="button" value="点击开始" onclick="raf();"></input>
<div id='time'></div>

```js
// 点击事件
function raf() {
  const docTime = document.getElementById('time');
  const count = 500000;
  let index = 0;
  let old_time = null;
  let current_time = 0; // 秒
  function cb(t) {
    if (old_time === null) {
      window.requestAnimationFrame((t)=>{
        old_time = t;
        cb();
      })
      return;
    }
    if (index < count) {
      window.requestAnimationFrame((t)=>{
        if( t - old_time >= current_time ) {
          // console.log(current_time, new Date().getSeconds());
          docTime.innerText = current_time/1000;
          current_time += 1000;
        }
        index+=1;
        cb();
      })
    }
  }
  cb();
}
```

## 2.requestAnimationFrame 实现动画
<link rel="stylesheet" type="text/css" href="/css/17/index.css">

<input type="button" value="点击开始" onclick="raf1();"></input>
<div id="progress"></div>

```js
function raf1() {
  const docProgress = document.getElementById('progress');
  let step = 10;
  let direction = 1; // 1:正 -1:反
  const count = 500000;
  let index = 0;
  let current_time = 0; // 秒
  function cb(t) {
    if (index < count) {
      window.requestAnimationFrame((t)=>{
        const width = parseFloat(window.getComputedStyle(docProgress).width) - direction * step;
        if (width < 0 ) {
          direction = -1;
        }
        if (width > 500) {
          direction = 1;
        }
        docProgress.style.width = width + 'px';
        current_time += 1000;
        index+=1;
        cb();
      })
    }
  }
  cb();
}
```

<script src="/js/17/index.js"></script>
