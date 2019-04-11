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

//i guess we should break these out into api methods, but this is prototyping, mirite
app.get('/search', (req, res) => {
    const key = process.env.WALMART_API_KEY;
    const search_term = req.query.search_term;
    let stores;
    axios.get(`http://api.walmartlabs.com/v1/stores?format=json&zip=17057&apiKey=${key}`)
    .then(response => {
        stores = response.data.slice(0,5);
        return response;
    })
    .then(() => {
        return axios.get(`http://api.walmartlabs.com/v1/search?query=${search_term}&format=json&apiKey=${key}`)
    })
    .then(response => {
        if(!response.data.numItems) {
            res.sendStatus(404)
            return;
        }
        return response.data.items.map(item => {
            return {
                id: item.itemId,
                name: item.name,
                price: item.msrp || item.salePrice,
                description: item.shortDescription,
                lat: 40.2087106, //need another callout for these
                lng: -76.8707534,
                upc: item.upc
            }
        })
    })
    .then(items => {
        const urls = [];
        items.forEach(item => {
            stores.forEach(store => {
                urls.push(`https://search.mobile.walmart.com/v1/products-by-code/UPC/${item.upc}?storeId=${store.no}`)
            })
        })

        axios.all(urls.map(url => axios.get(url)))
        .then(results => {
            results = results.map(result => result.data.data);
            const response = {
                items: items,
                stores: stores,
                itemsInStore: results
            }
            res.json(response)
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err);
    })
})

//start server
app.listen(PORT, () => console.log(`Started on Port ${PORT}`));