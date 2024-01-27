
import React from 'react';

import { Ruler } from '../../designsystem/module';

import './Home.css';

export type Props = {
    main: React.ReactNode;
    aside: React.ReactNode;
};

export default function Layout({ main, aside }: Props)
{
    return <div className='ds home-layout'>
        <div className='left'>
            <main>
                {main}
            </main>
        </div>
        <div className='right'>
            <Ruler type='vertical' />
            <aside>
                {aside}
            </aside>
        </div>
    </div>;
}
