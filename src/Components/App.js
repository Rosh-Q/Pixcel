import React, { useState } from 'react';

import ImageList from './ImageList';
import SearchBar from './SearchBar';
import Footer from './footer/Footer';
import unsplash from '../api/unsplash';

const App = () => {
	const [images, setImages] = useState([]);

	const searchVal = async val => {
		const response = await unsplash.get('/search/photos', {
			params: { query: val },
		});
		setImages(response.data.results);
	};

	return (
		<div className='ui container'>
			<SearchBar onSub={searchVal} />
			<ImageList images={images} />
			<Footer/>
		</div>
	);
};

export default App;
