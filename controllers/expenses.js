const Expense = require("../models/Expense");

// TOOK THIS FROM POSTS CONTROLLER, HAVE NOT REMOVED ANY INFORMATION YET UNTIL WE HAVE THE FRONT END FORM
module.exports = {
  // navigate to expense page
    getExpenses: async (req, res) => {
      console.log("navigated to expense page"); 
      try{
        res.render("expenseInput.ejs", );
      } catch (err) {
        console.log(err);
      }
    },
    createExpenses: async (req, res) => {
      try {
        // Upload image to cloudinary
       
  
        await Expense.create({
          category: req.body.expenseName,
          expenseMonth: result.secure_url,
          cost: req.body.expenseCost
       
        });
        console.log("Expenses have been added!");
        res.redirect("/expenseInput");
      } catch (err) {
        console.log(err);
      }
    }
    
    // getFeed: async (req, res) => {
    //   try {
    //     const pending = await Post.find({ completed: 'pending' })
    //     const done = await Post.find({ completed: 'done' })
    //     const posts = await Post.find().sort({ createdAt: "desc" }).lean();
    //     const order = await Post.find().sort({ createdAt: "desc" }).lean();
    //     console.log(pending)
    //     res.render("feed.ejs", {
    //       posts: posts,
    //       order: order,
    //       pending: pending,
    //       done: done
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    // getPost: async (req, res) => {
    //   try {
    //     const post = await Post.findById(req.params.id);
    //     res.render("post.ejs", {
    //       post: post,
    //       user: req.user,
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    // createPost: async (req, res) => {
    //   try {
    //     await Post.create({
    //       name: req.body.name,
    //       order: req.body.monster,
    //       custom: req.body.custom
    //     });
    //     console.log("Post has been added!");
    //     res.redirect("/profile");
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    // complete: async (req, res) => {
    //   try {
    //     await Post.findOneAndUpdate(
    //       { _id: req.params.id },
    //       {
    //         completed: 'done',
    //         barista: req.user.userName
    //       }
    //     );
    //     console.log('order marked as pending');
    //     res.redirect(`/profile`);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    // deletePost: async (req, res) => {
    //   try {
    //     // Delete post from db
    //     await Post.remove({ _id: req.params.id });
    //     console.log("Deleted Post");
    //     res.redirect("/profile");
    //   } catch (err) {
    //     res.redirect("/profile");
    //   }
    // },
  };





/*
  ****** THIS IS THE LOGIC FROM MY PREVIOUS PROJECT THAT ORGANIZE MY DEPARTMENTS IN THEIR RESPECTIVE CATEGORIES ***** 

   app.get('/profile', isLoggedIn, function(req, res) {
        db.collection('list').find({name: req.user.local.email}).toArray((err, result) => {
  
          if (err) return console.log(err)
          let nyc = result.filter(hash => hash.dropDown === 'dropDown_newYork')
          let philly = result.filter(hash => hash.dropDown === 'dropDown_philadelphia')
          let boston = result.filter(hash => hash.dropDown === 'dropDown_boston')
          let pittsburgh = result.filter(hash => hash.dropDown === 'dropDown_pittsburgh')
          // do it for the other cities
          let arr = [nyc,boston,philly,pittsburgh].flat()
          res.render('profile.ejs', {
            user : req.user,
            list: arr
          })
        })
    });

**/
  