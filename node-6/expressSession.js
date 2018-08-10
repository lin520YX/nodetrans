let express = require('express');
let app = express();
app.listen(8080);
let bodyParser = require('body-parser');
let session = require('express-session');
app.use(session({
    resave : true, //每次请求结束，都要重新保存，不管有没有修改
    saveUninitialized:true, //保存修改过的session
    secret:'cjsb' //加密
}));

app.get('/',function(req,res){
    let login = req.session.isLogin;
    if(login){
        res.send('old login')
    }else{
        req.session.isLogin = 'true';
        res.send('new login')
    }
})