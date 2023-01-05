const Expense = require("../models/Expense");


// TOOK THIS FROM POSTS CONTROLLER, HAVE NOT REMOVED ANY INFORMATION YET UNTIL WE HAVE THE FRONT END FORM
module.exports = {
  // navigate to expense page
    getExpenses: async (req, res) => {
      console.log("navigated to expense page"); 
      try{
        res.render("expense.ejs");
      } catch (err) {
        console.log(err);
      }
    },
    getExpenseData: async (req, res) => {
      try {
        res.render("expense.ejs", {
          expenseName: req.body.expenseName,
          expenseCost: req.body.expenseCost,
          isReccuring: req.body.value
        });
      } catch (err) {
        console.log(err);
      }
    },
    createExpenses: async (req, res) => {
      console.log("expense created!")
      try {
        await Expense.create({
          expenseName: req.body.expenseName,
          expenseCost: req.body.expenseCost,
          isReccuring: req.body.value
        });
        console.log("Expenses have been added!");
        res.redirect("/expense");
      } catch (err) {
        console.log(err);
      }
    },
  };