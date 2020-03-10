<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 10:31:51
 * @LastEditTime: 2019-09-10 16:24:01
 * @LastEditors: Please set LastEditors
 -->
## 阻止冒泡
+ w3c:e.stopPropagation()
+ ie: e.cancelBubble = true
```html
    <div id='div' onclick='alert("div");'>
        <ul onclick='alert("ul");'>
            <li onclick='alert("li");'>test</li>
        </ul>
    </div>
```
+ 单击test时，会依次触发alert(“li”),alert(“ul”),alert(“div”)，这就是事件冒泡。

## 取消默认事件
+ w3c的方法是e.preventDefault()，IE则是使用e.returnValue = false;
+ 阻止超链接跳转
```js
    var a = document.getElementById("testA");
    a.onclick =function(e){
        if(e.preventDefault){
            e.preventDefault();
        }else{
            window.event.returnValue == false;
        }
    }
```

## 总结
+ 当需要停止冒泡行为时，可以使用
```js
    function stopBubble(e) { 
    //如果提供了事件对象，则这是一个非IE浏览器 
    if ( e && e.stopPropagation ) 
        //因此它支持W3C的stopPropagation()方法 
        e.stopPropagation(); 
    else 
        //否则，我们需要使用IE的方式来取消事件冒泡 
        window.event.cancelBubble = true; 
    }
```
+ 当需要阻止默认行为时，可以使用
```js
    //阻止浏览器的默认行为 
    function stopDefault( e ) { 
        //阻止默认浏览器动作(W3C) 
        if ( e && e.preventDefault ) 
            e.preventDefault(); 
        //IE中阻止函数器默认动作的方式 
        else 
            window.event.returnValue = false; 
        return false; 
    }
```