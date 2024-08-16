import ReactModal from 'react-modal';
import css from './ImageModal.module.css'
import React, { FC, useEffect } from 'react';
import { ImageModalProps } from './ImageModalProps';

const ImageModal: FC<ImageModalProps> = ({ image, onClose }) => {
    useEffect(() => {
        ReactModal.setAppElement('#root');
    }, []);

    return (
        <ReactModal
            isOpen={!!image}
            onRequestClose={onClose}
            contentLabel='Image Modal'
            className={css.modal}
            overlayClassName={css.overlay}
        >
            {image && (
                <div className={css.imageContainer}>
                    <img
                        src={image.url}
                        alt={image.description}
                        className={css.image} />
                </div>
            )}
        </ReactModal>
    );
}

export default ImageModal;