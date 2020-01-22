<!--
 * @Author: your name
 * @Date: 2020-01-22 11:29:18
 * @LastEditTime : 2020-01-22 11:30:24
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/nginx/README.md
 -->
### 前后端分离
+ 加上try_files $uri $uri/ /index.html;
```nginx
    location / { root /home/tiger/icode_front/dist/; try_files $uri $uri/ /index.html; index index.html index.html }
```

