<!--
 * @Author: your name
 * @Date: 2020-03-10 17:33:54
 * @LastEditTime: 2020-03-10 17:34:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/css/19/README.md
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
       .contain {
			position: relative;
			width: 200px;
			height: 200px;
		}
		.main {
			height: 100%;
			background: lightgreen;
			border-radius: 100px;
        }
        .common {
			position: absolute;
			top: 0;
			width: 50%;
            height: 100%;
		}
		.mask1 {
			transform: rotate(0deg);
			border-radius: 100px 0 0 100px;
			left: 0;
			transform-origin: right center;
			background: red;
		}
		.mask2 {
			transform: rotate(-76deg);
			transform-origin: left center;
			right: 0;
			border-radius: 0 100px 100px 0;
			background: blue;
		}
    </style>
</head>
<body>
        <!-- 用CSS画出一个任意角度的扇形，可以写多种实现的方法 -->
        <div class="contain">
                <div class="main"></div>
                <div class="mask1 common"></div>
                <div class="mask2 common"></div>
            </div>
</body>
</html>
```