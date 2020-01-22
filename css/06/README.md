<!--
 * @Author: your name
 * @Date: 2020-01-22 10:53:21
 * @LastEditTime : 2020-01-22 10:53:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/css/06/README.md
 -->
### 文字在图片上面

+ 第一种：使用image作为背景图片
 ```html
    <div style="background:url('loading.gif') no-repeat;width:100px;height:50px">添加文字...添加文字...添加文字...</div
 ```

+ 第二种：是将img块与文字块（文字块采用span标签显示）放在同一个div 中，然后设置他们之间的位置，例如如下代码块

 ```html
    <div style="position: relative; width: 170px; height: 89px;">
        <img src="loading.gif" width="170" height="89" alt="">
        <span style="position: absolute; top: 0; left: 0;">添加文字...添加文字...添加文字...</span>
    </div>
 ```