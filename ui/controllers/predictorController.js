var rp = require('request-promise');

const action = (request, h) => {
    return rp.post(
        {
            'url': 'http://localhost:8000/predictor',
            'json': true,
            'body': JSON.parse(JSON.parse(request.payload))
        },
    );
}

module.exports = {
  action,
}