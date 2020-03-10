<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-06 09:37:00
 * @LastEditTime: 2020-03-10 14:56:43
 * @LastEditors: Please set LastEditors
 -->
## word-wrap、word-break和white-space有什么区别？

### word-wrap
+ word-wrap:break-word 允许长单词换行到下一行
+ normal 只在允许的断字点换行（浏览器保持默认处理）。

### word-break
+ word-break:break-all 允许在单词内换行。

### white-space
+ white-space:nowrap 规定段落中的文本不进行换行：

### 总结
+ white-space，控制空白字符的显示，同时还能控制是否自动换行。它有五个值：normal | nowrap | pre | pre-wrap | pre-line
+ word-break，控制单词如何被拆分换行。它有三个值：normal | break-all | keep-all
+ word-wrap（overflow-wrap）控制长度超过一行的单词是否被拆分换行，是word-break的补充，它有两个值：normal | break-word
