const mongoose = require("mongoose");
const Guild = mongoose.Schema({
  id: String,
  name: String,
  cost: {
    Type: Number,
  },
  action: {
    bonus: {
      Work: String,
      bonus: Number,
    },
    gift: {
      Type: Boolean,
      default: false,
    },
    remove: {
      Type: Boolean,
      default: false,
    },
  },
});
module.exports = mongoose.model("ItemDb", Guild);
