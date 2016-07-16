var User = require('../models/Users');

module.exports = {
  read: function (req, res) {
    User.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  readOne: function (req, res) {
    User.findById(req.params.id)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  create: function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      });
  },

  delete: function (req, res) {
    User.findByIdAndRemove(
      req.params.id,
      function(err, result) {
        if(err) return res.status(500).send(err);
        res.send(result);
      }
    )
  }
};
