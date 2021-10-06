import React, { useState } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList"

function App(){
    const [data, setData] = useState([]);
    const searchVal = async (val)=> {
        const response = await unsplash.get('/search/photos', {
            params: { query: val },
           
        }); 
        setData(response.data.results); 
    }
    
    return(
        <div className="ui container">
            <SearchBar onSub={searchVal} />
            <ImageList images={data} />
        </div>  
    ) 
}

export default App;