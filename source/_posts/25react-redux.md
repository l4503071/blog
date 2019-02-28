---
title: react-redux
cover: '/images/common/img25.jpg'
date: 2019-02-21 11:35:09
tags: react-redux
---

## API

### 1.connect

```js
function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
```

- mapStateToProps?: (state, ownProps?) => Object
  - 映射后的数据与当前props合并
  - 如果不想监听store更新，则传递`null`或`undefined`即可
- mapDispatchToProps?: Object | (dispatch, ownProps?) => Object
  - 组件会默认收到`dispatch`属性，如果使用`Object`则不会收到`dispatch`属性
  - `Object`类型，react-redux 会自动转化为`Function`类型，并调用`bindActionCreators`函数绑定`dispatch`
- mergeProps?: (stateProps, dispatchProps, ownProps) => Object
  - 默认：`{ ...ownProps, ...stateProps, ...dispatchProps }`
- options?: Object [参考](https://react-redux.js.org/api/connect)
```js
{
  context?: Object,
  pure?: boolean,
  areStatesEqual?: Function,
  areOwnPropsEqual?: Function,
  areStatePropsEqual?: Function,
  areMergedPropsEqual?: Function,
  forwardRef?: boolean,
}
```

