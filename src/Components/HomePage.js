import React, { useState } from "react"
import SearchBar from "./SearchBar"
import ImageList from "./ImageList"
import "./homepage.css"

const Homepage = () => {
	const [images, setImages] = useState([])
    const result = (images) => {
setImages(images)
    }
    console.log(images)
return <div id="container">
    <div id="searchBar-container">
    <SearchBar onResult={result} /></div>
    <div><ImageList images={images} /></div>
    
</div>
}

export default Homepage