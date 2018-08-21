var rp = require('request-promise');

const action = (request, h) => {
    return rp.post(
        {
            'url': 'http://localhost:8000/evaluator',
            'json': true,
            'body': JSON.parse(request.payload)
        },
    );
}

const reload = (request, h) => {
    var payload = JSON.parse(request.payload);
    var protocol = payload.tprepProtocol + ',' + payload.trainerProtocol;
    return rp.put(
        {
            'url': 'http://localhost:8000/evaluator/reload?protocol='+protocol,
        },
    );
}

const metrics = (request, h) => {
    var protocol = JSON.parse(request.payload)['protocol'];
    return rp.get(
        {
            'url': 'http://localhost:8000/evaluator/metrics?protocol='+protocol,
            'json': true,
        },
    );
}

module.exports = {
  action, metrics, reload
}