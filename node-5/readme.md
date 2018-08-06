## express 搭建服务
let express =require('express');
let app = express();
app.listen(3000);

## express 路由
- 必须method和path全都匹配上执行对应的callback
```
app[method](path,function(){})
app.all('*',function(){})
```
 ##路径参数路由
 - 将匹配到生成的对象放到req.params 上
 app.get('/user/:id/:name');
 
 ##req 上的属心
 ```
 req.params 路径参数
 req.url 整个路径
 req.path pathname路径
 req.headers 请求头
 req.method 请求方法
 req.query 请求参数
```
##middleWare
- 中间件的作用
 - 处理公共逻辑
 - 可以决定是否继续执行
 - 开头匹配到就会执行中间件
 - 错误中间件 在页面的最后，参数是四个 err req res next
 
 ## res 新增方法
 - res.json()
 - res.sendFile() 绝对路径 path.join();
 - res.sendStatus() 发送状态
 - res.send()
 
 ##用户管理模块
 - 登录  /login
 - 注册  /reg
 ##文章管理模块
 - 发表  /post
 - 删除  /delete