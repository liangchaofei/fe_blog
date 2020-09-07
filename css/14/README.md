<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-11 14:48:24
 * @LastEditTime: 2020-03-10 15:04:10
 * @LastEditors: Please set LastEditors
 -->
## 脱离文档流
+ 元素脱离文档流之后，将不再在文档流中占据空间，而是处于浮动状态（可以理解为漂浮在文档流的上方）。脱离文档流的元素的定位基于正常的文档流，当一个元素脱离文档流后，依然在文档流中的其他元素将忽略该元素并填补其原先的空间。

### 脱离文档流方法
+ float
  - 这段代码中把红色的框设置为了左浮，所以红色的框称为了浮动状态（浮动在蓝色框的上面），而蓝色框占用了原来空色框的位置。注意到，蓝色框中的文本依然认为红色框存在，所以为红色框让出了位置。由于div是块状元素，所以456出现在下方。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .aaa{
            width: 200px;
            height: 200px;
            border: 3px solid red;
            float: left;
        }
        .bbb{
            width: 200px;
            height: 100px;
            border: 3px solid blue
        }
    </style>
</head>
<body>
    <div class="aaa">123</div>
    <div class="bbb">456</div>
</body>
</html>
````

+ absolute
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .first {
            width: 200px;
            height: 200px;
            border: 3px solid red;
            position: relative;
        }

        .second {
            width: 200px;
            height: 100px;
            border: 3px solid blue;
            position: absolute;
            left: 0;
            top: 0;
        }

        .third {
            width: 200px;
            height: 200px;
            border: 3px solid green;
        }

        html {
            border: dotted;
        }
    </style>
</head>

<body>

    <div class="first">123
        <div class="second">456</div>
    </div>

    <div class="third">789</div>
</body>

</html>
```
+ fixed
  - 完全脱离文档流，相对于浏览器窗口进行定位。（相对于浏览器窗口就是相对于html）。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .first {
            width: 200px;
            height: 200px;
            border: 3px solid red;
        }
        .second {
            width: 200px;
            height: 100px;
            border: 3px solid blue;
            position: fixed;
            right: 0;
            top: 0;
        }
        .third {
            width: 200px;
            height: 200px;
            border: 3px solid green;
        }
        html{
            border: dotted;
        }
    </style>
</head>
<body>
    <div class="first">123</div>
    <div class="second">456</div>
    <div class="third">789</div>
</body>
</html>
```