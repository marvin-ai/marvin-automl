// routes.js
const UserController = require('./controllers/userController');

module.exports = [
  { // GET Login
    method: 'GET',
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
    path: '/api',
    handler: (request, h) => {
      return 'API HealthCheck';;
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