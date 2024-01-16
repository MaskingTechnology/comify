
import React from 'react';

import './Authenticated.css';
import { Ruler } from '../../designsystem/module.js';

export type AuthenticatedProps = {
    aside: React.ReactNode;
    main: React.ReactNode;
};

export default function Authenticated(props: AuthenticatedProps)
{
    return <div className='ds authenticated-layout'>
        <aside>
            {props.aside}
        </aside>
        <div><Ruler type='vertical' /></div>
        <main>
            {props.main}
        </main>
    </div>;
}
