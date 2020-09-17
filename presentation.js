var services = require('./service.js');
var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var start = function () {
    
   

     rl.question(`Menu
    1. Lister les clients
    99. Sortir`
    , function (saisie) {

        switch (saisie) {
            case `1`:
                services.listerClients
                start();
                break;
            case `99`:
                console.log('Aurevoir')
                rl.close();
                break;
            default:
                console.log('essaye une autre chose')
                start();
        }
            }
    )

};

exports.start = start;




