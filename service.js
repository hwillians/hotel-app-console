var request = require('request');

var listerClients = function (callback) {
    request('https://hel-hotel-web-api.herokuapp.com/clients?start=0&size=3', { json: true }, function (err, res, body) {
        if (err) {
            callback({ error: err }
            )
        }else {
            callback({data : body});
        }
        
    });
}


exports.listerClients = listerClients;



