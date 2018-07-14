const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: {
    require: true,
    type: Number,
  },
  firstNamme: {
   require: true,
   type: String
  },
  requirelastName: {
    require: true,
    type: String,  
  },
  email: {
    require: false,
    type: String
  },
  instrument: {
    require: true,
    type: String
  },
  gener: {
    required: true,
    type: String
  },
  example: {
    required: false,
    type: String
  }
});

module.exports = mongoose.model("Musician", schema);
