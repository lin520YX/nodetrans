let fs = require('fs');
//读取都是buffer
//写是utf8,不存在文件会自动创建，里面的内容会覆盖掉
// 默认调用toString
fs.writeFile('1.txt','{name:1,age:2}',(err)=>{
    console.log(err)
});
// fs.writeFileSync('1.txt','{name:1,age:2}');//同步