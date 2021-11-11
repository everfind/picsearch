import React from 'react';
import cls from 'clsx';
import qs from 'qs';
import { Search } from './components/search';
import { CuratedPictures } from './pages/curated';
import { SearchPictures } from './pages/search';
import 'lazysizes';
import './index.css';

export default function App() {
  const { q: keyword } = qs.parse(window.location.search.substring(1));
  const listCls = cls('mt-20', 'content');
  return (
    <>
      <div className={cls('flex', 'flex-row', 'justify-center', 'items-center', 'h-20', 'fixed', 'w-full', 'top-0', 'left-0', 'z-50', 'search')}>
        <Search query={keyword as string} />
      </div>
      {!keyword ? <CuratedPictures className={listCls} /> : <SearchPictures keyword={keyword as string} className={listCls} />}
    </>
  );
}
