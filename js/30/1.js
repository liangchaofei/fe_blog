/*
 * @Author: your name
 * @Date: 2020-02-22 17:10:45
 * @LastEditTime : 2020-02-22 17:16:45
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/30/1.js
 */
function getType(obj){
    if(obj === null) return String(obj)

    return typeof obj === 'object' ? 
    Object.prototype.toString.call(obj).replace('[object ','').replace(']','').toLowerCase()
    : typeof obj;
}
 
 // 调用
 console.log(getType(null)); // -> null
 console.log(getType(undefined)); // -> undefined
 console.log(getType({})); // -> object
 console.log(getType([])); // -> array
 console.log(getType(123)); // -> number
 console.log(getType(true)); // -> boolean
 console.log(getType('123')); // -> string
 console.log(getType(/123/)); // -> regexp
 console.log(getType(new Date())); // -> date
 