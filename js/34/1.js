/*
 * @Author: your name
 * @Date: 2020-02-25 00:01:44
 * @LastEditTime: 2020-02-25 00:15:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/34/1.js
 */


var s1 = "get-element-by-id"


var fn = function(s) {
    return s.replace(/-\w/g, function(x) {
        return x.slice(1).toUpperCase();
    })
}
var s2 = 'getElementById';
function toLine(name) {
    return name.replace(/([A-Z])/g,"_$1").toLowerCase();
}
// console.log(fn(s1))
console.log(toLine(s2))