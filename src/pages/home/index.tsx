import React from 'react';
import cls from 'clsx';
import { Search } from '../../components/search';

export default function Home() {
    return (
        <div className={cls('bg-home', 'bg-center', 'bg-no-repeat', 'bg-cover', 'w-screen', 'h-screen', 'flex', 'flex-row', 'justify-center', 'items-center')}>
            <Search />
        </div>
    );
}
