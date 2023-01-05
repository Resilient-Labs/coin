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
});

module.exports = mongoose.model("Orders", PostSchema);
