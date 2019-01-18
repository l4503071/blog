---
title: chrome模拟支付宝或微信环境
cover: '/images/common/img4.jpeg'
date: 2019-01-08 18:48:57
tags: chrome alipay weixin WX user-agent
---

# 原理
使用 **window.navigator.userAgent** 模拟，实际代码一般通过判断 userAgent 是否包含特殊字段进行环境区分。

- 支付宝(alipay):
````
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16B92 NebulaSDK/1.8.100112 Nebula PSDType(1) AlipayDefined(nt:WIFI,ws:375|603|2.0) AliApp(AP/10.1.52.6006) AlipayClient/10.1.52.6006 Alipay Language/zh-Hans
````
- 微信(WeiXin):
````
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16B92 MicroMessenger/6.7.2 NetType/WIFI Language/zh_CN
````
# 获取本机 userAgent 方法
访问 [util.sunshine1990.com/user_agent](http://util.sunshine1990.com/user_agent) 即可查看

# 步骤

1. 打开 Chrome 调试工具，并点击<font color="red"> 红框 </font>位置调整为 **移动端** 模式；
  <a href="/images/chrome_debug_alipay_and_weixin/1.png" data-lightbox="img1">
    ![1](/images/chrome_debug_alipay_and_weixin/1.png)
  </a>
2. 点击下图<font color="red"> 红框 </font>位置，显示模拟手机型号；
  <a href="/images/chrome_debug_alipay_and_weixin/2.png" data-lightbox="img2">
    ![2](/images/chrome_debug_alipay_and_weixin/2.png)
  </a>
3. 选择 **Edit**；
  <a href="/images/chrome_debug_alipay_and_weixin/3.png" data-lightbox="img3">
    ![3](/images/chrome_debug_alipay_and_weixin/3.png)
  </a>
4. 选择 **Add custom device**，新增手机类型；
  <a href="/images/chrome_debug_alipay_and_weixin/4.png" data-lightbox="img4">
    ![4](/images/chrome_debug_alipay_and_weixin/4.png)
  </a>
5. 在<font color="red"> 红框 </font>位置写入上述对应的字符串即可；
  <a href="/images/chrome_debug_alipay_and_weixin/5.png" data-lightbox="img5">
    ![5](/images/chrome_debug_alipay_and_weixin/5.png)
  </a>
6. 回到第2步，选择新增的手机型号即可。
