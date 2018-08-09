let express = require('express');
let app = express();
let cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/',function(req,res){
    let vd= req.cookies.isVisisted;
    if(vd){
        res.send('old')
    }else{
        res.cookie('isVisisted','1',{maxAge:20*1000})
        res.send('new')
    }
})
app.listen(3001);
