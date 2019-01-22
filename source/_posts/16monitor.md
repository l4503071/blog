---
title: 监控系统方案
cover: '/images/common/img16.jpeg'
date: 2019-01-21 11:44:00
tags: monitor 监控 方案
---
# 前端监控方案简单分析

## 分类
1. Eagle 日志监控，邮件报警
2. Monitor 图形界面监控，邮件(或其他)报警

### Eagle
1. 原理
  线上部署机器运行客户端(以下简称client)代码，代码负责分析日志系统，根据指定规则过滤日志，满足要求则将日志发送到服务端(以下简称server)。server收集到所有client发送的日志，再次分析过滤，如果满足规则，则触发邮件报警。

2. 数据流程图
<a href="/images/16/1.png" data-lightbox="img1">
  ![1](/images/16/1.png)
</a>

3. 日志规则
以 `&nbsp;|&nbsp;` 分割，各项数据依次为：
- 日志类型
- 时间
- 访问地址(用户ip，代理1，代理2，···)
- http状态码
- 业务码
- 请求方法
- 发起请求页面的地址
- 请求接口的url
- 运行环境
- 请求耗时
- 请求错误(或者接口的traceID)

> - 2017-10-18 14:57:07 +08:00: proxy access : | 
> - Wed Oct 18 2017 14:57:07 GMT+0800 (CST) | 
> - 113.129.99.190, 180.97.88.105, 120.27.173.48, 10.252.147.203, 113.129.99.190, 10.46.73.145 | 
> - 200 | 
> - 0 | 
> - GET | 
> - http://m.qufenqi.com/v2/aj/user/home | 
> - http://www.qufenqi.com/api/v3/recommend_sku?referer_page=user | 
> - Mozilla/5.0 (Linux; U; Android 7.0; zh-CN; PRA-AL00X Build/HONORPRA-AL00X) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.89 UCBrowser/11.6.4.950 UWS/2.11.0.20 Mobile Safari/537.36 UCBS/2.11.0.20 Nebula AlipayDefined(nt:4G,ws:360|0|3.0) AliApp(AP/10.1.2.091816) AlipayClient/10.1.2.091816 Language/zh-Hans useStatusBar/true | 
> - 11ms | 
> - 1C4DB28E-1104-4568-ACEC-AD1D52C66187

4. client发送日志规则
- proxy access 正常访问日志，用于业务分析
- proxy error 后端Node错误，包含接口状态码异常和接口抛异常两种
  - 接口状态码异常
    <a href="/images/16/3.png" data-lightbox="img3">
      ![3](/images/16/3.png)
    </a>
  - 接口抛异常
    <a href="/images/16/2.png" data-lightbox="img2">
      ![2](/images/16/2.png)
    </a>
- node error 前端node错误
<a href="/images/16/4.png" data-lightbox="img4">
  ![4](/images/16/4.png)
</a>

5. server邮件报警规则

> - 每隔10s统计一次数据
> - 满足下列任意条件即发送报警邮件
>   a. allErr(5): 所有接口一共发生 proxy error 次数
>   b. urlErr(3): 单个接口发生 proxy error 次数
>   c. nodeErr(0): 发生 node error 接口的数量
>   d. noExistErr(3): 单个接口错误包含为 'Request does not exist!' 的数量
>   e. allNoExistErr(5): 所有接口错误包含为 'Request does not exist!' 的数量
<a href="/images/16/5.png" data-lightbox="img5">
  ![5](/images/16/5.png)
</a>

### Monitor
1. 原理
  RoboMongo 配置某种数据的过滤规则，然后在监控中心配置报警规则，最后在 Grafana 查看图形列表

2. 数据流程图
<a href="/images/16/6.png" data-lightbox="img6">
  ![6](/images/16/6.png)
</a>

3. RoboMongo配置
<a href="/images/16/7.png" data-lightbox="img7">
  ![7](/images/16/7.png)
</a>
- name/id 显示和筛选
- data 对应埋点中数据
  - properties|channel 根据该字段过滤
  - properties|page_url 根据该字段过滤
  - project_id 项目
  - emit Monitor中使用的字段
  - to_heavy_way 结果的计算方法
  - event 事件类型

4. Monitor 配置
<a href="/images/16/8.png" data-lightbox="img8">
  ![8](/images/16/8.png)
</a>
<a href="/images/16/9.png" data-lightbox="img9">
  ![9](/images/16/9.png)
</a>


