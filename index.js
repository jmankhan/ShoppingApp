const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
//production mode
if (process.env.NODE_ENV === 'PROD') {
    app.use(express.static(path.join(__dirname, 'react/')));
    app.get('/', (req, res) => {
        res.sendfile(path.join(__dirname = 'react/index.html'));
    })
} 

app.get('/', (req, res) => {
    res.send('test', 200);
})
app.get('/foo', (req, res) => {
    res.send('hello world', 200);
})
app.get('/search', (req, res) => {
    const key = process.env.WALMART_API_KEY;
    const search_term = req.query.search_term;
    axios.get(`http://api.walmartlabs.com/v1/search?query=${search_term}&format=json&apiKey=${key}`)
        .then(response => {
            if(!response.data.numItems) {
                res.sendStatus(404)
                return;
            }
            const items = response.data.items.map(item => {
                return {
                    id: item.itemId,
                    name: item.name,
                    price: item.msrp || item.salePrice,
                    description: item.shortDescription,
                    lat: 40.2087106, //need another callout for these
                    lng: -76.8707534
                }
            })

            res.json(items);
        })
        .catch(err => {
            console.log(err);
        })
})

//start server
app.listen(PORT, () => console.log(`Started on Port ${PORT}`));