let express = require('express');
let app= express();
app.listen(3000);
let user = require('./routes/user');
let article = require('./routes/article');
// function bodyParser(){
//     return function(req,res,next){
//         let str ='';
//         req.on('data',function(chunck){
//             str+=chunck
//         });
//         req.on('end',function(){
//             req.body=require('querystring').parse(str);
//             // let reg = /([^?=&]+)=([^?=&]+)/gi;
//             next();
//         })
//     }
// }
// app.use(bodyParser());
let bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use('/user',user);
app.use('/article',article);

