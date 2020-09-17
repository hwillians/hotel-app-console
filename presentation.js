var services = require('./service.js');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var start = function () {

    rl.question(`
    Menu
    1. Lister les clients
    2. Ajouter un client
    3. Rechercher un client par nom
    4. Vérifier la disponibilité d'une chambre
    99. Sortir
        Votre choix : `, function (saisie) {

        switch (saisie) {
            case `1`:
                services.listerClients(function (listeCLients) {

                    if (listeCLients.error) {
                        console.log('oops...')
                    } else {
                        console.log(listeCLients.data
                            .map(function (client) {
                                return client.nom + ' ' + client.prenoms
                            })
                            .join('\n')
                        );
                    }
                    start();
                });
                break;
            case `2`:
                rl.question('Tapez le nom : ', function (nom) {
                    rl.question('Tapez le prenom : ', function (prenoms) {
                        services.ajouterClients(nom, prenoms, function (newClient) {
                            if (newClient.error) {
                                console.log('oops...')
                            } else {
                                console.log(newClient.data);
                            }
                            start();
                        });
                    })
                })
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




