const request = require('request-promise-native');
const baseUrl = 'https://hel-hotel-web-api.herokuapp.com';


class Service {

}

function listerClients() {
    return request(`${baseUrl}/clients/all`, { json: true })
}

function ajouterClient(leNom, lePrenoms) {
    return request.post(`${baseUrl}/clients`, {
        json: {
            nom: leNom,
            prenoms: lePrenoms
        },
    });
}

function chercherClient(leNom) {
    return request(`${baseUrl}/clients/${leNom}`, { json: true });
}

/*
const chambreDisponible = function (leNom, callback) {
    request.get(baseUrl + '/clients/' + leNom, { json: true }, function (err, res, body) {
        if (err) {
            callback({ error: err }
            )
        } else {
            callback({ data: body });
        }

    });
}
*/

module.exports = {
    listerClients,
    ajouterClient,
    chercherClient
};

