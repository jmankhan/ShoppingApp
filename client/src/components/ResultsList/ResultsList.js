import React from 'react'
import './ResultsList.css'
import Search from '../Search/Search'

const ResultsList = (props) => {
    return (
        <ul className="list">
            <Search search={props.onSearch} defaultValue={props.term} />
            {Object.keys(props.results).map(storeId => {
                return props.results[storeId].items.map(item => {
                    return <li>
                        <p>{item.name}</p>
                        <p>{item.description.substring(0, 100)}</p>
                        <p>{item.price}</p>
                        <p>Available at: {props.results[storeId].store.name}</p>
                    </li>
                })
            })}
        </ul>
    )
}

export default ResultsList