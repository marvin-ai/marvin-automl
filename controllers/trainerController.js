var rp = require('request-promise');

const action = (request, h) => {
    return rp.post(
        {
            'url': 'http://localhost:8000/trainer',
            'json': true,
            'body': JSON.parse(request.payload)
        },
    );
}

const status = (request, h) => {
    var protocol = JSON.parse(request.payload)['protocol'];
    console.log(protocol);
    return rp.get(
        {
            'url': 'http://localhost:8000/trainer/status?protocol='+protocol,
            'json': true,
        },
    );
}

module.exports = {
  action, status
}