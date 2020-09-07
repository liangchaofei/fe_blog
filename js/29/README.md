<!--
 * @Author: your name
 * @Date: 2020-02-22 16:22:47
 * @LastEditTime : 2020-02-22 16:29:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/29/README.md
 -->
## forEach，map和filter的区别

+ forEach遍历数组，参数为一个回调函数，回调函数接收三个参数，当前元素，元素索引，整个数组；
```js
    let arr = [1,2,3,4];
    let list = [];
    arr.forEach(item =>{
        list.push(item+1)
    })
    console.log(list) // [2,3,4,5]
    console.log(arr) // [1,2,3,4]
```

+ map与forEach类似，遍历数组，但其回调函数的返回值会组成一个新数组，新数组的索引结构和原数组一致，原数组不变；
```js
    let arr = [1,2,3,4]
    let list = arr.map(item => item + 1)
    console.log(list) // [2,3,4,5]
    console.log(arr) // [1,2,3,4]
    
```

+ filter会返回原数组的一个子集，回调函数用于逻辑判断，返回true则将当前元素添加到返回数组中，否则排除当前元素，原数组不变。
```js   
    let arr = [1,2,3,4]
    let list = arr.filter(item => item> 1)

    console.log(list) // [2,3,4]
    console.log(arr) //[1,2,3,4]
```