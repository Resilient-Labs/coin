const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
<<<<<<< HEAD

=======
>>>>>>> 53e1494d6f7d6f387303e554b9044fb196e69ce1
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