const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UsersSchema = new Schema({
  username: String,
  pass: String
});

module.exports = mongoose.model('User', UsersSchema, "usercollection");