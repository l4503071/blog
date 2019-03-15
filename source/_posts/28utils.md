---
title: 常用工具类
cover: '/images/common/img28.jpg'
date: 2019-03-15 14:44:37
tags: javascript utils
---

# javascript 常用工具函数

## 解析 url 参数

```js
function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  var search = url.substring(url.lastIndexOf('?') + 1);
  var obj = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function(rs, $1, $2) {
    var name = decodeURIComponent($1);
    var val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}
```

## 图片旋转

```js
/**
 * base64 图片的base形式
 * deg    旋转角度
 **/
function imageRotate(base64, deg = 0) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = base64;
    img.onload = function o() {
      const canvas = document.createElement('canvas');
      canvas.width = this.height;
      canvas.height = this.width;
      const ctx = canvas.getContext('2d');
      ctx.rotate((-90 * Math.PI) / 180);
      ctx.translate(-this.width, 0);
      ctx.drawImage(this, 0, 0, this.width, this.height);
      resolve(canvas.toDataURL());
    };
    img.onerror = function e() {
      reject(new Error('图片处理失败'));
    };
  });
}
```

## base64 转 blob 对象

```js
function dataURLToBlob(base64) {
  var parts = dataURL.split(';base64,');
  var contentType = parts[0].split(':')[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);
  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: contentType });
};
```

## 压缩图片

```js
/** 压缩图片
 * @param {Object} file 上传对象files[0]
 * @param {Object} options 压缩设置对象
 * @param {Function} callback 回调函数
 * @result {Object} 返回blob文件对象
 * */
var compressImg = function(file, options, callback) {
  var self = this;
  var imgname = file.name;
  var imgtype = imgname.substring(imgname.lastIndexOf('.') + 1).toLowerCase();
  if (imgtype == 'jpg' || imgtype == 'jpeg') {
    imgtype = 'image/jpeg';
  } else {
    imgtype = 'image/png';
  }
  // 用FileReader读取文件
  var reader = new FileReader();
  // 将图片读取为base64
  reader.readAsDataURL(file);
  reader.onload = function(evt) {
    var base64 = evt.target.result;
    // 创建图片对象
    var img = new Image();
    // 用图片对象加载读入的base64
    img.src = base64;
    img.onload = function() {
      var that = this,
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
      canvas.setAttribute('width', that.width);
      canvas.setAttribute('height', that.height);
      // 将图片画入canvas
      ctx.drawImage(that, 0, 0, that.width, that.height);
      // 压缩到指定体积以下（M）
      if (options.size) {
        var scale = 0.9;
        (function f(scale) {
          if (base64.length / 1024 / 1024 > options.size && scale > 0) {
            base64 = canvas.toDataURL(imgtype, scale);
            scale = scale - 0.1;
            f(scale);
          } else {
            callback(base64);
          }
        })(scale);
      } else if (options.scale) {
        // 按比率压缩
        base64 = canvas.toDataURL(imgtype, options.scale);
        callback(base64);
      }
    };
  };
};
```

## 图片预览

```js
/**
 * 图片预览
 * @param {Object} $fileInput 文件上传file
 * @param {Object} $previewImg 预览图片的image元素
 */
function previewImg($fileInput, $previewImg) {
  $fileInput.onchange = function($event) {
    var $target = $event.target;
    if ($target.files && $target.files[0]) {
      var reader = new FileReader();
      reader.onload = function(evt) {
        $previewImg.src = evt.target.result;
      };
      reader.readAsDataURL($target.files[0]);
    }
  };
}
```

## 下载图片

```js
function download(dataURL, filename) {
  var blob = dataURLToBlob(dataURL);
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.style = 'display: none';
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}
```

## 判断当前运行环境

```js
function checkua() {
  const { userAgent } = window.navigator
  const isMobile = {
    Android() {
      return !!userAgent.match(/Android/i);
    },
    IOS() {
      return !!userAgent.match(/iPhone|iPad|iPod/i);
    },
    any() {
      return (isMobile.Android() || isMobile.IOS());
    },
    alipay() {
      return !!userAgent.match(/AlipayClient/i)
    },
    wechat() {
      return !!userAgent.match(/MicroMessenger/i)
    }
  };
  return isMobile;
}
```

