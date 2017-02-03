var mongoose = require('mongoose');

var Test = new mongoose.Schema({
  name: { type: String },
  email: { type: String }
});

module.exports = mongoose.model('Test', Test);
