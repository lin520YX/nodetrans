let  mongoose = require('mongoose');
let config = require('../config');
mongoose.connect(config.dbUrl, { useNewUrlParser: true } );
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("数据库成功连接");
});
//数据库结构定义
let PersonSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
});
exports.User = mongoose.model('person',PersonSchema);
