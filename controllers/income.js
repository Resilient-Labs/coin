// CONTRIBUTION - SARAH B
const Income = require("../models/Income");

module.exports = {
  // navigate to income page
  getIncome: async (req, res) => {
    try {
      const income = await Income.find({ userid : req.user.id, })
      res.render("income.ejs", {
        income: income,
        userid: req.user,
        
      
      });
    } catch (err) {
      console.log(err);
    }
  },
  updateIncome: async (req, res) => {
    console.log("controller for updateIncome")
    try {
        await  Income.updateOne( { userid : req.user.id, date : req.body.userIncomeDate  },
        { income : req.body.userIncome, date : req.body.userIncomeDate }, { upsert : true } );
        console.log("Income has been added!");
        res.redirect("/income");
      } catch (err) {
        console.log(err);
      }
  },

  editIncome: async (req, res) => {
    console.log(req.body)
    try {
      await Income.findByIdAndUpdate({ _id: req.body.incomeID }, 
        {
          income: req.body.incomeEdit
        })
        res.redirect("dashboard.ejs");
    } catch (error) {
      console.log(error)
    }
  },
  deleteIncome: async (req, res) => {
    console.log(req.body)
    try {
      await Income.findByIdAndDelete({ _id:  req.body.incomeID})
      res.redirect("dashboard.ejs");
      
    } catch (error) {
      console.log(error)
    }
  }


}