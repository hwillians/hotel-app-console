var request = require('request');


var listerClients = function (callback) {
    request('https://hel-hotel-web-api.herokuapp.com/clients?start=0&size=3', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }
        callback(body);
    });
}

var ajouterClients = function () {
    request.post({
        uri: 'https://hel-hotel-web-api.herokuapp.com/clients', 'content-type': 'application/json',
        body: { 'nom': 'nom1', 'prenoms': 'prenoms1' }
    }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }

        console.log('Ok', body);
    });

}





exports.listerClients = listerClients;
exports.ajouterClients = ajouterClients;


