module.exports = (args, conf) => {
    var fs = require("fs");
    var path = require("path");


    const mdl = args['module'];
    const name = args['add-view'];
    
    const selctedModeul = conf.modules.find(a => a.name == mdl);


    if(selctedModeul ===undefined){
        throw 'module path not found . make sure you set module path in karnavo.cong'
    }

    if (!fs.existsSync(selctedModeul.path)) {
        throw 'module path not found . make sure you set module path in karnavo.cong'
    }

    const srcHtmlFile = path.join(__dirname, 'templates/view/view.html');
    const srcStyleFile = path.join(__dirname, 'templates/view/_style.scss');
    const srcSpecFile = path.join(__dirname, 'templates/view/spec.js');
    const srcControllerFile = path.join(__dirname, 'templates/view/controller.js');

    var root = args.root||'';
    
    const parent=path.join(selctedModeul.path,root, name );

    if(!fs.existsSync( path.dirname(parent))){
        fs.mkdirSync(path.dirname(parent), 0744);
    }

    if (!fs.existsSync(parent)) {
        console.log('creating dir')
        fs.mkdirSync(parent, 0744);
    }


    const dstHtmlFile = path.join(parent, `/${name}.tmpl.html`);
    const dstStyleFile = path.join(parent, `/_${name}.scss`);
    const dstSpecFile = path.join(parent, `/${name}.spec.js`);
    const dstControllerFile = path.join(parent, `/${name}.js`);

    const mdlRegex = /@@MODULE@@/g;
    const nameRegex = /@@NAME@@/g;




    //html
    replaceContent(srcHtmlFile, dstHtmlFile)

    //style
    replaceContent(srcStyleFile, dstStyleFile)

    //controller
    replaceContent(srcControllerFile, dstControllerFile)

    //spec
    replaceContent(srcSpecFile, dstSpecFile)


    function replaceContent(src, dst) {
        fs.readFile(src, "utf8", (err, data) => {
            if (err) {
                console.error(`Failed to create ${dst} `, err)
                return;
            }
            writeTemplate(dst, data.replace(nameRegex, name).replace(mdlRegex, mdl))
        });
    }
    function writeTemplate(dst, content) {
        const dir = path.dirname(dst);
        if (!fs.existsSync(dir)) {
            console.log('creating dir')
            fs.mkdirSync(dir, 0744);
        }

        fs.writeFile(dst,
            content
            , 'utf8'
            , (e) => {
                if (e) {
                    console.error(`Failed to create ${dst} `, e)
                }
                else {
                    console.log(`[ Created ] ${dst}`)

                }
            });
    }

}