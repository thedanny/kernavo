const minimist = require('minimist');

module.exports = (args) => {

   // console.log(args);
   // console.log(args._[0]);

    const cmd = args._[0] || 'help';

    switch (cmd) {
        case 'help':
            require('../src/cmd/help-commands')(args);
            break;
        case 'angularJs':
            require('../src/cmd/angularJs-commands')(args);
            break;
        case 'init':
            require('../src/cmd/init-commands')(args);
            break;
        case 'version':
            const { version } = require('../package.json');
            console.log(`v${version}`);
            break;
        default:
            console.error(`"${cmd}" is not a valid command!`);
            break;
    }


}