
import React from 'react';

import { Column } from '../../designsystem/module';

import './Navigation.css';

export type NavigationProps = {
    children?: React.ReactNode;
};

export default function Navigation(props: NavigationProps)
{
    return <nav className='com-navigation'>
        <Column gap='medium' align='top'>
            {props.children}
        </Column>
    </nav>;
}
