let express = require('express');
let app = express();
app.listen(8080);
app.use(function(req,res,next){
    let t= new Date().getTime();
    let end =res.end;
    res.end =function(...arg){
        console.log(new Date().getTime()-t)
        end.call(res,...arg);
    }
    next();
})
app.get('/water',function(req,res){
    for(let i=0;i<1000;i++){

    }
    res.end('water');//装饰模式
});
app.get('/food',function(req,res){
    for(let i=0;i<10000;i++){

    }
    res.end('water');
});