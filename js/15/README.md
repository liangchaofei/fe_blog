# 前端异常监控上报
## 需要上报的错误类型：
+ 1.静态资源加载失败
+ 2.AJAX请求失败
+ 3.js异常
    + 运行时错误
        - 同步错误
        - 异步错误
    + 语法错误
+ 4.promise异常

## 异常捕获方法
### 1.try catch
+ 注意：只能捕获同步运行时的错误，不能捕获语法错误和异步错误。
  - 捕获运行时同步错误
    ```js
        try{
            var a = 1;
            var c = a + b;
            console.log(c)
        }catch(e){
            console.log(e)  //ReferenceError: b is not defined
        }
    ```
+ 使用try catch能够很好的捕获异常并对应进行相应处理，不至于让页面挂掉，但是其存在一些弊端，比如需要在捕获异常的代码上进行包裹，会导致页面臃肿不堪，不适用于整个项目的异常捕获。

### 2.window.onerror

+ 相比try catch来说window.onerror提供了全局监听异常的功能：
```js
    window.onerror = function(errorMessage, scriptURI, lineNo, columnNo, error){
        console.log('errorMessage: ' + errorMessage); // 异常信息
        console.log('scriptURI: ' + scriptURI); // 异常文件路径
        console.log('lineNo: ' + lineNo); // 异常行号
        console.log('columnNo: ' + columnNo); // 异常列号
        console.log('error: ' + error); // 异常堆栈信息
    };

    console.log(a);
```
结果如下：
![avatar](/image/onerror.png)
window.onerror即提供了我们错误的信息，还提供了错误行列号，可以精准的进行定位

+ 注意：window.onerror 对于静态资源异常，接口异常，都捕获不到。
    - 试下捕获异步
    ```js
        window.onerror = function(messsage, source, lineno, colno, error){
            console.log('捕获到异常：',{
                messsage, source, lineno, colno, error
            })
        }
        setTimeout(function(){
            undefined.map(v=>v)
        },1000)
    ```
    输出：
    ![avatar](/image/error5.png)

+ 注意：onerror 最好写在所有 JS 脚本的前面，否则有可能捕获不到错误；

### 3.使用window.addEventListener 解决捕获静态资源问题：
+ 当一项资源（如图片或脚本）加载失败，加载资源的元素会触发一个 Event 接口的 error 事件，并执行该元素上的onerror() 处理函数。这些 error 事件不会向上冒泡到 window ，不过（至少在 Firefox 中）能被单一的window.addEventListener 捕获。
```html
    <script>
        window.addEventListener('error',error=>{
            console.log('捕获到异常：',error)
        },true)
    </script>
    <img src="./xxx/png" />
```
+ 由于网络请求异常不会事件冒泡，因此必须在捕获阶段将其捕捉到才行，但是这种方式虽然可以捕捉到网络请求的异常，但是无法判断 HTTP 的状态是 404 还是其他比如 500 等等，所以还需要配合服务端日志才进行排查分析才可以。

+ 注意：不同浏览器下返回的 error 对象可能不同，需要注意兼容处理。需要注意避免 addEventListener 重复监听。


## 异常捕获问题
### 跨域问题
```html
    <script src="http://cdn.xxx.com/index.js"></script>
```
现在把js文件放到跨域的cdn上面，运行访问：http://localhost/8000如下：

![avatar](/image/error2.png)
经过分析发现，跨域之后window.onerror是无法捕获异常信息的，所以统一返回Script error.，解决方案便是script属性配置 crossorigin=”anonymous” 并且服务器添加Access-Control-Allow-Origin。
```html
    <script src="http://cdn.xxx.com/index.js" crossorigin="anonymous"></script>
```
加上crossorigin=”anonymous”后如图：
![avatar](/image/error3.png)

### 2. sourceMap
解决跨域或者将脚本存放在同域之后，你可能会将代码压缩一下再发布，这时候便出现了压缩后的代码无法找到原始报错位置的问题。如图，我们用webpack将代码打包压缩成bundle.js：
![avatar](/image/error4.png)

解决办法:在webpack配置中加入devtool: '#source-map'。

## 错误上报
### 通过ajax 发送数据

+ 因为 Ajax 请求本身也有可能会发生异常，而且有可能会引发跨域问题，一般情况下更推荐使用动态创建 img 标签的形式进行上报

### 动态创建 img 标签的形式

```js
    function report(error) {
        let reportUrl = 'http://jartto.wang/report';
        new Image().src = `${reportUrl}?logs=${error}`;
    }
```

## 总结

+ 1.可疑区域增加 Try-Catch
+ 2.全局监控 JS 异常 window.onerror
+ 3.全局监控静态资源异常 window.addEventListener
+ 4.捕获没有 Catch 的 Promise 异常：unhandledrejection
+ 5.VUE errorHandler 和 React componentDidCatch
+ 6.监控网页崩溃：window 对象的 load 和 beforeunload
+ 7.跨域 crossOrigin 解决






