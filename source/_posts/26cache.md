---
title: 缓存
cover: '/images/common/img26.jpg'
date: 2019-02-28 10:44:35
tags: cache
---

# 缓存

## 强缓存

> 不需要从新请求，code 直接为200

1. Expires
   1. HTTP/1.0 产物，后面时间表示过期时间，会受本地时间影响
2. Cache-Control
   1. HTTP/1.1 产物，优先级高于 Expires
   2. 请求头和响应头都支持该属性

## 协商缓存

> 缓存有效，code 返回 304

1. 基于文本最后修改日期
   1. Last-Modified(服务端设置)
   2. If-Modified-Since(客户端设置)
2. 基本文件指纹
   1. ETag(服务端设置)
   2. If-None-Match(客户端设置)

## 策略

1. Cache-Control: no-store 禁止缓存
2. Cache-Control: no-cache 配合 ETag 使用，每次都请求改资源，判断资源是否已经更新
3. Cache-Control: max-age=time 控制缓存时间