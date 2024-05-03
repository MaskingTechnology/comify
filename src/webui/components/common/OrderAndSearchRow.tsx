
import { Row, TextBox } from '^/webui/designsystem';

import OrderSelection from './elementary/OrderSelection';

export type Props = {
    readonly selected?: 'recent' | 'popular';
    readonly onOrderChange?: (oldKey: string, newKey: string) => void;
    readonly onSearchChange?: (newValue: string) => void;
};

export default function Component({ selected, onOrderChange, onSearchChange }: Props)
{
    function handleSearchChange(value: string)
    {
        if (onSearchChange)
        {
            onSearchChange(value);
        }
    }

    return <Row alignX='justify' alignY='center'>
        <OrderSelection key='creators' selected={selected} onChange={onOrderChange} />
        <TextBox name='search' placeholder='Search' size='small' onChange={(event) => handleSearchChange(event.target.value)} />
    </Row>;
}
