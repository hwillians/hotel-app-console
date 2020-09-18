const request = require('request-promise-native');
const baseUrl = 'https://hel-hotel-web-api.herokuapp.com';

const listerClients = callback => {
    request(`${baseUrl}/clients/all`, { json: true }, function (err, res, body) {
        if (err) {
            callback({ error: err }
            )
        } else {
            callback({ data: body });
        }

    });
}

const ajouterClient = function (leNom, lePrenoms, callback) {
    request.post(baseUrl + '/clients', {
        json: {
            nom: leNom,
            prenoms: lePrenoms
        },
    }, function (err, res, body) {
        if (err) {
            callback({ error: err }
            )
        } else {
            callback({ data: body });
        }
    });
}

const chercherClient = function (leNom, callback) {
    request.get(baseUrl + '/clients/' + leNom, { json: true }, function (err, res, body) {
        if (err) {
            callback({ error: err }
            )
        } else {
            callback({ data: body });
        }

    });
}

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


exports.chambreDisponible = chambreDisponible;
exports.listerClients = listerClients;
exports.ajouterClient = ajouterClient;
exports.chercherClient = chercherClient;


