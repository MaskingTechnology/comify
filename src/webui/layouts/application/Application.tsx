
import React from 'react';

import { Ruler } from '../../designsystem/module';

import './Application.css';

export type Props = {
    aside: React.ReactNode;
    main: React.ReactNode;
};

export default function Layout({ aside, main }: Props)
{
    return <div className='ds application-layout'>
        <div className='left'>
            <aside>
                {aside}
            </aside>
            <Ruler type='vertical' size='medium' />
        </div>
        <div className='right'>
            <main>
                {main}
            </main>
        </div>
    </div>;
}
