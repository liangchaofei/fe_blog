### innerHTML 和 document.write有什么区别
+ document.write只能重绘整个页面，innerHTML可以重绘页面的一部分。  
+ document.write是直接写入到页面的内容流，如果在写之前没有调用document.open, 浏览器会自动调用open。每次写完关闭之后重新调用该函数，会导致页面被重写。
+ 当文档加载时调用document.write直接向页面输出内容，文档加载结束后调用document.write输出内容会重写整个页面。通常按照两种的方式使用 write() 方法：一是在使用该方在文档中输出 HTML，二是在调用该方法的的窗口之外的窗口、框架中产生新文档（务必使用close关闭文档）。
+ 在读模式下，innerHTML属性返回与调用元素的所有子节点对应的HTML标记，在写模式下，innerHTML会根据指定的值创建新的DOM树替换调用元素原先的所有子节点。
+ 通过document.write插入script元素会自动执行其中的脚本；
大多数浏览器中，通过innerHTML插入script元素并不会执行其中的脚本。

### document.write
```html
    <!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 10:12:21
 * @LastEditTime : 2020-01-22 16:29:44
 * @LastEditors: Please set LastEditors
 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p>原有内容</p>
    <div id="testdiv">原有内容</div>
    <script>
        window.onload = function(){
        // 执行结果显示：document.write会将页面上的所有内容清除包括标题。
            document.write('现有内容')
        }
    </script>
</body>
</html>
```

### innerHTML
```html
    <!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 10:12:21
 * @LastEditTime: 2019-08-12 10:17:25
 * @LastEditors: Please set LastEditors
 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p>原有内容</p>
    <div id="testdiv">原有内容</div>
    <script>
        window.onload = function(){
    // 执行结果显示：innerHTML只会重写所属元素的内容，即<div>元素中的内容。
            var test = document.getElementById('testdiv')
            test.innerHTML = '<p>aaaa</p>'
        }
    </script>
</body>
</html> 
```