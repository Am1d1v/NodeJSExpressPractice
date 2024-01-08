
const express = require('express');
const PORT = 5000;
const app = express();

// Get root route
const getRootHandler = (req, res, next) => {
    res.send('Get root route');
}

// Get Comments route
const getCommentsHandler = (req, res) => {
    res.send('Get Comments route');
}

// Get Specific Comment 
const getCommentHandler = (req, res) => {
    console.log(req.params);
    res.send(`Get comment route. CommentID ${req.params.commentID}`);
};

// Post comments route
const postCommentsHandler = (req, res) => {
    res.send('Post comments route');
}

app.get('/', getRootHandler);

// Route chaining
app.route('/comments')
                      .get(getCommentsHandler)
                      .post(postCommentsHandler)

//app.get('/comments', getCommentsHandler);
//app.post('/comments', postCommentsHandler);
app.get('/comments/:commentID', getCommentHandler);


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});