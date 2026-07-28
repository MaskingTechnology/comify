
import { Row } from '@maskingtech/designsystem';

import OrderSelection from './elements/OrderSelection';

type Props = {
    readonly selected?: 'recent' | 'popular';
    readonly onOrderChange?: (newKey: string) => void;
};

export default function ({ selected, onOrderChange }: Props)
{
    return <Row alignX='justify'>
        <OrderSelection
            key='creators'
            selected={selected}
            onChange={onOrderChange}
        />
    </Row>;
}
