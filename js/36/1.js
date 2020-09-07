/*
 * @Author: your name
 * @Date: 2020-02-25 21:53:58
 * @LastEditTime: 2020-02-25 22:15:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/36/1.js
 */
// 例: abbcccddddd -> 字符最多的是d，出现了5次

let str = "aaaaaaaabcabcabcbbccccc";
let num = 0;
let char = '';

 // 使其按照一定的次序排列
str = str.split('').sort().join('');
// "aaabbbbbcccccccc"

// 定义正则表达式
let re = /(\w)\1+/g;
str.replace(re,($0,$1) => {
    console.log('aa',$0)
    console.log('ss',$1)
    if(num < $0.length){
        num = $0.length;
        char = $1;        
    }
});
console.log(`字符最多的是${char}，出现了${num}次`);

