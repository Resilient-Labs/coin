const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
<<<<<<< HEAD
  expenseName: {
=======
<<<<<<< HEAD

=======
>>>>>>> 53e1494d6f7d6f387303e554b9044fb196e69ce1
  category: {
>>>>>>> 06174c6c15088f203324d871586319cd2fd91448
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
