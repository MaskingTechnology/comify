
import React from 'react';
import { Ruler } from '../../designsystem/module';
import './Sidebar.css';

export type Props = {
    sidebar: React.ReactNode;
    children: React.ReactNode;
};

export default function Layout({ sidebar, children }: Props)
{
    return <div className='ds sidebar-layout'>
        <div className='left'>
            <aside>
                {sidebar}
            </aside>
            <Ruler type='vertical' size='medium' />
        </div>
        <div className='right'>
            <main>
                {children}
            </main>
        </div>
    </div>;
}
