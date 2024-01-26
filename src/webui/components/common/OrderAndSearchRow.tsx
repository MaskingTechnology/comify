
import React from 'react';

import { Row, TextBox } from '../../designsystem/module';

import OrderSelection from './elementary/OrderSelection';

export type Props = {
    selected?: 'recent' | 'popular';
    orderChangeHandler?: (oldKey: string, newKey: string) => void;
    searchChangeHandler?: (oldValue: string, newValue: string) => void;
};

export default function Component({ selected, orderChangeHandler, searchChangeHandler }: Props)
{
    return <Row alignX='justify'>
        <OrderSelection key='creators' selected={selected} changeHandler={orderChangeHandler} />
        <TextBox name='search' placeholder='Search' />
    </Row>;
}
