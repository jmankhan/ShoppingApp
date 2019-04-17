import React from 'react'
import './ResultsList.css'
import Search from '../Search/Search'

const ResultsList = (props) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
      
    return (
        <div className="list">
            <div className="listInner">
                <Search search={props.onSearch} defaultValue={props.term} className="searchResults"/>
                {Object.keys(props.results).map(storeId => {
                    return props.results[storeId].items.map(item => {
                            console.log(item);
                            return (
                                <div className="resultsPaper">
                                    <img src={item.thumbnail} alt=""/>
                                    <p>Item: {item.name}</p>
                                    <p>Price: {item.price === 'N/A' ? 'N/A' : formatter.format(item.price/100)}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Available at: {props.results[storeId].store.name}</p>
                                </div>
                            )
                        }
                    )
                })}
            </div>
        </div>
    )
};

export default ResultsList