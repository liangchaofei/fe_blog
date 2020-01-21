<!--
 * @Author: your name
 * @Date: 2020-01-21 16:31:26
 * @LastEditTime : 2020-01-21 16:48:36
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/06/README.md
 -->
## 函数调用四种方式

+ 函数调用
+ 方法调用
+ 构造函数调用
+ 上下文调用

### 函数调用
+ this指向window
```js
    var age = 12;
    var p = {
        age:15,
        say:function(){
            console.log(this.age)
        }
    }

    p.say()	//this:p,返回15

    var f1 = p.say;	//f1是函数
    f1()	//函数调用--->this:window，返回的12

    // 函数的第一种调用方式：函数调用
    // 函数内部的this指向window
```

### 方法调用
+ this指向当前对象
```js
    // 方法调用方式
	function Person(){
		this.age = 20;
	}
	Person.prototype.run = function(){
		console.log(this.age)
	}

	var p1 = new Person()
	p1.run()	//20

	var p2 = {
		height:180,
		travel:function(){
			console.log(this.height)
		}
	}
	p2.travel()	//180


	var clear = function(){
		console.log(this.length)
	}
	var length = 50;
	var tom = {
		c:clear,
		length:100
	}
	tom.c()
	//打印this.length 是50 还是100?
    //-->相当于：this是指向window还是指向tom呢？ 
    //  -->结果为：100  
    //      -->this:tom

    //结论：由于clear函数被当成tom.c()这种方法的形式来进行调用，所以函数内部的this指向调用该方法的对象：tom 

    var tony={ d:clear,length:30 };
    tony.d();       
    //方法调用的方式，所以clear函数内部的this指向tony的，
```

### 构造函数调用
+ this就是该构造函数的实例
```js
    function fn(name){
		console.log(this)
		this.name = name;
	}
	//通过new关键字来调用的，那么这种方式就是构造函数的构造函数的调用方式，那么函数内部的this就是该构造函数的实例
    var _n=new fn("小明");  //_n有个name属性，值为：小明
	console.log(_n.name)


	//2.
	function jQuery(){
		var _init = jQuery.prototype.init;
		// _init就是一个构造函数
		return new _init();
	}

	jQuery.prototype={
		constructor:jQuery,
		length:200,
		init:function(){
			console.log(this.length)
		}
	}
	jQuery.prototype.init()	//200
```
```js
    function jQuery(){
		var _init = jQuery.prototype.init;
		return new _init()
	}

	jQuery.prototype={
		constructor:jQuery,
		length:100,
		init:function(){
			//this指向init构造函数的实例
            //-->1、首先查看本身有没有length属性
            //-->2、如果本身没有该属性，那么去它的原型对象中查找
            //-->3、如果原型对象中没有，那么就去原型对象的原型对象中查找，最终一直找到根对象（Object.prototype）
            //-->4、最终都没有找到的话，我们认为该对象并没有该属性，如果获取该属性的值：undefined
			console.log(this.length)	//100
		}
	}

	var $init = jQuery.prototype.init;
	 //修改了init函数的默认原型，指向新原型
    $init.prototype=jQuery.prototype;

    jQuery();
```

### 上下文调用
+ 上下文调用方式，有3种，call、apply、bind
```js
    function f1(){
		console.log(this)
	}
	//call方法的第一个参数决定了函数内部的this的值
	f1.call([1,3,5])	//[1, 3, 5]
    f1.call({age:20,height:1000})	//{age: 20, height: 1000}
    f1.call(1)      //Number {1}
    f1.call("abc")	//String {"abc"}
    f1.call(true);	//Boolean {true}
    f1.call(null)	//Window
    f1.call(undefined);	//Window


     //上述代码可以用apply完全替换

    //总结：
    //call方法的第一个参数：
    //1、如果是一个对象类型，那么函数内部的this指向该对象
    //2、如果是undefined、null，那么函数内部的this指向window
    //3、如果是数字-->this：对应的Number构造函数的实例
    //      -->   1   --> new Number(1)
    //  如果是字符串-->this：String构造函数的实例
    //      --> "abc"   --> new String("abc")
    //  如果是布尔值-->this：Boolean构造函数的实例
    //      --> false   --> new Boolean(false)
```
+ call和apply的不同
```js
    //call和apply都可以改变函数内部的this的值
    //不同的地方：传参的形式不同

    function toString(a,b,c){
        console.log(a+" "+b+" "+c);
    }
    toString.call(null,1,3,5)   //"1 3 5"
    toString.apply(null,[1,3,5])//"1 3 5"
```