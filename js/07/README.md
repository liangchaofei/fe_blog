<!--
 * @Author: your name
 * @Date: 2020-01-21 18:34:42
 * @LastEditTime : 2020-01-21 18:43:01
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/07/README.md
 -->
## 作用域和闭包

## 原型链
+ 概念：JS里面的对象可能会有父对象，父对象还会有父对象。。
+ 根本：继承
	- 属性：对象中几乎都会有一个__proto__属性，指向她的父对象
		- 意义：可以实现让该对象访问到父对象中的相关属性

+ 根对象：Object.prototype
	- var arr = [1,2,3]
	- arr.__proto__：Array.prototype
	- arr.__proto__.__proto__ 找到了根对象

	```js
		function Animal(){}
		var cat = new Animal()
		//cat.__proto__：Animal.prototype
        //cat.__proto__.__proto__:根对象
	```

## 闭包
### 变量作用域
+ 变量作用域的概念：就是一个变量可以使用的范围
+ JS中首先有一个最外层的作用域：全局作用域
+ JS中还可以通过函数创建出一个独立的作用域，其中函数可以嵌套，所以作用域也可以嵌套
```js
	var age = 12;	//age是在全局作用域中声明的变量：全局变量

	function f1(){
		console.log(name)	//可以访问到name变量
		var name = '小明';

		console.log(nanme);	//可以访问到name变量
		console.log(age)	//age是全局作用域中声明的，所以age也可以访问
	}

	console.log(age);       //也可以访问
```

```js
	<!-- 多级作用域 -->
	//--->1级作用域
	var gender = '男';
	function fn(){

		gender:	可以访问
		age:	可以访问
		height:	不可以访问
		//--->二级作用域
		return function(){
			gender:	可以访问
			age:	可以访问
			height:	可以访问
			console.log(gender)

			//--->3级作用域
			var height = 12;
		}

		var age = 13;
	}
```

### 作用域链
+ 由于作用域是相对于变量而言的，而如果存在多级作用域，这个变量又来自于哪里？这个问题就需要好好地探究一下了，我们把这个变量的查找过程称之为变量的作用域链
+ 作用域链的意义：查找变量（确定变量来自于哪里，变量是否可以访问）
+ 简单来说，作用域链可以用以下几句话来概括：(或者说：确定一个变量来自于哪个作用域)
    - 查看当前作用域，如果当前作用域声明了这个变量，就确定结果
        - 查找当前作用域的上级作用域，也就是当前函数的上级函数，看看上级函数中有没有声明
            - 再查找上级函数的上级函数，直到全局作用域为止
                - 如果全局作用域中也没有，我们就认为这个变量未声明(xxx is not defined)

+ 举例1:
```js
	var name = '张三';
	function f1(){
		var name = 'abc';
		console.log(name)	//abc
	}
	f1()
```

+ 举例2：
```js
    var name="张三";
    function f1(){
        console.log(name);	//undefined
        var name="abc";
    }
    f1()
 ```


+ 举例3：
```js
    var name="张三";
    function f1(){
        return function(){
            console.log(name);	//undefined
        }
        var name="abc";
    }
    var fn=f1();
    fn();
```

+ 举例4：
```js
    var name="张三";
    function f1(){
        return {
            say:function(){
                console.log(name);
                var name="abc";
            }
        }
    }
    var fn=f1();
    fn.say()	//undefined
```

### 闭包的问题
```js
	function fn(){
		var a = 3;
		return function(){
			a++;
			console.log(a)
		}
	}
	var f1 = fn()
	f1()
	f1()
	f1()
```

### 闭包问题的产生原因
+ 函数执行完毕后，作用域中保留了最新的a变量的值

### 闭包的应用场景
+ 模块化
+ 防止变量被破坏

### 作用域
```js
    var gender = "男";
	function fn(){
    	// console.log(age);    //因为age是在fn作用域内声明的
        //age:undefined：既然有值就是可以访问

		console.log(height)//height不是在该作用域内部声明的，所以不能访问

			return function(){
				var height = 180;
			}
			var age = 12;
	}

		//注意：变量的声明和赋值是在两个不同时期的
	    function fn1(){
	        console.log(age);   //undeinfed
	        var age=18;
	        console.log(age);   //18
	    }
	    fn1()

	     //fn函数执行的时候，首先找到函数内部所有的变量、函数声明，把他们放在作用域中，给变量一个初始值：undefined    -->变量可以访问
    	//逐条执行代码，在执行代码的过程中，如果有赋值语句，对变量进行赋值

    	function fn(){
	        var age;        //初始值：undefined

	        console.log(age);   //undeinfed
	        age=18;     //修改了变量的值
	        console.log(age);   //18
	    }


	    function fn3(){
	        console.log(age);
	        return function(){

	        }
	        var age=15;
	    }

	    //相当于：
	    function fn3(){
	        var age;    //初始化：undefined
	        
	        console.log(age);   //
	        return function(){

	        }
	        age=15;
	    }
```

### 作用域链
```js
    function fn(callback){
			var age = 12;
			callback()
	}

    fn(function(){
        console.log(age)	//Uncaught ReferenceError: age is not defined
        //分析：age变量：
        //1、查找当前作用域：并没有
        //2、查找上一级作用域：全局作用域
        //-->难点：看上一级作用域，不是看函数在哪里调用，而是看函数在哪里编写
        //-->因为这种特别，我们通常会把作用域说成是：词法作用域
    })
```

### 闭包
```js
    function fn(){
		var a = 5;
			return function(){
				a++;
				console.log(a)
			}
		}
		var f1 = fn()	//f1指向匿名函数
		f1()	//6
		f1()	//7
		f1()	//8

		//代码执行到15行fn函数执行完毕，返回匿名函数
        
        //      -->一般认为函数执行完毕，变量就会释放，但是此时由于js引擎发现匿名函数要使用a变量，所以a变量并不能得到释放，而是把a变量放在匿名函数可以访问到的地方去了
        
        //      -->a变量存在于f1函数可以访问到的地方，当然此时a变量只能被f1函数访问
```