---
title: Redux
cover: '/images/common/img24.jpg'
date: 2019-02-21 10:33:09
tags: redux
---

> 判断当前文件是否被压缩，可以通过函数名字是否发生改变进行判断(函数function isCrushed() {}中)
> `typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed' `

## 简单使用

```js
import { createStore } from 'redux'
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
let store = createStore(counter)
store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
```

## 复杂使用
```js
let action = {
  type: 'ADD_TODO',
  text: 'Understand the flow.'
}
let previousState = {
  visibleTodoFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Read the docs.',
      complete: false
    }
  ]
}
function todos(state = [], action) {
  // Somehow calculate it...
  return nextState
}
function visibleTodoFilter(state = 'SHOW_ALL', action) {
  // Somehow calculate it...
  return nextState
}
let todoApp = combineReducers({
  todos,
  visibleTodoFilter
})
let nextState = todoApp(previousState, action)
// 触发
// let nextTodos = todos(state.todos, action)
// let nextVisibleTodoFilter = visibleTodoFilter(state.visibleTodoFilter, action)
// return {
//   todos: nextTodos,
//   visibleTodoFilter: nextVisibleTodoFilter
// }
```



## 待补充
