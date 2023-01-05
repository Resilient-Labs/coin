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
 
}, { _id : false });

module.exports = mongoose.model("income", IncomeSchema); 