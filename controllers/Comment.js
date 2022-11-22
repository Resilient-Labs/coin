const comment = require("../models/comment");

module.exports = {
    createComment: async (req, res) => {
        try {
            await comment.create({
                comment: req.body.comment,
                postid: req.params.postid,
                userid: req.user.id,
            });
            console.log("Comment has been added!");
            res.redirect(`/post/${req.params.postid}`);
        } catch (err) {
            console.log(err);
        }
    }
}



