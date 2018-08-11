
const User = require('../models/user');
const uuidv1 = require('uuid/v1');

// getUsers
const getUsers = (request, h) => {

  return User.find().then(users => {

    users = users.map((value) => {
      return {
        _id: value._id,
        username: value.username
      }
    })

    const response = h.response(users);
    response.type('application/json');

    return response.code(200);

  }).catch(error => {
    const response = h.response(error);
    return response.code(500);

  });

}

// login
const login = (request, h) => {

  const { name, pass } = request.payload;

  return User.find({ username: name, pass: pass }).then(users => {

    if (!users.length) {
      return h.response({ message: 'User or password is invalid' }).type('application/json').code(404);
    }
    
    return h.response({ token: uuidv1() }).type('application/json').code(200);

  }).catch(error => {
    const response = h.response(error);
    return response.code(500);

  });

}

module.exports = {
  getUsers,
  login
}