---
title: 使用VPS翻墙
date: 2018-12-29 15:17:19
cover: /images/common/img2.jpg
tags: 翻墙 梯子
---

> 说明: 此技术非免费技术，需要花费大约200RMB购买VPS（500G/每月），如果有更高的需求，可以购买价位更高的VPS
# 步骤
1. 进入搬瓦工官网，[点击进入](https://bwh1.net/)
2. 点击右上角Register，注册账号
3. 登陆后，点击右上角的Client Area按钮
4. 点击中间Order New Service，如下图
  ![order new service](/images/goWhere/service.png)
5. 选择 SPECIAL 10G KVM PROMO V3 - LOS ANGELES - CN2 (中国专线)点击 Order Now，然后购买并付款
  ***P.S. 付款前输入优惠码 BWH1ZBPVK 即可优惠6% ***
6. 点击上图中的Services，选择My Services，即可看到你购买的VPS，如下图
  ![my service](/images/goWhere/my.png)
7. 点击订单后面的 KiwiVM Control Panel，即可进入VPS的管理界面
8. 在VPS上安装 Shadowsocks Server，在当前页面输入 https://kiwivm.64clouds.com/main-exec.php?mode=extras_shadowsocks，点击Install，等待安装完毕
9. 安装完毕后，会提示如何在本地配置shadowsocks，并连接上VPS的Shadowsocks Server，按照提示走完即可

***
  P.S. 
  - shadowsocks(Mac版)下载地址: https://github.com/shadowsocks/shadowsocks-iOS/releases
  - Chrome代理配置因人而异，贴一下我设置的代理
  ![vps](/images/goWhere/vps.png)
  其中local1080负责连接Shadowsocks Server
***
