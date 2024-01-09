
// Comments Controllers
// Get Comments route
const getCommentsHandler = (req, res) => {
    res.send('Get Comments route');
}

// Get certain Comment 
const getSingleCommentHandler = (req, res) => {
    console.log(req.params);
    res.send(`Get comment route. CommentID ${req.params.commentID}`);
};

// Post comments route
const postCommentsHandler = (req, res) => {
    res.send('Post comments route');
}

// Delete ceetain comment
const deleteSingleCommentHandler = (req, res) => {
    res.send(`Delete comment route. CommentID ${req.params.commentID}`);
}

module.exports = {
    getCommentsHandler,
    getSingleCommentHandler,
    postCommentsHandler,
    deleteSingleCommentHandler
};