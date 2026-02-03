
import { Row } from '@maskingtech/designsystem';

import { Engagement as RatingEngagement } from '~/app/rating';
import { Engagement as ReactionEngagement } from '~/app/reaction';

type Props = {
    readonly isRated: boolean;
    readonly ratingCount: number;
    readonly reactionCount: number;
    readonly onRatingClick: () => Promise<boolean>;
    readonly onReactionClick: () => void;
};

export default function Component({ isRated, ratingCount, reactionCount, onRatingClick, onReactionClick }: Props)
{
    return <Row gap='medium' alignY='center'>
        <RatingEngagement isEngaged={isRated} count={ratingCount} onClick={onRatingClick} />
        <ReactionEngagement reactionCount={reactionCount} onClick={onReactionClick} />
    </Row>;
}
