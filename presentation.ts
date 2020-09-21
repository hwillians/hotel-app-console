import readline from 'readline';
import { Client } from './domains'
import { Service } from './service'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export class Presentation {
    service: Service;
    constructor(service: Service) {
        this.service = service;
    }
    start() {
        rl.question(`
        Menu
1. Lister les clients
2. Ajouter un client
3. Rechercher un client par nom
99. Sortir
    Votre choix : `, saisie => {

            switch (saisie) {
                case `1`:
                    this.service.listerClients()
                        .then((listeClients: Client[]) => console.log(listeClients
                            .map(c => new Client(c.nom, c.prenoms).toString())
                            .join('\n')))
                        .catch((err: string) => console.log(err))
                        .finally(() => this.start())
                    break;
                case `2`:
                    rl.question('Tapez le nom : ', (nom) => {
                        rl.question('Tapez le prenom : ', (prenoms) => {
                            this.service.ajouterClient(nom, prenoms)
                                .then((c: Client) => console.log(new Client(c.nom, c.prenoms).toString()))
                                .catch((err: string) => console.log(err))
                                .finally(() => this.start())
                        })
                    })
                    break;
                case `3`:
                    rl.question('Tapez le nom : ', nom => {
                        this.service.chercherClient(nom)
                            .then((listeClients: Client[]) => console.log(listeClients
                                .map(c => new Client(c.nom, c.prenoms).toString())
                                .join('\n'))).catch((err: string) => console.log(err))
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




