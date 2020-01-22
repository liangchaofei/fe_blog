<!--
 * @Author: your name
 * @Date: 2020-01-22 14:27:59
 * @LastEditTime: 2020-01-22 14:28:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe_blog/react/06/README.md
 -->
# react生成二维码并下载

+ 1.生成二维码使用库：https://github.com/zpao/qrcode.react
+ 2.安装库：npm install qrcode.react -D
+ 3.使用：
    ```js
        <!-- 引用 -->
        var React = require('react');
        var QRCode = require('qrcode.react');

        <!-- 调用 -->
        downQrcode = () => {
            let code = document.getElementById('code')
            this.setState({
                qrcodeImg:code.toDataURL()
            })
        }

        React.render(
            <QRCode id="code" value="http://facebook.github.io/react/" />
            <Button onClick={this.downQrcode}>
                    <a href={this.state.qrcodeImg} download>下载二维码</a>
                </Button>
            ,
            mountNode
        );
    ```