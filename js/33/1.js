/*
 * @Author: your name
 * @Date: 2020-02-23 10:50:56
 * @LastEditTime : 2020-02-23 11:00:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/33/1.js
 */
let arr = [1,2,3,4,5]
// 取巧的一种算法，但是每个位置乱序的概率不同
function mixArr(arr){
    return arr.sort(() => Math.random() - 0.5)
}

// 著名的Fisher–Yates shuffle 洗牌算法
function shuffle(arr){
    let m = arr.length;
    while(m > 1){
        let index = parseInt(Math.random() * m--);
        [arr[index],arr[m]] = [arr[m],arr[index]];
    }
    return arr;
}

console.log(shuffle(arr))