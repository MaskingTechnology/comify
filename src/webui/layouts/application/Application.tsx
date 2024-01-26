
import React from 'react';

import { Ruler } from '../../designsystem/module';

import './Application.css';

export type ApplicationProps = {
    aside: React.ReactNode;
    main: React.ReactNode;
};

export default function Application({ aside, main }: ApplicationProps)
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
