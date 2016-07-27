var Event = require('../models/Events');



module.exports = {
  read: function (req, res) {
    Event.find(req.query)
    .populate('products')
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  readOne: function(req, res) {
    Event.findById(
      req.params.id).populate('products')
      .exec(function(err, result) {
        if (err) return res.status(500).send(err);
        return res.send(result);
      });
  },

  create: function (req, res) {
    var newEvent = new Event(req.body);
    newEvent.save(function(err, result) {
      if(err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
      function(err, result) {
        if (err) return res.status(500).send(err);
        return res.send(result);
      });
  },

  delete: function (req, res) {
    Event.findByIdAndRemove(
      req.params.id,
      function(err, result) {
        if(err) return res.status(500).send(err);
        res.send(result);
      }
    )
  }
};
