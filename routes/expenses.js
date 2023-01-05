const express = require("express")
const router = express.Router()
const expensesController = require("../controllers/expenses")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

//Expenses Routes - simplified for now

router.get("/:id", ensureAuth, expensesController.getExpenseData)
router.post("/createExpenses", expensesController.createExpenses);


module.exports = router;