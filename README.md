#### 后台管理系统模板


# 菜单栏

使用递归遍历生成后端返回来的菜单栏
重新刷新页面时激活状态消失 使用递归去展开激活的菜单




# bash

npm run dev  项目开启

npm run build 项目编译

编译完成之后在 dist 文件内执行 http-server(工具包) 即可在服务器打开





# 多环境配置参考 https://www.jianshu.com/p/5218ad9e0129

npm i --save-dev cross-env

··· 打包

1.在config文件夹下配置需要的环境

2.在package.json文件配置命令

3.修改config/index.js文件中build参数，这里的参数会在build/webpackage.prod.conf.js中使用到，之后就在webpackage.prod.conf.js文件设置
// const env = require('../config/prod.env')
const env = config.build[process.env.env_config+'Env']

4.在 build/build.js ，删除process.env.NODE_ENV的赋值，修改spinner的定义（这步骤可有可无，只是为了方便看打包时的打印的环境）
// const spinner = ora('building for production...')
var spinner = ora('building for ' + process.env.NODE_ENV + ' of ' + process.env.env_config+ ' mode...' )

5.打包命令即可对应出来的环境

··· 运行

1.在 build/webpack.dev.conf.js ，
const runpath = '../config/' + process.env.env_config + '.env'
// 'process.env': require('../config/dev.env')
'process.env': require(runpath)

2.在package.json文件配置命令

3.运行命令即可对应出来的环境





# 基本功能

1.API 请求接口

2.动态渲染菜单栏

3.多环境配置