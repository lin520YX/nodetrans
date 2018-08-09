let express = require('./express');
let app = express();
let http = require('http');
//use 表示使用中间件函数
// next 继续执行下一个函数 express 提供的函数
app.use(function(req,res,next){
        res.end('over')
});
app.get('/index',function(req,res){
        res.end('aaaa')
})
http.createServer(app.start).listen(3000);
let fs = require('fs');
let path = require('path')
app.use(function(req,res,next){
    res.Krender=function(tmp,data){
        fs.readFile(path.join(__dirname,tmp),'utf8',function(req,resu){
            resu = resu.replace(/<%=(\w)%>/,function(input,group){
                return data[group]
            })
            res.setHeader('Content-Type','text/html;charset=utf-8')
            res.end(resu);
        })
    }
})
