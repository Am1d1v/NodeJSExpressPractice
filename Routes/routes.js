
const express = require('express');
const PORT = 5000;
const app = express();

// Get root route
const getRootHandler = (req, res, next) => {
    res.send('Get root route');
}

// Get Comments route
const getCommentsHandler = (req, res) => {
    res.send('Get Comments route')
}

// Post comments route
const postCommentsHandler = (req, res) => {
    res.send('Post comments route')
}

app.get('/', getRootHandler);
app.get('/comments', getCommentsHandler);
app.post('/comments', postCommentsHandler)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});