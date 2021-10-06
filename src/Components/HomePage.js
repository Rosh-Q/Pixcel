import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { CategoryTabs } from './category';
import './homepage.css';

const Homepage = () => {
  const [images, setImages] = useState([]);
  const result = (images) => {
    setImages(images);
  };
  console.log(images);
  return (
    <div id="container">
      <div id="searchBar-container">
        <SearchBar onResult={result} />
      </div>
      <CategoryTabs images={images} />
      <div>
        <ImageList images={images} />
      </div>
    </div>
  );
};

export default Homepage;
