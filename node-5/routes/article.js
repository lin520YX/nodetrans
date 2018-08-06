const express = require('express');
let router = express.Router();
router.get('/post',function(req,res){
    res.send('发布文章');
});

router.get('/login',function(req,res){
    res.send('删除文章');
});
module.exports= router