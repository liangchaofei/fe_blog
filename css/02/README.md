### css 实现四个箭头方向
```html
    <!--
 * @Author: your name
 * @Date: 2020-01-21 15:01:10
 * @LastEditTime : 2020-01-21 15:10:12
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/css/02/1.html
 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        i {
            border: solid black;
            padding: 3px;
            border-width: 0 3px 3px 0;
            display: inline-block;

        }

        .right {
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
        }

        .left {
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
        }

        .up {
            transform: rotate(-135deg);
            -webkit-transform: rotate(-135deg);
        }

        .down {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
        }
    </style>
</head>

<body>
    <h2>CSS 方向</h2>

    <p>向右: <i class="right"></i></p>
    <p>向左: <i class="left"></i></p>
    <p>向上: <i class="up"></i></p>
    <p>向下: <i class="down"></i></p>
</body>

</html>
```