
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

// Get certain Comment 
const getCommentHandler = (req, res) => {
    console.log(req.params);
    res.send(`Get comment route. CommentID ${req.params.commentID}`);
};

// Post comments route
const postCommentsHandler = (req, res) => {
    res.send('Post comments route');
}

app.get('/', getRootHandler);

// Get All Users Comments
app.get('/comments', getCommentsHandler);

// Post comments
app.post('/comments', postCommentsHandler);

// Get the certain Comment
app.get('/comments/:commentID', getCommentHandler);

// Delete the certain Comment
app.delete('/comments/:commentID', deleteCommentHandler);

// Get all users
app.get('/users', getUsersHandler);

// Post user
app.post('/users', postUsersHandler);

// Get the certain user
app.get('/users:/userID', postUsersHandler);


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});