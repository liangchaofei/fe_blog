/*
 * @Author: your name
 * @Date: 2020-02-21 22:46:41
 * @LastEditTime : 2020-02-22 15:13:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/27/1.js
 */
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];

// 利用ES6 Set去重（ES6中最常用）
function unique(arr){
    return Array.from(new Set(arr))
}


// function unique(arr){
//     for(var i=0; i<arr.length; i++){
//         for(var j=i+1; j<arr.length; j++){
//             if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
//                 arr.splice(j,1);
//                 j--;
//             }
//         }
//     }
// return arr;
// }


// 利用indexOf去重
// function unique(arr){
//     let list = [];

//     for(let i =0;i<arr.length;i++){
//         if(list.indexOf(arr[i]===-1)){
//             list.push(arr[i])
//         }
//     }
//     return list;
// }


// 利用sort
// function unique(arr){
//     arr = arr.sort()
//     var arrry= [arr[0]];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] !== arr[i-1]) {
//             arrry.push(arr[i]);
//         }
//     }
//     return arrry;
// }

// includes
// function unique(arr){
//     let list = [];

//     for(let i =0;i<arr.length;i++){
//         if(!list.includes(arr[i])){
//             list.push(arr[i])
//         }
//     }
//     return list;
// }


//利用hasOwnProperty

// function unique(arr){
//     var obj = {};
//     return arr.filter(function(item, index, arr){
//         return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
//     })
// }

// filter
// function unique(arr){
//     let newList = arr.filter((item,index) => {
//         return arr.indexOf(item,0) === index;
//     })
//     return newList;
// }


// 递归去重
// function unique(arr){
//     var array= arr;
//         var len = array.length;

//     array.sort(function(a,b){   //排序后更加方便去重
//         return a - b;
//     })

//     function loop(index){
//         if(index >= 1){
//             if(array[index] === array[index-1]){
//                 array.splice(index,1);
//             }
//             loop(index - 1);    //递归loop，然后数组去重
//         }
//     }
//     loop(len-1);
//     return array;
// }


//利用Map数据结构去重

// function unique(arr){
//     let map = new Map();
//     let list = [];
//     for(let i = 0;i<arr.length;i++){
//         if(map.has(arr[i])){
//             map.set(arr[i],true)
//         }else{
//             map.set(arr[i],false)
//             list.push(arr[i])
//         }
//     }
//     return list;
// }

// 利用reduce+includes

// function unique(arr){
//     return arr.reduce((prev,curr) => prev.includes(curr) ? prev : [...prev,curr],[])
// }

// function unique(arr){
//     return [...new Set(arr)]
// }
console.log(unique(arr))


// 对象数组去重
var arr2 = [{
    "name": "ZYTX",
    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    "gender": "AAAAAA.doc"
}, {
    "name": "ZYTA",
    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    "gender": "BBBBBB.doc"
}, {
    "name": "ZDTX",
    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    "gender": "CCCCCC.doc"
}, {
    "name": "ZYTX",
    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    "gender": "AAAAAA.doc"
}];
// var hash = {};
// arr2 = arr2.reduce(function(item, next) {
//     console.log('item',item)
//     hash[next.name] ? '' : hash[next.name] = true && item.push(next);
//     return item
// }, [])
// console.log(arr2);

function func3(array){
    var temp = [];//临时数组
    var json = {};//创建一个空对象
    //将当前数组的元素值当作对象的属性，遍历数组，比对对象，如果对象的这个属性不存在则将当前数组元素复制到临时数组，并添加该属性且将属性值赋值为1
    for(var i = 0; i<array.length; i++){
        if(!json[array[i]]){//如果对象没有该属性
            temp.push(array[i]);
            json[array[i]] = 1;//添加属性，将属性值赋值为1
        }
    }
    return temp;
}
console.log(func3(arr))
function func4(objArray) {
    var result = [];//去重后返回的结果数组
    var temp = {};//临时对象
    //将对象数组中每一项的name值作为属性，若temp不拥有此属性时则为temp添加此属性且将其值赋为true，并将这一项push到结果数组中
    for(var i=0;i<objArray.length;i++){  
        var myname = objArray[i].name;
        if(temp[myname]){//如果temp中已经存在此属性名，则说明遇到重复项
            continue;//不继续执行接下来的代码，跳转至循环开头
        }  
        temp[myname] = true;//为temp添加此属性（myname）且将其值赋为true
        result.push(objArray[i]);//将这一项复制到结果数组result中去
    }  
    return result;  
}
