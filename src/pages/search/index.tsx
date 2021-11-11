import React from 'react';
import cls from 'clsx';
import { PictureList } from '../../components/picture-list';
import { Loading } from '../../components/loading';
import { useSearchPictures } from '../../lib/picture';
import { useEffect } from 'react';
import { isInViewPort } from '../../utils';
import { useRef } from 'react';
import { useCallback } from 'react';

export function SearchPictures({ keyword }: { keyword: string }) {
  const [pictures, fetchMore] = useSearchPictures(keyword);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const onScroll = useCallback(() => {
    if (loadMoreRef.current && isInViewPort(loadMoreRef.current)) {
      fetchMore();
    }
  }, [loadMoreRef, fetchMore]);
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
  return (
    <>
      <p className={cls('m-2', 'text-gray-600', { visible: !!keyword, invisible: !keyword })}>您查找的关于“{keyword}”的图片：</p>
      <PictureList pictureList={pictures} />
      {!!pictures.length && <Loading ref={loadMoreRef} />}
    </>
  );
}
