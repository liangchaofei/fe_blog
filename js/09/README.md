<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 10:05:40
 * @LastEditTime : 2020-01-22 15:29:44
 * @LastEditors  : Please set LastEditors
 -->
### 请说说escape、encodeURI、decodeURI、encodeURIComponent和decodeURIComponent的区别？

```js
     var url = 'http://www.xxxx.com/aaa/bbb?aaa=aasd&bbb=哈哈'
    // escape:将会把字符串中除了字母、数字以及一部分符号以外的所有转义为 %XX 格式的转义序列，
    console.log('escape', escape(url)) //http%3A//www.xxxx.com/aaa/bbb%3Faaa%3Daasd%26bbb%3D%u54C8%u54C8
    // encodeURI：将 URI 中的每个字符编码为 1-4 个格式为 %xx 的转义序列（xx 为十六进制数），但不包括 ASCII 数字、字母、URL 分隔符（/、?、,、&、...）、以及其他部分 ASCII 字符。
    console.log('encodeURI', encodeURI(url)) //http://www.xxxx.com/aaa/bbb?aaa=aasd&bbb=%E5%93%88%E5%93%88
    //decodeURI：将已经编码的 URI 中的转义序列解码为它们表示的字符，但除了 encodeURI() 不会编码的字符。
    console.log('decodeURI', decodeURI(url)) //http://www.xxxx.com/aaa/bbb?aaa=aasd&bbb=哈哈
    // encodeURIComponent：用于编码 URI 中的组成部分。它除了转义 encodeURI() 指定的字符，还会转义 URL 分隔符（/、?、,、&、...）
    console.log('encodeURIComponent', encodeURIComponent(url))//http%3A%2F%2Fwww.xxxx.com%2Faaa%2Fbbb%3Faaa%3Daasd%26bbb%3D%E5%93%88%E5%93%88
    // decodeURIComponent： 将已经编码的 URI 组成部分中的转义序列解码为它们表示的字符，但除了 encodeURIComponent() 不会编码的字符
    console.log('decodeURIComponent', decodeURIComponent(url))//http://www.xxxx.com/aaa/bbb?aaa=aasd&bbb=哈哈
```