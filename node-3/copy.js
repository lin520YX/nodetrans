let fs = require('fs');
const copeSync = (source,target)=>{
       let result = fs.readFileSync(source);
       fs.writeFileSync(target,result);
}
const copy = (source,target,callback)=>{
       fs.readFile(source,(err,data)=>{
              if(err) return callback(err);
              fs.writeFile(target,data,callback)
       })
}
// copeSync('1.txt','2.txt')
copy('1.txt','2.txt',(err)=>{
       console.log(err)
})