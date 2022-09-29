var db = require('../db');

module.exports = {
  getAll: function () {},

  create: function (username, callback) {
    db.connection.query('INSERT INTO `users` (username) VALUES (?)', [username], function(err) {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        console.log("adding a user success");
        callback(null)
      }
    })
  }
};
