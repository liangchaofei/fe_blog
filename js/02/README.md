<!--
 * @Author: your name
 * @Date: 2020-01-19 10:44:11
 * @LastEditTime : 2020-01-21 14:27:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js_learn/04/README.md
 -->
## 什么是 IIFE，它的用途是什么？

### 定义和写法
+ IIFE或立即调用的函数表达式是在创建或声明后将被调用或执行的函数。 创建IIFE的语法是，将function (){}包裹在在括号()内，然后再用另一个括号()调用它，如：(function(){})()
```js
    (function(params) {
    console.log("This is My IIFE.");
    }(params));

    (function(params) {
    console.log("This is My IIFE.");
    })(params);

    !function(params) {
    console.log("This is My IIFE.");
    }(params);
```

### 用途
+ IIFE的一个主要作用是避免与全局作用域内的其他变量命名冲突或污染全局命名空间，来个例子。
```js
    <script src="https://cdnurl.com/somelibrary.js"></script>
```

  - 假设我们引入了一个omelibr.js的链接，它提供了一些我们在代码中使用的全局函数，但是这个库有两个方法我们没有使用：createGraph和drawGraph，因为这些方法都有bug。我们想实现自己的createGraph和drawGraph方法。

  - 解决此问题的一种方法是直接覆盖：
  ```html
    <script src="https://cdnurl.com/somelibrary.js"></script>
        <script>
        function createGraph() {
            // createGraph logic here
        }
        function drawGraph() {
            // drawGraph logic here
        }
        </script>
  ```

  - 当我们使用这个解决方案时，我们覆盖了库提供给我们的那两个方法。
+ 另一种方式是我们自己改名称：
  ```html
    <script src="https://cdnurl.com/somelibrary.js"></script>
    <script>
    function myCreateGraph() {
        // createGraph logic here
    }
    function myDrawGraph() {
        // drawGraph logic here
    }
    </script>
  ```

+ 还有一种方法就是使用IIFE：
```html
    <script src="https://cdnurl.com/somelibrary.js"></script>
    <script>
    const graphUtility = (function () {
        function createGraph() {
            // createGraph logic here
        }
        function drawGraph() {
            // drawGraph logic here
        }
        return {
            createGraph,
            drawGraph
        }
    })
    </script>
```

### IIFE 还可以用来解决一个常见的面试题：
```js
    var li = document.querySelectorAll('.list-group > li');
    for (var i = 0, len = li.length; i < len; i++) {
    li[i].addEventListener('click', function (e) {
        console.log(i);
    })

```
+ 假设我们有一个带有list-group类的ul元素，它有5个li子元素。 当我们单击单个li元素时，打印对应的下标值。但在此外上述代码不起作用，这里每次点击 li 打印 i 的值都是5，这是由于闭包的原因。
+ 闭包只是函数记住其当前作用域，父函数作用域和全局作用域的变量引用的能力。 当我们在全局作用域内使用var关键字声明变量时，就创建全局变量i。 因此，当我们单击li元素时，它将打印5，因为这是稍后在回调函数中引用它时i的值。

+ 使用 IIFE 可以解决此问题：
```js
    var li = document.querySelectorAll('.list-group > li');
    for (var i = 0, len = li.length; i < len; i++) {
    (function (currentIndex) {
        li[currentIndex].addEventListener('click', function (e) {
            console.log(currentIndex);
        })
    })(i);
    }
```
+ 该解决方案之所以行的通，是因为IIFE会为每次迭代创建一个新的作用域，我们捕获i的值并将其传递给currentIndex参数，因此调用IIFE时，每次迭代的currentIndex值都是不同的。