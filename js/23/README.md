<!--
 * @Author: your name
 * @Date: 2020-02-06 16:42:58
 * @LastEditTime : 2020-02-07 11:28:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/23/README.md
 -->
## 对象的浅拷贝和深拷贝

### 浅拷贝
+ '=' 赋值

+ Object.assign
  - 基本用法
  ```js
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);
    console.log('returnedTarget',returnedTarget) // { a: 1,b: 4, c: 5}
  ```

+ 直接赋值
```js
        var o1 = {
            a:1
        }
        var o2 = o1;
        console.log(o1 === o2) // true
        o2.a = 2;
        console.log('o1',o1)    // {a:2}
        console.log('o2',o2)    // {a:2}


        var a1 = [1,2,3]
        var a2 = a1;
        console.log(a1 === a2)  // true
        a2.push(4)
        console.log('a1',a1)    // [1,2,3,4]
        console.log('a2',a2)    // [1,2,3,4]
```
+ 实现一个浅拷贝
```js
    function shallowClone(source){
        if(!source || typeof source !== 'object'){
            throw new Error('error arguments')
        }

        var targetObj = source.constructor === Array ? [] : {};

        for(var keys in source){
            if(source.hasOwnProperty(keys)){
                targetObj[keys] = source[keys]
            }
        }
        return targetObj;
    }
```
### 深拷贝
+ 递归实现深拷贝
```js
      // 递归实现一个深拷贝
        function deepClone(source){
            if(!source || typeof source !== 'object'){
                throw new Error('errow arguments')
            }
            console.log('source.constructo',source.constructor === Array)
            var targetObj = source.constructor === Array ? [] : {};

            for(var keys in source){
                if(source.hasOwnProperty(keys)){
                    if(source[keys] && typeof source[keys] === 'object'){
                        targetObj[keys] = source[keys].constructor === Array ? [] : {};
                        targetObj[keys] = deepClone(source[keys])
                    }else{
                        targetObj[keys] = source[keys]
                    }
                }
            }
            return targetObj;
        }

        var o1 = {
            arr:[1,2,3],
            obj:{
                key:'val'
            },
            func:function(){
                return 1;
            }
        }

        var o2 = deepClone(o1);
        console.log(o1 === o2)  // false
        console.log(o2.obj === o1.obj) // false
        console.log(o1.func === o2.func)    // true
```
+ 利用json序列化实现深拷贝
```js
     //// 利用JSON序列化实现一个深拷贝
        function deepClone(source) {
            return JSON.parse(JSON.stringify(source))
        }
        var o1 = {
            arr: [1, 2, 3],
            obj: {
                key: 'value'
            },
            func: function () {
                return 1;
            }
        };
        var o2 = deepClone(o1);
        console.log(o2); // => {arr: [1,2,3], obj: {key: 'value'}}
```
### 参考文章
+ [js 深拷贝 vs 浅拷贝](https://juejin.im/post/59ac1c4ef265da248e75892b#comment)