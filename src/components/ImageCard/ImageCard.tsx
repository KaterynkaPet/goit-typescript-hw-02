import React, { forwardRef } from 'react';
import { ImageCardProps } from './ImageCardProps';
import css from './ImageCard.module.css'

const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>(({ image, onClick }, ref) => {

    return (
        <div className={css.card} >
            <img
                src={image.url}
                alt={image.description}
                onClick={onClick} />
        </div>
    );
});

export default ImageCard;