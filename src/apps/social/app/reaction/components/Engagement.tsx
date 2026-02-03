
import { ClickArea, Row } from '@maskingtech/designsystem';

import { CompactNumber } from '~/app/common';

import Icon from './elements/Icon';

type Props = {
    readonly reactionCount: number;
    readonly onClick: () => void;
};

export default function Component({ reactionCount, onClick }: Props)
{
    return <ClickArea onClick={onClick}>
        <Row gap='small' alignX='left' alignY='center'>
            <Icon />
            <CompactNumber value={reactionCount} />
        </Row>
    </ClickArea>;
}
