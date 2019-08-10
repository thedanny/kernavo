module.exports = (args) => {
    
    const fs=require('fs');

    let karnavoConfig= {
        "platform":"angularJs",
        "modules":[]
    };
    let data =JSON.stringify(karnavoConfig,null,2);
    fs.writeFileSync("karnavo.conf",data);
    
    
    
}