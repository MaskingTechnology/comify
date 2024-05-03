
import { ClickArea, Row } from '^/webui/designsystem';

import CompactNumber from '../common/CompactNumber';
import Icon from './elementary/Icon';

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
