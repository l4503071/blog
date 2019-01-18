---
title: destructuring-assignment
date: 2018-12-29 19:10:08
cover: /images/common/img3.jpeg
tags: destructuring assignment 解构赋值
---


# Destructuring Assignment(解构赋值)

---

## 实例

### 1.对象解构赋值
```javascript
    const {name: f,age: a} = {name: 'ss', age: 18}
    // f = 'ss', a = 18
    const {name, age} = {name: 'ss', age: 18}
    // 等同于 {name:name, age:age}
    // name = 'ss', s = 18
    const {name,age,...obj} = {name: 'ss', age: 18, sex: 'male'} 
    // obj = {sex: 'male'}
    const info = {name: 'ss'}
    const {writable, configurable} = Object.getOwnPropertyDescriptor(obj, 'name')
    // writable = true, configurable = true
    const KEY = Symbol()
    const obj = { [KEY]: 'abc' }
    const { [KEY]: x } = obj
    // x = 'abc'
```

### 2.数组（字符串）解构赋值
```javascript
    const list = [1, 2, 3]
    const [a, b, c] = list
    // a = 1, b = 2, c = 3
    const [all, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2018-07-23')
    // all = '2018-07-23', year = '2018', month = '07', day = '23'
    const [x,...y] = 'abc'
    // x='a'; y=['b', 'c']
    const [x,y] = new Set(['a', 'b'])
    // x='a'; y='b’;
    const [,, x, y] = ['a', 'b', 'c', 'd']
    // x = 'c'; y = 'd'
    const map = new Map().set('name', 'ss').set('age', 18);
    for (const [key, value] of map) {
      console.log(key + ' is ' + value)
    }
    // name is ss
    // age is 18
```

### 3.解构赋值初值（函数的解构赋值）
```javascript
    const [x=3, y] = []
    // x = 3; y = undefined
    const {foo: x=3, bar: y} = {}
    // x = 3; y = undefined
    const [x=1] = [undefined]
    // x = 1
    const [x=3, y=x] = []
    // x=3; y=3
    const [x=3, y=x] = [7]
    // x=7; y=7
    const [x=3, y=x] = [7, 2]
    // x=7; y=2
    const [x=y, y=3] = []
    // ReferenceError
```

### 4.深层次解构赋值
```javascript
    const obj = { info: [{ age: 18, name: 'ss' }, {}], b: true };
    const { info: [{age: a}] } = obj
    // a = 18
```

### 5.解构赋值需要注意的点
```javascript
    ({} = [true, false])
    ({} = 'abc')
    ({} = undefined)
    ({} = null)
    let x
    [x] = { * [Symbol.iterator]() { yield 1 } }
    [x] = {}
    [x] = undefined
    [x] = null
```

- [iterator] Array, Set, Map
- [ToObject](http://www.ecma-international.org/ecma-262/6.0/#sec-toobject)  

## 思考题(易错点)

> 以下语句合法么？

```javascript
    const obj = {}
    ({name: obj.name} = {name: 'ss'})
```

> a=2 执行了么？

```javascript
    function fun({a=2}) {
        console.log(a)    
    }
    fun({a:3})
```

> 以下语句合法么？

```javascript
    function f(name = getName()) {
        console.log(name)
        function getName() {
            return "ss"
        }
    }
```
> 下面输出的结果？

```javascript
    let [a, b, c, d, e] = [1, 2, 3, 4, 5]
    [b, c, d, e, a] = [a, b, c, d, e]
    console.log(b, c, d, e, a)
```

> 下面输出的结果？

```javascript
    let obj = {name: {firstName: 'ss'}, age: 18}
    let {...obj_cp} ={obj}
    obj_cp.age = 19
    obj_cp.name.firstName = "ss_cp"
    console.log(obj)
```

> 下面输出的结果？

```javascript
    // 1
    const {name,age,...obj} = {name: 'ss', age: 18}
    console.log(obj)
    // 2
    const {name,...obj, age} = {name: 'ss', age: 18}
    console.log(obj)
    // 3
    const [x, y, ...z] = ['a']
    console.log(x, y, z)
```

> 下面输出的结果？

```javascript
    // 1
    const [{ prop: x } = {}] = []
    console.log(x)
    // 2
    const [{ prop: x } = { prop: 123 }] = [{}]
    console.log(x)
    // 3
    const FOO = 'foo'
    const { [FOO]: f } = { foo: 123 }
    console.log(f)
```

# P.S.
***`({age} = 18)`引发的<span style="color:red;">血案</span> ***