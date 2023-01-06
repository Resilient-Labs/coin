const express = require("express")
const router = express.Router()
const expensesController = require("../controllers/expenses")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

//Expenses Routes - simplified for now
// CONTRIBUTION - SARAH B

router.get("/:id", ensureAuth, expensesController.getExpenseData);
router.post("/createExpenses", expensesController.createExpenses);
router.put("/editExpenseData/:id",  expensesController.editExpenseData)
router.delete("/deleteExpenseData/:id",  expensesController.deleteExpenseData)



module.exports = router;