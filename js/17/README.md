<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 10:03:13
 * @LastEditTime : 2020-01-22 16:26:18
 * @LastEditors  : Please set LastEditors
 -->
### 写一个方法把多维数组降维

+ es10方法:flat
```js
    var arr = [1,[2,3],[4,[5,6]]]
    console.log(arr.flat(Infinity))
```

+ reduce
```js
    function flattenDeep(arr) {
        return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
    }
    console.log(flattenDeep(arr))
```

+ 递归
```js
    let result = [];
    function fn(arr){
        for(let i = 0;i<arr.length;i++){
            let item = arr[i]
            if(Array.isArray(item)){
                fn(item)
            }else{
                result.push(item)
            }
        }
        return result;
    }
    console.log(fn(arr))
```