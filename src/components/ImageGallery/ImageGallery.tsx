import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { ImageGalleryProps } from './ImageGalleryProps';
import css from './ImageGallery.module.css';

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick, lastImageRef }) => {
    if (images.length === 0) {
        return null;
    }

    return (
        <ul className={css.gallery}>
            {images.map((image, index) =>
                <li key={image.id}>
                    <div>
                        <ImageCard
                            key={image.id}
                            image={image}
                            onClick={() => onImageClick(image)}
                            ref={index === images.length - 1 ? lastImageRef : null} />
                    </div>
                </li>
            )}
        </ul>
    );
};


export default ImageGallery;