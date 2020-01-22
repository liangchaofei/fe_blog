<!--
 * @Description: react16
 * @Author: liangchaofei
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime : 2020-01-22 14:20:30
 * @LastEditors  : Please set LastEditors
 -->
## Hooks
### useState
+ useState返回一个state，以及更新state的函数. setState可以接受一个新的值，会触发组件重新渲染.
```js
    import React, { useState } from 'react'
    const [ state, setState ] = useState(initialState)
```

### useReducer
```js
    const initialState = {count:0}
    function reducer(state,action){
        switch(action.type){
            case 'increment':
                return {count:state.count+1}
            case 'decrement':
                return {count:state.count-1}
            default:
                return state;
        }
    }

    function Counter(){
        const [ state,dispatch] = useReducer(reducer,initialState)
        return (
            <>
                Count:{state.count}
                <button onClick={() => dispatch({type:'increment'})}>+</button>
                <button onClick={() => dispatch({type:'decrement'})}>-</button>
            </>
        )
    }
```

### useForceUpdate 强制重新渲染
```js
    export default function useForceUpdate() {
        const [, setValue] = useState(0)
        return useCallback(() => {
            // 递增state值，强制React进行重新渲染
            setValue(val => (val + 1) % (Number.MAX_SAFE_INTEGER - 1))
        }, [])
    }

    // -------
    // EXAMPLE
    // -------
    function ForceUpdate() {
        const forceUpdate = useForceUpdate()
        useEffect(() => {
            somethingChange(forceUpdate)
        }, [])
    }

```

### useCallback 更新缓存函数
```js
    function Counter() {
        const [count, setCount] = useState(0)
        const handleIncr = useCallback(() => {
            setCount(count + 1)
        }, [count])

        return (<div>{count}: <ComplexButton onClick={handleIncr}>increment</ComplexButton></div>)
    }

```
### React.memo
+ 使用：
```js
    //函数组件
    const Funcomponent = ()=> {
        return (
            <div>
                Hiya!! I am a Funtional component
            </div>
        )
    }
    const MemodFuncComponent = React.memo(FunComponent)
```

## 生命周期
+ 新增static getDerivedStateFromProps和getSnapshotBeforeUpdate
### 挂载阶段
+ constructor
+ getDerivedStateFromProps
+ render
+ componentDidMount

#### constructor
+ 组件构造函数，第一个被执行
+ 如果没有显示定义它，我们会拥有一个默认的构造函数
+ 如果显示定义了构造函数，我们必须在构造函数第一行执行super(props)，否则我们无法在构造函数里拿到this对象，
+ 在构造函数里面我们一般会做两件事：
  - 初始化state对象
  - 给自定义方法绑定this
```js
    constructor(props) {
        super(props)
        
        this.state = {
        select,
        height: 'atuo',
        externalClass,
        externalClassText
        }

        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
    }
```

### getDerivedStateFromProps
+ static getDerivedStateFromProps(nextProps, prevState)
+ 一个静态方法，所以不能在这个函数里面使用this，这个函数有两个参数props和state，分别指接收到的新参数和当前的state对象，这个函数会返回一个对象用来更新当前的state对象，如果不需要更新可以返回null
+ 该函数会在挂载时，接收到新的props，调用了setState和forceUpdate时被调用
![aa](https://user-gold-cdn.xitu.io/2018/8/12/1652a85adadba217?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

+ 这个方法就是为了取代之前的componentWillMount、componentWillReceiveProps和componentWillUpdate

+ 父组件
```js
    import React from 'react';
    import './App.css';
    import Get from './partial/getDerivedStateFromProps'
    class App extends React.Component {
    state = {
        data:[{
        id:2,
        item:'v'
        }]
    }
    changeDate = () => {
        this.setState({
        data:[{id:1,item:'a'}]
        })
    }
    render(){
        const { data } = this.state;
        return (
        <div>
            <button onClick={this.changeDate}>change</button>
            <Get data={data} />
        </div>
        )
    }
    }

    export default App;
```
+ 子组件
```js
    import React from 'react';

class Get extends React.Component {
    state = {
        data:[]
    }
    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.data !== prevState.data){
            return {
                data:nextProps.data
            }
        }   
        return null;
    }
    render(){
        const { data } = this.state;
        return (
            <div>
                {
                    data.map(list => {
                        return (
                            <span key={list.id}>{list.item}</span>
                        )
                    })
                }
            </div>
         )
    }
}


export default Get;

```

### render
+ render函数是纯函数，里面只做一件事，就是返回需要渲染的东西，不应该包含其它的业务逻辑，如数据请求，对于这些业务逻辑请移到componentDidMount和componentDid Update中

### componentDidMount
+ 组件装载之后调用，此时我们可以获取到DOM节点并操作，比如对canvas，svg的操作，服务器请求，订阅都可以写在这个里面，但是记得在componentWillUnmount中取消订阅
+ 在componentDidMount中调用setState会触发一次额外的渲染，多调用了一次render函数，但是用户对此没有感知，因为它是在浏览器刷新屏幕前执行的，但是我们应该在开发中避免它，因为它会带来一定的性能问题，我们应该在constructor中初始化我们的state对象，而不应该在componentDidMount调用setState方法

## 更新阶段
+ 更新阶段，当组件的props改变了，或组件内部调用了setState或者forceUpdate发生，会发生多次
+ 这个阶段的生命周期函数调用如下：
  - getDerivedStateFromProps
  - shouldComponentUpdate
  - render
  - getSnapshotBeforeUpdate
  - componentDidUpdate

+ shouldComponentUpdate
  - shouldComponentUpdate(nextProps, nextState)
  - 有两个参数nextProps和nextState，表示新的属性和变化之后的state，返回一个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，默认返回true
  - 在这个方法里，你不能调用setState，因为能走到这个方法，说明shouldComponentUpdate返回true，此时下一个state状态已经被确定，马上就要执行render重新渲染了，否则会导致整个生命周期混乱，在这里也不能请求一些网络数据，因为在异步渲染中，可能会导致网络请求多次，引起一些性能问题，

+ getSnapshotBeforeUpdate
  - getSnapshotBeforeUpdate(prevProps, prevState)
  - 这个方法在render之后，componentDidUpdate之前调用，有两个参数prevProps和prevState，表示之前的属性和之前的state，这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，如果你不想要返回值，请返回null，不写的话控制台会有警告
+ componentDidUpdate
  - componentDidUpdate(prevProps, prevState, snapshot)
  - 该方法在getSnapshotBeforeUpdate方法之后被调用，有三个参数prevProps，prevState，snapshot，表示之前的props，之前的state
  - 和snapshot。第三个参数是getSnapshotBeforeUpdate返回的
在这个函数里我们可以操作DOM，和发起服务器请求，还可以setState，但是注意一定要用if语句控制，否则会导致无限循环

```js   
    import React from 'react';

class Get extends React.Component {
    state = {
        data:[]
    }
    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.data !== prevState.data){
            return {
                data:nextProps.data
            }
        }   
        return null;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('prevProps',prevProps) //旧数据
        console.log('prevState',prevState)
        console.log('asd',this.props) //新数据
        if(prevProps.data !== this.props.data){
            return this.props.data
        }
        return null
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('snapshot',snapshot) //新数据
    }
    render(){
        const { data } = this.state;
        return (
            <div>
                {
                    data.map(list => {
                        return (
                            <span key={list.id}>{list.item}</span>
                        )
                    })
                }
            </div>
         )
    }
}


export default Get;

```

## 卸载阶段
### componentWillUnmount
+ 当我们的组件被卸载或者销毁了就会调用，我们可以在这个函数里去清除一些定时器，取消网络请求，清理无效的DOM元素等垃圾清理工作

注意不要在这个函数里去调用setState，因为组件不会重新渲染了