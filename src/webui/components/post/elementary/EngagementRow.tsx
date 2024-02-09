
import { Row } from '../../../designsystem/module';
import CompactNumber from '../../common/CompactNumber';
import RatingIcon from '../../rating/Icon';
import ReactionIcon from '../../reaction/Icon';

export type Props = {
    isRated: boolean;
    ratingCount: number;
    reactionCount: number;
    rateHandler?: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Component({ isRated, ratingCount, reactionCount, rateHandler }: Props)
{
    return <Row gap='medium' alignY='center'>
        <Row gap='small' alignX='left' alignY='center'>
            <RatingIcon isRated={isRated} />
            <CompactNumber value={ratingCount} />
        </Row>
        <Row gap='small' alignX='left' alignY='center'>
            <ReactionIcon />
            <CompactNumber value={reactionCount} />
        </Row>
    </Row>;
}
