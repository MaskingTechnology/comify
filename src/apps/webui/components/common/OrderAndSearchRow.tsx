
import { Row, TextBox } from '@maskingtech/designsystem';
import { useDebouncedValue } from '^/hooks';

import OrderSelection from './elementary/OrderSelection';

type Props = {
    readonly selected?: 'recent' | 'popular';
    readonly onOrderChange: (oldKey: string, newKey: string) => void;
    readonly onSearchChange: (newValue: string) => void;
};

export default function Component({ selected, onOrderChange, onSearchChange }: Props)
{
    const [, setValue] = useDebouncedValue<string>('', onSearchChange);

    return <Row alignX='justify' alignY='center'>
        <OrderSelection key='creators' selected={selected} onChange={onOrderChange} />
        <TextBox name='search' placeholder='Search' size='small' onChange={(event) => setValue(event.target.value)} />
    </Row>;
}
