import { Client } from './domains'

export class Service {

    private request: any;
    private baseUrl: string;
    constructor() {
        this.request = require('request-promise-native');
        this.baseUrl = 'https://hel-hotel-web-api.herokuapp.com';
    }
    listerClients(): Promise<Client[]> {
        return this.request(`${this.baseUrl}/clients/all`, { json: true })
    }
    ajouterClient(leNom: string, lePrenoms: string): Promise<Client> {
        return this.request({
            url: `${this.baseUrl}/clients`,
            method: 'post',
            json: {
                nom: leNom,
                prenoms: lePrenoms
            }
        });
    }
    chercherClient(leNom: string): Promise<Client[]> {
        return this.request({
            url: `${this.baseUrl}/clients/${leNom}`,
            method: `get`,
            json: true
        });
    }
}

