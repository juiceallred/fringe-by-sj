var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



var productsSchema = new Schema ({
  title: {type: String, required: true, unique: true, index: true},
  description: {type: String, required: true},
  price: {type: Number, required: true, minimum: 0},
  image: {type: String},
  details: {
    dimensions: {type: String},
    materials: {type: String},
    color: {type: String},
    shipping: {type: Number}
  }
})

module.exports = mongoose.model('Product', productsSchema);
