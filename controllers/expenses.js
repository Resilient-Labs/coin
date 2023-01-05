const Expense = require("../models/Expense");


// CRUD
module.exports = {
  // navigate to expense page, get for expense page
    getExpenses: async (req, res) => {
      console.log("navigated to expense page"); 
      try{
        res.render("expense.ejs");
      } catch (err) {
        console.log(err);
      }
    },
    // get to retrieve expense data 
    getExpenseData: async (req, res) => {
      try {
        res.render("expense.ejs", {
          expenseName: req.body.expenseName,
          expenseCost: req.body.expenseCost,
          isReccuring: req.body.value
        });
        console.log(req.body.expenseName)
      } catch (err) {
        console.log(err);
      }
    },
    // post request to create an expense from inputs from the DOM
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
    //edit expenses

    // put request to update current expense information
    editExpenseData: async (req, res) => {
      console.log("making a PUT expense request")
      try {
        await Expense.findOneAndUpdate(
          { _id: req.params.id },
          {
            completed: 'done',
            barista: req.user.userName
          }
        );
        console.log('Expense Data Updated!');
        res.redirect(`/expense`);
      } catch (err) {
        console.log(err);
      }
    },
    // delete request to delete expense data entry 
    deleteExpenseData: async (req, res) => {
      console.log("You deleting this expense entry")
      try {
        // Delete post from db
        await Post.remove({ _id: req.params.id });
        console.log("Deleted Entry");
        res.redirect("/expense");
      } catch (err) {
        res.redirect("/expense");
      }
    },
  };