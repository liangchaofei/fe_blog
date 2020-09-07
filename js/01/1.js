/*
 * @Author: your name
 * @Date: 2019-12-19 23:01:53
 * @LastEditTime : 2020-01-21 14:26:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js_learn/01_['1', '2', '3'].map(parseInt)/01.js
 */
console.log(['1','2','3'].map(parseInt)) // [1,NaN,NaN]

let arr = [1,2,3];
arr.map((item,index,data) => {
    console.log('data',data)
    return item+1
}) // [2,3,4]