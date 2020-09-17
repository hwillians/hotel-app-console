var request = require('request');

var listerClients = function (callback) {
    request('https://hel-hotel-web-api.herokuapp.com/all', { json: true }, function (err, res, body) {
        if (err) {
            callback({ error: err }
            )
        }else {
            callback({data : body});
        }
        
    });
}

var ajouterClients = function (leNom,lePrenoms, callback) {
    request.post('https://hel-hotel-web-api.herokuapp.com/clients', {
        json: {
          nom : leNom,
          prenoms : lePrenoms
        },
      },function (err, res, body) {
        if (err) {
            callback({ error: err }
            )
        }else {
            callback({data : body});
        }
    });

}
exports.listerClients = listerClients;
exports.ajouterClients = ajouterClients;


