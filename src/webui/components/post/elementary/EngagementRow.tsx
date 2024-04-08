
import { Row } from '../../../designsystem/module';
import RatingEngagement from '../../rating/Engagement';
import ReactionEngagement from '../../reaction/Engagement';

export type Props = {
    isRated: boolean;
    ratingCount: number;
    reactionCount: number;
    rateHandler: () => Promise<boolean>;
};

export default function Component({ isRated, ratingCount, reactionCount, rateHandler }: Props)
{
    return <Row gap='medium' alignY='center'>
        <RatingEngagement isEngaged={isRated} count={ratingCount} rateHandler={rateHandler} />
        <ReactionEngagement reactionCount={reactionCount} />
    </Row>;
}
