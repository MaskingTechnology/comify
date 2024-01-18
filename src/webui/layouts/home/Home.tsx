
import React from 'react';

import { Ruler } from '../../designsystem/module.js';

import './Home.css';

export type HomeProps = {
    main: React.ReactNode;
    aside: React.ReactNode;
};

export default function Home(props: HomeProps)
{
    return <div className='ds home-layout'>
        <div className='left'>
            <main>
                {props.main}
            </main>
        </div>
        <div className='right'>
            <Ruler type='vertical' />
            <aside>
                {props.aside}
            </aside>
        </div>
    </div>;
}
