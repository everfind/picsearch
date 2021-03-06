import React from 'react';
import cls from 'clsx';
import { Picture } from '../../types';

export function PictureList({ pictureList }: { pictureList: Picture[] }) {
  let list;
  if (pictureList.length) {
    list = pictureList.map((pic) => {
      const rate = pic.width / pic.height;
      const baseHeight = 250;
      return (
        <a
          key={pic.id}
          className={cls('relative', 'm-1', 'block')}
          style={{
            width: `${rate * baseHeight}px`,
            flexGrow: rate * baseHeight,
            flexShrink: rate * baseHeight,
            background: '#f6f5fa',
            maxHeight: '50vh',
            maxWidth: `calc(${rate} * 50vh)`,
          }}
          href={pic.pageUrl}
          target='_blank'
          rel='noreferrer'
        >
          <i className={cls('block')} style={{ paddingBottom: `${(1 / rate) * 100}%` }}></i>
          <img className={cls('absolute', 'w-full', 'h-full', 'top-0', 'align-bottom', 'border', 'lazyload')} data-src={pic.imageUrl} alt='' />
        </a>
      );
    });
  } else {
    list = new Array(40).fill(0).map((t, index) => (
      <div
        key={index}
        className={cls('relative', 'm-1', 'block')}
        style={{
          width: `250px`,
          flexGrow: 250,
          flexShrink: 250,
          background: '#f6f5fa',
          maxHeight: '50vh',
          maxWidth: '50vh',
        }}
      >
        <i className={cls('block')} style={{ paddingBottom: `100%` }}></i>
      </div>
    ));
  }
  return <ul className={cls('flex', 'flex-row', 'flex-wrap')}>{list}</ul>;
}
