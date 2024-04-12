
import { ClickArea, Row } from '../../designsystem/module';
import CompactNumber from '../common/CompactNumber';
import Icon from './elementary/Icon';

export type Props = {
    reactionCount: number;
    reactionHandler?: () => Promise<void>;
};

export default function Component({ reactionCount }: Props)
{
    const handleClick = async () =>
    {
        console.log('Reaction clicked');
    };

    return <ClickArea clickHandler={handleClick}>
        <Row gap='small' alignX='left' alignY='center'>
            <Icon />
            <CompactNumber value={reactionCount} />
        </Row>
    </ClickArea>;
}
