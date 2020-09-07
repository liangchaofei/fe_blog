## 继承
### JS中继承的概念
+ 通过【某种方式】让一个对象可以访问到另一个对象的属性和方法，把这种方式称之为继承。

### 为什么要使用继承？
+ 有些对象会有方法（动作，行为），而这些方法都是函数，如果把这些方法和函数都放在构造函数中声明就会导致内存的浪费
```js
	function Person(){
		this.say= function(){
			console.log('你好')
		}
	}
	var p1 = new Person()
	var p2 = new Person()
	console.log(p1.say == p2.say)	//false
```
### 继承的第一种方式：原型链继承1
```js
	Person.prototype.say=function(){
		console.log('你好')
	}
```
+ 缺点：添加1，2个方法无所谓，但是如果方法很多会导致过多的代码冗余

### 继承的第二种方式：原型链继承2
```js
	Person.prototype = {
		constructor:Person,
		say:function(){
			console.log('你好')
		},
		run:function(){
			console.log('正在跑步')
		}
	}
```

+ 注意点：
+ a.一般情况下，应该先改变原型对象，再创建对象
+ b.一般情况下，对于新原型，会添加一个constructor属性，从而不破坏原有的原型对象的结构

### 继承的第三种方式：拷贝继承（混入继承）
+ 场景：有时候想使用某个对象的属性，但是又不能直接修改它，于是就可以创建一个该对象的拷贝
+ 实现1:
```js
	var source = {name:'李白',age:12}
	var target = {}
	target.name = source.name;
	target.age = source.age
```

+ 上面的方式很明显无法重用，实际代码编写过程中，很多时候都会使用拷贝继承的方式，所以为了重用，可以编写一个函数把他们封装起来：
```js
	function extend(target,source){
		for(key in source){
			target[key] = source[key]
		}
		return target;
	}
	extend(target,source)
```

+ 由于拷贝继承在实际开发中使用场景非常多，所以很多库都对此有了实现
    - jquery：$.extend

+ es6中有了对象扩展运算符仿佛就是专门为了拷贝继承而生：
```js
    var source={name:"李白",age:15}
    var target={ ...source }
```

### 继承的第四种方式：原型式继承
+ 场景：
	- 创建一个纯洁的对象
	- 创建一个继承自某个父对象的字对象
+ 使用方式：
	- 空对象：Object.create(null)
	-
	```js
		var o1={ say:function(){} }
        var o2=Object.create(o1);
	```

### 继承的第五种方式：借用构造函数实现继承
+ 场景：适用于2中构造函数之间逻辑有相似的情况

function Animal(name){
	this.name = name;
}

function Person(name,age){
	this.name = name;
	this.age = age;
}

+ 局限性：Animal(父类构造函数)的代码必须完全适用于Person(子类构造函数)

+ 以上代码用构造函数来实现
```js
	function Animal(name,age){
		this.name = name;
		this.age = age;
	}

	function Person(name,age,address){
		Animal.call(this,name);
		this.address = address;
	}
```