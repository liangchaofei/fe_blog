<!--
 * @Description: 获取url参数
 * @Author: liangchaofei
 * @Date: 2019-08-11 19:52:39
 * @LastEditTime : 2020-01-22 15:31:33
 * @LastEditors  : Please set LastEditors
 -->
### 获取url参数
```js
    //获取url的参数
function getParam(name: any) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

```