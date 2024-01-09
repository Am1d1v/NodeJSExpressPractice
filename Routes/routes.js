
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

// Get All Users
const getUsersHandler = (req, res) => {
    res.send('Get users route');
}

// Post new User
const postUsersHandler = (req, res) => {
    res.send('Post users route');
}

// Get Single User
const getSingleUserHandler = (req, res) => {
    res.send(`Get users route. UserID ${req.params.commentID}`);
}

app.get('/', getRootHandler);


// Get all users
app.get('/users', getUsersHandler);

// Post user
app.post('/users', postUsersHandler);

// Get the certain user
app.get('/users/:userID', getSingleUserHandler);


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});