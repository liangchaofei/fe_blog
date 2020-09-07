<!--
 * @Author: your name
 * @Date: 2019-12-19 23:01:44
 * @LastEditTime : 2020-01-21 14:26:04
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js_learn/01/README.md
 -->
## ['1','2','3'].map(parseInt) 输出什么，为什么

### 首先打印下结果

![](https://user-gold-cdn.xitu.io/2019/12/19/16f1ebff1822c3cf?w=932&h=574&f=png&s=49601)

### 先看下map函数
+ map是数组的一个方法，有3个参数,第1个参数是数组中的每一个元素，第2个参数是索引，第3个参数是原数组。map方法会返回一个新数组。
```js
    let arr = [1,2,3];
    arr.map((item,index,data) => item+1) // [2,3,4]
```

### 再看下parsetInt
+ parsetInt是解析字符串，将字符串转为数字。parsetInt有2个参数。第1个参数是要解析的字符串，第2个参数是基数（几进制）。
```js
    let str = '10'
    console.log(parsetInt(str,2)) // 2,以2进制解析
```

### 回到题目
```js
    ['1','2','3'].map(parseInt) 等价于
    parseInt('1',0) // 0进制，最大是1，返回1
    parseInt('2',1) // 1进制，表示的数中，最大值小于2，所以无法解析，返回NaN
    parseInt('3',2) // 2进制，最大值是2，所以无法解析，返回NaN
```

#### 所以最后结果为[1, NaN, NaN]