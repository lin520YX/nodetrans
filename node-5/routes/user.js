let express = require('express');
// let app= express();
// app.listen(3000);
// app.get('/login',function(req,res){
//     res.send('登录');
// });
// app.get('/reg',function(req,res){
//     res.send('注册');
// });
// app.get('/post',function(req,res){
//     res.send('发布文章');
// });
// app.get('/login',function(req,res){
//     res.send('删除文章');
// });
let router = express.Router();
router.get('/login',function(req,res){
    res.send('登录');
})
router.get('/reg',function(req,res){
    res.sendFile(require('path').join(__dirname,'../views/reg.html'))
});
router.post('/reg',function(req,res){
    console.log(req)
    res.send(req.body)
});


module.exports = router;

