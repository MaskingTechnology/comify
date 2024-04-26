
import johnDoe from '^/domain/authentication/johnDoe';
import toggleRating from '^/domain/reaction/toggleRating';
import ReactionView from '^/domain/reaction/view/ReactionView';

import Image from '^/webui/components/comic/Image';
import { Column, Panel } from '^/webui/designsystem/module';

import Comment from '../comment/Comment';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';

export type Props = {
    reaction: ReactionView;
    followHandler: () => Promise<void>;
    profileHandler: () => void;
};

export default function LargePanel({ reaction, followHandler, profileHandler }: Props)
{
    const handleRate = () =>
    {
        return toggleRating(johnDoe, reaction.id);
    };

    console.log('Relation creator', reaction.creator);

    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={reaction.createdAt} relation={reaction.creator} followHandler={followHandler} profileHandler={profileHandler} />
            {
                reaction.comment !== undefined
                    ? <Comment text={reaction.comment.message} />
                    : null
            }
            {
                reaction.comic !== undefined
                    ? <Image comic={reaction.comic} />
                    : null
            }
            <RatingEngagement isEngaged={reaction.hasRated} count={reaction.ratingCount} rateHandler={handleRate} />
        </Column>
    </Panel>;
}
