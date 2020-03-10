<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 10:50:21
 * @LastEditTime: 2020-03-10 14:46:19
 * @LastEditors: Please set LastEditors
 -->
### 写出下列结果，并解释下
```js
    var type = 'images';
    var size = {width: 800, height: 600};
    var format = ['jpg', 'png'];

    function change(type, size, format){
        type = 'video';
        size = {width: 1024, height: 768};
        format.push('map');
    }

    change(type, size, format);

    console.log('type:',type); // images
    console.log('size',size)    // {width: 800, height: 600}
    console.log('format',format)    // ['jpg', 'png','map']
```

+ type和size相当于局部变量更改值，但是不会影响全局环境下的type和size。
+ format的push方法是在数组尾部插入一个元素，改变了format