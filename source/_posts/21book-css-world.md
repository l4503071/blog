---
title: 读书笔记-《CSS世界》
cover: '/images/common/img21.jpeg'
date: 2019-01-24 16:05:43
tags: CSS世界
---
<link rel="stylesheet" href="/css/21/index.css">

# 《CSS世界》

> [百度云:https://pan.baidu.com/s/1QkNb2-rVYhy7lSTk1kTwrQ](https://pan.baidu.com/s/1QkNb2-rVYhy7lSTk1kTwrQ)
> 密码:5pqo

## 1. clear: both
> - clear: both 清除左右浮动效果(要么 clear:left 生效，要么 clear:right 生效，互斥)，使该元素与左(或右)元素不相邻(换行)。
> - 只对块级元素有效

<div class="float-wrapper"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><div class="clear"></div><span>1</span><span>2</span><span>3</span></div>

```html
<div class="float-wrapper">
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
  <span>5</span>
  <span>6</span>
  <span>7</span>
  <span>8</span>
  <span>9</span>
  <div class="clear"></div>
  <span>1</span>
  <span>2</span>
  <span>3</span>
</div>
```

```css
.float-wrapper {
  background-color: pink;
}
.float-wrapper > span {
  float: left;
}
.float-wrapper > span:nth-of-type(3) {
  clear:both;
}
.clear {
  clear:both;
}
```

## 2. min-* (or max-*)级别比 *!important 高

> max-height: 50px; 把 height: 100px!important; 覆盖了

<div class="min-max"></div>

```css
.min-max {
  height: 100px!important;
  width: 100px;
  background-color: pink;
  max-height: 50px;
}
```

> 当 min-* 比 max-* 设置的值还大时，min-* 有效

> min-* 和 max-* 是可以设置过度动画的，而height(or width):auto;(or 100%)，是不可以的

## 3. object-fit

> 设置图片的填充模式，类似于 background-size

## 4. padding

> 1. padding 的百分比无论是水平方向还是垂直方向都是相对父容器的宽度计算的

## 5. margin

> 1. margin 的百分比无论是水平方向还是垂直方向都是相对父容器的宽度计算的
> 2. 相邻块级元素（非BFC）上下的 margin 会合并
> 3. 父级和第一个(or 最后一个)子元素，margin 会合并(全部作用到父级上)
> 4. margin 合并规则：正正取最大，负负取最负，正负值相加
> 5. margin-left: auto; 可以实现块级元素右对齐 (或水平居中)

<div class="margin-wrapper5">
  <div class="child">
  </div>
</div>

> 6. margin: auto; 和绝对定位可以使块级元素垂直水平居中

<div class="margin-wrapper6">
  <div class="child">
  </div>
</div>

> 7. margin: auto; 可以起作用的前提：去掉对应方向 height(或width)，块级元素可以自己撑满父元素




## 6. 内联元素

> 1. 高度完全受 font-size 大小控制