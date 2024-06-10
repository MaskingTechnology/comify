
import React from 'react';

import './Sidebar.css';

type Props = {
    readonly sidebar: React.ReactNode;
    readonly children: React.ReactNode;
};

export default function Layout({ sidebar, children }: Props)
{
    return <div className='ds sidebar-layout'>
        <header>Header</header>
        <div className='container'>
            <div className="left">
                <aside>
                    {sidebar}
                </aside>
            </div>
            <div className="right">
                <main>
                    {children}
                </main>
            </div>
        </div>
        <footer>Footer</footer>
    </div>;
}
