<!--
 * @Author: your name
 * @Date: 2020-01-22 15:28:28
 * @LastEditTime: 2020-01-22 15:28:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/08/README.md
 -->
### 随机生成颜色
```js
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
```