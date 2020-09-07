<!--
 * @Author: your name
 * @Date: 2020-03-02 23:19:09
 * @LastEditTime: 2020-03-02 23:19:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/38/README.md
 -->
    (1) GET请求在浏览器回退和刷新时是无害的，而POST请求会告知用户数据会被重新提交；
    (2) GET请求可以收藏为书签，POST请求不可以收藏为书签；
    (3) GET请求可以被缓存，POST请求不可以被缓存，除非在响应头中包含合适的Cache-Control/Expires字段，但是不建议缓存POST请求，其不满足幂等性，每次调用都会对服务器资源造成影响；
    (4) GET请求一般不具有请求体，因此只能进行url编码，而POST请求支持多种编码方式。
    (5) GET请求的参数可以被保留在浏览器的历史中，POST请求不会被保留；
    (6) GET请求因为是向URL添加数据，不同的浏览器厂商，代理服务器，web服务器都可能会有自己的长度限制，而POST请求无长度限制；
    (7) GET请求只允许ASCII字符，POST请求无限制，支持二进制数据；
    (8) GET请求的安全性较差，数据被暴露在浏览器的URL中，所以不能用来传递敏感信息，POST请求的安全性较好，数据不会暴露在URL中；
    (9) GET请求具有幂等性(多次请求不会对资源造成影响)，POST请求不幂等；
    (10) GET请求一般不具有请求体，请求中一般不包含100-continue 协议，所以只会发一次请求，而POST请求在发送数据到服务端之前允许双方"握手"，客户端先发送Expect:100-continue消息，询问服务端是否愿意接收数据，接收到服务端正确的100-continue应答后才会将请求体发送给服务端，服务端再响应200返回数据。