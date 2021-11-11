import axios from 'axios';
import { Picture } from '../../types';

const instance = axios.create({
  headers: {
    Authorization: '563492ad6f91700001000001ee73ec26350b4a91aa701684cd9cf496',
  },
});

function mapPhotoToPicture(photo: Photo): Picture {
  return { id: photo.id, width: photo.width, height: photo.height, pageUrl: photo.url, imageUrl: photo.src.large };
}

export function getCurated(): Promise<Picture[]> {
  return instance
    .get<SearchReturn>('https://api.pexels.com/v1/curated', {
      params: {
        page: 1,
        per_page: 80,
      },
    })
    .then((resp) => {
      return resp.data.photos.map(mapPhotoToPicture);
    })
    .catch((e) => {
      return [];
    });
}

export function searchPicture(params: SearchParams): Promise<Picture[]> {
  return instance
    .get<SearchReturn>('https://api.pexels.com/v1/search/', {
      params: {
        ...params,
        query: encodeURIComponent(params.query),
      },
    })
    .then((resp) => {
      return resp.data.photos.map(mapPhotoToPicture);
    })
    .catch((e) => {
      return [];
    });
}

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
