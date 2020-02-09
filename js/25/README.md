<!--
 * @Author: your name
 * @Date: 2020-02-08 15:20:25
 * @LastEditTime : 2020-02-08 15:49:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/25/README.md
 -->
## 防抖与节流

### 防抖

+ 没有防抖的input
  - 每输入一次就发一次请求
```html
    <div>
        <span>没有防抖的input</span>
        <input type="text" id="unDebounce">
    </div>
    <script>
        // 没有防抖
        function ajax(content) {
            console.log('ajax request' + content)
        }

        let input = document.getElementById('unDebounce')
        input.addEventListener('keyup', function (e) {
            ajax(e.target.value)
        })
    </script>
```

+ 有防抖的input
  - 只在最后一次发请求
```html
    <div>
        <span>防抖后的input</span>
        <input type="text" id="debounce">
    </div>
    <script>
            //防抖
        function ajax2(content) {
            console.log('ajax request' + content)
        }
        function debounce(fn, delay) {
            return function (args) {
                let that = this;
                let _args = args;

                clearTimeout(fn.id)
                fn.id = setTimeout(function () {
                    fn.call(that, _args)
                }, delay)
            }
        }
        let debounceDom = document.getElementById('debounce');

        let debounceAjax = debounce(ajax, 500)

        debounceDom.addEventListener('keyup', function (e) {
            debounceAjax(e.target.value)
        })
    </script>
```
### 节流
+ 在指定时间间隔内每次执行
```html
    <div>
        <span>节流</span>
        <input type="text" id="throttle">
    </div>
    <script>
        //节流
        function throttle(fun, delay) {
            let last, deferTimer;
            return function (args) {
                let that = this;
                let _args = arguments;

                let now = +new Date();

                if (last && now < last + delay) {
                    clearTimeout(deferTimer)
                    deferTimer = setTimeout(function () {
                        last = now
                        fun.apply(that, _args)
                    }, delay)
                } else {
                    last = now;
                    fun.apply(that, _args)
                }
            }
        }

        let throttleAjax = throttle(ajax, 1000)
        let throttleDom = document.getElementById('throttle');
        throttleDom.addEventListener('keyup', function (e) {
            throttleAjax(e.target.value)
        })
    </script>
```

+ 函数防抖和函数节流都是防止某一时间频繁触发，但是这两兄弟之间的原理却不一样。
+ 函数防抖是某一段时间内只执行一次，而函数节流是间隔时间执行。

### 结合应用场景
+ 防抖
  - 1.search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
  - 2.window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次

+ 节流
  - 1.鼠标不断点击触发，mousedown(单位时间内只触发一次)
  - 2.监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断