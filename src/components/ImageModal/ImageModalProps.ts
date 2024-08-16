import { Image } from "../../Types"


export interface ImageModalProps {
    image: Image | null;
    onClose: () => void;
}