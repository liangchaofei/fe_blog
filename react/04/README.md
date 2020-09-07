<!--
 * @Author: your name
 * @Date: 2020-01-22 14:25:35
 * @LastEditTime: 2020-01-22 14:25:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/react/04/README.md
 -->
# react 事件

### 事件的三种方式

+ 箭头函数
 ```js
    handleClick(e){
        console.log(e)
    }
    <button onClick={e=>this.handleClick(e)}>点击</button>
 ```

+ 组件方法
 ```js
    handleClick(e){
        console.log(e)
    }
    <button onClick={this.handleClick.bind(this,item)}>点击</button>
 ```

 + 属性初始化语法
  ```js
    handleClick = e => {
        console.log(e)
    }

    <button onClick={this.onClick}>点击</button>
  ```
  + setState是异步的
   - this.setState可以接受一个函数作为参数。这个函数有两个参数，第一个参数是当前最新状态的前一个状态，第二个参数是props

   ```js
    this.setState((prevState,props) => {
        current: prevState.index + 1
    })
   ```