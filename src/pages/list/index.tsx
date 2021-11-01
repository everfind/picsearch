import React, { useState } from 'react';
import cls from 'clsx';
import qs from 'qs';
import { Search } from '../../components/search';
import { PictureList } from '../../components/picture-list';
import { useGetPhotos } from './api';

export default function List() {
    const { q: keyword } = qs.parse(window.location.search.substring(1));
    const [pics, getMore] = useGetPhotos({ keyword: keyword as string });
    return (
        <div className={cls('w-screen', 'h-screen', 'bg-gray-100', 'overflow-y-auto')}>
            <div className={cls('flex', 'flex-row', 'justify-center', 'p-4')}>
                <Search query={keyword as string} />
            </div>
            <p className={cls('m-2', 'text-gray-600')}>您查找的关于“{keyword}”的图片：</p>
            <PictureList pictureList={pics} />
            {!!pics.length && (
                <button className={cls('block', 'w-28')} style={{ margin: '10px auto' }} onClick={() => getMore()}>
                    加载更多
                </button>
            )}
        </div>
    );
}
