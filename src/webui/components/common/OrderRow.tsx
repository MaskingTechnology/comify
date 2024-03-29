
import { Row } from '../../designsystem/module';
import OrderSelection from './elementary/OrderSelection';

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
