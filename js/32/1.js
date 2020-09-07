/*
 * @Author: your name
 * @Date: 2020-02-23 10:35:32
 * @LastEditTime : 2020-02-23 10:44:38
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/32/1.js
 */
var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat())  // [1,2,3,4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat())// [1, 2, 3, 4, [5, 6]]


var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2))// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));


function flat(arr){
    let res = [];
    for(let i = 0;i,arr.length;i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flat(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
}
console.log(flat(arr4))


