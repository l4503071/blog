---
title: javascript 正则23事
cover: '/images/common/img18.jpg'
date: 2019-01-23 15:07:00
tags: javascript regex 正则
---

# javascript 正则表达式（持续补充中）

## 知识点

1. 匹配汉字
> Unicode 编码范围 \u4e00-\u9fa5

```js
function fun(str) {
  return /[\u4e00-\u9fa5]/.test(str);
}
```
