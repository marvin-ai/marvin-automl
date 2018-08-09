var rp = require('request-promise');

const action = (request, h) => {
    return rp.post(
        {
            'url': 'http://localhost:8000/evaluator',
            'json': true,
            'body': JSON.parse(JSON.parse(request.payload))
        },
    );
}

const status = (request, h) => {
    return rp.get(
        {
            'url': 'http://localhost:8000/evaluator/status',
            'json': true,
        },
    );
}

module.exports = {
  action, status
}