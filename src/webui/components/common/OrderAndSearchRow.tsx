
import React from 'react';

import { Row, TextBox } from '../../designsystem/module';

import OrderSelection from './elements/OrderSelection';

export type Props = {
    selected?: 'recent' | 'popular';
    orderChangeHandler?: (oldKey: string, newKey: string) => void;
    searchChangeHandler?: (oldValue: string, newValue: string) => void;
};

export default function Component(props: Props)
{
    return <Row alignX='justify'>
        <OrderSelection key='creators' selected={props.selected} changeHandler={props.orderChangeHandler} />
        <TextBox name='search' placeholder='Search' />
    </Row>;
}
