---
title: css 样式23事
cover: '/images/common/img19.jpg'
date: 2019-01-23 15:34:44
tags: css 样式
---
<link rel="stylesheet" type="text/css" href="/css/19/index.css">

# css 样式23事（持续补充中）

## 知识点

0. 样式失效

> 具有伪类(或伪元素)的多个选择器会在伪类(或伪元素)错误的情况下失效
如：
 ```css
div, span:focus1 {
  color:red;
}
 ```

1. 三角形

> 宽高限制为 0, 利用border形成4个三角形

<div class="common triangle"></div>

```css
.triangle {
  border-top: 50px solid red;
  border-right: 50px solid green;
  border-bottom: 50px solid blue;
  border-left: 50px solid yellow;
}
```

2. 上三角(其他三种其中类似)

> 去掉底部 border, 左右border透明(底部border透明也可以，但会占据位置)

<div class="common top-triangle"></div>

```css
.top-triangle {
  border-top: 50px solid red;
  border-right: 50px solid transparent;
  /*border-bottom: 50px solid transparent;*/
  border-left: 50px solid transparent;
}
```

3. 左上三角形

> 去掉 左下，右侧透明

<div class="common left-top-triangle1"></div>

```css
.top-triangle {
  border-top: 50px solid red;
  border-right: 50px solid transparent;
  /*border-bottom: 50px solid transparent;*/
  /*border-left: 50px solid transparent;*/
}
```

`或`

> 去掉 上右，底部透明

<div class="common left-top-triangle2"></div>
```css
.top-triangle {
  /*border-top: 50px solid red;*/
  /*border-right: 50px solid transparent;*/
  border-bottom: 50px solid transparent;
  border-left: 50px solid yellow;
}
```

4. 箭头

> 上三角旋转形成头部，伪类使用1/4圆形(透明)+border绘制

<div class="common arrow"></div>
```css
.arrow {
  position: relative;
  border-top: 50px solid red;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;
  transform: rotate(-15deg);
}
.arrow::after {
  content: '';
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 100px 0 0 0;
  border-top: 30px solid red;
  transform: rotate(90deg);
  top: -160px;
  left: -100px;
}
```

5. 梯形

> 上三角消失，左右三角透明，加上一定宽度

<div class="common trapezoid"></div>
```css
.trapezoid {
  /*border-top: 50px solid red;*/
  border-right: 25px solid transparent;
  border-bottom: 25px solid blue;
  border-left: 25px solid transparent;
  width: 50px;
}
```

5. 心形

<div class="common heart"></div>

```css
.heart {
  position: relative;
  width: 100px; height: 90px;
}
.heart:before,
.heart:after {
  position: absolute;
  content: "";
  left: 50px; top: 0;
  width: 50px; height: 80px;
  background: red;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}
.heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
```

6. 伪类(:placeholder-shown)

> 使用 placeholder-shown 主要是为了兼容性和无障碍阅读，不使用也可以实现

```css
.input-wrapper {
  position: relative;
}
.input-wrapper > input {
  font-size: 20px;
  padding: 20px 10px;
}
.input-wrapper > input:placeholder-shown::placeholder {
  color:transparent;
}
.input-wrapper > label {
  font-size: 16px;
  position: absolute;
  left : 12px;
  top: 16px;
  pointer-events: none;
  transition: all 1s;
}
.input-wrapper > input:focus + label,
.input-wrapper > input:not(:placeholder-shown) + label {
  transform: translateY(-10px);
  font-size: 12px;
  transition: all 1s;
}
```
<div class="input-wrapper"><input type="text" placeholder="请输入姓名"><label>请输入姓名</label></div>

7. 伪类(:focus-within)

> 使用 focus-within 可以实现 ‘父类选择’ 这样的效果

 ```css
.input-wrapper-focus {
  display: flex;
  position: relative;
  border:1px solid #000;
  padding: 5px 5px 20px 5px;
  border-radius: 5px;
  transition: border-color 0.3s;
}
.input-wrapper-focus:focus-within {
  border-color: blue;
}
.input-wrapper-focus > textarea{
  flex: 1;
  width: 100%;
  border: 0;
  outline: none;
  resize: none;
}
.input-wrapper-focus > label {
  position: absolute;
  line-height: 1;
  right: 4px;
  bottom: 4px;
}
```
<div class="input-wrapper-focus"><textarea type="text" rows="4" placeholder="请输入姓名"></textarea><label>100</label></div>

8. 文本省略
   1. 单行  
    ```css
    width: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    ```
    2. 多行
   ```css
    width: 100px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
   ```

