import React from 'react';
import cls from 'clsx';
import { useCallback } from 'react';

export const Search = function ({ className, query }: { className?: string; query?: string }) {
    const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            const searchStr = (event.target as any).value;
            window.location.search = `q=${encodeURIComponent(searchStr)}`;
        }
    }, []);
    return (
        <div className={cls('w-2/4', 'h-14', 'rounded-lg', 'bg-white', 'overflow-hidden', className)}>
            <input defaultValue={query} className={cls('w-full', 'h-full', 'p-3', 'outline-none', 'text-lg')} placeholder='搜索免费图片' onKeyDown={onKeyDown} />
        </div>
    );
};
