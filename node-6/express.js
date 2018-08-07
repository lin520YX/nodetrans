function express(){
    function app(){

    }
    app.fns=[];
    app.use=function(fn){
        app.fns.push({
            path:'/',
            fn
        });
    }
    app.get=function(path,fn){
        app.fns.push({
            path,
            fn
        })
    }
    app.start=function(req,res){
        var i=0;
        function next(){
            var fn = app.fns[i];
            if(req.url.indexOf(fn.path)==0){
                    fn.fn(req,res,next);
            }else{
                next();
            }
        }
        next();
    }
    return app
}
module.exports = express;