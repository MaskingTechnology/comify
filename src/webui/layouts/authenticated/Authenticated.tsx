
import React from 'react';

import './Authenticated.css';
import { Ruler } from '../../designsystem/designsystem.js';

export type AuthenticatedProps = {
    header: React.ReactNode;
    navigation: React.ReactNode;
    main: React.ReactNode;
    footer: React.ReactNode;
};

export default function Authenticated(props: AuthenticatedProps)
{
    return <div className='authenticated-container'>
        <nav className='authenticated-sidebar'>
            <div className='authenticated-sidebar-header'>{props.header}</div>
            <div className='authenticated-sidebar-navigation'>{props.navigation}</div>
            <div className='authenticated-sidebar-footer'>{props.footer}</div>
        </nav>
        <div><Ruler type='vertical' /></div>
        <main>
            {props.main}
        </main>
    </div>;
}
