---
title: React知识整理
cover: '/images/common/img23.jpg'
date: 2019-02-20 16:18:46
tags: React
---

# 声明周期

> `UNSAFE_*` 17.0 版本移除

## 1.挂载阶段

- `constructor()`
- `static getDerivedStateFromProps()`
  - 初始挂在和更新阶段都会调用
- `UNSAFE_componentWillMount()` 
- `render()`
- `componentDidMount()`

## 2.更新阶段

- `static getDerivedStateFromProps()`
- `shouldComponentUpdate()`
  - 返回`false`不会触发`componentDidUpdate`、`render`
  - 初始`render`不会调用
  - `forceUpdate`不会调用
- `UNSAFE_componentWillUpdate`
- `UNSAFE_componentWillReceiveProps()`
- `render()`
- `getSnapshotBeforeUpdate()`
  - 渲染dom之前调用，可以计算相关数据然后通过`return`传递到`componentDidUpdate()`中
- `componentDidUpdate()`

## 3.卸载阶段

- `componentWillUnmout()`

## 4.错误捕获

- `static getDerivedStateFromError()`
  - 返回值更新 state
- `componentDidCatch()`
  - 进行非更新操作，比如记录操作日志

## 5.API

- `forceUpdate()`
  - 跳过`shouldComponentUpdate`执行`render`
  - 正常触发子组件的所有声明周期函数