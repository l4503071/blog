---
title: 阿里云搭建个人博客 从0到1
cover: '/images/common/img13.jpg'
date: 2019-01-18 15:49:20
tags: 阿里云 博客 nginx
---

# 使用阿里云搭建个人服务器

1. 访问[阿里云](!https://www.aliyun.com/)，并登录(建议使用支付宝等，免输入密码)
2. 购买任意 `云服务器ECS` (个人服务器，最便宜的即可，我当时参加活动买了1年200多的)
3. 登录 `控制台` ，选择左侧菜单中 `云服务器ECS -> 实例`，即可看到已经购买的服务器(***请记住提示的登录密码，以便后续使用网页登录服务器使用***)
4. 参考 文章 [ssh免密登录](http://blog.sunshine1990.com/2019/01/12/6ssh/)，设置免密登录远程服务器，也可以使用网页版进行远程登录
5. 申请域名，在阿里云控制台中选择 `域名`，并进行购买，如果是大陆域名，需要进行 `域名备案` 才能使用，具体备案步骤，按照操作流程进行即可，期间会有阿里云客服与你进行联系(期间大概需要1个月时间，工信部审核时间比较20多天)
6. 配置域名，点击下图的 `解析`
<a href="/images/13/1.png" data-lightbox="img1">
  ![1](/images/13/1.png)
</a>
参考下面配置
<a href="/images/13/2.png" data-lightbox="img2">
  ![2](/images/13/2.png)
</a>
为了能够使用80端口进行访问，需要开放对应的端口，打开实例页面
<a href="/images/13/3.png" data-lightbox="img3">
  ![3](/images/13/3.png)
</a>
添加安全规则
<a href="/images/13/4.png" data-lightbox="img4">
  ![4](/images/13/4.png)
</a>
6. 安装 [hexo](!https://hexo.io/zh-cn/)，创建个人博客，参考[仓储](https://github.com/l4503071/blog)
7. 安装 nginx，并进行配置
参考配置如下(/**/nginx/conf/nginx.conf):

```
user  root;
worker_processes  1;

error_log  /usr/local/nginx/logs/error.log  info;

pid        /usr/local/nginx/logs/nginx.pid;

worker_rlimit_nofile 65535;
events {
    use                 epoll;
    worker_connections  65535;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /usr/local/nginx/logs/access.log  main;

    sendfile        on;
    tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    gzip  on;

    server {
        listen       80;
        server_name  sunshine1990.com;
        location / {
            rewrite .* http://blog.sunshine1990.com;
        }
    }

    server {
        listen       80;
        server_name  blog.sunshine1990.com;
        access_log  /usr/local/nginx/logs/blog.access.log  main;
        location / {
            root   /root/sites/blog;
            index  index.html;
        }
    }

    server {
        listen       80;
        server_name  mock.sunshine1990.com;
        access_log  /usr/local/nginx/logs/rap.access.log  main;
        location / {
            root   /root/project/rap2-dolores/build;
            index  index.html;
        }
    }

    server {
        listen       80;
        server_name  util.sunshine1990.com;
        access_log  /usr/local/nginx/logs/util.access.log  main;
        location / {
            root   /root/project/react-util/build;
            index  index.html;
        }
        location ~ ^/static/.* {
            rewrite .* /$uri break;
            root   /root/project/react-util/build;
        }
        location ~* / {
          rewrite .* /index.html break;
              root   /root/project/react-util/build;
          }
        }
    }
}
```
8. 使用域名访问服务器，没有域名也可使用公网ip访问服务器

> 可以愉快的开始访问了，如有疑问，欢迎留言