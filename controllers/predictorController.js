var http = require('request');

const prediction = (request, h) => {

    var resp = h.response("teste");
    resp.type('application/json');

    var x;

    http.post({
            'url': 'http://localhost:8000/predictor',
            'json': true,
            'body': JSON.parse(JSON.parse(request.payload))
        },
        function (error, response, body) {
            // console.log(body);
            // console.log(response.statusCode);
            // if (!error && response.statusCode == 200){
            //     resp.code(200);
            //     return response;
            // } else {
            //     resp.code(500);
            // }
            console.log(body);
            x = body;
        }
    )
    console.log(x);
    return x;
}

module.exports = {
  prediction,
}