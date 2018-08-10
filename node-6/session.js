let http  = require('http');
let fs = require('fs');
let url = require('url');
let SESSION_KEY = 'SESSION_KEY';
let sessions = {};
let querystring = require('querystring');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var cookieObj = querystring.parse(req.headers.cookie,';');
    if(pathname == '/'){
        var sessionId = cookieObj[SESSION_KEY];
        if(sessionId){
            let sessionObj = sessions[sessionId];
            if(sessionObj){
                sessionObj.balance = sessionObj.balance-10;
                res.setHeader('Content-Type','text/html;charset=utf-8')
                res.end(JSON.stringify(sessionObj.balance))
            }else {
                res.setHeader('Content-Type','text/html;charset=utf-8')
                res.end('wufashiyong')
            }
        }else{
            var sid = Date.now() + '' +Math.random();
            let sessionObj = {balance:100};
            sessions[sid] = sessionObj;
            res.setHeader("Set-cookie",SESSION_KEY+"="+sid);
            res.setHeader('Content-Type','text/html;charset=utf-8')
            res.end(JSON.stringify(sessionObj.balance))
        }
    }
}).listen(3000)