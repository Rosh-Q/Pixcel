import React, { useState, useEffect, useRef } from "react";

function Image ({image}) {
    const [spanElement, setSpanElement] = useState(null);
    const imageRef = useRef();
    
    const { description, urls } = image;

    const setSpans = () => {
        const height = imageRef.current.clientHeight;
        const span = Math.ceil(height / 10);
        setSpanElement(span)
        console.log(span)
    }

    useEffect(() => {
        imageRef.current.addEventListener('load',
            () => setSpans());
    }, [])

    return (
        <div style={{gridRowEnd: `span ${spanElement}`}}>
            <img ref={imageRef} alt={description} src={urls.regular} />
        </div>
    )
}

export default Image;