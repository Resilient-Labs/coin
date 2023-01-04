
const Post = require("../models/Post");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const pending = await Post.find({ completed: 'pending' })
      //this is looking for all the orders marked as pending
      const done = await Post.find({ completed: 'done' })
      //this is looking for all the orders marked as done
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      const order = await Post.find().sort({ createdAt: "desc" }).lean();
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
  getIncome: async (req, res) => {
    try {

      res.render("incomeInput.ejs", {
      
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
    try {
      await Post.create({
        name: req.body.name,
        order: req.body.monster,
        custom: req.body.custom

        // mothman: req.body.mothman,
        // kraken: req.body.kraken,
        // cuthulu: req.body.cuthulu,
        // jack: req.body.jack,
        // trick: req.body.trick,
        // witch: req.body.witch,
        // camp: req.body.camp,
        // cider: req.body.cider,
        // vanilla: req.body.vanilla,

      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
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
      res.redirect(`/profile`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
