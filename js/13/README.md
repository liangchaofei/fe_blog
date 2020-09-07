<!--
 * @Description: 将数字转为每三个数加逗号
 * @Author: liangchaofei
 * @Date: 2019-08-11 19:48:41
 * @LastEditTime : 2020-01-22 16:20:24
 * @LastEditors  : Please set LastEditors
 -->
```js
    //将数字转为每三个数加逗号
function addCommas(n: any) {
  let reg = /\.\d+/;
  let num = (parseInt(n) || 0).toString();
  let temp = reg.exec(num);
  // 获取小数部分，不存在小数则获取空字符串
  let decimal = temp && temp[0] ? temp[0] : '';
  // 获取小数点位置，不存在小数位置则获取字符串长度
  let decimalPointIndex = temp && temp.index ? temp.index : num.length;
  // 获取整数部分
  let integerNum = num.slice(0, decimalPointIndex);
  let result = '';
  // 逗号分隔操作
  while (integerNum.length > 3) {
    result = ',' + integerNum.slice(-3) + result;
    integerNum = integerNum.slice(0, integerNum.length - 3);
  }
  // 不足3位直接加到最前面
  if (integerNum) {
    result = integerNum + result;
  }
  // 最后面加上小数部分
  result = result + decimal;
  return result;
}
```