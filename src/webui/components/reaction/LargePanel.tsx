
import johnDoe from '../../../domain/authentication/johnDoe';
import toggleRating from '../../../domain/reaction/toggleRating';
import ReactionView from '../../../domain/reaction/view/ReactionView';
import RelationView from '../../../domain/relation/view/RelationView';
import { Column, Panel } from '../../designsystem/module';
import Comment from '../comment/Comment';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';

export type Props = {
    reaction: ReactionView;
    followHandler?: () => Promise<void>;
};

export default function LargePanel({ reaction, followHandler }: Props)
{
    const relationView = new RelationView('1', reaction.creator, reaction.creator);

    const handleFollow = () => 
    {
        if (followHandler)
        {
            return followHandler();
        }

        return Promise.resolve();
    };

    const handleRate = () =>
    {
        return toggleRating(johnDoe, reaction.id);
    };

    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={reaction.createdAt} relation={relationView} followHandler={handleFollow} />
            <Comment text={reaction.comment?.message ?? 'Geen tekst'} />
            <RatingEngagement isEngaged={reaction.hasRated} count={reaction.ratingCount} rateHandler={handleRate} />
        </Column>
    </Panel>;
}