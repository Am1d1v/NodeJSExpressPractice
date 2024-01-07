

const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);


app.get('/', (req, res) => {
    res.send('Express Response');
})

app.listen(3000, () => {
    console.log(`Server was started on Port: 3000`);
});


// const server = http.createServer((req, res) => {
//     res.end('Response from the server');
// });
// server.listen(3000, () => {
//     console.log(`Server was started on Port: 3000`);
// })

