1.将ES6语法转换成ES5的语法

​	通过 Babylon 生成AST

​	通过 babel-core 将AST 重新生成源码

2.分析模块之间的依赖关系

​	通过 babel-traverse 的 ImportDeclaration方法获取依赖熟悉

3. 生成的js文件可以在浏览器中运行


开始：

初始化项目：

```shell
mkdir simple_webpack
cd simple_webpack
npm init -y
```

新建项目目录

![image-20201009211110007](/Users/liangchaofei/Downloads/aa/image-20201009211110007.png)

lib：simple_webpack的源码

src：业务代码的入口

simplepack.config.js：相当于webpack.config.js



首先在simplepack.config.js中配置输入和输出

```js
const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js',
  },
};
```



在src目录下创建index.js和greeting.js

```js
// index.js
import { greeting } from './greeting';

document.write(greeting('curry'));

// greeting.js
// 使用ES6语法
export function greeting(name) {
  return `hello ${name}`;
}

```



在lib目录下创建文件：

![image-20201009211929231](/Users/liangchaofei/Downloads/aa/image-20201009211929231.png)

index.js：入口文件

parser.js：解析AST语法树，转换成源码，将ES6转换成ES5，分析依赖

compiler.js：执行最后文件的输出



开始源码编写：

首先在compiler.js输出一个Compiler类，包括下面的熟悉和方法

```js
// compiler.js
module.exports = class Compiler {
  constructor(options) {
    // 这里的options就是simplepack导出的配置项
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
  }
  
  run() {}

  // 模块构建
  buildModule() {}

  // 输出文件
  emitFiles() {}
};
```

在index.js中实例化Compiler类

```js
const Compiler = require('./compiler');
const options = require('../simplepack.config');

new Compiler(options);
```



然后编写parser.js，这里做的是转换成AST树，将ES6转换成ES5，分析依赖

```js
// parser.js

module.exports = {
  // 生成AST树，根据文件路径生成
  getAST: path => {
    
  }
}
```

生成AST树，需要借助babylon，先安装下。

```shell
npm i babylon -S
```

继续编写getAST方法

```js
const babylon = require('babylon'); // 引入babylon
const fs = require('fs');	// 引入node中fs模块

module.exports = {
  // 生成AST树
  getAST: path => {
    // 同步读取文件
    const source = fs.readFileSync(path, 'utf-8');
    // 使用babylon的parse方法进行生成AST
    return babylon.parse(source, {
      sourceType: 'module',
    });
  },
};
```

现在getAST方法写好了，我们来测试下。在lib目录下创建test.js

```js
// lib/test.js

const { getAST } = require('./parser');
const path = require('path');

console.log(getAST(path.join(__dirname, '../src/index.js')));
```

执行node lib/test.js看下转换效果

![image-20201009213722167](/Users/liangchaofei/Library/Application Support/typora-user-images/image-20201009213722167.png)





下面接着写 分析依赖的方法

```js
// lib/parser.js

module.exports = {
  // ...
  getDependencies: () => {},
}
```

进行依赖分析，需要借助babel-traverse，这里安装下。

```shell
npm i babel-traverse -S
```

接着回来写分析依赖的方法

```js
const traverse = require('babel-traverse').default;

module.exports = {
  // ...
  getDependencies: ast => {
    const dependencies = [];
    traverse(ast, {
      // ImportDeclaration：分析import语句
      ImportDeclaration: ({ node }) => {
        // 将依赖push到dependencies中
        dependencies.push(node.source.value);
      },
    });
    // 将依赖返回
    return dependencies;
  },
};
```



接下来，测试下这个方法

```js
// lib/test.js
const { getAST, getDependencies } = require('./parser');
const path = require('path');

const ast = getAST(path.join(__dirname, '../src/index.js'));
console.log(getDependencies(ast));
```

执行 node lib/test.js，可以看到出现了依赖文件

![image-20201009214506479](/Users/liangchaofei/Downloads/aa/image-20201009214506479.png)



现在把ES6转成了AST树，接下来将AST树转换成源码，也就是ES5

```js
// lib/parser.js

module.exports = {
  // 将AST树转换成ES5
  transform: (ast) => {},
}
```

将AST树转换成ES5，需要借助babel-core，先安装下

```shell
npm i babel-core -S
```

回来写transform方法

```js
const { transformFromAst } = require('babel-core');
module.exports = {
  transform: ast => {
    const { code } = transformFromAst(ast, null, {
      presets: ['env'],
    });
    return code;
  },
}
```

此时安装下env

```shell
npm i @babel/preset-env babel-preset-env -S
```

在根目录下创建.babelrc

```js
{
    "presets": ["@babel/preset-env"]
}
```

测试下transform方法

```js
// lib/test.js
const { getAST, getDependencies, transform } = require('./parser');
const path = require('path');

const ast = getAST(path.join(__dirname, '../src/index.js'));
const dep = getDependencies(ast);
const source = transform(ast);
console.log(source);
```

执行 node lib/test.js ， 可以看到打印出了源码

![image-20201009215658193](/Users/liangchaofei/Downloads/aa/image-20201009215658193.png)

到此就写完了parser.js中的方法。



接下来开始写compiler.js中的方法



首先需要在index.js中执行run方法

```js
// lib/index.js
const Compiler = require('./compiler');
const options = require('../simplepack.config');

new Compiler(options).run();
```



开始写compiler.js中的buildModule

```js
module.exports = class Compiler {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
  }
  run() {
    const entryModule = this.buildModule(this.entry, true);
  }

  // 模块构建
  buildModule(filename, isEntry) {
    let ast;
    if (isEntry) {
      ast = getAST(filename);
    } else {
      // 这里需要找到绝对路径，通过path转换下
      const absolutePath = path.join(process.cwd(), './src', filename);
      ast = getAST(absolutePath);
    }
    return {
      filename,
      dependencies: getDependencies(ast),
      source: transform(ast),
    };
  }

  // 输出文件
  emitFiles() {}
};

```

接着写run方法，此时我们先可以打印下entryModule，查看结果,是在buildModule中返回的。

![image-20201009220751587](/Users/liangchaofei/Downloads/aa/image-20201009220751587.png)



我们需要把依赖全部放到一个数组中，定义this.modules来填充依赖。

```js
// lib/compiler.js
const { getAST, getDependencies, transform } = require('./parser');
const path = require('path');
module.exports = class Compiler {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
    this.modules = [];
  }
  run() {
    const entryModule = this.buildModule(this.entry, true);
    // 把依赖全部push到modules中
    this.modules.push(entryModule);
    // 遍历递归
    this.modules.map(_module => {
      _module.dependencies.map(dependency => {
        this.modules.push(this.buildModule(dependency));
      });
    });
    console.log(this.modules)
  }

  // 模块构建
  buildModule(filename, isEntry) {
    let ast;
    if (isEntry) {
      ast = getAST(filename);
    } else {
      const absolutePath = path.join(process.cwd(), './src', filename);
      ast = getAST(absolutePath);
    }
    return {
      filename,
      dependencies: getDependencies(ast),
      source: transform(ast),
    };
  }

  // 输出文件
  emitFiles() {}
};

```

打印下modules

![image-20201009221308356](/Users/liangchaofei/Downloads/aa/image-20201009221308356.png)



接下来，拿到所有依赖后，就要输出文件，在run方法中执行this.emitFiles方法

```js
modules.exports = {
  run(){
    // ...
    this.emitFiles()
  },
  emitFiles() {
    const outputPath = path.join(this.output.path, this.output.filename);
    // 
    let modules = '';
    this.modules.map(_module => {
      modules += `'${_module.filename}': function(require,module,exports){${_module.source}},`;
    });
    // 自执行
    const bundle = `(function(modules){
        function require(filename){
            var fn = modules[filename];
            var module = { exports: {}};
            fn(require, module, module.exports)
            return module.exports;
        }
        require('${this.entry}')
    })({${modules}})`;

    console.log('bundle', bundle);
    fs.writeFileSync(outputPath, bundle, 'utf-8');
  }
}
```

打印下最后的bundle，如下：

![image-20201009221932557](/Users/liangchaofei/Downloads/aa/image-20201009221932557.png)



手动创建下dist目录，执行node lib/index.js。可以看到dist目录下就有了打包好的文件

![image-20201009222046989](/Users/liangchaofei/Downloads/aa/image-20201009222046989.png)



在dist创建index.html，并引入main.js，在浏览器中打开index.html查看效果

![image-20201009222134730](/Users/liangchaofei/Downloads/aa/image-20201009222134730.png)



至此完成了一个简易的webpack