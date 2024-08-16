import axios from "axios";
import { ApiResponse } from "./ApiTypes";

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = 'Client-ID 3zb_mbNHFZJaYMkgp6GZ997cdbHk5MllXUfJtSgzbbc';

export const getData = async (
    query: string,
    page: number
): Promise<ApiResponse> => {
    try {
        const response = await axios.get<ApiResponse>('/search/photos', {
            params: {
                query,
                page,
                per_page: 12,
                orientation: 'landscape'
            },
        });
        return response.data;

    } catch (error) {
        throw new Error('Something went wrong. Please try again later.');
    }
};
