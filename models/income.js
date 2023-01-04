const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({

  incomeMonth: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: true,
  }
  
});

module.exports = mongoose.model("income", PostSchema); 
