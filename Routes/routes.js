const router = require('./index');
const express = require('express');
const PORT = 5000;
const app = express();

app.use(router);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});