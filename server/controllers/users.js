var models = require('../models');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    models.users.create(req.body.username)
      .then(() => {res.sendStatus(201);})
      .catch(() => {res.sendStatus(400);});
  }
};
