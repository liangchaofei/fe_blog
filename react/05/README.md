<!--
 * @Author: your name
 * @Date: 2020-01-22 14:26:37
 * @LastEditTime: 2020-01-22 14:26:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/react/05/README.md
 -->
# react 实现根据点击锚点跳转到对应到位置

```js
    state = {
        activeType:0,
        arr:['1','2']
    }

    scrollToAnchor = (anchorName,e) => {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName+1);
        var asd = document.getElementById((anchorName+1)*100);
        var ddd = asd.innerText;
        this.setState({
            activeType:anchorName
        })
    
        // 如果对应id的锚点存在，就跳转到锚点
        if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }  
    }

    domShow ()  {
        const  { arr } = this.state;
        arr.map(item,index)=>{
            return (
            <a className={this.state.activeType==index?'active':''} id={(index+1)*100} onClick={(e) => this.scrollToAnchor(index,e)} style={numCss}>{index+1}</a>
        )
        }
    }

    render(){
        return (
        //左侧内容
            <div>
                <div id="100">1</div>
                <div id="200">2</div>
            </div>
        //右侧数字锚点
            this.domShow()    
        )
    }
```