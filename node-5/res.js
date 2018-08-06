let express = require('express');
let app = express();
app.listen(3000);

app.get('/json',function(req,res){
    res.json({name:'111'});
    //响应json
});
app.get('/',(req,res)=>{ //不能通过../
    res.sendFile('./middleWare.js',{root:__dirname});
});
app.use(function(req,res,next){
    res.mySend=function(data){
        // 条件
    }
    next();
})
app.get('/send',function(req,res){
    res.mySend('chengjianshabi')
})