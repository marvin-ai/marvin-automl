// routes.js
const UserController = require('./controllers/userController');
var http = require('request');

module.exports = [
  { // GET Login
    method: 'POST',
    path: '/api/login',
    handler: UserController.login
  },
  { // GET Users
    method: 'GET',
    path: '/api/users',
    handler: UserController.getUsers
  },
  {
    method: 'POST',
    path: '/api/acquisitor',
    handler: function (request, h){
      var resp = h.response();
      resp.type('application/json');
      
      http.post({
          'url': 'http://localhost:8000/acquisitor',
          'json': true,
          'body': JSON.parse(request.payload)
        },
        function (error, response, body) {
          if (!error && response.statusCode == 200){
            resp.code(200);
          } else {
            resp.code(500);
          }
        }
      );
      return resp;
    }
  },
  { // GET Api Healthcheck
    method: 'GET',
    path: '/healthcheck',
    handler: (request, h) => {
      return h.response({ message : 'API HealthCheck'}).type('application/json').code(200);
    }
  },
  { // Angular static Path
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true,
      }
    }
  }
];