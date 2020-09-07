<!--
 * @Author: your name
 * @Date: 2020-02-23 10:50:51
 * @LastEditTime : 2020-02-23 11:01:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: /fe_blog/js/33/README.md
 -->
## 手写数组乱序方法

### 取巧法
```js
// 取巧的一种算法，但是每个位置乱序的概率不同
function mixArr(arr){
    return arr.sort(() => {
        return Math.random() - 0.5;
    })
}
```

### 洗牌算法
```js
    // 著名的Fisher–Yates shuffle 洗牌算法
function shuffle(arr){
    let m = arr.length;
    while(m > 1){
        let index = parseInt(Math.random() * m--);
        [arr[index],arr[m]] = [arr[m],arr[index]];
    }
    return arr;
}

```