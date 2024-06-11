
import React from 'react';

import './Sidebar.css';

type Props = {
    readonly header: React.ReactNode;
    readonly sidebar: React.ReactNode;
    readonly children: React.ReactNode;
};

export default function Layout({ header, sidebar, children }: Props)
{
    return <div className='ds sidebar-layout'>
        <header>
            {header}
        </header>
        <div className='content'>
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
