<!--
 * @Author: your name
 * @Date: 2020-03-09 22:48:32
 * @LastEditTime: 2020-03-09 22:50:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/39/README.md
 -->
## 减少http请求

### 图片地图
+ 问题：比如页面上有5张图片，每次点击都会发送一个http请求，这样就会发送5次请求。
+ 解决：可以使用图片地图，就是一个大图片里面有5个小图片，根据点击大图上不同的位置，发送请求，这样就会发送1次http请求

### css sprites 
+ 和图片地图类似，把小图片合成到一个大图中，通过点击图片上不同位置，发送http请求，这样也是只发送1次http请求。
```css
    #navBar {
        width:30px;
        height:30px;
        display:'inline';
        backgrond-image:url('/image/a.png')
    }
    .home {
        background-position:0 0;
        margin-right:4px;
        margin-left:4px;
    }
    .gift{
        background-position:-32px 0;
        margin-right:4px;
    }
    .cart{
        background-position:-64px 0;
        margin-right:4px;
    }
```

### 使用内联图片(base64)
+ data:url模式可以在web页面包含图片，并且没有http请求。缺点是存在数据大小的限制。
+ 不要直接把base64图片放在img标签中，这样编码后的base64会很大。应该把base64图片放到外联样式中，这样会缓存图片。但是也会增加一个http请求。

### 合并js脚本 & css样式文件
+ 如果拆成每个文件，每个文件都会发送http请求，如果合并成一个文件，就会只发送1个http请求，减少了http请求数量，缩短了响应时间。


## 使用内容分布网络cdn
### cdn是一组分布在多个不同地理位置的web服务器，用于更加有效的向用户发布内容。



## 添加Expires头
### 一个大网站页面初次访问，会有很多http请求。可以添加expries头，缓存图片等数据

### 浏览器使用缓存减少http请求数量，并减少http请求的大小，使web页面加载更快。web服务器使用expries头（结束时间）来告诉web客户端可以使用一个组件的副本（缓存），指导指定时间。

+ Expries: Thu, 15 Apr 2010 20:00:00 GMT
+ 上面这个expries头告诉浏览器响应结束时间是2010年4月15日。如果为页面添加了这个expries头，那么页面中的数据会使用这个缓存的页面数据。

+ Expries有个缺点：要求服务器和客户端时间一样，另外，过期日前需要检验，并且未来这一天来了，还需要在服务器提供一个新的日前。http1.1提供了Cache-Control来解决。

## Cache-Control
+ Cache-Control使用max-age指令 指定组件可以被缓存多久，以秒为单位。
+ Cache-Control:max-age = 1800

+ Expries 和Cache-Control可以同时设置。如果两个同时出现，http规定max-age将重写expries


## 压缩组件
### 减小http请求大小来减少响应时间（gzip）
+ Accept-Encoding:gzip deflate


## 将样式表放在顶部
### 使用link标签将样式表放在问的head中

## 将脚本放在底部

## 避免css表达式

## 使用外部js和css

+ 使用外部文件，浏览器会缓存这些文件

## 减少DNS查找

### DNS查找可以被缓存起来以提高性能。
### 通过使用Keep-Alive和较少的域名来减少DNS查找


## 精简js

+ 去除不需要的代码
+ 去除没必要的注释
+ 混淆代码
+ 结合gizp使用压缩过的库

## 避免重定向