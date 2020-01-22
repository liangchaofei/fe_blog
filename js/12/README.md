<!--
 * @Author: your name
 * @Date: 2020-01-22 16:18:53
 * @LastEditTime: 2020-01-22 16:19:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/12/README.md
 -->
# 高亮显示当前url

+ 解决思路：导航栏目链接跟当前栏目对应页面链接之间做比较，相等就给对应的导航栏目所在的li元素添加样式

```js
    //js 当前URL对当前栏目高亮突出显示
    var myNav = document.getElementById("nav").getElementsByTagName("a");
    for(var i=0;i<myNav.length;i++){
        var links = myNav[i].getAttribute("href");
        var myURL = document.location.href;
        if(myURL.indexOf(links) != -1){
            myNav[i].parentNode.className="selected";
        }
    }
```
