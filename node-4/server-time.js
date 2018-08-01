let http = require('http');
let fs = require('fs');
let util = require('util');
let url = require('url');
let path = require('path');
let mime = require('mime');
let port = 3000;
http.createServer((req,res)=>{//请求到来时 会执行回调函数
    let {pathname,query}=url.parse(req.url,true);
    if(pathname=== '/clock'){
        let date = new Date();
        res.end(date.toLocaleString())
        return;
    }
    fs.stat('.'+pathname,(err,stats)=>{

    })
}).listen(port,()=>{
    console.log(`server start${port}`)
});