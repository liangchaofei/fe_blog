<!--
 * @Author: your name
 * @Date: 2020-02-22 16:17:30
 * @LastEditTime: 2020-02-22 16:17:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/28/README.md
 -->
+ 手动封装一个请求函数，可以设置最大请求次数，请求成功则不再请求，请求失败则继续请求直到超过最大次数(流利说)

```js
    import fetch from 'fetch';
    function request(url,body,successCb,errorCv,maxCount = 3){
        return fetch(url,body).then(res => successCb(res)).catch(err => {
            if(maxCount === 0 ){
                errorCb('请求超市')
            }
            return request(url,body,successCb,errorCb,--maxCount)
        })
    }

    // 用法
    request('/api',{methos:'get',headers:{},res => {},err => {}})
```