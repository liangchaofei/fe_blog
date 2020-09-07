<!--
 * @Description: 删除数组指定元素
 * @Author: liangchaofei
 * @Date: 2019-08-11 19:50:19
 * @LastEditTime : 2020-01-22 16:25:09
 * @LastEditors  : Please set LastEditors
 -->
### 删除数组指定元素
```js
    let arr = ['a','b','c']
    function removeVal(arr: any[], val: any) {
        let index = arr.indexOf(val);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
```