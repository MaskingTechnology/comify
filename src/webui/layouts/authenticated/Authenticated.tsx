
import React from 'react';

import './Authenticated.css';
import { Ruler } from '../../designsystem/designsystem.js';

export type AuthenticatedProps = {
    main: React.ReactNode;
    navigation: React.ReactNode;
};

export default function Authenticated(props: AuthenticatedProps)
{
    return <div className='ds authenticated-layout'>
        <nav>
            {props.navigation}
        </nav>
        <div><Ruler type='vertical' /></div>
        <main>
            {props.main}
        </main>
    </div>;
}
