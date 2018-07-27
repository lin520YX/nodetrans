const sum =(...args)=>{
    let s=args.join('+');
    return eval(s)
}
module.exports = sum;