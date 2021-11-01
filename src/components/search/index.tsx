import React from 'react';
import cls from 'clsx';
import { useHistory } from 'react-router';
import { useCallback } from 'react';

export const Search = function ({ className, query }: { className?: string; query?: string }) {
    const history = useHistory();
    const onKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter' || event.keyCode === 13) {
                const searchStr = (event.target as any).value;
                history.push(`/list?q=${encodeURIComponent(searchStr)}`);
            }
        },
        [history],
    );
    return (
        <div className={cls('w-2/4', 'h-14', 'rounded-lg', 'bg-white', 'overflow-hidden', className)}>
            <input defaultValue={query} className={cls('w-full', 'h-full', 'p-3', 'outline-none', 'text-lg')} placeholder='搜索免费图片' onKeyDown={onKeyDown} />
        </div>
    );
};
