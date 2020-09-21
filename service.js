class Service {
    constructor() {
        this.request = require('request-promise-native');
        this.baseUrl = 'https://hel-hotel-web-api.herokuapp.com';
    }

    listerClients() {
        return this.request(`${this.baseUrl}/clients/all`, { json: true })
    }

    ajouterClient(leNom, lePrenoms) {
        return this.request({
            url: `${this.baseUrl}/clients`,
            method: 'post',
            json: {
                nom: leNom,
                prenoms: lePrenoms
            }
        });
    }

    chercherClient(leNom) {
        return this.request({
            url: `${this.baseUrl}/clients/${leNom}`,
            method: `get`,
            json: true
        });
    }


}

module.exports = { Service };