let fs = require('fs');
const pipe = (course,target)=>{
   let rs = fs.createWriteStream(source,{highWaterMark:4});
   let ws =fs.createWriteStream(target,{highWaterMark:1});
   //开启可读流
   // rs.on('data',(chunk)=>{
   //      if(ws.write(chunk)===false){
   //          rs.pause();
   //      }
   // });
   // ws.on('drain',()=>{
   //      rs.resume()
   // });
   // rs.on('end',function(){
   //      ws.end();
   // });
    rs.pipe(ws);
//    kedu.pipe(kexie)
};

pipe('1.txt','2.txt')