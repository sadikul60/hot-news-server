const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('News API is Running');
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('Hot News Server Running on port', port);
})