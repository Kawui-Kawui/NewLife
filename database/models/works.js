const mongoose = require('mongoose');
const Guild = mongoose.Schema({
  name: String,
  sueldo: Number,
})
module.exports = mongoose.model('works', Guild)
