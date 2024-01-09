const commentsRouter = require('./comments')

const express = require('express');
const PORT = 5000;
const app = express();

// Get root route
const getRootHandler = (req, res, next) => {
    res.send('Get root route');
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
    res.send(`Get single user. UserID ${req.params.userID}`);
}

app.get('/', getRootHandler);
app.use('/comments', commentsRouter);


// Get all users
app.get('/users', getUsersHandler);

// Post user
app.post('/users', postUsersHandler);

// Get the certain user
app.get('/users/:userID', getSingleUserHandler);


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});