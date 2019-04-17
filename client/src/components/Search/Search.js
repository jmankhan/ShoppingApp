import React, {useState} from 'react'
import './Search.css'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const Search = (props) => {
    const [term, setTerm] = useState('');

    const handleInput = e => {
        setTerm(e.target.value);
    };

    const handleForm = e => {
        e.preventDefault();
        props.search(term);
        console.log(term);
    };

    return (
        <form className={props.center ? "searchContainer" : ""} onSubmit={handleForm}>
            <FormControl style={{width: 500}}>
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
        </form>
    )
};

export default Search;
