


const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Express Response');
})

app.post('/users', (req, res) => {
    res.send('User was created');
});

app.listen(3000, () => {
    console.log(`Server was started on Port: 3000`);
});


