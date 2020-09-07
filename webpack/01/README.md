## webpack基础配置

### entry
+ 入口文件
```js
    entry:'./index.js'
```

### output
+ 出口文件，打包后的文件。
```js
    const path = require('path')
    outpu:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[hash:8].js'
    }
```

### mode
+ 两个选项
 - development：开发环境，打包的代码不会被压缩
 - production：生成环境，打包的代码会被压缩

### devtool
+ 控制是否生成source-map，开发环境有利定位，默认是false。生成环境需要关闭。
+ 常用值：
  - eval-source-map（推荐）
  - source-map
  - cheap-eval-source-map

### optimization
+ 用来让开发者根据需要自定义一些优化构建打包的策略配置
  - minimize：true/false,告诉webpack是否开启代码最小化压缩

### resolve
+ extensions：自动解析确定的扩展,省去你引入组件时写后缀的麻烦
+ alias：非常重要的一个配置，它可以配置一些短路径，
+ modules：webpack 解析模块时应该搜索的目录
```js
    //extensions 后缀可以省略，
    import Toast from 'src/components/toast'; 

    // alias ,短路径
    import Modal from '../../../components/modal' 
    //简写
    import Modal from 'src/components/modal' 


    resolve: {
    extensions: ['.js', '.jsx','.ts','.tsx', '.scss','.json','.css'],
    alias: {
        src :path.resolve(__dirname, '../src'),
        components :path.resolve(__dirname, '../src/components'),
        utils :path.resolve(__dirname, '../src/utils'),
    },
    modules: ['node_modules'],
    },
```

### module.rules
+ rules：也就是之前的loaders
+ test ： 正则表达式，匹配编译的文件
+ exclude：排除特定条件，如通常会写node_modules，即把某些目录/文件过滤掉
+ include：它正好与exclude相反
+ use -loader ：必须要有它，它相当于是一个 test 匹配到的文件对应的解析器，babel-loader、style-loader、sass-loader、url-loader等等
+ use - options：它与loader配合使用，可以是一个字符串或对象，它的配置可以直接简写在loader内一起，它下面还有presets、plugins等属性

```js
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['env',
                                {
                                    targets: {
                                    browsers: CSS_BROWSERS,
                                },
                            }],'react', 'es2015', 'stage-0'
                            ],
                            plugins: [
                                'transform-runtime',
                                'add-module-exports',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader',options:{plugins: [require('autoprefixer')({browsers: CSS_BROWSERS,}),],sourceMap: true}},
                    {loader: 'postcss-loader',options:{plugins: [require('autoprefixer')({browsers: CSS_BROWSERS,}),],sourceMap: true}},
                    {loader: 'sass-loader',options:{sourceMap: true}}
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader?limit=12&name=images/[name].[hash:8].[ext]',
                    },
                ],
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader?name=fonts/[name].[hash:8].[ext]',
                    },
                ],
            },
        ],
    },
```

### webpack-dev-server
+ contentBase ：告诉服务(dev server)在哪里查找文件，默认不指定会在是当期项目根目录
+ historyApiFallback:可以是boolean、 object，默认响应的入口文件，包括404都会指向这里
+ compress：启用 gzip 压缩
+ publicPath：它其实就是 output.publicPath，当你改变了它，即会覆盖了output的配置
+ proxy：它其实就是http-proxy-middleware，可以进行处理一些代理的请求

```js
    devServer : 
        contentBase:'./assets',
        host: '0.0.0.0',
        port: 9089,
        publicPath: '/assets/',
        historyApiFallback: {
            index: '/views/index.html'
        },
        /*
        rewrites: [
                { from: /^\/$/, to: '/views/landing.html' },
                { from: /^\/subpage/, to: '/views/subpage.html' },
                { from: /./, to: '/views/404.html' }
            ]
        }
        */
        compress: true,
        noInfo: true,
        inline: true,
        hot: true,
        stats: {
            colors: true,
            chunks: false
        },
        proxy:{
            '/mockApi': 'https://easy-mock.com/project/5a0aad39eace86040263d' ,//请求可直接写成  /mockApi/api/login...
        }
    }
```

### 插件
+ mini-css-extract-plugin
  - 提取css：默认就会对你的样式进行模块化拆分，异步按需加载
  ```js
    //mini-css-extract-plugin  编译打包
    config.module.rules.push({
    test: /\.(scss|css)$/,//同时处理css/scss
        use: [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        "css-loader", //css处理器
        {
            loader: 'postcss-loader',
            /*
                postcss 这个插件的作用在于，与已有的工具集成一起使用，很少有单独使用的情况，
                通用我们用的最多的，是配合 autoprefixer 来添加各浏览器的前缀，以达到更好的兼容，
                再深入一些就是 cssnext 就是允许开发者自定义属性和变量 ：     color:var(--theme-color,#42b983);
            */
            options: {
            plugins: [
                require('autoprefixer')({ 
                browsers: CSS_BROWSERS,
                }),
            ],
            },
        },
        "sass-loader" //sass处理器 、甚至还可以再加一个less的处理器
        ]
    })

    config.plugins.push(new MiniCssExtractPlugin({
    filename: 'css/[name].css', //这里配置跟output写法一致
    chunkFilename: 'css/[id][chunkhash:8].css',
    }));
    config.plugins.push(new OptimizeCssAssetsPlugin({})); //压缩文件
  ```

+ optimize-css-assets-webpack-plugin
  - 压缩css文件
  - assetNameRegExp：默认是全部的css都会压缩，该字段可以进行指定某些要处理的文件
  - cssProcessor：指定一个优化css的处理器，默认cssnano
  - cssProcessorPluginOptions：cssProcessor后面可以跟一个process方法，会返回一个promise对象，而cssProcessorPluginOptions就是一个options参数选项

  ```js
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
            //autoprefixer: { browsers: CSS_BROWSERS }, 也是可以指定前缀的
        },
        canPrint: true
    })
  ```

+ SplitChunksPlugin、RuntimeChunkPlugin
  - SplitChunksPlugin、RuntimeChunkPlugin，其实就是webpack4之前CommonsChunkPlugin的替代品，用于提取一些公共模块
  - chunks：要进行处理的类型，它有三个值：all,async,initial
  - minSize：最少大小
  - maxSize：最大包的大小，超出生成新的包
  - minChunks：至少要引用N次的模块
  - maxAsyncRequests：最大的按需加载并行请求数量
  - maxInitialRequests：最大的初始化加载请求次数

  ```js
    new webpack.optimize.SplitChunksPlugin({
        chunks: 'async', 
        minSize: 30000, 
        maxSize: 0, 
        minChunks: 1,  
        maxAsyncRequests: 1,
        maxInitialRequests:1, 
        name: true, //可以指定
        ……,//首席填坑官∙苏南的专栏 交流：912594095
        
    }),
    new webpack.optimize.RuntimeChunkPlugin({
        name: 'manifest',
        name: entrypoint => `runtimechunk~${entrypoint.name}` //动态文件名
    })
  ```

+ HotModuleReplacementPlugin
  - 热更新替换，在不刷新重载页面的情况下更换编辑修改后的代码
  
  ```js
    //webpack config
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]

    //路由入口页
    if (module.hot) {
        module.hot.accept([
            './pages/routes'
        ], (err) => {
            const NextRoute = require('./pages/routes')
            // 从DOM 中移除已经挂载的 React 组件 然后重装
            ReactDOM.unmountComponentAtNode(APP_DOM);
            ReactDOM.render(
                <Provider store={Store}>
                    <Router routes={NextRoute} history={browserHistory}/>
                </Provider>, APP_DOM);
        });
    }
  ```

+ html-webpack-plugin
  - 把编译后的文件（css/js）插入到入口文件中，可以只指定某些文件插入，可以对html进行压缩等
  - filename：输出文件名
  - template：模板文件，不局限于html后缀
  - removeComments：移除HTML中的注释
  - collapseWhitespace：删除空白符与换行符，整个文件会压成一行；
  - inlineSource：插入到html的css、js文件都要内联，即不是以link、script的形式引入
  - inject：是否能注入内容到 输出 的页面去
  - chunks：指定插入某些模块
  - hash：每次会在插入的文件后面加上hash ，用于处理缓存
  
  ```js
    
    new HtmlWebPackPlugin({
    filename: path.resolve(__dirname, '../assets/index.html'), 
    template: path.resolve(__dirname,"../views/temp.html"),
    minify:{ //压缩HTML文件&emsp;
    &emsp;&emsp;removeComments:true, 
    &emsp;&emsp;collapseWhitespace:true 
        },
    inlineSource:  '.(js|css)',
    inject: false,
        chunks: ['vendors', 'index'], //首席填坑官∙苏南的专栏
        hash:true, 
        favicon、meta、title等都可以配置，页面内使用「<%= htmlWebpackPlugin.options.title %>」即可
        ……
    })


  ```

+ uglifyjs-webpack-plugin
  - js代码压缩,默认会使用 optimization.minimizer
  - cache: Boolean/String ,字符串即是缓存文件存放的路径
  - test：正则表达式、字符串、数组都可以，用于只匹配某些文件，如：/.js(?.*)?$/i;
  - parallel : 启用多线程并行运行来提高编译速度，经常编译的时候听到电脑跑的呼呼响，可能就是它干的
  - output.comments ： 删除所
  - compress.warnings ：插件在进行删除一些无用代码的时候，不提示警告
  - compress.drop_console：喜欢打console的同学，它能自动帮你过滤掉，再也不用担心线上还打印日志了

  ```js
    //默认：
    optimization:{
        minimizer:true
    };

    //自定义
    minimizer: [
        new UglifyJsPlugin({
            cache: true,
            // cache: "assets", 
            parallel: true, //也可以指定 Number ,即最多并行运行数量
            sourceMap: true,
            uglifyOptions: {
            output: {
                comments: false,
                …… //首席填坑官∙苏南的专栏，QQ:912594095
            },
            compress: {
                warnings: false,
                drop_console:true,
                …… 
                }
            },
        }),
    ],
  ```