// routes.js
const UserController = require('./controllers/userController');
const AcquisitorController = require('./controllers/acquisitorController');
const PredictorController = require('./controllers/predictorController');


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
    handler: AcquisitorController.pipeline
  },
  {
    method: 'POST',
    path: '/api/predictor',
    handler: PredictorController.prediction
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