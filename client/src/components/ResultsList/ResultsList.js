import React from 'react'
import './ResultsList.css'
import Search from '../Search/Search'

const ResultsList = (props) => {
    return (
        <ul class="list">
            <Search search={props.onSearch} defaultValue={props.term} />
            {props.results.map(result => {
                return <li>
                    <p>{result.name}</p>
                    <p>{result.price}</p>
                </li>
            })}
        </ul>
    )
}

export default ResultsList