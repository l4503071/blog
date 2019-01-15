---
title: node debug 方法
cover: '/images/common/img8.jpg'
date: 2019-01-13 15:29:54
tags: node debug chrome
---

# node 环境进行调试

1. 使用第三方工具
[node-inspect](https://github.com/nodejs/node-inspect)
2. 使用 chrome devtools （***推荐***）
  - 使用 node --inspect index.js 启动脚本
  - 打开 `chrome://inspect`
  - 找到刚启动的脚本，点开链接即可进行调试

还有其他方式，请参考下面文章。
### 参考文章
> https://nodejs.org/en/docs/guides/debugging-getting-started/
