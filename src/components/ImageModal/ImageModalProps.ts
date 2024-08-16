import { Image } from "../../App.types"


export interface ImageModalProps {
    image: Image | null;
    onClose: () => void;
}