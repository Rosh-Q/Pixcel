import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './categoryStyles.css';

const Category = ({ name, images }) => {
  return (
    <div className="category-container">
      <p className="category-header">{name}</p>
      <ImageList cols={5}>
        {images.length >= 5 ? (
          images.slice(0, 5).map((image) => (
            <ImageListItem key={image.id}>
              <img
                alt={image.description}
                src={`${image.urls.raw}?w=400&h=400&fit=crop&auto=format`}
                alt={image.alt_description}
                loading="lazy"
              />
            </ImageListItem>
          ))
        ) : (
          <></>
        )}
      </ImageList>
    </div>
  );
};
export default Category;
