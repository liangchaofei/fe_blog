<!--
 * @Description: 生成相同颜色
 * @Author: liangchaofei
 * @Date: 2019-08-11 19:51:22
 * @LastEditTime : 2020-01-22 15:32:19
 * @LastEditors  : Please set LastEditors
 -->
### 生成相同颜色
```js
    function sameColor(color: any, n: number) {
        let colorsArr = color.length === 6 ? color.match(/[\da-z]{2}/g) : color.match(/[\da-z]{1}/g);
        let newColor = '';
        for (let i = 0; i < colorsArr.length; i++) {
            colorsArr[i] = parseInt(colorsArr[i].length === 1 ? colorsArr[i] + colorsArr[i] : colorsArr[i], 16);
            newColor += Math.floor(colorsArr[i] + (Math.random() > 0.5 ? -1 : 1) * Math.random() * n).toString(16);
        }
        return newColor;
    }
```