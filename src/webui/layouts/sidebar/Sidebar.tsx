
import React from 'react';

import { Ruler } from '^/webui/designsystem';

import './Sidebar.css';

type Props = {
    readonly sidebar: React.ReactNode;
    readonly children: React.ReactNode;
};

export default function Layout({ sidebar, children }: Props)
{
    return <div className='ds sidebar-layout'>
        <div className='left'>
            <aside>
                {sidebar}
            </aside>
            <Ruler direction='vertical' size='medium' />
        </div>
        <div className='right'>
            <main>
                {children}
            </main>
        </div>
    </div>;
}
