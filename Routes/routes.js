
const express = require('express');
const PORT = 5000;
const app = express();

const firstHandler = (req, res, next) => {
    console.log("Handler");
    next();
}

const secondHandler = (req, res) => {
    res.send('<h1>Greetings</h1>');
}


app.get('/', firstHandler, secondHandler);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});