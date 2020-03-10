<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-11 11:37:32
 * @LastEditTime: 2019-09-11 14:44:43
 * @LastEditors: Please set LastEditors
 -->
### input 的onchange和onblur有什么区别
+ onchange 是当input内容发生改变且失去焦点
+ onblur 是失去焦点就会触发

```html
    <body>
        <input type="text" id="a" placeholder="onchange" onchange="onfun()">
        <input type="text" id="b" placeholder="onblur" onblur="onblu()">
        <script>
            function onfun() {
                console.log('123')
            }
            function onblu() {
                console.log('456')
            }
        </script>
    </body>
```