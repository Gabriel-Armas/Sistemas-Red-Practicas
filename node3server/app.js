const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.query);
    res.status(200).send('Hello World');
});

app.post('/', (req, res) => {
    const {nombre} = req.query;
    console.log(req.query);
    res.status(201).send(`Hello ${nombre}`);
});

console.log('Server running at http://localhost:3000/');

app.listen(3000);