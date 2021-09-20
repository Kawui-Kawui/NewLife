const mongoose = require('mongoose');
const Guild = mongoose.Schema({
  id: String,
  name: String,
  Sub: {
    Type: Boolean,
    default: false
  },
  Badgest: {
    String
  },
  economy: {
    money: {
      type: Number,
      default: 0
    },
    Work: {
      Total: {
        type: Number,
        default: 0
      },
      in : {
        type: String,
        default: "Ninguno"
      },
      Most: {
        type: String,
      },
      hours: {
        type: Number,
        default: 0
      },
    },
    Items: {
      All: {
        type: {
          String
        },
      },
      Recent: {
        type: String,
      }
    },
  }
})
module.exports = mongoose.model('userDb', Guild)
