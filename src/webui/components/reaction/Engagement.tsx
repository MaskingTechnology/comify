
import { Row } from '../../designsystem/module';
import CompactNumber from '../common/CompactNumber';
import Icon from './elementary/Icon';

export type Props = {
    reactionCount: number;
    reactionHandler?: () => Promise<void>;
};

export default function Component({ reactionCount }: Props)
{
    return <Row gap='small' alignX='left' alignY='center'>
        <Icon />
        <CompactNumber value={reactionCount} />
    </Row>;
}
