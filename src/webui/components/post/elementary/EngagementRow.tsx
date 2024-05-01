
import { Row } from '^/webui/designsystem';

import RatingEngagement from '../../rating/Engagement';
import ReactionEngagement from '../../reaction/Engagement';

export type Props = {
    isRated: boolean;
    ratingCount: number;
    reactionCount: number;
    onRatingClick: () => Promise<boolean>;
    onReactionClick: () => void;
};

export default function Component({ isRated, ratingCount, reactionCount, onRatingClick, onReactionClick }: Props)
{
    return <Row gap='medium' alignY='center'>
        <RatingEngagement isEngaged={isRated} count={ratingCount} onClick={onRatingClick} />
        <ReactionEngagement reactionCount={reactionCount} onClick={onReactionClick} />
    </Row>;
}
