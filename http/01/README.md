<!--
 * @Author: your name
 * @Date: 2020-03-10 16:25:32
 * @LastEditTime: 2020-03-10 16:26:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/http/01/README.md
 -->
## 介绍下 HTTPS 中间人攻击

+ https协议由 http + ssl 协议构成，具体的链接过程可参考SSL或TLS握手的概述
https://github.com/lvwxx/blog/issues/3

中间人攻击过程如下：

服务器向客户端发送公钥。
攻击者截获公钥，保留在自己手上。
然后攻击者自己生成一个【伪造的】公钥，发给客户端。
客户端收到伪造的公钥后，生成加密hash值发给服务器。
攻击者获得加密hash值，用自己的私钥解密获得真秘钥。
同时生成假的加密hash值，发给服务器。
服务器用私钥解密获得假秘钥。
服务器用加秘钥加密传输信息
防范方法：

服务端在发送浏览器的公钥中加入CA证书，浏览器可以验证CA证书的有效性