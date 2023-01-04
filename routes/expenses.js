const express = require("express")
const router = express.Router()
const expensesController = require("../controllers/expenses")
const { ensureAuth } = require("../middleware/auth")
// const { ensureAuth, ensureGuest } = require("../middleware/auth")

//Expenses Routes - simplified for now
router.get()
router.get()
router.get()
router.post("/createExpenses", ensureAuth, expensesController.createExpenses);
router.get()
router.get()
router.post()

module.exports = router;