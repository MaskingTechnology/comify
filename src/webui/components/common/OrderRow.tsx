
import React from 'react';

import { Row } from '../../designsystem/module';

import OrderSelection from './elements/OrderSelection';

export type Props = {
    selected?: 'recent' | 'popular';
    orderChangeHandler?: (oldKey: string, newKey: string) => void;
};

export default function Component({ selected, orderChangeHandler }: Props)
{
    return <Row alignX='justify'>
        <OrderSelection
            key='creators'
            selected={selected}
            changeHandler={orderChangeHandler}
        />
    </Row>;
}
