var express = require('express');
var router = express.Router();
let models =require('../model');
let util  =require('../util');
/* GET users listing. */
router.get('/reg', function(req, res, next) {
  res.render('user/reg.html',{title:'注册'})
});
router.post('/login', function(req, res, next) {
    req.body.password = util.mds5(req.body.password);
    models.User.find({username:req.body.username,password:req.body.password},function(err,doc){
        if(err){
                res.redirect('back')
        }else {
            if(doc){
                res.redirect('/')
            }else{
                res.redirect('back')
            }
        }
    });

});
router.post('/reg',function(req,res,next){
    var user = req.body;
    if(user.password!=user.repassword){
        res.redirect('back')
    }else{
        req.body.password = util.mds5(req.body.password);
        models.User.create(user,function(err,body){
            console.log(body)
            res.redirect('/users/login');
        });
    }

})
router.get('/login', function(req, res, next) {
    res.render('user/login.html',{title:'登录'})
});
router.get('/logout', function(req, res, next) {
    res.render('index',{title:'退出'})
});
module.exports = router;
