let http = require('http');
let fs = require('fs');
let util = require('util');
let port = 3000;
http.createServer((req,res)=>{//请求到来时 会执行回调函数
    res.setHeader('Content-type','text/html;charset=utf-8');
    fs.createReadStream('index.html').pipe(res);

}).listen(port,()=>{
    console.log(`server start${port}`)
});