<!--
 * @Author: your name
 * @Date: 2020-01-22 10:51:46
 * @LastEditTime : 2020-01-22 10:52:04
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/css/05/README.md
 -->
## ul中的文字在div下整体水平居中

```css
    <!-- 直接给父元素设置css: -->

    #aaa{
        display:flex;
        justify-content:center;
    }

    <div id="aaa">
        <ul>
            <li>111</li>
            <li>22222</li>
        </ul>
    </div>
```