import axios from 'axios';

// https://pixabay.com/api/docs/
export interface SearchParams {
    q: string;
    page: number;
    per_page: number;
    orientation?: 'horizontal' | 'vertical';
    image_type?: 'all' | 'photo' | 'illustration' | 'vector';
    category?:
        | 'backgrounds'
        | 'fashion'
        | 'nature'
        | 'science'
        | 'education'
        | 'feelings'
        | 'health'
        | 'people'
        | 'religion'
        | 'places'
        | 'animals'
        | 'industry'
        | 'computer'
        | 'food'
        | 'sports'
        | 'transportation'
        | 'travel'
        | 'buildings'
        | 'business'
        | 'music';
    min_width?: number;
    min_height?: number;
    colors?: 'grayscale' | 'transparent' | 'red' | 'orange' | 'yellow' | 'green' | 'turquoise' | 'blue' | 'lilac' | 'pink' | 'white' | 'gray' | 'black' | 'brown';
    safesearch?: 'true' | 'false';
    order?: 'popular' | 'latest';
}

export interface Photo {
    id: string;
    pageURL: string;
    previewURL: string;
    webformatURL: string;
    largeImageURL: string;
    imageHeight: number;
    imageWidth: number;
}

export interface SearchReturn {
    total: number;
    totalHits: number;
    hits: Photo[];
}

export function search(params: SearchParams): Promise<SearchReturn> {
    return axios
        .get<SearchReturn>('https://pixabay.com/api/', {
            params: {
                key: '24009231-e8e4fd260a26521d059640a40',
                ...params,
                q: encodeURIComponent(params.q),
            },
        })
        .then(({ data }) => data)
        .catch(() => {
            return { total: 0, totalHits: 0, hits: [] };
        });
}
