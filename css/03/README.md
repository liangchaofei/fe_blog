<!--
 * @Author: your name
 * @Date: 2020-01-21 15:11:05
 * @LastEditTime : 2020-01-21 15:13:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/css/03/README.md
 -->
### css实现吸顶效果
+ 使用position: sticky;top: 0;即可
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            div{
                position: sticky;
                top: 0;
            }
        </style>
    </head>
    <body>
        <div>1111</div>
    </body>
    </html>
```