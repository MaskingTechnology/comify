
import { ClickArea, Icon, Row } from '../../designsystem/module';
import OrderSelection from './elementary/OrderSelection';

export type Props = {
    selected?: 'recent' | 'popular';
    reactionHandler: () => void;
    orderChangeHandler?: (oldKey: string, newKey: string) => void;
};

export default function Component({ selected, orderChangeHandler, reactionHandler }: Props)
{
    return <Row alignX='justify' alignY='center'>
        <OrderSelection key='ratings' selected={selected} changeHandler={orderChangeHandler} />
        <ClickArea clickHandler={reactionHandler}>
            <Icon type='plus' />
        </ClickArea>
    </Row>;
}
