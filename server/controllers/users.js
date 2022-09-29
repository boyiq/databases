var models = require('../models');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    models.users.create(req.body.username, (err) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(201);
      }
    });
  }
};
