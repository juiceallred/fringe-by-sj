var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var usersSchema = new Schema ({
  email: {type: String, required: true, unique: true},
  username: {type: String, require: true, unique: true, maxlength: 20, index: true},
  password: {type: String, require: true, minlength: 6}


});

module.exports = mongoose.model('Users', usersSchema);
