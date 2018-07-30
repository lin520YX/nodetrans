let http = require('http');
let port = 3000;
http.createServer((req,res)=>{//请求到来时 会执行回调函数
//    req 是一个可读流
//    res 是一个可写流
    console.log('start');
    res.setHeader('content-Type','text/plain;charset=utf-8')
    res.write('hello');
    res.end();
}).listen(port,()=>{
    console.log(`server start${port}`)
});