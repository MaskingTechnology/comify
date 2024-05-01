
import { Row } from '^/webui/designsystem';

import OrderSelection from './elementary/OrderSelection';

export type Props = {
    selected?: 'recent' | 'popular';
    onOrderChange?: (oldKey: string, newKey: string) => void;
};

export default function Component({ selected, onOrderChange }: Props)
{
    return <Row alignX='justify'>
        <OrderSelection
            key='creators'
            selected={selected}
            onChange={onOrderChange}
        />
    </Row>;
}
