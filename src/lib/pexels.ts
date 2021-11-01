import axios from 'axios';

const instance = axios.create({
    headers: {
        Authorization: '563492ad6f91700001000001ee73ec26350b4a91aa701684cd9cf496',
    },
});

// https://www.pexels.com/zh-cn/api/documentation/
export interface SearchParams {
    query: string;
    page: number;
    per_page: number;
    orientation?: 'landscape' | 'portrait' | 'square';
    size?: 'large' | 'medium' | 'small';
    color?: 'red' | 'orange' | 'yellow' | 'green' | 'turquoise' | 'blue' | 'violet' | 'pink' | 'brown' | 'black' | 'gray' | 'white';
}

export interface Photo {
    id: string;
    width: number;
    height: number;
    url: string;
    src: {
        original: string;
        large: string;
        large2x: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    };
}

export interface SearchReturn {
    total_results: number;
    page: number;
    per_page: number;
    prev_page: number;
    next_page: number;
    photos: Photo[];
}

export function search(params: SearchParams): Promise<SearchReturn> {
    return instance
        .get<SearchReturn>('https://api.pexels.com/v1/search/', {
            params: {
                ...params,
                query: encodeURIComponent(params.query),
            },
        })
        .then(({ data }) => data)
        .catch(() => {
            return { total_results: 0, page: 0, per_page: 0, prev_page: 0, next_page: 0, photos: [] };
        });
}

export function curated(params: { page: number; per_page: number }) {
    return instance
        .get<SearchReturn>('https://api.pexels.com/v1/search/', {
            params,
        })
        .then(({ data }) => data)
        .catch(() => {
            return { total_results: 0, page: 0, per_page: 0, prev_page: 0, next_page: 0, photos: [] };
        });
}
