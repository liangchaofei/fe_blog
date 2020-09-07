<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 17:35:10
 * @LastEditTime: 2020-03-10 14:48:56
 * @LastEditors: Please set LastEditors
 -->
### 求两个日期中间的有效日期 

```js
    function rangeDate(startDate, endDate) {
        let start_ = new Date(startDate).getTime();
        let end_ = new Date(endDate).getTime();
        let day = 24 * 60 * 60 * 1000;
        let arr = [];
        for (let i = start_; i <= end_; i += day) {
            arr.push(i);
        }
        return arr.map(item => {
            let date = new Date(item);
            let year = date.getFullYear();
            let month = (date.getMonth() + 1);
            let day = date.getDate();
            return `${year}-${month}-${day}`;
        });
    }

    console.log(rangeDate("2015-2-8", "2015-3-3"));
```