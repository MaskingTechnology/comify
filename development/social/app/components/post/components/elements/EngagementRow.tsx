
import { Row } from '@maskingtech/designsystem';

import { Engagement as RatingEngagement } from '~/components/post.rating';
import { Engagement as ReactionEngagement } from '~/components/post.reaction';

type Props = {
    readonly isRated: boolean;
    readonly ratingCount: number;
    readonly reactionCount: number;
    readonly onRatingClick: () => Promise<boolean>;
    readonly onReactionClick: () => void;
};

export default function ({ isRated, ratingCount, reactionCount, onRatingClick, onReactionClick }: Props)
{
    return <Row gap='medium' alignY='center'>
        <RatingEngagement isEngaged={isRated} count={ratingCount} onClick={onRatingClick} />
        <ReactionEngagement reactionCount={reactionCount} onClick={onReactionClick} />
    </Row>;
}
