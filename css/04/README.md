<!--
 * @Author: your name
 * @Date: 2020-01-22 10:32:56
 * @LastEditTime : 2020-01-22 10:38:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/css/04/README.md
 -->


# 单行文本折断

```css
    div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
```
# span强制换行
```css
      span {
        word-wrap: break-word;
        word-break: break-all;
        white-space: pre-wrap !important;
    }
```
# 多行文本折断

第一种：-webkit-line-clamp实现
```css
    div {
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
```

第二种：利用定位元素实现多行文本折断

```css
    p {
        position: relative;
        line-height: 18px;
        height: 36px;
        overflow: hidden;
    }

    p::after {
        content: "...";
        font-weight: bold;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0 20px 1px 45px;

        background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(white), color-stop(50%, white));
        background: -moz-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
        background: -o-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
        background: -ms-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
        background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
    }
```

