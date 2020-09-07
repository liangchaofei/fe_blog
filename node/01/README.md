<!--
 * @Author: your name
 * @Date: 2020-01-22 11:55:03
 * @LastEditTime: 2020-01-22 11:55:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/node/01/README.md
 -->
# koa中间件

## koa-cors2：解决跨域
```js
    const Koa = require('koa')
    const cors = require('koa-cors2')
    const app = new Koa()
    app.use(cors)
```

## koa-logger：打印日志
```js
    const Koa = require('koa')
    const logger = require('koa-logger')
    const app = new Koa()
    app.use(logger())
```

## koa-bodyparser：解析post数据
### 安装：npn install koa-bodyparser --save
```js
    const Koa = require('koa')
    const bodyparser = require('koa-bodyparser')
    const router = require('koa-router')
    const app = new Koa()

    app.use(bodyparser())

    app.post('/',ctx => {
        //获取表单提交的数据
        ctx.body = ctx.request.body;

    })

    //启动路由
    app.use(router.routes())
    app.use(router.allowMethods())

    app.listen(3000)
```