<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 09:27:51
 * @LastEditTime: 2020-03-10 14:41:08
 * @LastEditors: Please set LastEditors
 -->
### transition
+ 提供动画效果
+ 有4个值transition: property duration timing-function delay
  - property：规定设置过渡效果的 CSS 属性的名称。
  - duration：规定完成过渡效果需要多少秒或毫秒。
  - timing-function：规定速度效果的速度曲线。
  - delay：定义过渡效果何时开始
+ 将transition写在要有动画效果的dom元素上
+ 实现：当鼠标移到div上，div会从width为100变为300
```html
    <style>
        div{
            width:200px;
            height:200px;
            transition:width 2s;
            -moz-transition: width 2s; /* Firefox 4 */
            -webkit-transition: width 2s; /* Safari 和 Chrome */
            -o-transition: width 2s; /* Opera */
        }
        div:hover{
            width:300px;
        }
    </style>

    <div></div>
```

### animation
+ 提供动画效果
+ animation和@keyframes联合使用
+ animation有animation: name duration timing-function delay iteration-count direction;
  - name：规定需要绑定到选择器的 keyframe 名称。
  - duration：规定完成动画所花费的时间，以秒或毫秒计。
  - timing-function：规定动画的速度曲线
  - delay：规定在动画开始之前的延迟。
  - iteration-count：规定动画应该播放的次数。
  - direction：规定是否应该轮流反向播放动画

+ 实现：div自动从0移动到300处
```html
    <style>
        div{
            width:100px;
            height:100px;
            background:red;
            position:relative;
            animation: move 2s;
        }

        @keyframes move {
            from{
                left:0px;
            }
            to{
                left:200px;
            }
        }

        @-webkit-keyframes move {
            from{
                left:0px;
            }
            to{
                left:200px;
            }
        }
    </style>
    <div>
        
    </div>
```

### transfrom
+ 对dom元素进行平移，旋转，倾斜，缩放
+ 平移：transform:translate(10px,10px)
+ 旋转：transfrom:rotate(10deg)
+ 缩放：transfrom:scale(10px)
+ 倾斜：transfrom:skew(19deg,10deg)
+ 实现：
```html
    <style>
        div{
            width: 200px;
            height: 100px;
            background: red;
            /* 旋转 */
            /* transform: rotate(9deg); */ 
            /* 放大和缩小 */
            /* transform: scale(2); */

            /* 平移 */
            /* transform: translate(200px,10px); */

            /* 倾斜 */
            /* transform: skew(10deg,20deg); */
            margin-top: 20px;
        }
    </style>
    <div></div>
```