
import React from 'react';

import './Home.css';
import { Ruler } from '../../designsystem/designsystem.js';

export type HomeProps = {
    main: React.ReactNode;
    aside: React.ReactNode;
};

export default function Home(props: HomeProps)
{
    return <div className='ds home-layout'>
        <main>
            {props.main}
        </main>
        <div><Ruler type='vertical' /></div>
        <aside>
            {props.aside}
        </aside>
    </div>;
}
