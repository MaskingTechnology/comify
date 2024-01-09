
import React from 'react';

import { Column } from '../designsystem/designsystem.js';

export type NavigationProps = {
    children?: React.ReactNode;
};

export default function Navigation(props: NavigationProps)
{
    return <Column gap='medium' align='top'>
        {props.children}
    </Column>;
}