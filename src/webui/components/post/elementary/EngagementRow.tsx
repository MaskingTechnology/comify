
import { Row } from '../../../designsystem/module';
import RatingEngagement from '../../rating/Engagement';
import ReactionEngagement from '../../reaction/Engagement';

export type Props = {
    isRated: boolean;
    ratingCount: number;
    reactionCount: number;
    rateHandler: () => Promise<boolean>;
    reactionHandler: () => void;
};

export default function Component({ isRated, ratingCount, reactionCount, rateHandler, reactionHandler }: Props)
{
    return <Row gap='medium' alignY='center'>
        <RatingEngagement isEngaged={isRated} count={ratingCount} rateHandler={rateHandler} />
        <ReactionEngagement reactionCount={reactionCount} reactionHandler={reactionHandler} />
    </Row>;
}
