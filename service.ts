import { RequestPromiseAPI } from 'request-promise-native';
import { Client } from './domains'

interface ClientBack {

    nom: string;
    prenoms: string;
}


export class Service {

    private request: RequestPromiseAPI;
    private baseUrl: string;
    constructor() {
        this.request = require('request-promise-native');
        this.baseUrl = 'https://hel-hotel-web-api.herokuapp.com';
    }
    listerClients(): Promise<Client[]> {
        return this.request(`${this.baseUrl}/clients/all`, { json: true })
            .then((result: ClientBack[]) => result.map(clientBack => new Client(clientBack.nom, clientBack.prenoms)));
    }
    ajouterClient(leNom: string, lePrenoms: string): Promise<Client> {
        return this.request({
            url: `${this.baseUrl}/clients`,
            method: 'post',
            json: {
                nom: leNom,
                prenoms: lePrenoms
            }
        }).then((clientBack: ClientBack) => new Client(clientBack.nom, clientBack.prenoms));
    }
    chercherClient(leNom: string): Promise<Client[]> {
        return this.request({
            url: `${this.baseUrl}/clients/${leNom}`,
            method: `get`,
            json: true
        }).then((result: ClientBack[]) => result.map(clientBack => new Client(clientBack.nom, clientBack.prenoms)));;
    }
}

