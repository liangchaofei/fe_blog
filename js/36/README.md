<!--
 * @Author: your name
 * @Date: 2020-02-25 21:53:42
 * @LastEditTime: 2020-02-25 22:23:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/js/36/README.md
 -->
```js
    // 方法一：string
  function multiChar(str) {
      if (typeof str !== 'string') {
          return '';
      }

      var obj = {},
          num = 0,
          value = '',
          ch = '';

      for (var i = 0,len = str.length; i<len; i++) {
          ch = str[i];
          if ( !obj[ch]) {
              obj[ch] = [];
          }
          obj[ch].push(ch);
      }

      for (var attr in obj) {
          if (num < obj[attr].length) {
              num = obj[attr].length;
              value = obj[attr][0];
          }
      }

      return '最多的字符是：'+ value + '，出现了：'+ num +'次';
  }

// 方法一+：string
var s = 'aaabbbcccaaababbaaa';
var obj = {}, 
    max = 0, 
    letter = '';
for (var i = 0; i < s.length; i++) {
	if (obj[s[i]]) {
		obj[s[i]]++;
	} else {
		obj[s[i]] = 1;
	}
}

for (var name in obj) {
	if (obj[name] > max) {
		max = obj[name];
		letter = name;
	}
}
console.log(letter + ': ' + max);

  // 方法二：正则
  function multiCharReg(str) {
      if (typeof str !== 'string') {
          return '';
      }

      var arr = str.split('');
      arr.sort();
      str = arr.join('');

      var num = 0,
          value = '';

      str.replace(/(\w)\1+/g, function($0, $1) {
          if (num < $0.length) {
              num = $0.length;
              value = $1;
          }
      });


      return '最多的字符是：'+ value + '，出现了：'+ num +'次';
  }
```