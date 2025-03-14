
import type { ReactNode } from 'react';

import './Sidebar.css';

type Props = {
    readonly header: ReactNode;
    readonly footer: ReactNode;
    readonly sidebar: ReactNode;
    readonly children: ReactNode;
};

export default function Layout({ header, footer, sidebar, children }: Props)
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
        <footer>
            {footer}
        </footer>
    </div>;
}
