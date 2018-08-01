let http = require('http');
let fs = require('fs');
let util = require('util');
let url = require('url');
let path = require('path');
let mime = require('mime');
let port = 3000;
let users = [{
    username: 'chengjianshabi',
    password: 'admin',
    id: 1
    },
    {
        username: 'chengjiandashabi',
        password: 'admin',
        id: 2
    }]
http.createServer((req, res) => {//请求到来时 会执行回调函数
    let {pathname, query} = url.parse(req.url, true);
    let id =query['id'];
    console.log(id)
    if (pathname === '/user') {
        //       增删改查
        switch (req.method) {
            case 'GET':
                if(!id){
                    return res.end(JSON.stringify(users))
                }else{
                    let fuser=users.filter(item=>item.id==id);
                    return res.end(JSON.stringify(fuser))
                }
                break;
            case  'POST': //添加逻辑
                let str ='';
                req.on('data',function(chunk){
                    str +=chunk;
                });
                req.on('end',function(){
                    let user = JSON.parse(str);
                    user.id =users.length?users.length+1:0;
                    users.push(user);
                    return res.end(JSON.stringify(user));
                    console.log(str)
                });
                break;
            case 'DELETE':
                if(id){
                    users.filter(item => item.id!==id);
                    res.end(JSON.stringify({}));
                }
                break;
            case 'PUT':
                break;
        }
        //方法全部大写
    }
    fs.stat('.' + pathname, (err, stats) => {
        if (err) {
            res.statusCode = 404;
            res.end(`${pathname} not found`)
        } else if (stats.isFile()) {
            res.setHeader('Content-type', mime.getType(pathname) + ';charset=utf-8');
            fs.createReadStream('.' + pathname).pipe(res);
        } else if (stats.isDirectory()) {
            //   获取到当前路径和html凭借
            // 平出来的读取路径
            res.setHeader('Content-type', 'text/html;charset=utf-8');
            fs.createReadStream(path.join('.' + pathname, './index.html')).pipe(res);
        }
    });
    //如果访问的是/ 显示主页
    //返回的是文件，文件读取返回
    //如果是文件夹 默认找html,否则返回404
    // res.setHeader('Content-type','text/html;charset=utf-8');
    // fs.createReadStream('index.html').pipe(res);

}).listen(port, () => {
    console.log(`server start${port}`)
});