import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList"
class App extends React.Component{
    state = {images: []}
    searchVal = async (val)=> {
         const response = await unsplash.get('/search/photos', {
            params: { query: val },
           
        }); 
        this.setState({images: response.data.results})

        
    }
    render(){
       return <div className="ui container">
        <SearchBar onSub={this.searchVal} />
        <ImageList images={this.state.images} />
        
    </div>  
    }
   
}

export default App;