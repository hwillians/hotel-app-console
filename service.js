var request = require('request');
var baseUrl = 'https://hel-hotel-web-api.herokuapp.com';

var listerClients = function (callback) {
    request(baseUrl + '/clients/all', { json: true }, function (err, res, body) {
        if (err) {
            callback({ error: err }
            )
        } else {
            callback({ data: body });
        }

    });
}

var ajouterClient = function (leNom, lePrenoms, callback) {
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

var chercherClient = function (leNom, callback) {
    request.get(baseUrl + '/clients/' + leNom, { json: true }, function (err, res, body) {
        if (err) {
            callback({ error: err }
            )
        } else {
            callback({ data: body });
        }

    });
}

exports.listerClients = listerClients;
exports.ajouterClient = ajouterClient;
exports.chercherClient = chercherClient;


