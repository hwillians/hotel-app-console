const services = require('./service.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const start = () => {

    rl.question(`
    Menu
    1. Lister les clients
    2. Ajouter un client
    3. Rechercher un client par nom
    4. Vérifier la disponibilité d'une chambre
    99. Sortir
        Votre choix : `, saisie => {

        switch (saisie) {
            case `1`:
               services.listerClients(listeCLients => {
                    if (listeCLients.error) {
                        console.log('oops...')
                    } else {
                        console.log(listeCLients.data
                            .map(client => {
                                return client.nom + ' ' + client.prenoms
                            })
                            .join('\n')
                        );
                    }
                    start();
                });
                break;
            case `2`:
                rl.question('Tapez le nom : ', nom => {
                    rl.question('Tapez le prenom : ', prenoms => {
                        services.ajouterClient(nom, prenoms, newClient => {
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
            case `3`:
                rl.question('Tapez le nom : ', nom => {
                    services.chercherClient(nom, client => {
                        if (client.error) {
                            console.log('oops...')
                        } else {
                            console.log(client.data.nom + ' ' + client.data.prenoms);
                        }
                        start();
                    });
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




