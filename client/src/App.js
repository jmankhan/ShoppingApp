import React, {useState} from 'react';
import './App.css';
import ShoppingMap from './components/ShoppingMap/ShoppingMap'
import Search from './components/Search/Search'
import ResultsList from './components/ResultsList/ResultsList'

const App = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    const onSearch = searchTerm => {
        setTerm(searchTerm)

        //do api callout here

        //mock data
        setResults([
            {name: 'Xbox One', price: 299.00, lat: 40.2087106, lng: -76.8707534},
            {name: 'Xbox One S', price: 399.00, lat: 40.2087106, lng: -76.8707534}
        ])
    }

    return (
        <>
            {!term && <Search search={onSearch} center={true} />}
            {term && <ResultsList results={results} term={term} onSearch={onSearch} />}
            {term && <ShoppingMap isMarkerShown={true} searchTerm={term} />}
        </>
    )
}

export default App;
