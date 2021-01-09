import React from 'react';
import './ImageCard';

function ImageCard({id,description,image}) {
    return (
        <div>
            <img src={image} key={id} alt={description}/>
        </div>
    )
}

export default ImageCard
