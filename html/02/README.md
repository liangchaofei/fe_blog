<!--
 * @Author: your name
 * @Date: 2020-01-22 11:17:02
 * @LastEditTime: 2020-01-22 11:17:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/html/02/README.md
 -->
# 页面导入样式时，使用link和@import有什么区别？

## 区别
+ 1.link是html标签，@import是css提供的
+ 2.link是已进入页面就会被加载，@import是需要等页面加载完才会加载
+ 3.link没有兼容性问题，@import在ie5下不兼容
+ 4.link可以通过js动态操作dom引入样式来改变样式，@import不可以

## 在html中有4中引入css方式
+ 内联样式
```html
    <div style="color:red;font-size:12px;">hello</div>
```

+ 嵌入样式
```html
    <style>
        .content{
            color:red;
            font-size:12px;
        }
    </style>
```

+ 外联样式
```html
    <link href="style.css" type="text/css">
```

+ 导入样式
```html
    <style>
        @import url(style.css)
    </style>
```