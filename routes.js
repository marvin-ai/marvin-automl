// routes.js
const UserController = require('./controllers/userController');

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