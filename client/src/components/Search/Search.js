import React, {useState} from 'react'
import './Search.css'

const Search = (props) => {
    const [term, setTerm] = useState('')

    const handleInput = e => {
        setTerm(e.target.value)
    }

    const handleSearch = e => {
        e.preventDefault();
        props.search(term);
    }

    return (
        <form className={props.center ? "searchContainer" : ""}>
            <input type="search"
                    value={term || props.defaultValue}
                    onChange={handleInput}
                    name="search"
                    required />
            
            <button type="text"
                    onClick={handleSearch}>
                    Search
            </button>

        </form>
    )
}

export default Search;
