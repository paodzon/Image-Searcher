import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = ({images}) => {
   
    return (

        <div className="image-list">
            {images.map((image) =>{
                return <ImageCard key={image.id} image={image.urls.regular} id={image.id} description={image.description}/>
            })}
        </div>
    )
}

export default ImageList
