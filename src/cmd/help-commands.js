const menus = {
    // bin/kernavo angularJs --add-view vendors --root vendors --module 'cbo-scm'
    main: `
      kernavo [command] <options>
  
      angularJs........... creates agularjs templates
      config.............. creates agularjs templates
      init................ initializes kernavo creates kernavo.conf
      version ............ show package version
      help ............... show help menu for a command`,

    angularJs: `
      kernavo angularJs <options>
  
      options:
                --add-view <veiw name> [--root <parent folder>] --module <module name>`,

    config: `
      kernavo config <options>
  
      options:
                --add-module <module name> --path <relative path of the module root folder>`,

   }

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0]

    console.log(menus[subCmd] || menus.main)
}