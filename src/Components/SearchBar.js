import React, { useState } from "react";

function SearchBar ({onSub}) {

    const [inputValue, setInputValue] = useState("");


    const handleSubmit = (event)=>  {
        event.preventDefault();
        onSub(inputValue);
    };

    const handleInputChange = (event) => {
        setInputValue(event)
    }

    return ( 
        <div className="ui segment">
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field" >
                    <label>Search here</label>
                    <input type="text" value={inputValue} onChange={e => handleInputChange(e.target.value)} />
                </div>
            </form>
        </div>
    )

}
export default SearchBar;