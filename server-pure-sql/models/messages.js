var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT * from `messages` INNER JOIN `users` ON messages.user_id = users.id', [], (err, results)=> {
      callback(err, results);
    })
  }, // a function which produces all the messages
  create: function (messageObj, callback) {
    db.connection.query('SELECT id from `users` where username = ?', [messageObj.username], (err, results) => {
      if (err) {
        callback(err);
      } else {
        db.connection.query('INSERT INTO `messages` (content, roomname, user_id) VALUES (?, ?, ?)', [messageObj.message, messageObj.roomname, results[0].id], (err) => {
          callback(err);
        })
      }
    })
  } // a function which can be used to insert a message into the database
};
