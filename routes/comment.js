const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//route for comment

router.post("/createComment/:postid", commentController.createComment);

// router.put("/likeComment/:id", commentController.likeComment);

// //router.put("/editComment/:id", commentController.editComment);

// router.delete("/deleteComment/:id", commentController.deleteComment);

module.exports = router;
