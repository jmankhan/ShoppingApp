import React, {useState} from 'react';
import './App.css';
import ShoppingMap from './components/ShoppingMap/ShoppingMap'
import Search from './components/Search/Search'
import ResultsList from './components/ResultsList/ResultsList'
import {search} from './Api'

const App = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    const onSearch = searchTerm => {
        setTerm(searchTerm)

        //do api callout here
        search(searchTerm).then(response => {
            const items = response.items || [];
            const stores = response.stores || [];
            let itemsInStore = response.itemsInStore.filter(i => i.inStore != null) || [];
            
            const result = {};
            //construct a data object that will store all items per store
            stores.forEach(store => {
                result[store.no] = result[store.no] || {};
                result[store.no]['items'] = itemsInStore
                    .filter(i => i.inStore.storeId === store.no)
                    .map(i => {
                        const item = items.find(item => item.upc === i.common.productId.upca)
                        return {
                            ...item,
                            price: i.inStore.price.priceInCents,
                            quantity: i.inStore.inventory.quantity,
                            available: i.inStore.inventory.available
                        }
                    })
                    
                result[store.no]['store'] = store;
            })

            setResults(result);
        })
        
        //mock data
        // setResults([
        //     {name: 'Xbox One', price: 299.00, lat: 40.2087106, lng: -76.8707534},
        //     {name: 'Xbox One S', price: 399.00, lat: 40.2087106, lng: -76.8707534}
        // ])
    }

    return (
        <>
            {!term && <Search search={onSearch} center={true} />}
            {term && <ResultsList results={results} term={term} onSearch={onSearch} />}
            {term && <ShoppingMap data={results} searchTerm={term} />}
        </>
    )
}

export default App;
