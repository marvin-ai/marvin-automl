var rp = require('request-promise');

const action = (request, h) => {
    console.log(JSON.parse(request.payload));
    return rp.post(
        {
            'url': 'http://localhost:8000/trainer',
            'json': true,
            'body': JSON.parse(request.payload)
        },
    );
}

const status = (request, h) => {
    return rp.get(
        {
            'url': 'http://localhost:8000/trainer/status',
            'json': true,
        },
    );
}

module.exports = {
  action, status
}