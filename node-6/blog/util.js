exports.mds5 = (input)=>{
    return require('crypto').createHash('md5').update(input).digest('hex');
}