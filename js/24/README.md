<!--
 * @Author: your name
 * @Date: 2020-02-07 15:10:54
 * @LastEditTime : 2020-02-07 17:25:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/24/README.md
 -->
## 深入理解 new 操作符

+ 和其他高级语言一样 JavaScript 也有 new 操作符，我们知道 new 可以用来实例化一个类，从而在内存中分配一个实例对象。 但在 JavaScript 中，万物皆对象，为什么还要通过 new 来产生对象？ 带着这个问题，我们一步步来分析和理解 new 的一些特性

### 认识 new 操作符
```js
    function Animal(name){
        this.name = name;
    }
    Animal.color = "black";
    Animal.prototype.say = function(){
        console.log("I'm "+ this.name);
    };
    var cat = new Animal("cat");
    
    console.log(
        cat.name,  //cat
        cat.height //undefined
    );
    cat.say(); //I'm cat
    
    console.log(
        Animal.name, //Animal
        Animal.color //back
    );
    Animal.say(); //Animal.say is not a function
```

+ 代码解读如下：
  - L1-3： 创建了一个函数Animal，并在其 this 上定义了属性：name，name的值是函数被执行时的形参
  - L4 ： 在 Animal 对象（Animal本身是一个函数对象）上定义了一个静态属性:color,并赋值“black”
  - L5-7：在 Animal 函数的原型对象 prototype 上定义了一个 say() 方法，say方法输出了 this 的 name 值。
  - L8： 通过 new 关键字创建了一个新对象 cat
  - L10-14： cat 对象尝试访问 name 和 color 属性，并调用 say 方法。
  - L16-20： Animal 对象尝试访问 name 和 color 属性，并调用 say 方法。

### 剖析 new 的内部原理

+ 第8行代码是关键： 
```js
    var cat = new Animal("cat");
```
+ Animal 本身是一个普通函数，但当通过new来创建对象时，Animal 就是构造函数。

+ JS引擎执行这句代码时，在内部做了很多工作，用伪代码模拟其内部流程如下：
```js
    new Animal('cat') = {
        varobj = {};
        obj.__proto__ = Animal.prototype;
        varresult = Animal.call(obj,"cat");
        returntypeofresult === 'object'? result : obj;
    }
```

+ 将上述流程分为 4 个步骤来理解：
  - 1.创建一个空对象 obj；
  - 2.把 obj 的__proto__ 指向构造函数 Animal 的原型对象 prototype，此时便建立了 obj 对象的原型链：obj->Animal.prototype->Object.prototype->null
  - 3.在 obj 对象的执行环境调用 Animal 函数并传递参数 “ cat ” 。 相当于 var result = obj.Animal("cat")。 当这句执行完之后，obj 便产生了属性 name 并赋值为 "cat"
  - 4.考察第 3 步的返回值，如果无返回值 或者 返回一个非对象值，则将 obj 作为新对象返回；否则会将 result 作为新对象返回。

+ 根据以上过程，我们发现 cat 其实就是【4】的返回值，因此我们对 cat 对象的认知就多了一些
  - 1.cat 的原型链是：cat->Animal.prototype->Object.prototype->null
  - 2.cat上新增了一个属性：name

+ 分析完了 cat 的产生过程，我们再分析一下输出结果：
  - 1.cat.name - 在【3】中，obj 对象就产生了 name 属性。因此 cat.name 就是这里的 obj.name
  - 2.cat.color - cat 对象先查找自身的 color，没有找到便会沿着原型链查找，在上述例子中，我们仅在 Animal 对象上定义了 color，并没有在其原型链上定义，因此找不到。
  - 3.cat.say -  cat会先查找自身的 say 方法，没有找到便会沿着原型链查找，在上述例子中，我们在 Animal 的 prototype 上定义了say，因此在原型链上找到了say 方法。

+ 另外，在 say 方法中还访问 this.name，这里的 this 指的是其调用者 obj，因此输出的是 obj.name 的值。

+ 对于Animal来说，它本身也是一个对象，因此它在访问属性和方法时也遵守上述查找规则，所以：
  - 1.Animal.color >  " black "
  - 2.Animal.name >  " Animal " 
  - 3.Animal.say() >   Animal.say is not a function

+ 需要注意的是，Animal 先查找自身的 name，找到了 name，但这个 name 并不是我们定义的 name，而是函数对象内置的属性，一般情况下，函数对象在产生时会内置 name 属性并将函数名作为赋值（仅函数对象）。

+ 另外，Animal 在自身没有找到 say() 方法，也会沿着其原型链查找,Animal 的原型链： Animal->Function.prototype->Object.prototype->null。 由于 Animal 的原型链上也没有定义 say 方法，因此返回异常提示。


### 探索 new 的意义
+ 对 new 运算符有了较深入的理解之后，我们再回到开篇提到的问题：在JavaScript 中，万物皆对象，为什么还要通过 new 来产生对象？
+ 要弄明白这个问题，我们首先要搞清楚 cat 和 Animal 的关系：

+ 【1】cat 继承了 Animal 对象
  - 通过上面的分析我们发现， cat 通过原型链继承了 Animal 中的部分属性，因此我们可以简单的认为：Animal 和 cat 是继承关系。

+ 【2】cat 是 Animal 的实例
  - cat 是通过 new 产生的对象，那么 cat 到底是不是 Animal 的实例对象？ 我们先来了解一下JS是如何来定义实例对象：
  ```js
    A instanceof B
  ```
  - 如果上述表达式为 true，JavaScript 认为 A 是 B 的实例对象，我们用这个方法来判断一下 cat 和 Animal 。
  ```js
    cat instanceof Animal; //true
  ```
  - 从结果看，cat 确实是 Animal 实例，要想更加证实这个结果，我们再来了解一下 instanceof 的内部原理：
  ```js
    var L = A.__proto__;
    var R = B.prototype;
    if(L === R)
        return true;
    ```

+ 如果 A 的__proto__ 等价于 B 的 prototype，就返回 true 。
+ 在 new 的执行过程【2】中，cat 的 __proto__ 指向了Animal 的 prototype，所以 cat 和 Animal 符合 instanceof 的判断结果。
+ 因此，通过 new 创建的 对象 和 构造函数 之间建立了一条原型链，原型链的建立，让原本孤立的对象有了依赖关系和继承能力，让JavaScript 对象能以更合适的方式来映射真实世界里的对象，这是面向对象的本质。

### 实战演练
+ 下面是一个经典例子，涉及 new 、this、以及原型链相关问题，请看代码：
```js   
    function Foo(){
            getName = function(){
                console.log(1)
            }
            return this;
        }
        
        Foo.getName = function(){
            console.log(2)
        }

        Foo.prototype.getName = function(){
            console.log(3)
        }

        var getName = function(){
            console.log(4)
        }

        function getName(){
            console.log(5)
        }


        Foo.getName() // 2

        getName() // 4 

        Foo().getName() //1

        getName() // 1


        new Foo.getName() // 2

        new Foo().getName() //3

        new new Foo().getName() //3
```

### 第一问
+ 先看此题的上半部分做了什么，首先定义了一个叫Foo的函数，之后为Foo创建了一个叫getName的静态属性存储了一个匿名函数，之后为Foo的原型对象新创建了一个叫getName的匿名函数。之后又通过函数变量表达式创建了一个getName的函数，最后再声明一个叫getName函数。

+ 第一问的Foo.getName自然是访问Foo函数上存储的静态属性，答案自然是2，这里就不需要解释太多的，一般来说第一问对于稍微懂JS基础的同学来说应该是没问题的,当然我们可以用下面的代码来回顾一下基础，先加深一下了解
```js
    function User(name) {
        var name = name; //私有属性
        this.name = name; //公有属性
        function getName() { //私有方法
            return name;
        }
    }
    User.prototype.getName = function() { //公有方法
        return this.name;
    }
    User.name = 'Wscats'; //静态属性
    User.getName = function() { //静态方法
        return this.name;
    }
    var Wscat = new User('Wscats'); //实例化
```
+ 注意下面这几点
  - 1.调用公有方法，公有属性，我们必需先实例化对象，也就是用new操作符实化对象，就可构造函数实例化对象的方法和属性，并且公有方法是不能调用私有方法和静态方法的
  - 2.静态方法和静态属性就是我们无需实例化就可以调用
  - 3.而对象的私有方法和属性,外部是不可以访问的

### 第二问
+ 第二问，直接调用getName函数。既然是直接调用那么就是访问当前上文作用域内的叫getName的函数，所以这里应该直接把关注点放在4和5上，跟1 2 3都没什么关系。当然后来我问了我的几个同事他们大多数回答了5。此处其实有两个坑，一是变量声明提升，二是函数表达式和函数声明的区别。
+ 在Javascript中，定义函数有两种类型
#### 函数声明
```js
    // 函数声明
    function wscat(type) {
        return type === "wscat";
    }
```
#### 函数表达式
```js
    // 函数表达式
    var oaoafly = function(type) {
        return type === "oaoafly";
    }
```

+ 先看下面这个经典问题，在一个程序里面同时用函数声明和函数表达式定义一个名为getName的函数
```js
    getName() //oaoafly
    var getName = function() {
        console.log('wscat')
    }
    getName() //wscat
    function getName() {
        console.log('oaoafly')
    }
    getName() //wscat
```
+ 上面的代码看起来很类似，感觉也没什么太大差别。但实际上，Javascript函数上的一个“陷阱”就体现在Javascript两种类型的函数定义上。
  - 1.JavaScript 解释器中存在一种变量声明被提升的机制，也就是说函数声明会被提升到作用域的最前面，即使写代码的时候是写在最后面，也还是会被提升至最前面。
  - 2.而用函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用
```js
    var getName //变量被提升，此时为undefined

    getName() //oaoafly 函数被提升 这里受函数声明的影响，虽然函数声明在最后可以被提升到最前面了
    var getName = function() {
        console.log('wscat')
    } //函数表达式此时才开始覆盖函数声明的定义
    getName() //wscat
    function getName() {
        console.log('oaoafly')
    }
    getName() //wscat 这里就执行了函数表达式的值
```

+ 所以可以分解为这两个简单的问题来看清楚区别的本质
```js
    var getName;
    console.log(getName) //undefined
    getName() //Uncaught TypeError: getName is not a function
    var getName = function() {
        console.log('wscat')
    }  
```
```js
    var getName;
    console.log(getName) //function getName() {console.log('oaoafly')}
    getName() //oaoafly
    function getName() {
        console.log('oaoafly')
    }
```
+ 这个区别看似微不足道，但在某些情况下确实是一个难以察觉并且“致命“的陷阱。出现这个陷阱的本质原因体现在这两种类型在函数提升和运行时机（解析时/运行时）上的差异。
+ 当然我们给一个总结：Javascript中函数声明和函数表达式是存在区别的，函数声明在JS解析时进行函数提升，因此在同一个作用域内，不管函数声明在哪里定义，该函数都可以进行调用。而函数表达式的值是在JS运行时确定，并且在表达式赋值完成后，该函数才能调用。

+ 所以第二问的答案就是4，5的函数声明被4的函数表达式覆盖了

### 第三问
+ Foo().getName(); 先执行了Foo函数，然后调用Foo函数的返回值对象的getName属性函数。
Foo函数的第一句getName = function () { alert (1); };是一句函数赋值语句，注意它没有var声明，所以先向当前Foo函数作用域内寻找getName变量，没有。再向当前函数作用域上层，即外层作用域内寻找是否含有getName变量，找到了，也就是第二问中的alert(4)函数，将此变量的值赋值为function(){alert(1)}。

+ 此处实际上是将外层作用域内的getName函数修改了。

+ 简单的讲，this的指向是由所在函数的调用方式决定的。而此处的直接调用方式，this指向window对象。
遂Foo函数返回的是window对象，相当于执行window.getName()，而window中的getName已经被修改为alert(1)，所以最终会输出1

+ 此处考察了两个知识点，一个是变量作用域问题，一个是this指向问题

+ 我们可以利用下面代码来回顾下这两个知识点
```js
    var name = "Wscats"; //全局变量
    window.name = "Wscats"; //全局变量
    function getName() {
        name = "Oaoafly"; //去掉var变成了全局变量
        var privateName = "Stacsw";
        return function() {
            console.log(this); //window
            return privateName
        }
    }
    var getPrivate = getName("Hello"); //当然传参是局部变量，但函数里面我没有接受这个参数
    console.log(name) //Oaoafly
    console.log(getPrivate()) //Stacsw
```

+ 因为JS没有块级作用域，但是函数是能产生一个作用域的，函数内部不同定义值的方法会直接或者间接影响到全局或者局部变量，函数内部的私有变量可以用闭包获取，函数还真的是第一公民呀~

+ 而关于this，this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上this的最终指向的是那个调用它的对象

+ 所以第三问中实际上就是window在调用**Foo()**函数，所以this的指向是window
```js
    window.Foo().getName();
    //->window.getName();
```

### 第四问
+ 直接调用getName函数，相当于window.getName()，因为这个变量已经被Foo函数执行时修改了，遂结果与第三问相同，为1，也就是说Foo执行后把全局的getName函数给重写了一次，所以结果就是Foo()执行重写的那个getName函数

### 第五问
+ 第五问new Foo.getName();此处考察的是JS的运算符优先级问题，我觉得这是这题灵魂的所在，也是难度比较大的一题

+ 这题首先看优先级的第18和第17都出现关于new的优先级，new (带参数列表)比new (无参数列表)高比函数调用高，跟成员访问同级

+ new Foo.getName();的优先级是这样的,相当于是:
```js
    new (Foo.getName)();
```
  - 1.点的优先级(18)比new无参数列表(17)优先级高
  - 2.当点运算完后又因为有个括号()，此时就是变成new有参数列表(18)，所以直接执行new，当然也可能有朋友会有疑问为什么遇到()不函数调用再new呢，那是因为函数调用(17)比new有参数列表(18)优先级低

+ 所以这里实际上将getName函数作为了构造函数来执行，遂弹出2。

### 第六问
+ 这一题比上一题的唯一区别就是在Foo那里多出了一个括号，这个有括号跟没括号我们在第五问的时候也看出来优先级是有区别的
```js
    (new Foo()).getName()
```

+ 那这里又是怎么判断的呢？首先new有参数列表(18)跟点的优先级(18)是同级，同级的话按照从左向右的执行顺序，所以先执行new有参数列表(18)再执行点的优先级(18)，最后再函数调用(17)

+ 这里还有一个小知识点，Foo作为构造函数有返回值，所以这里需要说明下JS中的构造函数返回值问题。

#### 构造函数的返回值
+ 在传统语言中，构造函数不应该有返回值，实际执行的返回值就是此构造函数的实例化对象。
而在JS中构造函数可以有返回值也可以没有。

  - 1.没有返回值则按照其他语言一样返回实例化对象。
  ```js
    function Foo(name) {
        this.name = name
    }
    console.log(new Foo('wscats'))
  ```
  - 2.若有返回值则检查其返回值是否为引用类型。如果是非引用类型，如基本类型（String,Number,Boolean,Null,Undefined）则与无返回值相同，实际返回其实例化对象。
  ```js
    function Foo(name) {
        this.name = name
        return 520
    }
    console.log(new Foo('wscats'))
  ```
  - 3.若返回值是引用类型，则实际返回值为这个引用类型。
  ```js
    function Foo(name) {
        this.name = name
        return {
            age: 16
        }
    }
    console.log(new Foo('wscats'))
  ```

+ 原题中，由于返回的是this，而this在构造函数中本来就代表当前实例化对象，最终Foo函数返回实例化对象。

+ 之后调用实例化对象的getName函数，因为在Foo构造函数中没有为实例化对象添加任何属性，当前对象的原型对象(prototype)中寻找getName函数。

+ 当然这里再拓展个题外话，如果构造函数和原型链都有相同的方法，如下面的代码，那么默认会拿构造函数的公有方法而不是原型链，这个知识点在原题中没有表现出来，后面改进版我已经加上。
```js
    function Foo(name) {
        this.name = name
        this.getName = function() {
            return this.name
        }
    }
    Foo.prototype.name = 'Oaoafly';
    Foo.prototype.getName = function() {
        return 'Oaoafly'
    }
    console.log((new Foo('Wscats')).name) //Wscats
    console.log((new Foo('Wscats')).getName()) //Wscats
```

### 第七问
+ new new Foo().getName();同样是运算符优先级问题。做到这一题其实我已经觉得答案没那么重要了，关键只是考察面试者是否真的知道面试官在考察我们什么。
+ 最终实际执行为:
```js
    new ((new Foo()).getName)();
```
+ 先初始化Foo的实例化对象，然后将其原型上的getName函数作为构造函数再次new，所以最终结果为3

### 后续
+ 后续我把这题的难度再稍微加大一点点(附上答案)，在Foo函数里面加多一个公有方法getName，对于下面这题如果用在面试题上那通过率可能就更低了，因为难度又大了一点，又多了两个坑，但是明白了这题的原理就等同于明白了上面所有的知识点了
```js
    function Foo() {
        this.getName = function() {
            console.log(3);
            return {
                getName: getName //这个就是第六问中涉及的构造函数的返回值问题
            }
        }; //这个就是第六问中涉及到的，JS构造函数公有方法和原型链方法的优先级
        getName = function() {
            console.log(1);
        };
        return this
    }
    Foo.getName = function() {
        console.log(2);
    };
    Foo.prototype.getName = function() {
        console.log(6);
    };
    var getName = function() {
        console.log(4);
    };

    function getName() {
        console.log(5);
    } //答案：
    Foo.getName(); //2
    getName(); //4
    console.log(Foo())
    Foo().getName(); //1
    getName(); //1
    new Foo.getName(); //2
    new Foo().getName(); //3
    //多了一问
    new Foo().getName().getName(); //3 1
    new new Foo().getName(); //3  
```