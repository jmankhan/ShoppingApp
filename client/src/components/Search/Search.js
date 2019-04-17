import React, {useState} from 'react'
import './Search.css'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const Search = (props) => {
    const [term, setTerm] = useState('');
    const [zipcode, setZipcode] = useState('');

    const handleInput = e => {
        setTerm(e.target.value);
    };

    const handleZipcode = e => {
        setZipcode(e.target.value);
    }

    const handleForm = e => {
        e.preventDefault();
        props.search(term, zipcode);
    };

    return (
        <form className={props.center ? "searchContainer" : ""} onSubmit={handleForm}>
            <FormControl style={{width: 400}}>
                <InputLabel
                    htmlFor="custom-css-standard-input"
                >
                    Search
                </InputLabel>
                <Input
                    id="custom-css-standard-input"
                    onChange={handleInput}
                />
            </FormControl>
            <p style={{width:50}}/>
            <FormControl style={{width: 400}}>
                <InputLabel
                    htmlFor="custom-css-standard-input"
                >
                    ZipCode
                </InputLabel>
                <Input
                    id="custom-css-standard-input"
                    onChange={handleZipcode}
                />
            </FormControl>
            <button type="submit" style={{display: 'none'}}>Submit</button>
        </form>
    )
};

export default Search;
