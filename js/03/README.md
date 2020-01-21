<!--
 * @Author: your name
 * @Date: 2020-01-21 14:36:14
 * @LastEditTime : 2020-01-21 14:37:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/03/README.md
 -->
## 获取n分钟_小时_天_月前后时间

### 例如：当前时间下，获取10分钟后的时间。
```js
    var date=new Date();     //1. js获取当前时间
    var min=date.getMinutes();  //2. 获取当前分钟
    date.setMinutes(min+10);  //3. 设置当前时间+10分钟：把当前分钟数+10后的值重新设置为date对象的分钟数
    var y = date.getFullYear();
    var m = (date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1);
    var d = date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate();
    var h = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()
    var f = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
    var s = date.getSeconds() < 10 ? ('0' + date.getseconds()) : date.getSeconds()
    var formatdate = y+'-'+m+'-'+d + " " + h + ":" + f + ":" + s;
    console.log(formatdate) // 获取10分钟后的时间，格式为yyyy-mm-dd h:f:s
```
+ 同理，设置30分钟，60分钟或1个小时，5个小时，可以将小时转换为分钟，然后获取当前分钟再加上需要设置的时间即可。

### 获取1个月后的日期：
```js
    var date=new Date();
    date.setMonth(date.getMonth()+1);
    var y = date.getFullYear();
    var m = (date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1);
    var d = date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate();
    var h = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()
    var f = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
    var s = date.getSeconds() < 10 ? ('0' + date.getseconds()) : date.getSeconds()
    var formatwdate = y+'-'+m+'-'+d + " " + h + ":" + f + ":" + s;
    console.log('formatwdate', formatwdate)
```
+ 同理获取n个月后或n个月前的日期都是如此