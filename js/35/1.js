/*
 * @Author: your name
 * @Date: 2020-02-25 00:21:15
 * @LastEditTime: 2020-02-25 00:40:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/35/1.js
 */
let url = `http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled`;
// parseParam(url)
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

var search = url.indexOf('?').slice(index+1)
var arr = search.split('&')
var obj = {}
arr.forEach(item => {
    if(/=/.test(item)){
        let [key,val]=item.split('=')
        val = decodeURIComponent(val); // 解码
        val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
        if (obj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
            obj[key] = [].concat(obj[key], val);
          } else { // 如果对象没有这个 key，创建 key 并设置值
            obj[key] = val;
          }
    }else{
        obj[item] = true;
    }
})
console.log('obj',obj)