var rp = require('request-promise');

const action = (request, h) => {
    return rp.post(
        {
            'url': 'http://localhost:8000/tpreparator',
            'json': true,
            'body': JSON.parse(request.payload)
        },
    );
}

const status = (request, h) => {
    return rp.get(
        {
            'url': 'http://localhost:8000/tpreparator/status',
            'json': true,
        },
    );
}

const reload = (request, h) => {
    var payload = JSON.parse(request.payload);
    var protocol = payload.acquisitorProtocol;
    return rp.put(
        {
            'url': 'http://localhost:8000/tpreparator/reload?protocol='+protocol,
        },
    );
}

module.exports = {
  action, status, reload
}