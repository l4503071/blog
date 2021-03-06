---
title: vscode使用记录
cover: '/images/common/img22.jpg'
date: 2019-01-31 18:43:47
tags: vscode
---

# Visual Studio Code (Mac) 使用记录

> ⌘: command
> ⇧: shift
> ⌥: option
> ⌃: ctrl

## 快捷键
1. `⌘B`: 隐藏/显示左侧菜单栏
2. `⌥`: 点击左侧文件，分栏显示
3. `⌘,`: 打开配置页面 (`⇧⌘P`，搜索 setting 打开配置文件)
4. `⇧⌘P`: 打开命令面板
5. `⌃G`: 跳转到指定行
6. `⌥⌘→`: 切换editor
7. `⌘1`: 切换到指定 editor group
8. `⌘ K + ⌘ S`: 显示快捷键
9. `⌥↓ 或 ⌥↑`: 上下移动当前行
10. `⇧⌥↓ 或 ⇧⌥↑`: 上下复制当前行
11. `⇧⌘K`: 删除当前行
12. `⇧⌘Enter / ⌘Enter`: 上下插入当前行
13. `⇧⌘\`: 跳转到匹配的括号
14.  `⌘] / ⌘[ `: 控制缩进
15.  `⌘→ / ⌘← `: 行首/行尾
16.  `⌘↑ / ⌘↓ `: 文件首/文件尾
17.  `⌥ + click`: 选择多行
18.  `⌥⌘↑ / ⌥⌘↓`: 多选上下行
19.  `⇧⌘L`: 根据当前选择编辑所有
20.  `⌘K Z/ Esc Esc`: 进入全屏/退出
21.  `⌃``: 打开终端
22.  `⌘K M`: 改变文件语言
23.  `⌘K ⌘T`: 更改主题
24.  `⌥⌘[ / ⌥⌘]`: 折叠块，打开块
25.  `⌘K M`: 更改文档模式

[keyboard shortcuts for Mac](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
<a href="/images/22/1.png" data-lightbox="img1">
  ![1](/images/22/1.png)
</a>

> VS Code 命令行启动:
> `⇧⌘P` 搜索 code 并安装，在命令中使用 code fileName 即可 

## plugin

1. [Paste and Indent](https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent)
> 代码缩进控制

## 问题

1. Could not create temporary directory: 权限被拒绝
> 执行 sudo chown $USER ~/Library/Caches/com.microsoft.VSCode.ShipIt/

2. VS Code 使用 `decorator` 默认给出警告信息
> 选择 `code -> preferences -> setting`,选择 `json` 模式,添加 `"javascript.implicitProjectConfig.experimentalDecorators": true` 即可

3. webpack alias 支持 command+click 跳转
> 在项目根目录创建 jsconfig.json文件,内容如下,其中**path**对应alias中的别名.
 ```json
 {
  "exclude": [
    "node_modules",
    "build"
  ],
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@yp-rax-services/*": ["services/*"],
      "@yp-rax-floors/*": ["floors/*"],
      "@yp-rax-components/*": ["components/*"],
      "@yp-rax-modules/*": ["modules/*"]
    }
  }
}
 ```