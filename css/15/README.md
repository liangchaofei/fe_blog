<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 09:34:00
 * @LastEditTime: 2020-03-10 15:16:47
 * @LastEditors: Please set LastEditors
 -->
## 第一行和第二行都是什么颜色
+ 都是红色。CSS 的覆盖顺序与标签内 class 定义的顺序无关，只与 style 中的顺序有关
```html 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            .red {color:red;}
            .green {color:green;}
        </style>
    </head>
    <body>
        <div class="green red">第一行：颜色是什么？</div>
        <div class="red green">第二行：颜色是什么？</div>
    </body>
    </html>
```