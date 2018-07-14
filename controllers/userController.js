
const User = require('../models/user');

// getUsers
const getUsers = (request, h) => {

  return User.find().then(users => {

    users = users.map((value) => {
      return {
        _id : value._id, 
        username : value.username}
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

  return User.find("{ username :  }").then(users => {

    users = users.map((value) => {
      return {
        _id : value._id, 
        username : value.username}
    })

    const response = h.response(users);
    response.type('application/json');

    return response.code(200);

  }).catch(error => {
    const response = h.response(error);
    return response.code(500);

  });

}

module.exports = {
  getUsers,
  login
}