var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT * from `messages` INNER JOIN `users` ON messages.user_id = users.id', [], (err, results)=> {
      if (err) {
        console.log(err);
      } else {
        callback(null, results);
      }
    })
  }, // a function which produces all the messages
  create: function (messageObj) {
    db.connection.query('SELECT id from `users` where username = ?', [messageObj.username], (err, results) => {
      if (err) {
        console.log(err);
      } else {
        db.connection.query('INSERT INTO `messages` (content, roomname, user_id) VALUES (?, ?, ?)', [messageObj.message, messageObj.roomname, results[0].id], (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('adding a message success');
          }
        })
      }
    })
  } // a function which can be used to insert a message into the database
};
