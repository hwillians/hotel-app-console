var start = function () {
    var test = true;

    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('1. Lister les clients \n99. Sortir');

    rl.question('Choisi un option : ', function (saisie) {

        switch (`${saisie}`) {
            case `1`:
                console.log('Liste des clients');
                require("./index.js");
                break;
            case `99`:
                console.log('Aurevoir')
                break;
            default:
                console.log('essey une autre chose')
        }
        rl.close();
    }
    )

    
};

exports.start = start;




