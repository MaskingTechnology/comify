
import React from 'react';

import { Column } from '../../../designsystem/module';

import { ItemProps } from './Item';

export type NavigationProps = {
    children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
};

export default function Navigation(props: NavigationProps)
{
    return <nav>
        <Column gap='medium' align='top'>
            {props.children}
        </Column>
    </nav>;
}
