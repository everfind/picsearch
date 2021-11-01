import { useCallback, useEffect, useState } from 'react';
import * as Pexels from '../../lib/pexels';
import * as Pixabay from '../../lib/pixabay';
import { Picture } from '../../types';

let page = 1;

export function useGetPhotos({ keyword }: { keyword: string }): [Picture[], () => void] {
    const [photos, setPhotos] = useState<Picture[]>([]);
    const getMore = useCallback(async () => {
        const pexelsResult: Promise<Picture[]> = Pexels.search({ query: keyword, page, per_page: 80 }).then((photos) => {
            return photos.photos.map((tt) => ({ id: tt.id, pageUrl: tt.url, imageUrl: tt.src.large, width: tt.width, height: tt.height }));
        });
        const pixabayResult: Promise<Picture[]> = Pixabay.search({ q: keyword, page, per_page: 80 }).then((photos) => {
            return photos.hits.map((tt) => ({ id: tt.id, pageUrl: tt.pageURL, imageUrl: tt.largeImageURL, width: tt.imageWidth, height: tt.imageHeight }));
        });
        const pictures = await Promise.all([pexelsResult, pixabayResult]).then((results) => results.reduce((calc, item) => calc.concat(item), []));
        console.log(photos, pictures);
        setPhotos([...photos, ...pictures]);
        page++;
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [setPhotos, keyword, photos]);

    useEffect(() => {
        if (page === 1) {
            getMore();
        }
    }, [page]);

    return [photos, getMore];
}
