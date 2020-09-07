<!--
 * @Author: your name
 * @Date: 2020-03-10 17:34:37
 * @LastEditTime: 2020-03-10 17:34:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/52/README.md
 -->
```js
    // 说说instanceof和typeof的实现原理并自己模拟实现一个instanceof

        //typeof
        // typeof 用来判断变量是什么类型，基本数据类型能够具体判断到，但是复杂类型，用typeof只能知道
        // 是Object，但是不知道是具体哪种Object。需要用instanceof才能知道具体是哪种Object。

        // js在底层存储变量的时候，会在变量的机器码的地位1-3位存储起类型信息
        // 000:对象
        // 010:浮点
        // 100:字符串
        // 110:布尔
        // 1:整数

        // 但是，undefined和null比较特色
        // null:所有机器码都是0
        // undefined:用-2^30整数来表示

        // 还可以用Object.prototype.toString来判断类型
        Object.prototype.toString.call(1) // "[object Number]"

        Object.prototype.toString.call('hi') // "[object String]"

        Object.prototype.toString.call({a:'hi'}) // "[object Object]"

        Object.prototype.toString.call([1,'a']) // "[object Array]"

        Object.prototype.toString.call(true) // "[object Boolean]"

        Object.prototype.toString.call(() => {}) // "[object Function]"

        Object.prototype.toString.call(null) // "[object Null]"

        Object.prototype.toString.call(undefined) // "[object Undefined]"

        Object.prototype.toString.call(Symbol(1)) // "[object Symbol]"

        var a = 'a'
        console.log(typeof a)   //string
        console.log( a instanceof Object) //false



        //instanceof 操作符的实现原理
        // 之前我们提到了 instanceof 来判断对象的具体类型，其实 instanceof 主要的作用就是判断一个实例是否属于某种类型
        let person = function () {
        }
        let nicole = new person()
        nicole instanceof person // true



        // 当然，instanceof 也可以判断一个实例是否是其父类型或者祖先类型的实例。

        let person = function () {
        }
        let programmer = function () {
        }
        programmer.prototype = new person()
        let nicole = new programmer()
        nicole instanceof person // true
        nicole instanceof programmer // true


        //instanceof 的原理
        function new_instance_of(leftVaule, rightVaule) { 
            let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
            leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
            while (true) {
                if (leftVaule === null) {
                    return false;	
                }
                if (leftVaule === rightProto) {
                    return true;	
                } 
                leftVaule = leftVaule.__proto__ 
            }
        }

        // 其实 instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可。因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。

```