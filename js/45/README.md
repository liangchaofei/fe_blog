<!--
 * @Author: your name
 * @Date: 2020-03-10 15:19:21
 * @LastEditTime: 2020-03-10 15:19:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/45/README.md
 -->
```html
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div class="dustbin"><br />垃<br />圾<br />箱</div>
    <div class="dragbox">
        <div class="draglist" title="拖拽我" draggable="true">列表1</div>
        <div class="draglist" title="拖拽我" draggable="true">列表2</div>
        <div class="draglist" title="拖拽我" draggable="true">列表3</div>
        <div class="draglist" title="拖拽我" draggable="true">列表4</div>
        <div class="draglist" title="拖拽我" draggable="true">列表5</div>
        <div class="draglist" title="拖拽我" draggable="true">列表6</div>
    </div>
    <div class="dragremind"></div>
    <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js">
    </script>
    <script>
        var eleDustbin = $(".dustbin")[0], eleDrags = $(".draglist"), lDrags = eleDrags.length, eleRemind = $(".dragremind")[0], eleDrag = null;
        for (var i = 0; i < lDrags; i += 1) {
            eleDrags[i].onselectstart = function () {
                return false;
            };
            eleDrags[i].ondragstart = function (ev) {
                /*拖拽开始*/
                //拖拽效果
                ev.dataTransfer.effectAllowed = "move";
                ev.dataTransfer.setData("text", ev.target.innerHTML);
                ev.dataTransfer.setDragImage(ev.target, 0, 0);
                eleDrag = ev.target;
                return true;
            };
            eleDrags[i].ondragend = function (ev) {
                /*拖拽结束*/
                ev.dataTransfer.clearData("text");
                eleDrag = null;
                return false
            };
        }
        eleDustbin.ondragover = function (ev) {
            /*拖拽元素在目标元素头上移动的时候*/
            ev.preventDefault();
            return true;
        };

        eleDustbin.ondragenter = function (ev) {
            /*拖拽元素进入目标元素头上的时候*/
            this.style.color = "#ffffff";
            return true;
        };
        eleDustbin.ondrop = function (ev) {
            /*拖拽元素进入目标元素头上，同时鼠标松开的时候*/
            if (eleDrag) {
                eleRemind.innerHTML = '<strong>"' + eleDrag.innerHTML + '"</strong>被扔进了垃圾箱';
                eleDrag.parentNode.removeChild(eleDrag);
            }
            this.style.color = "#000000";
            return false;
        };
    </script>
</body>

</html>
```