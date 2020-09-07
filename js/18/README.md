<!--
 * @Author: your name
 * @Date: 2020-01-22 16:27:14
 * @LastEditTime: 2020-01-22 16:27:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/18/README.md
 -->
# splice的用法

## splice可以有三个参数，支持添加，删除，替换

### 两个参数：删除。第一个参数是索引，第二个是从索引开始要删除的个数
```js
    var arr = [1,2,3,4];
    var arr2 = arr.splice(1,1)

    console.log(arr) //[1,3,4] 在索引为1处删除1个数
    console.log(arr2) //[2] 返回被删除的项
```

### 三个参数：替换。第一个参数是索引，第二个参数是从索引开始要删除的个数，第三个参数是要添加的元素
```js
    var arr = [1,2,3,4]
    var arr2 = arr.splice(1,2,33)
    console.log(arr) //[1,33,4]
    console.log(arr2)   //[2,3]
```

### 三个参数：添加。第一个参数是索引，第二个参数是0，第三个参数是要添加的数
```js
    var arr = [1,2,3,4]
    var arr2  = arr.splice(1,0,33)
    console.log(arr)    //[1,33,2,3,4]
    console.log(arr2) //[]
```
