const Income = require("../models/Income");

module.exports = {
  // navigate to income page
  getIncome: async (req, res) => {
    try {
      res.render("incomeInput.ejs", {
      
      });
    } catch (err) {
      console.log(err);
    }
  },
  updateIncome: async (req, res) => {
    try {
        await  Income.updateOne( { userid : req.user.id,  },
        { income : req.body.income }, { upsert : true } );
        console.log("Income has been added!");
        res.redirect("/incomeInput");
      } catch (err) {
        console.log(err);
      }
  },


}