var db = require('../db');

module.exports = {
  getAll: function () {
    return db.messages.findAll(
    //   {
    //   include: [
    //     { model: db.users, required: true}
    //   ]
    // }
    )
  },
  create: function(messageObj) {
    return db.users.findAll({
      where: {username: messageObj.username}
    }).then((user) => {
      return db.messages.create({
        user_id: user[0].id,
        content: messageObj.message,
        roomname: messageObj.roomname
      });
    });
  }
};
