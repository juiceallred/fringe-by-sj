var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventsSchema = new Schema ({
  title: {type: String, required: true, unique: true},
  description: {type: String},
  products: [{type:Schema.Types.ObjectId, ref: 'Product'}]

});

module.exports = mongoose.model('Events', eventsSchema);
