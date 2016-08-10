var Product = require('../models/Products');



module.exports = {
  read: function (req, res) {
    Product.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  readOne: function (req, res) {
    Product.findById(req.params.id)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  create: function (req, res) {
      Product.create(req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      });
  },

  delete: function (req, res) {
    Product.findByIdAndRemove(
      req.params.id,
      {remove: true},
      function(err, result) {
        if(err) return res.status(500).send(err);
        res.send(result);
      }
    )
  }
};
