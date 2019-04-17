import React from 'react'
import './ResultsList.css'
import Search from '../Search/Search'

const ResultsList = (props) => {
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