---
title: puppeteer记录
cover: '/images/common/img30.jpg'
date: 2019-05-28 20:03:51
tags: puppeteer linux
---

# puppeteer 部署在 linux 上遇到的问题

## puppeteer

- [github: https://github.com/GoogleChrome/puppeteer](https://github.com/GoogleChrome/puppeteer)

## 使用实例(截图功能)

- npm包: [github: https://github.com/l4503071/capture](https://github.com/l4503071/capture)
- npm包在linux部署: [github: https://github.com/l4503071/capture-example](https://github.com/l4503071/capture-example)

## 问题

1. linux上运行,包缺失问题
  - [办法: https://github.com/GoogleChrome/puppeteer/issues/391](https://github.com/GoogleChrome/puppeteer/issues/391)
  - 需要执行: `yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc -y`
  - 使用无沙盒模式运行: `const browser = await puppeteer.launch({ args: ['--no-sandbox']})`
2. linux上截图中文乱码
  - [办法: https://github.com/GoogleChrome/puppeteer/issues/1143](https://github.com/GoogleChrome/puppeteer/issues/1143)
  - 需要执行: `yum install wqy-unibit-fonts.noarch wqy-zenhei-fonts.noarch -y`