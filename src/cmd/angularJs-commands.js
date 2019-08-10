module.exports = (args) => {
    var fs=require("fs");
    
    let data= fs.readFileSync('karnavo.conf');

    const conf=JSON.parse(data);
    if(args['add-view']){
        require('./angularjs/add-view')(args,conf)
    }
    else{
        console.error(` is not a valid command!`);
    }
    
}