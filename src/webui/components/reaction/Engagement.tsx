
import { ClickArea, Row } from '^/webui/designsystem/module';

import CompactNumber from '../common/CompactNumber';
import Icon from './elementary/Icon';

export type Props = {
    reactionCount: number;
    reactionHandler: () => void;
};

export default function Component({ reactionCount, reactionHandler }: Props)
{
    return <ClickArea clickHandler={reactionHandler}>
        <Row gap='small' alignX='left' alignY='center'>
            <Icon />
            <CompactNumber value={reactionCount} />
        </Row>
    </ClickArea>;
}
