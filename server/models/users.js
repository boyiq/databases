var db = require('../db');

module.exports = {
  getAll: function () {},

  create: function (username) {
    return db.users.create({username: username});
  }
};