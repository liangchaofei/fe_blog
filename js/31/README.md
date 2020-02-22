<!--
 * @Author: your name
 * @Date: 2020-02-22 18:00:06
 * @LastEditTime : 2020-02-22 18:25:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/31/README.md
 -->
## 本文自己动手实现数组常用方法，包括filter,map,some,reduce,every等方法

### filter

+ 功能：过滤,filter()使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。

+ 用法:
```js
    let arr = [2, 4, 6, 8]
    let arr1 = arr.filter(item => item > 5)
    console.log(arr1) // [6,8]
```
+ 实现原理：
```js
    Array.prototype.my_filter = function (fn) {
        let newArr = []
        console.log('this',this)
        for (let i = 0; i < this.length; i++) {
            console.log('aa',fn(this[i]))
            fn(this[i]) && newArr.push(this[i]);
        }
        return newArr;
    }

    let arr2 = arr.my_filter(item => item > 5)
    console.log(arr2) // [6,8]
```

### map
+ 功能：映射,map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理的后值。
+ 用法：
```js
    let arr = [1,2,3];
    let arr1 = arr.map(function(item) {
        return item+1;
    });
    console.log(arr1) //[2,3,4]
```
+ 实现原理：
```js
    Array.prototype.my_map = function(fn){
        let newArr = []
        for(let i =0;i<this.length;i++){
            newArr.push(fn(this[i]))
        }
        return newArr
    }
    let arr2 = arr.my_map(item=>{
        return item+1;
    })
    console.log(arr2) //[2,3,4]
```
### reduce
+ 功能：reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
+ 用法：
```js
    let arr = [2,4,6,8]
    let arr1 = arr.reduce((prev,curr) => {
        return prev+curr
    })
    console.log(arr1) //20
```
+ 原理：
```js
     Array.prototype.my_reduce = function(reducer,initVal){
        for(let i = 0;i<this.length;i++){
            initVal = reducer(initVal,this[i],i,this)
        }
        return initVal
    }
    let arr2 = arr.my_reduce((prev,curr) => prev+curr)
    console.log(arr2) //20
```

### find
+ 功能：find() 方法返回通过测试（函数内判断）的数组的第一个元素的值
+ 用法：
```js
    let arr = [1,2,3]
    let arr1 = arr.find(item => item>1)
    console.log(arr1) //2
```
+ 原理：
```js
    Array.prototype.my_find = function(fn){
        let newArr = [];
        for(let i = 0;i<this.length;i++){
          if(fn(this[i])){
              return this[i]
          }
        }
    }
    let arr2 = arr.my_find(item => item>2)
    console.log(arr2) //2
```

### some
+ 功能：如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false。
+ 用法：
```js
    let arr = [2,4,6,8]
    let arr1 =  arr.some(item => item>5)
    console.log(arr1) //true
```
+ 原理：
```js
     Array.prototype.my_some = function(fn){
        for(let i =0;i<this.length;i++){
            if(fn(this[i])){
                return true;
            }
        }
        return false;
    }
    let arr2 = arr.my_some(item => item>5)
    console.log(arr2) //true
```

### every
+ 功能：every方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。只有都符合，返回true,只要有一个不符合，就返回false
+ 用法：
```js
    let arr = [2,4,6,8]
    let arr1 = arr.every(item => item>5)
    console.log(arr1) //false
```
+ 原理：
```js
    Array.prototype.my_every = function(fn){
        for(let i =0;i<this.length;i++){
            if(!fn(this[i])){
                return false;
            }
        }
        return true;
    }
    let arr2 = arr.my_every(item => item>1)
    console.log(arr2) //false
```