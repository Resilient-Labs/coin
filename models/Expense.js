// CONTRIBUTION - SARAH B
const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  expenseName: {
    type: String,
    required: true,
  },
  category:{
    type: String, 
    required: false, 
  },
  expenseCost: {
    type: Number,
    required: true,
  },
  date: {
    type: Date
  }
});

module.exports = mongoose.model("Expense", ExpenseSchema);