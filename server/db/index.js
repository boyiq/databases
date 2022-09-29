var Sequelize = require('sequelize');
var db = new Sequelize ('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var users = db.define('users', {
  username: Sequelize.STRING
}, {
  timestamps: false
});

var messages = db.define('messages', {
  user_id: Sequelize.INTEGER,
  content: Sequelize.STRING,
  roomname: Sequelize.STRING
}, {
  timestamps: false
});

//users.removeAttribute('createdAt');
//users.removeAttribute('updatedAt');
//messages.removeAttribute('createdAt');
//messages.removeAttribute('updatedAt');


// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

module.exports.users = users;
module.exports.messages = messages;

