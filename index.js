const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const bannerDishes = require('./data/bannerDishes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Recipe Hunter is running')
});

app.get('/bannerdishes', (req, res) => {
    res.send(bannerDishes);
})

app.listen(port, () => {
    console.log(`Recipe Hunter API is running on port: ${port}`)
})