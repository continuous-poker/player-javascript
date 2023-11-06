const express = require('express');
const strategy = require("./logic/strategy.js");

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Poker JavaScript Player');
});

app.post('/', (req, res) => {
    let bet = strategy.decide(req.body);
    res.json(bet);
})


app.listen(port, () => {
    console.log(`⚡[server]: Server is running at http://localhost:${port}`);
});