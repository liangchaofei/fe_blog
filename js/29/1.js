/*
 * @Author: your name
 * @Date: 2020-02-22 16:22:51
 * @LastEditTime : 2020-02-22 16:27:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/29/1.js
 */
let arr = [1,2,3,4]
let list = [];
arr.forEach(item =>{
    list.push(item+1)
})


let aaa = arr.map(item => item+1)

let bbb =arr.filter(item => item > 1)
console.log('arr',list,aaa,bbb,arr)