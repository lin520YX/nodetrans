let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/tran', { useNewUrlParser: true } );
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("数据库成功连接");
});
//数据库结构定义
let PersonSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String
});
//定义一个数据操作模型
let PersonModel = mongoose.model('person',PersonSchema);
//创建实体
let PersonEntity = new PersonModel({
    name:'linyunfu',
    age:25,
    email:'675881223@qq.com'
});
//当前实体保存到数据库
PersonEntity.save(function(error,doc){
    if(error){
        console.log(error)
    }else{
        // console.log(doc)
    }
});
PersonModel.find({},function(error,doc){
    if(error){
        console.log(error)
    }else{
        console.log(doc)
    }
});
// 数据更新
let condition = {name:'linyunfu'};
let update = {$inc:{age:0.5}};
PersonModel.update(condition,update,{multi:true},function(error,doc){
    if(error){
        console.log(error)
    }else{
        console.log(doc)
    }
});
//删除数据
PersonModel.remove({age:25.5},function(error,doc){
    if(error){
        console.log(error)
    }else{
        console.log(doc)
    }
});
