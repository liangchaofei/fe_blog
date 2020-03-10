+ 实现一个 JSON.stringify
    - JSON.stringify是浏览器高版本带的一个将JS的Objtect对象转换为JSON字符串的一个方法JSON.stringify
    的一些 规则以及注意点:当对象为number，null,boolean的时候，直接转换为相应的字符串就可以了。但是 string,function,undefined,object,array等，都需要特殊处理。

    1.undefined,该类型使用JSON.stringify处理的时候，如果对象就是undefined,将会输出"undefined",如果
    对象是数组的元素，那么将会变成null，比如:[undefined],stringify之后变成了"[null]";如果该对象是object
    的元素，那么该属性将当作不存在，不输出，比如{a:1,b:undefined},stringify之后是"{"a":1},B属性直接
    被抛弃。

    2.字符串在拼接的时候需要把内部的双引号处理掉
    //JSON.stringify的主函数
    ```js
        var simpleTypes = ["number", "boolean", "undefined", "string", "function"];  
function stringify(object){  
    var type = typeof object;  
    //如果是简单类型，则直接返回简单类型的结果  
    if(indexOf(simpleTypes, type) > -1){  
        return parseSimpleObject(object);  
    }  
    //数组对象
    if(object instanceof Array){  
        var len = object.length;  
        var resArr = [];  
        for(var i = 0; i < len; i++){  
            var itemType = typeof object[i];  
            if(indexOf(simpleTypes, itemType) > -1){  
                //undefined特殊处理，数组中变成null  
                if(itemType !=  "undefined"){  
                    resArr.push(parseSimpleObject(object[i]));  
                }else{  
                    resArr.push("null");  
                }     
            }else{  
                //递归处理JS数组中的复杂元素  
                resArr.push(stringify(object[i]));  
            }  
        }  
        return "[" + resArr.join(",") + "]";  
    }  
    //普通的object对象  
    if(object instanceof Object){  
        if(object == null){  
            return "null";  
        }  
        var resArr = [];    
        for(var name in object){  
            var itemType = typeof object[name];  
            if(indexOf(simpleTypes, itemType) > -1){  
                //undefined特殊处理，object中不编码  
                if(itemType !=  "undefined"){  
                    resArr.push("\"" + name + "\":" + parseSimpleObject(object[name]));      
                }  
            }else{  
                resArr.push("\"" + name + "\":" + stringify(object[name]));  
            }  
        }  
        return "{" + resArr.join(",") + "}";  
    }  
}  
    ````