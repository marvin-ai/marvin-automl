var rp = require('request-promise');

const action = (request, h) => {
    return rp.post(
        {
            'url': 'http://localhost:8000/acquisitor',
            'json': true,
            'body': JSON.parse(request.payload)
        },
    );
}

const status = (request, h) => {
    var protocol = JSON.parse(request.payload)['protocol'];
    return rp.get(
        {
            'url': 'http://localhost:8000/acquisitor/status?protocol='+protocol,
            'json': true,
        },
    );
}

module.exports = {
  action, status
}