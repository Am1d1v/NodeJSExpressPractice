const commentsRouter = require('./comments');
const usersRouter = require('./users');
const express = require('express');
const PORT = 5000;
const app = express();

// Get root route
const getRootHandler = (req, res, next) => {
    res.send('Get root route');
}

app.get('/', getRootHandler);
app.use('/comments', commentsRouter);
app.use('/users', usersRouter);


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});