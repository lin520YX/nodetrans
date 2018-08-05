let http = require('http');
let url = require('url');
let mime =
http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url,true);

    if(pathname==='/signin'){
       return res.end('登录')
    }else if(pathname ==='/signup'){
        return res.end('登录')
    }else {
        return res.end('404')
    }

}).listen(8080);