import React, { useEffect, useRef, useState } from 'react';

const Image = ({ image }) => {
	const { description, urls } = image;

	const [span, setSpan] = useState(null);
	const imageRef = useRef(null);

	useEffect(() => {
		imageRef.current.addEventListener('load', () => setSpans());

		return imageRef.current.removeEventListener('load', () => setSpans());
	}, []);

	const setSpans = () => {
		const height = imageRef.current.clientHeight;
		const span = Math.ceil(height / 10);
		setSpan(span);
	};

	return (
		<div style={{ gridRowEnd: `span ${span}` }}>
			<img ref={imageRef} alt={description} src={urls.regular} />
		</div>
	);
};

export default Image;
