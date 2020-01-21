<!--
 * @Author: your name
 * @Date: 2019-12-19 22:12:42
 * @LastEditTime : 2020-01-21 14:46:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /css_learn/2.BFC/README.md
 -->
## BFC介绍和应用

### BFC介绍
+ BFC（块格式化上下文）是一个单独的容器，类似黑盒子，黑盒子里面的元素和外面的元素互不干扰

### 什么方式会创建BFC
+ 根元素(html)
+ 浮动元素（元素的 float 不是 none）
+ 绝对定位元素（元素的 position 为 absolute 或 fixed）
+ 行内块元素（元素的 display 为 inline-block）
+ 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
+ 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
+ overflow 值不为 visible 的块元素
+ display 值为 flow-root 的元素
+ contain 值为 layout、content或 paint 的元素
+ 弹性元素（display为 flex 或 inline-flex元素的直接子元素）
+ 网格元素（display为 grid 或 inline-grid 元素的直接子元素）

### BFC的应用

#### 解决元素上下间边距重叠问题
+ 把div设置margin各20px，本以为两个div之间是40px，然后是20px，上下边距重叠了
```html
    <style>
        div{
            width: 100px;
            height: 100px;
            background: red;
            margin: 20px;
        }
    </style>

    <div></div>
    <div></div>
```

![](https://user-gold-cdn.xitu.io/2019/12/19/16f1e8d653e16d71?w=986&h=578&f=png&s=17930)

+ 通过BFC解决重叠问题，在每个div元素加个父元素，并给父元素设置overflow:hidden。这样两个div间距就是40px了。
```html
    <style>
        .text{
            overflow:hidden;
        }
        p{
            width:100px;
            height:100px;
            margin:20px;
            background:red;
        }
    </style>
    <div class="text">
        <p></p>
    </div>
    <div class="text">
        <p></p>
    </div>
```

![](https://user-gold-cdn.xitu.io/2019/12/19/16f1e910c0806db1?w=1282&h=1034&f=png&s=32643)


#### 解决浮动
+ 给子元素div设置浮动，就会导致父元素div的高度塌陷。看下代码和效果:
```html
    <div style="border: 1px solid #000;">
        <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
    </div>
```

![](https://user-gold-cdn.xitu.io/2019/12/19/16f1e93b7156fce7?w=594&h=312&f=png&s=4644)

+ 使用BFC解决父元素高度塌陷问题，给父元素div设置overflow:hidden。这样父元素就不塌陷了。
```html
    <div style="border: 1px solid #000;overflow:hidden;">
        <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
    </div>
```

![](https://user-gold-cdn.xitu.io/2019/12/19/16f1e94c57843660?w=490&h=268&f=png&s=3505)

#### 两列布局，左列固定，右边自适应
+ 两个div,第一个div左浮动，第二个div没浮动，会导致第一个div脱离文档流，放在第2个div上面。
```html
    <div style="height: 100px;width: 100px;float: left;background: lightblue">
     我是一个左浮动的元素
    </div>
    <div style=" height: 200px;background: #eee;">
    我是一个没有设置浮动, 也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;
    </div>
```

![](https://user-gold-cdn.xitu.io/2019/12/19/16f1e9939515a143?w=1642&h=526&f=png&s=50120)
+ 使用BFC解决，给第二个div设置overflow:hidden;这样两个div就分开了，也实现了两列布局。

![](https://user-gold-cdn.xitu.io/2019/12/19/16f1e9966a73e42b?w=1656&h=510&f=png&s=50002)