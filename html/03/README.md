<!--
 * @Author: your name
 * @Date: 2020-01-22 11:19:40
 * @LastEditTime: 2020-01-22 11:19:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/html/03/README.md
 -->
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #lamp{
            width: 100px;
            height: 100px;
            border: 1px solid #000000;
            border-radius: 50%;
        }

    </style>
</head>
<body>
    <div id="lamp"></div>
    <script>
        let nextColor = (obj) =>{
            switch(obj.color){
                case'yellow':return {color:'green',time:3000};
                case'green':return {color:'red',time:2000};
                case'red':return {color:'yellow',time:1000}

            }
        }
        let colorChange = (obj)=>{
            return new Promise(resolve=>{
                document.getElementById("lamp").style.backgroundColor = obj.color;
                let next = nextColor(obj);
                setTimeout(resolve,obj.time,next)
            }).then(data=>{
                colorChange(data);
            })
        }
        colorChange({color:'green',time:3000})
    </script>
</body>
</html>

```