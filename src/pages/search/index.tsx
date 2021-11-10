import React from 'react';
import cls from 'clsx';
import { PictureList } from '../../components/picture-list';
import { useSearchPictures } from '../../lib/picture';

export function SearchPictures({ keyword }: { keyword: string }) {
    const [pictures, fetchMore] = useSearchPictures(keyword);
    return (
        <>
            <p className={cls('m-2', 'text-gray-600', { visible: !!keyword, invisible: !keyword })}>您查找的关于“{keyword}”的图片：</p>
            <PictureList pictureList={pictures} />
            {!!pictures.length && (
                <button className={cls('block', 'w-28')} style={{ margin: '10px auto' }} onClick={() => fetchMore()}>
                    加载更多
                </button>
            )}
        </>
    );
}
