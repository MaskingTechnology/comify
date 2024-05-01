
import { ClickArea, Icon, Row } from '^/webui/designsystem/module';

import OrderSelection from './elementary/OrderSelection';

export type Props = {
    selected?: 'recent' | 'popular';
    reactionHandler: () => void;
    onOrderChange?: (oldKey: string, newKey: string) => void;
};

export default function Component({ selected, onOrderChange, reactionHandler }: Props)
{
    return <Row alignX='justify' alignY='center'>
        <OrderSelection key='ratings' selected={selected} onChange={onOrderChange} />
        <ClickArea onClick={reactionHandler}>
            <Icon type='plus' />
        </ClickArea>
    </Row>;
}
