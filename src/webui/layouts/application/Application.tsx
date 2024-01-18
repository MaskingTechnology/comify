
import React from 'react';

import { Ruler } from '../../designsystem/module.js';

import './Application.css';

export type ApplicationProps = {
    aside: React.ReactNode;
    main: React.ReactNode;
};

export default function Application(props: ApplicationProps)
{
    return <div className='ds application-layout'>
        <div className='left'>
            <aside>
                {props.aside}
            </aside>
            <Ruler type='vertical' />
        </div>
        <div className='right'>
            <main>
                {props.main}
            </main>
        </div>
    </div>;
}
