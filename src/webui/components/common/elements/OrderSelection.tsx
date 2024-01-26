
import React from 'react';

import { Dropdown } from '../../../designsystem/module';

export type Props = {
    selected?: 'recent' | 'popular';
    changeHandler?: (oldKey: string, newKey: string) => void;
};

const options = new Map<string, string>();
options.set('recent', 'Most recent');
options.set('popular', 'Most popular');

export default function Element({ selected, changeHandler }: Props)
{
    return <Dropdown
        options={options}
        selected={selected}
        changeHandler={changeHandler}
    />;
}
