<!--
 * @Author: your name
 * @Date: 2020-01-22 16:28:24
 * @LastEditTime: 2020-01-22 16:28:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/19/README.md
 -->
# js-在div中插入图片
```html
    <html>
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <title>edit</title>
</head>
<body>
    <div id="editor"
        style="width:400px;margin:100px auto;height:300px;border:1px solid #DFDFDF;"
        contenteditable="true">
        这里插入一个图片！
    </div>
    <a href="javascript:void(0);" onclick="edit()">强力插入！</a>
    <script>
    var editor = document.getElementById("editor");
    var range, bookmark;
    var saveFocus = function(){//保存焦点状态
        if (document.selection) { //只有坑爹的IE才执行下面的代码
            range = document.selection.createRange();
            bookmark=range.getBookmark();
        }
    }
    editor.onclick = saveFocus;//在鼠标点击编辑区时保存焦点
    editor.onkeydown = saveFocus;//在输入内容时也保存焦点
    function edit() {
        insertImg("http://www.baidu.com/img/baidu_sylogo1.gif");
    }
    function insertImg(_img) {
        if (range) { //同样，坑爹IE专用代码
            range.moveToBookmark(bookmark);
            range.select();
        }
        document.execCommand('InsertImage', false, _img);
 
    }
    </script>
</body>
</html>
```





