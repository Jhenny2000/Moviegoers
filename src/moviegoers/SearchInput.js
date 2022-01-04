import React from "react";
import './Header/style.css'

const SearchInput = ({value, onChange}) => {
    function handleChange (e){
        onChange(e.target.value);
    }

    return <input type='search' value={value} onChange={handleChange} placeholder='Search'/>

}

export default SearchInput;