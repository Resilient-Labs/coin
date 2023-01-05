const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
<<<<<<< HEAD
// <<<<<<< HEAD

// =======
// >>>>>>> 53e1494d6f7d6f387303e554b9044fb196e69ce1
  category: {
=======



//   category: {
//     type: String,
//     required: true,
//   },
//   expenseMonth: {
//     type: String,
//     required: true,
//   },
  expenseCost: {
>>>>>>> cd6064fc1331e551187174269e6236a8cdd79df4
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
