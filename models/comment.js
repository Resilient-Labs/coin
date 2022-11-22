const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    postid: {
        type: mongoose.Types.ObjectId,
        required: true
      },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
});

module.exports = mongoose.model("Comment", CommentSchema);
