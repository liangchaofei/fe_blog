<!--
 * @Author: your name
 * @Date: 2020-03-10 15:39:35
 * @LastEditTime: 2020-03-10 15:52:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/46/README.md
 -->
## 原始类型和引用类型
### 原始类型
+ 5种基本类型
 - number
 - string
 - boolean
 - null 
 - undefined
+ 原始类型的值互不影响。
```js
    var color1 = 'red';
    var color2 = color1;

    console.log(color1) //red
    console.log(color2) //red

    color2 = 'blue'

    console.log(color1) //red
    console.log(color2) //blue
```
 - 可以看出来原始类型的值互不影响，当color2改变值的时候，color1的值没有改变。

 + 鉴别原始类型
 ```js
    console.log(typeof 'red')   //string
    console.log(typeof 123)     //number
    console.log(typeof true)    //boolean
    console.log(typeof undefined) //undefined
    console.log(typeof null)    //object
 ```
  - 只有null的类型为object，并不是null。
  - 判断一个值是否为空的最好办法：和null比较，注意使用三个=号
  ```js
    console.log(value === null) //true or false
  ```

### 引用类型
+ 创建对象
```js
    var obj = new Object()
``` 
+ 将一个对象赋值给一个变量的时候，再将这个变量赋值给另外一个变量的时候，这两个变量是同一个指针。
```js
    var obj1 = new Object()
    obj.name = 'aaa';
    var obj2 = obj1;
    
    console.log(obj1.name)  //aaa
    console.log(obj2.name)  //aaa

    obj2.name = 'bbb'
    console.log(obj2.name)  //bbb
    console.log(obj1.name)  //aaa
``` 
 - 此时obj1的name也改变了。

 + 对象引用解除
  - 将对象设置为null
+ 鉴别引用类型:instanceof
```js
  var aa = [];
  var bb = {};
  function vv (){}

  console.log(aa instanceof Array) //true
  console.log(bb instanceof Object) //true
  console.log(cc instanceof Functionn) //true

  // 引用类型都是继承object
   console.log(aa instanceof Object) //true
   console.log(bb instanceof Object) //true
   console.log(cc instanceof Object) //true
```

+ 鉴别数组
```js
  // Array.isArray()
  var arr = [];
  console.log(Array.isArray(arr))//true
```



## 函数声明 or 函数表达式
### 函数声明
+ 以function开头，有名称
```js
    function add (){

    }
```
### 函数表达式
+ 没有函数名称，是个匿名函数。会被赋值到一个变量。
+ 结尾要有逗号。
```js
    var add = function(){

    };
```

### 函数声明会被提升，函数表达式不会。
```js
    // 函数声明被提升
    add(1,2)
    function add(a,b){
        return a+b;
    }
    // 此时不会报错


    // 函数表达式不会被提升
    add(1,2)

    var add = function(a,b){
        return a+b;
    };
    // 此时会报错
```

### 函数参数
+ 参数都会被放到arguments里面，arguments是一个类数组，不是真正的数组。但是有数组的方法。
```js
    console.log(Array.isArray(arguments)) //false
```

### js中函数没有重载
```js
    function log(){
        console.log(1)
    }

    function log(){
        console.log(2)
    }
    log()   //2
```

### 改变对象中的this指向
+ call()
 - call()的第一个参数是函数执行时this的值
 - call()的第二个参数是向函数中传递的参数
 ```js
    function obj(lable) {
        console.log(lable+':'+this.name)
    }

    var person1 = {
        name:'aaa'
    }

    var person2 = {
        name:'bbb'
    }

    var name = 'ccc'

    console.log(obj.call(this,'window')) //label:window
    console.log(obj.call(person1,'person1')) //label:aaa
    console.log(obj.call(person2,'person2')) //label:bbb
 ```

 + apply()
 - apply()的第一个参数是函数执行时this的值
 - apply()的第二个参数是向函数中传递的参数,为数组或类似数组的对象
 - apply()的用法和call()一样
 ```js
    function obj(lable) {
        console.log(lable+':'+this.name)
    }

    var person1 = {
        name:'aaa'
    }

    var person2 = {
        name:'bbb'
    }

    var name = 'ccc'

    console.log(obj.call(this,['window'])) //label:window
    console.log(obj.call(person1,['person1'])) //label:aaa
    console.log(obj.call(person2,['person2'])) //label:bbb
 ```

 + bind()
  - 第一个参数是绑定的this对象
  - 第二个参数可有可无
  ```js
    function obj(lable) {
        console.log(lable+':'+this.name)
    }

    var person1 = {
        name:'aaa'
    }

    var person2 = {
        name:'bbb'
    }

    var aaa = obj.bind(person1)
    person('person1') //label:aaa

    var bbb = obj.bind(person2,'person2')
    bbb() //label:bbb

    bbb.sayname  = aaa;
    bbb.sayname('aaa') //label:aaa
    
  ```



  ## 检查对象中是否存在某个属性
+ 一般有人通过点的方式判断
```js
    if(person.age){
        //操作
    }
```
+ 这样判断方式是不正确的，因为在js中，当if判断中的值是一个对象，非空字符串，非空数字或true时，结果为真。当是一个null,undefied,0,false,NaN,空字符串结果为假。由于对象属性可以包含这些为假的值，可能会导致错误。比如person.age=0,虽然age属性确实存在，但是if条件确为假。
+ 应该这样判断对象中是否存在某个属性：in操作符
```js
    if(age in person){
        //操作
    }
```
## 对象的属性枚举
+ for-in
```js
    var obj = {
        name:'aa',
        age:2
    }

    for(item in obj){
        console.log(item)// 返回健
        console.log(obj[item])//返回值
    }
```
+ 获取对象中所有的健
    - Object.keys() 返回数组
+ for-in 和Object.keys()的区别
    - for-in会遍历自有属性和原型属性
    - Object.keys()只会遍历自有属性


## 构造函数和原型对象
### 构造函数
+ 所有用同一个构造函数创建的对象都有相同的属性和方法，如果想创建多个相同的对象，就可以创建构造函数。
+ 构造函数和普通函数一样，定义方式就是函数名字首字母大写
```js
    function Person(){
        
    }
```
+ 定义好构造函数后，就可以创建对象了。
```js
    var person1 = new Person()
    var person2 = new Person() 
```
+ 即使构造函数Person没有显示的返回任何东西，person1和person2会被认为是一个新的Person类型的实例。new操作符会自动创建给定类型的对象并返回他们。这意味着可以用instanceof 获取对象的类型.
```js
    console.log(person1 instanceof Person) //true
    console.log(person2 instanceof Person) //true
```

+ 每个对象在创建的时候，都会有个构造函数属性（constructor），指向构造函数
```js
    console.log(person1.constructor === Person) //true
    console.log(person2.constructor === Person) //true
```

+ 为构造函数创建属性和方法。
```js
    function Person(name){
        this.name = name;
        this.sayName = function(){
            console.log(this.name)
        }
    }

    var person1 = new Person('aaa')
    var person2 = new Person('bbb')

    console.log(person1.name)   //aaa
    console.log(person2.name)   //bbb

    person1.sayName()   //aaa
    person2.sayName()   //bbb
```

+ 这样的对象，每个对象都拥有相同的属性和方法，但是每个对象都会被new，造成重复的损失，可以用原型对象来避免，被多次new.

### 原型对象
+ 几乎所有的函数（除了一些内建函数）都有一个名为prototype的属性，该属性是一个原型对象用来创建新的对象实例，所有创建的对象实例共享该原型对象。且这些对象实例可以访问原型对象的属性。例如：hasOwnPrototype()方法被定义在Object的原型对象中，可以被任何对象当作自己的属性访问。
```js
    var book = {
        title:'111'
    }

    console.log(title in book)  //true
    console.log(book.hasOwnPrototype('title'))  //true
```
+ 虽然book中没有定义hasOwnPrototype()，但是可以使用，因为该方法存在Object.prototype中。

+ 鉴别一个属性是否是原型属性
```js
    function hasPro(object,name){
        return name in object && object.hasOwnPrototype(name)
    }
    //true 代表是原型属性
    //false 代表不是原型属性
```

+ Person.prototype就是原型对象
+ 写在原型对象的属性和方法会被多个对象实例共用
+ isPrototypeOf()检查一个对象是否是另一个对象的原型对象
```js
    var object = {}
    console.log(Object.prototype.isPrototypeOf(object)) //true
```

+ 当读取一个对象的属性时，会先在自身查找有没有该属性，没有的话，会在原型对象中查找，也没有的话，会返回undefined
+ delete只能删除对象的自有属性，删除不了原型对象的属性

### 在构造函数中使用原型对象
```js
    function Person(name){
        this.name = name;
    }
    Person.prototype.sayName = function(){
        console.log(this.name)
    }

    var p1 = new Person('aaa')
    var p2 = new Person('bbb')

    console.log(p1.name)    //aaa
    console.log(p2.name)    //bbb

    p1.sayName()    //aaa
    p2.sayName()    //bbb
```
+ 上面把sayName()方法放在了Person的原型对象里面，所以用new创建出来的对象实例可以共用。p1和p2对象都可以使用sayName()方法。this值分别被赋值在p1和p2中。

+ 如果在原型对象上添加引用类型的值时，会造成多个对象同时改变。
```js
    function Person(name){
        this.name = name;
    }

    Person.prototype.sayName = function (){
        console.log(this.name)
    }
    
    Person.prototype.favorite = [] //数组，引用类型

    var p1 = new Person('aaa')
    var p2 = new Person('bbb')

    p1.favorite.push('ccc')
    p2.favorite.push('ddd')

    console.log(p1.favorite)    //['ccc','ddd']
     console.log(p2.favorite)    //['ccc','ddd']

    //  因为在原型对象上添加了引用类型，导致p1和p2对象都添加了ccc和ddd
```

+ 使用对象字面形式代替原型对象
```js
    function Person(name){
        this.name = name
    }

    Person.prototype = {
        sayName:function(){
            console.log(this.name)
        },
        toString:function(){
            return this.name
        }
    }
```
+ 使用对象字面形式的缺点是对象实例的constructor指向了Object，而不是构造函数
```js
    var p1 = new Person('aaa')

    console.log(p1 instanceof Person)   //true
    console.log(p1.constructor === Person)  //false
    console.log(p1.constructor === Object)  //true

    // 可以看出来对象实例p1的constructor指向了Objcet
```

+ 解决办法：手动重置constructor属性
```js
    function Person(name){
        this.name = name
    }

    Person.prototype = {
        constructor:Person,
        sayName:function(){
            console.log(this.name)
        }
    }

    var p1 = new Person('aaa')

    console.log(p1 instanceof Person)   //true
    console.log(p1.constructor === Person)  //true
    console.log(p1.constructor === Object)  //false
```

+ constructor是原型对象的属性
+ 对象实例p1可以调用constructor属性
+ 对象实例p1的constructor指向构造函数或者Object，并且可以手动改变对象实例的constructor，也就是原型对象的属性constructor
+ p1.constructor = Person.prototype.constructor

### 内建对象也有原型对象
+ 比如数组
```js
    Array.prototype.sum = function(){
        return this.reduce((pre,cur)=>{
            return pre + cur
        })
    }

    var num = [1,2,3]
    var res = num.sum()

    console.log(6)
```

+ 通常，共享的方法和原始值的属性被定义在原型对象里面，其他属性被定义在构造函数里


## 原型对象链和Object.prototype
### 原型对象链
+ 对象继承原型对象。原型对象继承它的原型对象，依次类推。
+ 所有对象自动继承Object，确切的是，所有对象继承Object.prototype

### 继承自Object.prototype的方法
+ hasOwnPrototype()：检查是否存在一个给定名字的自有属性
+ isPrototypeOf()：检查一个对象是否是另一个对象的原型对象
+ valueOf()：返回一个对象的值表达式
+ toString()：返回一个对象的字符串表达式

### 对象继承
+ 对象继承是最简单的继承类型。只需要做的是指定哪个对象是新对象。对象字面形式会隐士指定Object.prototype为其[[Prototype]]，也可用Object.create()显示指定。

### 构造函数继承
