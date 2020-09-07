<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-08 11:23:00
 * @LastEditTime : 2020-01-22 16:31:18
 * @LastEditors  : Please set LastEditors
 -->
## cookie
### 用途
+ 会话状态管理（如用户登录状态，购物车，游戏分数，或其他需要记录的信息）
+ 个性化设置（如用户自定义设置、主题等）
+ 浏览器行为跟踪（如跟踪分析用户行为等

### 创建cookie
+ 当服务器收到HTTP请求时，服务器可以在响应头里面添加一个Set-Cookie选项。浏览器收到响应后通常会保存下Cookie，之后对该服务器每一次请求中都通过Cookie请求头部将Cookie信息发送给服务器。另外，Cookie的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。
```http
    HTTP/1.0 200 OK
    Content-type: text/html
    Set-Cookie: yummy_cookie=choco
    Set-Cookie: tasty_cookie=strawberry
```
+ 现在，对该服务器发起的每一次新请求，浏览器都会将之前保存的Cookie信息通过Cookie请求头部再发送给服务器。
```http
    GET /sample_page.html HTTP/1.1
    Host: www.example.org
    Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

### 会话期cookie
+ 会话期Cookie是最简单的Cookie：浏览器关闭之后它会被自动删除，也就是说它仅在会话期内有效。会话期Cookie不需要指定过期时间（Expires）或者有效期（Max-Age）。需要注意的是，有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期Cookie也会被保留下来，就好像浏览器从来没有关闭一样。
### 持久性cookie
+ 和关闭浏览器便失效的会话期Cookie不同，持久性Cookie可以指定一个特定的过期时间（Expires）或有效期（Max-Age）。
```http
    Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

### Cookie的Secure 和HttpOnly 标记
+ Secure：cookie只能通过https协议加密过的请求发送给服务端
+ HttpOnly ：为避免XSS，不允许待httponly标记的cookie

### cookie作用域
+ Domain和Path 标识定义了cookie的作用域：即cookie应该发送给哪些url
+ Domain指定哪些主机可以接受cookie。如果不指定，默认为当前文档的主机（不包含子域名）。如果指定Domain，则一般包含子域名。
+ Path:指定了主机下的哪些路径可以接受cookie（该url路径必须存在于请求url中）。
  - 例如：设置Path=/docs，则以下地址都会匹配
    + /docs
    + /docs/web
    + /docs/web/http

### js创建cookie
```js   
    //以健值对形式存储
    document.cookie = "a=b"
    document.cookie = "c=d"
    console.log(document.cookie) //a=b; c=d

    //添加一个过期时间
    document.cookie = "name=xiaofei; expires=Thu, 18 Dec 2043 12:00:00 GMT"
    //使用path参数告诉浏览器cookie的路径。默认情况下，cookie属于当前页面
    document.cookie = "name2=xiaofei2; expires=Thu, 18 Dec 2041 12:00:00 GMT;path=/aaa"
```

### js读取cookie
```js
    var cookieVal = document.cookie
```

### js修改cookie
```js
    //和创建cookie一样
    document.cookie = "name=aaa"
```

### js删除cookie
```js
    //将expires参数设置为以前的时间即可
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

### 设置cookie值
```js
    //设置cookie值的函数
    function setCookie(cname,cvalue,exdays){
        var d = new Date()
        d.setTime(d.getTime()+(exdays*24*60*60*1000))
        var expires = "expires="+d.toGMTString()
        document.cookie = cname + "=" +cvalue+ ";"+expires;
    }
    setCookie('qqq','ddd',7)
```

### 获取cookie值
```js
    //获取cookie值的函数
    function getCookie(cname){
        var name = cname + "="
        var ca = document.cookie.split(';')
        console.log('ca',ca)
        for(var i=0;i<ca.length;i++){
            var c = ca[i].trim()
            if(c.indexOf(name) ==0){
                return c.substring(name.length,c.length)
            }
        }
        return ""
    }
    console.log(getCookie('qqq'))
```

### 检测cookie值
```js
    //检测cookie值的函数
    function checkCookie(){
        var username = getCookie('qqq')
        if(username!=''){
            alert('welcome again'+username)
        }else{
            username = prompt('please enter your name')
            if(username!='' && username != null){
                setCookie("username",username,365)
            }
        }
    }
    checkCookie()
```

### cookie的值不要有中文，可能后端解析会报错
+ 要用encodeURIComponent编码，decodeURIComponent解码

## cookie和session的区别
### 什么是cookie和session
#### 什么是 Cookie
+ HTTP Cookie（也叫 Web Cookie或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。

+ Cookie 主要用于以下三个方面：
  - 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
  - 个性化设置（如用户自定义设置、主题等）
  - 浏览器行为跟踪（如跟踪分析用户行为等）

#### 什么是 Session
+ Session 代表着服务器和客户端一次会话的过程。Session 对象存储特定用户会话所需的属性及配置信息。这样，当用户在应用程序的 Web 页之间跳转时，存储在 Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。当客户端关闭会话，或者 Session 超时失效时会话结束。


### Cookie 和 Session 有什么不同？
+ 作用范围不同，Cookie 保存在客户端（浏览器），Session 保存在服务器端。
+ 存取方式的不同，Cookie 只能保存 ASCII，Session 可以存任意数据类型，一般情况下我们可以在 Session 中保持一些常用变量信息，比如说 UserId 等。
+ 有效期不同，Cookie 可设置为长时间保持，比如我们经常使用的默认登录功能，Session 一般失效时间较短，客户端关闭或者 Session 超时都会失效。
+ 隐私策略不同，Cookie 存储在客户端，比较容易遭到不法获取，早期有人将用户的登录名和密码存储在 Cookie 中导致信息被窃取；Session 存储在服务端，安全性相对 Cookie 要好一些。
+ 存储大小不同， 单个 Cookie 保存的数据不能超过 4K，Session 可存储数据远高于 Cookie。


### 为什么需要 Cookie 和 Session，他们有什么关联？
+ 说起来为什么需要 Cookie ，这就需要从浏览器开始说起，我们都知道浏览器是没有状态的(HTTP 协议无状态)，这意味着浏览器并不知道是张三还是李四在和服务端打交道。这个时候就需要有一个机制来告诉服务端，本次操作用户是否登录，是哪个用户在执行的操作，那这套机制的实现就需要 Cookie 和 Session 的配合。

+ 那么 Cookie 和 Session 是如何配合的呢？我画了一张图大家可以先了解下。
![](https://user-gold-cdn.xitu.io/2019/5/13/16aafb5d90f398e2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

+ 用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建创建对应的 Session ，请求返回时将此 Session 的唯一标识信息 SessionID 返回给浏览器，浏览器接收到服务器返回的 SessionID 信息后，会将此信息存入到 Cookie 中，同时 Cookie 记录此 SessionID 属于哪个域名。

+ 当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 Cookie 信息，如果存在自动将 Cookie 信息也发送给服务端，服务端会从 Cookie 中获取 SessionID，再根据 SessionID 查找对应的 Session 信息，如果没有找到说明用户没有登录或者登录失效，如果找到 Session 证明用户已经登录可执行后面操作。

+ 根据以上流程可知，SessionID 是连接 Cookie 和 Session 的一道桥梁，大部分系统也是根据此原理来验证用户登录状态。


### 既然服务端是根据 Cookie 中的信息判断用户是否登录，那么如果浏览器中禁止了 Cookie，如何保障整个机制的正常运转。

+ 第一种方案，每次请求中都携带一个 SessionID 的参数，也可以 Post 的方式提交，也可以在请求的地址后面拼接 xxx?SessionID=123456...。

+ 第二种方案，Token 机制。Token 机制多用于 App 客户端和服务器交互的模式，也可以用于 Web 端做用户状态管理。

+ Token 的意思是“令牌”，是服务端生成的一串字符串，作为客户端进行请求的一个标识。Token 机制和 Cookie 和 Session 的使用机制比较类似。

+ 当用户第一次登录后，服务器根据提交的用户信息生成一个 Token，响应时将 Token 返回给客户端，以后客户端只需带上这个 Token 前来请求数据即可，无需再次登录验证。

### 如何考虑分布式 Session 问题？

+ 在互联网公司为了可以支撑更大的流量，后端往往需要多台服务器共同来支撑前端用户请求，那如果用户在 A 服务器登录了，第二次请求跑到服务 B 就会出现登录失效问题。

+ 分布式 Session 一般会有以下几种解决方案：
  - Nginx ip_hash 策略，服务端使用 Nginx 代理，每个请求按访问 IP 的 hash 分配，这样来自同一 IP 固定访问一个后台服务器，避免了在服务器 A 创建 Session，第二次分发到服务器 B 的现象。
  - Session 复制，任何一个服务器上的 Session 发生改变（增删改），该节点会把这个 Session 的所有内容序列化，然后广播给所有其它节点。
  - 共享 Session，服务端无状态话，将用户的 Session 等信息使用缓存中间件来统一管理，保障分发到每一个服务器的响应结果都一致。
+ 建议采用第三种方案。

### 如何解决跨域请求？Jsonp 跨域的原理是什么？

+ 说起跨域请求，必须要了解浏览器的同源策略，同源策略/SOP（Same origin policy）是一种约定，由 Netscape 公司 1995年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到 XSS、CSFR 等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个 ip 地址，也非同源。

+ 解决跨域请求的常用方法是：
  - 通过代理来避免，比如使用 Nginx 在后端转发请求，避免了前端出现跨域的问题。
  - 通过 Jsonp 跨域
  - 其它跨域解决方案

+ 重点谈一下 Jsonp 跨域原理。浏览器的同源策略把跨域请求都禁止了，但是页面中的 <script><img><iframe>标签是例外，不受同源策略限制。Jsonp 就是利用 <script> 标签跨域特性进行跨域数据访问。

+ JSONP 的理念就是，与服务端约定好一个回调函数名，服务端接收到请求后，将返回一段 Javascript，在这段  Javascript 代码中调用了约定好的回调函数，并且将数据作为参数进行传递。当网页接收到这段 Javascript 代码后，就会执行这个回调函数，这时数据已经成功传输到客户端了。

+ JSONP 的缺点是：它只支持 GET 请求，而不支持 POST 请求等其他类型的 HTTP 请求。

+ 参考：
  - (https://juejin.im/post/5cd9037ee51d456e5c5babca#comment)[掘金] 
  - (https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)[MDN]