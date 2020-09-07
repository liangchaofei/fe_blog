<!--
 * @Author: your name
 * @Date: 2020-03-10 16:12:55
 * @LastEditTime: 2020-03-10 16:13:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/47/README.md
 -->
```html
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=ß, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        // 去除字符串中最后一个指定的字符
        function delstr(str,target){
            var index = str.lastIndexOf(target)
            var newstr  = str.substring(0,index) + str.substring(index+1)
            return newstr;
        }
        var str = 'abvdasd';
        console.log(delstr(str,'a'))
    </script>
</body>
</html>
```