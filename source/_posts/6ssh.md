---
title: ssh无密访问
cover: '/images/common/img6.jpg'
date: 2019-01-12 14:56:34
tags: ssh 阿里云 无密访问
---
# ssh无密访问远程机器配置
## ssh原理
1. client访问server时，server将自己的公钥发给client；
2. client使用server的公钥对密码进行加密；
3. client将加密后的密码发送给server；
4. server使用私钥进行解密，并验证密码的准确性。

## ssh 的弊端
如果发送的请求被拦截，并返回攻击者的公钥，攻击者就可以使用自己的私钥进行解密，获得密码。

## ssh 口令
在第一次登陆远程server的时候，会弹出提示
```
The authenticity of host 'ssh-server.example.com (*.*.*.**)' can't be established.
RSA key fingerprint is 98:2e:d7:e0:de:9f:ac:67:28:c2:42:2d:37:16:58:4d.
Are you sure you want to continue connecting (yes/no)?
```
ssh不确定远程server的可靠性，需要你自己根据 ip 和 RSA key 确定server是否可靠。
在输出 yes 之后，ssh会将server的 **公钥** 记录到本地的 known_hosts 中。

## known_hosts 作用
在首次成功访问远程server时，会将server的**ip**和**公钥**记录到本地的 known_hosts 中，在下次访问的时候，根据 ip 确认server的 公钥是否正确，如果发生变了改变，则会弹出提示。
```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! 
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that the RSA host key has just been changed.
The fingerprint for the RSA key sent by the remote host is 36:68:a6:e6:43:34:6b:82:d7:f4:df:1f:c2:e7:37:cc.
Please contact your system administrator.Add correct host key in /**/.ssh/known_hosts to get rid of this message.
Offending key in /**/.ssh/known_hosts:2RSA host key for *.*.*.** has changed and you have requested strict checking.Host key verification failed. 
```
***解决办法***
打开 known_hosts，删除对应 ip 的记录即可。

## 免密登陆
1. 将client的公钥放到server的authorized_keys文件中；
2. client在登陆server的时候，如果 公钥 匹配，则使用 公钥 对随机生成的 字符串 进行加码，并返回给client；
3. client使用自己的私钥对字符串进行解密，返回给server；
4. server验证登陆。

## 简化登录流程
每次登录时，需要指定ip和用户名，可以使用以下方式简化（以登录阿里云威力）
1. 编辑 ~/.ssh/config 文件
2. 输入
```
Host "ali"
  HostName "47.110.148.208"
  Port 22
  User "root"
  IdentityFile "~/.ssh/id_rsa"
```
即可使用 `ssh ali` 登录远程服务器
