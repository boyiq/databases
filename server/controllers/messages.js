var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll()
    .then((messages) => {
      res.status(200).json(messages);
    }).catch(()=> {
      res.sendStatus(400);
    })
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body)
    .then(()=> {
      res.sendStatus(201);
    }).catch(()=> {
      res.sendStatus(400);
    })
  } // a function which handles posting a message to the database
};
