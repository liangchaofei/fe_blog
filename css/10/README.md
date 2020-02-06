<!--
 * @Author: your name
 * @Date: 2020-02-06 15:32:15
 * @LastEditTime : 2020-02-06 15:55:34
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/css/10/README.md
 -->
## 居中布局

### 水平居中
+ 块级元素: margin: 0 auto
```html
<style>
.aaa{
    width:100px;
    height:100px;
    margin: o auto;
    border: 10px solid;
}
</style>
<div class="aaa">1111</div>
```

+ flex + justify-content: center
```html
<style>
    .aaa{
        display: flex;
        justify-content: center;
    }
</style>
<div class="aaa">111</div>
```

+ absolute + transform
```html
    <style>
        .aaa{
           width: 100px;
           height: 100px;
           position: absolute;
           left: 50%;
           top: 50%;
           transform: translate(-50%,-50%);
       }
    </style>
    <div class="aaa">111</div>
```

### 垂直居中
+ line-height: height
```html
    <style>
            .aaa{
                width: 100px;
                height: 100px;
                border:1px solid;
                line-height: 100px;
            }
    </style>
    <body>
        <div class="aaa">
            111
        </div>
    </body>
```
+ absolute + transform
```html
    <style>
        .aaa{
           width: 100px;
           height: 100px;
           position: absolute;
           left: 50%;
           top: 50%;
           transform: translate(-50%,-50%);
       }
    </style>
    <div class="aaa">111</div>
```

+ flex + align-items: center
```html
    <style>
        .bbb{
            width: 100px;
            height: 100px;
            border:1px solid;
            display: flex;
            align-items: center;
        }
    </style>
    <div class="bbb">222</div>
```


### 水平垂直居中
+ flex + justify-content + align-items
```html
 <style>
        .bbb{
            width: 100px;
            height: 100px;
            border:1px solid;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
    <div class="bbb">222</div>
```


+ absolute + transform
```html
    <style>
        .aaa{
           width: 100px;
           height: 100px;
           position: absolute;
           left: 50%;
           top: 50%;
           transform: translate(-50%,-50%);
       }
    </style>
    <div class="aaa">111</div>
```