    const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth")
const homeController = require("../controllers/home")
const postsController = require("../controllers/posts")
const expensesController = require("../controllers/expenses")
const incomeController = require("../controllers/income")


const { ensureAuth, ensureGuest } = require("../middleware/auth")

//Main Routes - simplified for now
router.get("/", homeController.getIndex)
router.get("/feed", ensureAuth, postsController.getFeed)
router.get("/expense", ensureAuth, expensesController.getExpenses)
router.get("/login", authController.getLogin)
router.post("/login", authController.postLogin)
router.get("/logout", authController.logout)
router.get("/signup", authController.getSignup)
router.post("/signup", authController.postSignup)
router.get("/income", ensureAuth, incomeController.getIncome)
router.post("/updateIncome", incomeController.updateIncome)
router.get("/dashboard", ensureAuth, postsController.getDashboard)


module.exports = router;
