
import React from 'react';

import { Dropdown } from '../../designsystem/module';

export type OrderSelectionProps = {
    selected?: 'recent' | 'popular';
    changeHandler?: (oldKey: string, newKey: string) => void;
};

const options = new Map<string, string>();
options.set('recent', 'Most recent');
options.set('popular', 'Most popular');

export default function OrderSelection(props: OrderSelectionProps)
{
    return <Dropdown
        options={options}
        selected={props.selected}
        changeHandler={props.changeHandler}
    />;
}
