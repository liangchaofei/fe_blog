# js对象和构造函数基础学习


## 数据类型
+ 基本数据类型——值类型：(数字,字符串,布尔值,null,undefined)
+ 复杂数据类型——引用类型：（对象）
	- 数组
	- 函数
	- 正则表达式
	- Date

## 对象的基本使用
### 创建一个对象
```js
	var student = {
		name: "李白",	//student有一个name属性，值为李白
		grade: "初一",
		//a.student有个say属性，值为函数
		//b.student有个say方法
		say:function(){
			console.log("你好")
		},
		run:function(){
			console.log("正在以"+speed+"米/秒速度奔跑")
		}
	} 
```

### 对象是键值对的集合：对象是由属性和方法构成。
+ name是属性  grade是属性
+ say是方法.  run是方法

### 对象属性操作
#### 获取属性：
#### 第一种方法：.语法
+ student.name 	获取到name属性的值
+ student.say 	获取到一个函数

#### 第二种方法：[]语法
+ student["name"]	等价于student.name
+ student["say"]	等价于student.say

#### 2种方式的差异：
+ .语法更方便，但是坑比较多(有局限性)，比如：
	- .后面不能使用js的关键字，保留字（class,funtion...）
	- .后面不能使用数字
```js
	var obj = {};
	obj.this = 5; 	//语法错误
	obj.0 = 10; 	//语法错误
```

+ []使用更广泛
	- o1[变量name]
	- ["class"],["this"]都可以随意使用
	- [0],[1]也可以使用

#### 设置属性
+ `student["gender"]="男"`	等价于 `student.gender="男"`
	- 含义：如果student对象中没有gender属性，就添加一个gender属性，值为男
		   如果student对象中有gender属性，就修改gender属性的值为男
+ 案例1：`student.isFemale=true`
+ 案例2：`student["childred"]=[1,2,5]`
+ 案例3：
```js
	student.toBeijing = function(){
		console.log('正在去往北京的路上')
	}
```

#### 删除属性
+ delete student["gender"]
+ delete student.gender



## 通过构造函数创建对象
### 构造函数创建对象的例子：
+ var xiaoming = new Object()	=> var xiaoming={}
+ var now = new Date()			
+ var rooms = new Array(1,2,3)	=>  var rooms = [1,2,3]
+ `var isMale=/123/;`			=>	`var isMale = new RegExp("123")`
	- isMale是通过RegExp构造函数创建出来的对象
	- isMale是RegExp构造函数的实例

+ 以上例子中，Object,Date,Array,RegExp都是内置的构造函数

## 自定义一个构造函数来创建对象
+ 构造函数
```js
	function Person(name,age){
		this.name = name;
		this.age = age;
	}
	var p1 = new Person('小明',12)
```
+ 说明：`p1就是根据【Person构造函数】创建出来的对象`

### 构造函数的概念
+ 任何函数都有可以当成构造函数
	`function CreateFunc(){}`
+ 只要把一个函数通过new的方式来进行调用，我们就把这一次函数的调用方式称之为：构造函数的调用
	- new CreateFunc();	此时的CreateFunc就是一个构造函数
	- CreateFunc();		此时的CreateFunc不是一个构造函数

### 关于new Object()
+ new Object()等同于对象字面量{}

### 构造函数的执行过程
`var p1 = new Person()`
+ 1.创建一个对象（我们把这个对象成为Person构造函数的实例）- `_p1`
+ 2.创建一个内部对象，`this`,将this指向该实例子(_p1)
+ 3.执行函数内部的代码，其中，操作了this的部分就是操作了该实例(_p1)
+ 4.返回值：
	- a.如果函数没有返回值（没有return语句），那么就会返回构造函数的实例（_p1）
	- b.如果函数返回了一个基本数据类型的值，那么本次构造函数的返回值是该实例(_p1)
	```js
		function fn(){

		}
		var f1 = new fn();	//f1就是构造函数fn的实例

		function fn2(){
			return "abc";
		}
		var f2 = new fn2();	//f2就是构造函数fn2的实例
	```
	- c.如果函数返回了一个复杂数据类型，那么本次函数的返回值就是该值
	```js
		function fn3(){
			return [1,2,3];
			//数组是个对象类型的值
			//所以数组是个复杂数据类型的值
			//-->本次构造函数的真正返回值是该数组
			//-->不再是fn3
		}
		var fn3 = new fn3();
		//f3的值为[1,2,3]
	```
