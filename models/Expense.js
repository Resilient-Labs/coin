const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  expenseName: {
    type: String,
    required: true,
  },
//   category: {
//     type: String,
//     required: true,
//   },
//   expenseMonth: {
//     type: String,
//     required: true,
//   },
  expenseCost: {
    type: String,
    required: true,
  },
  isRecurring: {
    type: Boolean,
    default: false,
    // added isRecurring as a Boolean to account for the recurring expenses to database, is set to default 'false' -Abdullahi Ali
  },
});

module.exports = mongoose.model("Expense", ExpenseSchema);
