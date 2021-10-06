import './ImageList.css';

import Image from './Image';
import React from 'react';

const ImageList = ({ images }) => {
	const NO_SEARCH_TEXT = 'Search for something!';

	// TODO - display a message if no search results are found

	const renderImages = () =>
		images.length ? (
			images.map(image => <Image key={image.id} image={image} />)
		) : (
			<div>
				<p>{NO_SEARCH_TEXT}</p>
			</div>
		);

	return <div className='image-list'>{renderImages()}</div>;
};

export default ImageList;
