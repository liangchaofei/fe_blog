<!--
 * @Author: your name
 * @Date: 2020-01-22 16:22:46
 * @LastEditTime: 2020-01-22 16:22:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/14/README.md
 -->
# js 如何判断{}为空

+ ES6中Object.keys
```js
    let a = {};
    let arr = Object.keys(a)    //返回数组
    console.log(arr.length == 0 )   //true
```

+ 将json对象转换为json字符串，再判断该字符串是否是"{}"
```js
    let a = {};
    let b = (JSON.string(a) == '{}')    //true
```

+ for in 循环判断
```js
    let obj = {};
    let b = function(){
        for(let key in obj){
            return false;
        }
        return true;
    }
```