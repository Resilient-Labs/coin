const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({

  income: {
    type: String,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: String,
    required: true,
  },
 
});

module.exports = mongoose.model("income", IncomeSchema); 