
import React from 'react';

import { Ruler } from '../../designsystem/module';

import './Home.css';

export type HomeProps = {
    main: React.ReactNode;
    aside: React.ReactNode;
};

export default function Home({ main, aside }: HomeProps)
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
