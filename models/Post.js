const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  order: {
    type: String,
    required: true,
  },
  completed: {
    type: String,
    default: 'pending',
  },
 custom: {
    type: String,
    default: false,
  }, 
 barista: {
    type: String,
    required: true,
    default: ' '
  },
  // mothman: {
  //   type: String,
  //   default: false,
  // },
  // kraken: {
  //   type: String,
  //   default: false,
  // },
  // cuthulu: {
  //   type: String,
  //   default: false,
  // },
  // jack: {
  //   type: String,
  //   default: false,
  // },
  // trick: {
  //   type: String,
  //   default: false,
  // },
  // witch: {
  //   type: String,
  //   default: false,
  // },
  // camp: {
  //   type: String,
  //   default: false,
  // },
  // cider: {
  //   type: String,
  //   default: false,
  // },
  // vanilla: {
  //   type: String,
  //   default: false,
  // }, 

});

module.exports = mongoose.model("Orders", PostSchema);
