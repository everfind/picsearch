import { useCallback, useEffect, useMemo, useState } from 'react';
import { Picture } from '../types';
import { searchPicture as searchPexelsPicture, getCurated } from './vendors/pexels';
import { searchPicture as searchPixabayPicture } from './vendors/pixabay';

export function useDefaultPictures(): Picture[] {
    const [pictures, setPictures] = useState<Picture[]>([]);
    useEffect(() => {
        getCurated().then((data) => setPictures(data));
    }, []);
    return pictures;
}

const perPage = 40;

export function useSearchPictures(keyword: string): [Picture[], () => void] {
    const [page, setPage] = useState(1);
    const [pictures] = useState<Map<string, Picture>>(new Map());
    const [size, setSize] = useState(pictures.size);
    useEffect(() => {
        searchPexelsPicture({ page, per_page: perPage, query: keyword }).then((pexels) => {
            pexels.map((photo) => pictures.set(photo.imageUrl, photo));
            setSize(pictures.size);
        });
        searchPixabayPicture({ page, per_page: perPage, q: keyword }).then((pixabay) => {
            pixabay.map((photo) => pictures.set(photo.imageUrl, photo));
            setSize(pictures.size);
        });
    }, [page, keyword, pictures, setSize]);
    const fetchMore = useCallback(() => {
        setPage(page + 1);
    }, [page, setPage]);
    const data = useMemo<Picture[]>(() => {
        if (!size) {
            return [];
        }
        return Array.from(pictures.values());
    }, [pictures, size]);
    return [data, fetchMore];
}
