var db = require('../db');

module.exports = {
  getAll: function () {},

  create: function (username) {
    db.connection.query('INSERT INTO `users` (username) VALUES (?)', [username], function(err, results, fields) {
      if (err) {
        console.log(err);
      } else {
        console.log("adding a user success");
      }
    })
  }
};
