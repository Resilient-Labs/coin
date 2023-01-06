// CONTRIBUTION - SARAH B
const Income = require("../models/Income");
const Post = require("../models/Post");
const Expense = require("../models/Expense");
const User = require("../models/User");


module.exports = {
  getProfile: async (req, res) => {
    try {
      const pending = await Post.find({ completed: 'pending' })
      //this is looking for all the orders marked as pending
      const done = await Post.find({ completed: 'done' })
      //this is looking for all the orders marked as done
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      const order = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("dashboard.ejs", {
        posts: posts,
        order: order,
        pending: pending,
        done: done
      });
    } catch (err) {
      console.log(err);
    }
  }, 
  getDashboard: async (req, res) => {
    try {
      //find all the user in the array that has the matching id of this request,
      const user = await User.find()

      const income = await Income.find({ userid : req.user.id, })
      const expense = await Expense.find({ user: req.user.id, })
      res.render("dashboard.ejs", {
          income: income,
          userid: req.user,
          category: req.body.category,
          expense: expense,
          expenseName: req.body.expenseName,
          expenseCost: req.body.expenseCost,
          date: req.body.date, 
          category: req.body.category,
          user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const pending = await Post.find({ completed: 'pending' })
      const done = await Post.find({ completed: 'done' })
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      const order = await Post.find().sort({ createdAt: "desc" }).lean();
      console.log(pending)
      res.render("feed.ejs", {
        posts: posts,
        order: order,
        pending: pending,
        done: done
      });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", {
        post: post,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    console.log(req.body);
    try {
      //Use post schema in models to create and save a document to Mongo DB Atlas
      await Post.create({
        category: req.body.category,
        title: req.body.title,
        cost: req.body.expenseCost,
        incomeMonth: req.body.incomeMonth,
        expenseMonth: req.body.expenseMonth,
        total: req.body.total,
      });
      console.log("Post has been added!");
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  // Line 51-67...This will create and save documents based on post schema, this will be sent to Mongo DB Atlas... - Abdullahi Ali
  complete: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          completed: 'done',
          barista: req.user.userName
        }
      );
      console.log('order marked as pending');
      res.redirect(`/dashboard`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/dashboard");
    } catch (err) {
      res.redirect("/dashboard");
    }
  },
};
