import { Image } from "./Types";

export interface ApiResponse {
    results: Image[];
    total_pages: number;
}