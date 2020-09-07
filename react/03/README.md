<!--
 * @Author: your name
 * @Date: 2020-01-22 14:24:24
 * @LastEditTime: 2020-01-22 14:24:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/react/03/README.md
 -->
# react-compose

+ 写法
  - compose(...functions)
+ 解释
  - 从右到左来组合多个函数
  - 参数:compose(funcA,funcB)形象为compose(funcA(funcB))
  - 返回值：(func)：从右到左把接收到的函数合成后的最终函数
  - compose做的只是让你在写深度嵌套的函数时，避免了代码的向右偏移。
