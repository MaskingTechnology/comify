
import johnDoe from '../../../domain/authentication/johnDoe';
import create from '../../../domain/reaction/create';
import { ClickArea, Icon, Row } from '../../designsystem/module';
import OrderSelection from './elementary/OrderSelection';

export type Props = {
    selected?: 'recent' | 'popular';
    postId: string;
    orderChangeHandler?: (oldKey: string, newKey: string) => void;
};

export default function Component({ selected, postId, orderChangeHandler }: Props)
{
    const clickHandler = () => 
    {
        create(johnDoe, postId, `Dit is een random comment ${Math.random() * 1000}`);
    };

    return <Row alignX='justify' alignY='center'>
        <OrderSelection key='ratings' selected={selected} changeHandler={orderChangeHandler} />
        <ClickArea clickHandler={clickHandler}>
            <Icon type='star' />
        </ClickArea>
    </Row>;
}
