
import React from 'react';

import { Row, TextBox } from '../../designsystem/module';

import OrderSelection from './elementary/OrderSelection';

export type Props = {
    selected?: 'recent' | 'popular';
    orderChangeHandler?: (oldKey: string, newKey: string) => void;
    searchChangeHandler?: (newValue: string) => void;
};

export default function Component({ selected, orderChangeHandler, searchChangeHandler }: Props)
{
    function handleSearchChange(value: string)
    {
        if (searchChangeHandler)
        {
            searchChangeHandler(value);
        }
    }

    return <Row alignX='justify' alignY='center'>
        <OrderSelection key='creators' selected={selected} changeHandler={orderChangeHandler} />
        <TextBox name='search' placeholder='Search' size='small' changeHandler={(event) => handleSearchChange(event.target.value)} />
    </Row>;
}
