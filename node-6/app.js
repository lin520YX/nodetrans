let express = require('./express');
let app = express();
let http = require('http');
//use 表示使用中间件函数
// next 继续执行下一个函数 express 提供的函数
app.use(function(req,res,next){
        res.end('over')
});
http.createServer(app.start).listen(3000)
