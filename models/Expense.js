const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  expenseMonth: {
    type: String,
    required: true,
  },
  cost: { 
    type: String,
    required: true,
  }
  
});

module.exports = mongoose.model("Expense", ExpenseSchema); 