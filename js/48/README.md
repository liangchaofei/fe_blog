<!--
 * @Author: your name
 * @Date: 2020-03-10 16:22:50
 * @LastEditTime: 2020-03-10 16:23:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/48/README.md
 -->
### 写一个方法获取图片的原始宽高
```js
    // 利用h5的naturalWidth和naturalHeight获取宽高
      function loadImageAsync(url) {
        return new Promise(function(resolve, reject) {
          var image = new Image();

          image.onload = function() {
            var obj = {
              w: image.naturalWidth,
              h: image.naturalHeight
            };
            resolve(obj);
          };

          image.onerror = function() {
            reject(new Error("Could not load image at " + url));
          };
          image.src = url;
        });
       
      }
```