import React from 'react';
import cls from 'clsx';
import qs from 'qs';
import { Search } from './components/search';
import { CuratedPictures } from './pages/curated';
import { SearchPictures } from './pages/search';
import 'lazysizes';

export default function App() {
  const { q: keyword } = qs.parse(window.location.search.substring(1));

  return (
    <div className={cls('w-screen', 'h-screen', 'bg-gray-100', 'overflow-x-hidden')}>
      <div className={cls('flex', 'flex-row', 'justify-center', 'p-4')}>
        <Search query={keyword as string} />
      </div>
      {!keyword ? <CuratedPictures /> : <SearchPictures keyword={keyword as string} />}
    </div>
  );
}
