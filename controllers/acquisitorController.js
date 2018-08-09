var http = require('request');

const pipeline = (request, h) => {
    var acquisitorProtocol;
    var tpreparatorProtocol;
    var trainingProtocol;

    var resp = h.response();
    resp.type('application/json');

    http.post({
            'url': 'http://localhost:8000/acquisitor',
            'json': true,
            'body': JSON.parse(request.payload)
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200){
                // acquisitorProtocol = body.result;
                resp.code(200);
            } else {
                resp.code(500);
            }
        }
    );
    // console.log(acquisitorProtocol);
    return resp;
}

module.exports = {
  pipeline,
}