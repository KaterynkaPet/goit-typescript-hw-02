import { Image } from "../../Types";

export interface ImageGalleryProps {
    images: Image[];
    onImageClick: (image: Image) => void;
    lastImageRef: React.RefObject<HTMLDivElement>;
}