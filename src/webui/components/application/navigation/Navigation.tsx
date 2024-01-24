
import React from 'react';

import { Column } from '../../../designsystem/module';

import { Props as ItemProps } from './Item';

export type Props = {
    children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
};

export default function Component(props: Props)
{
    return <nav>
        <Column gap='medium'>
            {props.children}
        </Column>
    </nav>;
}
