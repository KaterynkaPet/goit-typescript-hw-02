import { Image } from "../../App.types";

export interface ImageGalleryProps {
    images: Image[];
    onImageClick: (image: Image) => void;
    lastImageRef: React.RefObject<HTMLDivElement>;
}