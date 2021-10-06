import './ImageList.css';

import Image from './Image';
import React from 'react';

const ImageList = ({ images }) => {
	const renderImages = () =>
		images.length ? (
			images.map(image => <Image key={image.id} image={image} />)
		) : (
			<div>
				<p>Sorry, no search has been perfmored yet.</p>
			</div>
		);

	return <div className='image-list'>{renderImages()}</div>;
};

export default ImageList;
