```html
    <!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 17:08:38
 * @LastEditTime: 2020-03-10 15:21:44
 * @LastEditors: Please set LastEditors
 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #da {
            width: 577px;
            /*设置盒子的宽高，可以根据作为背景的图片宽高来进行设置*/
            height: 400px;
            background-image: url(a.png);
            /*设置盒子的背景图片*/
            background-repeat: no-repeat;
            /*设置背景图片不重复*/
            display: flex;
            flex-direction: column;
            justify-content: center;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex-box;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            text-align: center;
        }

        #aa {
            width: 88px;
            height: 88px;
        }
    </style>
</head>

<body>
    <div id="da">
        <img id="aa" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="">
        <div>让文字显示在图片上方</div>
    </div>
</body>

</html>
```