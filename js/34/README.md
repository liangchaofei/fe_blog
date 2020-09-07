<!--
 * @Author: your name
 * @Date: 2020-02-25 00:01:40
 * @LastEditTime: 2020-02-25 00:16:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/34/README.md
 -->


## 字符串 下划线和驼峰 互转

### 下划线转驼峰
```js
    function toLine(str){
        return str.replace(/-\w/g,item => {
            return item.slice(1).toUpperCase()
        })
    }
```

### 驼峰转下划线
```js
    function toUpper(str){
        return str.replace(/([A-Z])/g,'_$1').toLowerCase()
    }
```