/*
 * @Author: your name
 * @Date: 2020-02-22 18:00:10
 * @LastEditTime : 2020-02-22 18:15:02
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/31/1.js
 */

 // filter

// let arr = [2, 4, 6, 8]
//     let arr1 = arr.filter(item => item > 5)
//     console.log(arr1) // [6,8]

// Array.prototype.my_filter = function (fn){
//     let newArr = [];

//     for(let i = 0;i<this.length;i++){
//         fn(this[i]) && newArr.push(this[i])
//     }
//     return newArr
// }
// let arr2 = arr.my_filter(item => item>5)
// console.log('arr2',arr2)


// map

let arr = [1,2,3,4]
let newArr = arr.map(item => item + 1)
console.log(newArr)

Array.prototype.my_map = function (fn){
    let newArr = [];
    for(let i =0;i<this.length;i++){
        newArr.push(fn(this[i]))
    }
    return newArr;
}

let arr2  = arr.my_map(item => item + 2)
console.log(arr2)