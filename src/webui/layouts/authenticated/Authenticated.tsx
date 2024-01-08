
import React from 'react';

import './Authenticated.css';
import { Ruler } from '../../designsystem/designsystem.js';

export type AuthenticatedProps = {
    navigation: React.ReactNode;
    main: React.ReactNode;
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
