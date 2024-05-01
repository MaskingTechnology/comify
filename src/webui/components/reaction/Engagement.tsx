
import { ClickArea, Row } from '^/webui/designsystem/module';

import CompactNumber from '../common/CompactNumber';
import Icon from './elementary/Icon';

export type Props = {
    reactionCount: number;
    onClick: () => void;
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
