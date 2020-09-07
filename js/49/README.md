<!--
 * @Author: your name
 * @Date: 2020-03-10 17:30:15
 * @LastEditTime: 2020-03-10 17:30:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/49/README.md
 -->

### 写一个方法随机生成指定位数的字符串
```js
    function getRandomString(length) {
        let str = Math.random()
          .toString(36)
          .substr(2);

        //   第一种
        // if (str.length >= length) {
        //   return str.substr(0, length);
        // }
        // str += getRandomString(length - str.length);
        // return str;


        // 第二种
        var str1 = "";
        for (var i = 0; i < length; i++) {
          pos = Math.round(Math.random() * (str.length - 1));
          str1 += str[pos];
        }
        return str1;
    }

    //   知识点：
    //   1.toString(radix)
    //   radix的值是2-36之间的数字，省略默认是10，2表示以二进制显示。其他的会返回任意值

    // 2.Math.round() 方法可把一个数字舍入为最接近的整数。

    // 对于 0.5，该方法将进行上舍入。
    // 例如，3.5 将舍入为 4，而 -3.5 将舍入为 -3。
```