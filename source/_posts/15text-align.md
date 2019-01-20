---
title: text-align:justify
cover: '/images/common/img{num}.jpg'
date: 2019-01-20 16:57:08
tags: text-align text-align-last justify 
---
# CSS 最后一行文本 两端对齐(justify)

## text-align 文本对齐方

### 1. text-align:left
```html
<p style="text-align:left;">
  我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。
</p>
```
<p style="text-align:left;">
  我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。
</p>

### 2. text-align:center
```html
<p style="text-align:center;">
  我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。
</p>
```
<p style="text-align:center;">
  我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。
</p>

### 3. text-align:right
```html
<p style="text-align:right;">
  我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。
</p>
```
<p style="text-align:right;">
  我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。
</p>

### 4. text-align:justify
```html
<p style="text-align:justify;">
  我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。
</p>
```
<p style="text-align:justify;">
  我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。
</p>

## justify 最后一行也要两端对齐
```html
<p style="text-align:justify;text-align-last:justify;">
  我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。
</p>
```
<p style="text-align:justify;text-align-last:justify;">
  我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。
</p>

> P.S. text-align-last兼容性有限，[参考:https://caniuse.com/#search=text-align-last](https://caniuse.com/#search=text-align-last)

## 替代方案
<link rel="stylesheet" type="text/css" href="/css/15/index.css">
<p style="text-align:justify;" class="ta-wrapper"><span class="ta">我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。</span></p>

```html
.ta-wrapper {}
.ta {
  display: inline-block;
  width: 100%;
  text-align: justify;
  vertical-align: top;
}
.ta::after {
  content: '';
  display: inline-block;
  text-align: justify;
  height: 0;
  width: 100%;
}
<p class="ta-wrapper"><span class="ta">我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。我时一行测试文本，要很长的。</span></p>
```

> 原理：使用伪类将最后一行文本强行撑满，使justify对齐方式生效
> 缺点：文本的下方多处一行空白(暂未解决)
