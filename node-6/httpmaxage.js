let http = require('http');
let fs = require('fs');
let url = require('url');
const querystring = require("querystring");
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname =='/aaa'){
        res.setHeader('Set-Cookie','name='+Math.random()+';maxAge=20000')
        res.end('over')
    }else if(pathname =='/read'){
        let cookie = req.headers.cookie;
        let cookieObj = querystring.parse(cookie,';');
        res.end(JSON.stringify(cookieObj))
    }
}).listen(3000);