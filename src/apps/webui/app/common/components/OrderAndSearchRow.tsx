
import { Row, TextBox } from '@maskingtech/designsystem';
import { useDebouncedValue } from '@maskingtech/react-toolkit';

import OrderSelection from './elements/OrderSelection';

type Props = {
    readonly selected?: 'recent' | 'popular';
    readonly onOrderChange: (newKey: string) => void;
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
