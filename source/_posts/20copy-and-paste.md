---
title: javascript 剪贴板
cover: '/images/common/img20.jpg'
date: 2019-01-24 14:32:25
tags: javascript 剪贴板 copy paste
---

# javascript 剪贴板事件监听
> `请在当前页面刷新，以加载js文件`

## 1. copy 事件 

> 复制时增加其他文案，在控制台输出即可看到

```js
document.addEventListener('copy', function (event) {
  const clipboardData = event.clipboardData || window.clipboardData;
  if (!clipboardData) { 
    return; 
  }
  const text = window.getSelection().toString();
  if (text) {
      event.preventDefault();
      clipboardData.setData('text/plain', text + '\n😁\n');
  }
});
```

## 2. paste 事件

> 请在页面使用ctrl(or cmd)+C 和 ctrl(or cmd)+V，即可在线面看到输出内容

<div id = "paste"></div>

```js
document.addEventListener('paste', function (event) {
  const clipboardData = event.clipboardData || window.clipboardData;
  if (!clipboardData) { 
    return; 
  }
  const items = clipboardData.items || [];
  const docPaste = document.getElementById('paste');
  for (let i = 0; i < items.length; i++) {
    if(items[i].kind === 'string') {
      items[i].getAsString((item)=>{
        docPaste.innerText = item;
      })
    }
  }
});
```

# 参考
> 1. [copy: https://developer.mozilla.org/en-US/docs/Web/Events/copy](https://developer.mozilla.org/en-US/docs/Web/Events/copy)
> 2. [paste: https://developer.mozilla.org/en-US/docs/Web/Events/paste](https://developer.mozilla.org/en-US/docs/Web/Events/paste)
> 

<script src="/js/20/index.js"></script>