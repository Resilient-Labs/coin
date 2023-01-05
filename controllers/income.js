const Income = require("../models/Income");

module.exports = {
  // navigate to income page
  getIncome: async (req, res) => {
    try {
      res.render("income.ejs", {
      
      });
    } catch (err) {
      console.log(err);
    }
  },
  updateIncome: async (req, res) => {
    try {
        await  Income.updateOne( { userid : req.user.id,  },
        { income : req.body.userIncome }, { upsert : true } );
        console.log("Income has been added!");
        res.redirect("/income");
      } catch (err) {
        console.log(err);
      }
  },


}