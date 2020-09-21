const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Presentation {
    constructor(service) {
        this.service = service;
    }
    start() {
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
                    this.service.listerClients()
                        .then(listeClients => console.log(listeClients
                            .map(client => `${client.nom} ${client.prenoms}`)
                            .join('\n')))
                        .catch(err => console.log(err))
                        .finally(() => this.start())
                    break;
                case `2`:
                    rl.question('Tapez le nom : ', nom => {
                        rl.question('Tapez le prenom : ', prenoms => {
                            this.services.ajouterClient(nom, prenoms)
                                .then(newClient => console.log(newClient))
                                .catch(err => console.log(err))
                                .finally(() => this.start())
                        })
                    })
                    break;
                case `3`:
                    rl.question('Tapez le nom : ', nom => {
                        this.service.chercherClient(nom)
                            .then(client => console.log(`${client.nom} ${client.prenoms}`))
                            .catch(err => console.log(err))
                            .finally(() => this.start())
                    })
                    break;
                case `99`:
                    console.log('Aurevoir')
                    rl.close();
                    break;
                default:
                    console.log('essaye une autre chose')
                    this.start();
            }
        });
    }
}



module.exports = { Presentation };






