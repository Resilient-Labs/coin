const Income = require("../models/Income");

module.exports = {
  // navigate to income page
  getIncome: async (req, res) => {
    try {
      const income = await Income.find({ userid : req.user.id, })
      res.render("income.ejs", {
        income: income,
        user: req.user,
      
      });
    } catch (err) {
      console.log(err);
    }
  },
  updateIncome: async (req, res) => {
    try {
        await  Income.updateOne( { userid : req.user.id, date : req.body.userIncomeDate  },
        { income : req.body.userIncome, date : req.body.userIncomeDate }, { upsert : true } );
        console.log("Income has been added!");
        res.redirect("/income");
      } catch (err) {
        console.log(err);
      }
  },


}