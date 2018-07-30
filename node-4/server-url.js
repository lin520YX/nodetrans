let http = require('http');
let fs = require('fs');
let util = require('util');
let url = require('url');
let path = require('path');
let mime = {
    '.js':'qpplication/javascript',
    '.css':'text/css',
    '.html':'text/html'
}
let port = 3000;
http.createServer((req,res)=>{//请求到来时 会执行回调函数
    let {pathname,query}=url.parse(req.url,true);
    fs.stat('.'+pathname,(err,stats)=>{
        if(err){
            res.statusCode=404;
            res.end(`${pathname} not found`)
        }else if(stats.isFile()){
            let extName=pathname.match(/\.\w+$/)[0];
            res.setHeader('Content-type',mime[extName]+';charset=utf-8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else if(stats.isDirectory()){
        //   获取到当前路径和html凭借
            // 平出来的读取路径
            res.setHeader('Content-type','text/html;charset=utf-8');
            fs.createReadStream(path.join('.'+pathname,'./index.html')).pipe(res);
        }
    });
    //如果访问的是/ 显示主页
    //返回的是文件，文件读取返回
    //如果是文件夹 默认找html,否则返回404
    // res.setHeader('Content-type','text/html;charset=utf-8');
    // fs.createReadStream('index.html').pipe(res);

}).listen(port,()=>{
    console.log(`server start${port}`)
});