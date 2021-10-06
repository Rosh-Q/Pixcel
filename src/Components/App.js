import React, { useState } from 'react';

import ImageList from './ImageList';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

const App = () => {
	const [images, setImages] = useState({ images: [] });

	const searchVal = async val => {
		const response = await unsplash.get('/search/photos', {
			params: { query: val },
		});
		setImages({ images: response.data.results });
	};

	return (
		<div className='ui container'>
			<SearchBar onSubmit={searchVal} />
			<ImageList images={images} />
		</div>
	);
};

export default App;
