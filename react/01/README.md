<!--
 * @Author: your name
 * @Date: 2020-01-22 14:16:56
 * @LastEditTime: 2020-01-22 14:19:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/react/01/README.md
 -->
# React Router中Link和NavLink的学习总结

+ 摘自：https://blog.csdn.net/lhjuejiang/article/details/80366839

### Link
 - 当点击Link的时候，url会更新，组件会被重新渲染，但是页面不会被重新加载.
 - 使用方法
    + to为string
        ```js
            <Link to="/about">关于</Link>
        ```
    + to为object
        ```js
            <Link 
                to={{
                    pathname:'/about',
                    search:'?sort=name',
                    hash:'#the-hash',
                    state:{data}
                }}
            />
        ```
    + replace
        ```js
            <Link to="/about" replace />
        ```

    + Link使用to参数来描述需要定位的元素。它的值既可以时候string,也可以是locatiion对象（包含pathname,search,hash,state）。如果值是string，会自动转换为对象。

    + replace(bool):为true的时候，点击链接后将使用新地址替换掉历史记录里面的原地址。为false时，点击链接后将在原有访问历史记录的基础上添加一个新的记录。默认为false

### NavLink
 + NavLink是Link的一个特定版本，会在匹配当前的url的时候给已经渲染的元素添加参数，组件的属性有下面几种。
    - activeClassName(string):设置选中样式，默认值为active
    - activeStyle(object)：当元素被选中时，为此元素添加样式
    - exact(bool):为true时，只有当导致和完全匹配class和style才会应用
    - strict(bool):为true时，在确定为位置是否与当前URL匹配时，将考虑位置pathname后的斜线
    - isActive(func)：判断链接是否激活的额外逻辑的功能

