
import johnDoe from '^/domain/authentication/johnDoe';
import toggleRating from '^/domain/reaction/toggleRating';
import type ReactionView from '^/domain/reaction/view/ReactionView';
import type RelationView from '^/domain/relation/view/RelationView';

import Image from '^/webui/components/comic/Image';
import { Column, Panel } from '^/webui/designsystem/module';

import Comment from '../comment/Comment';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';

export type Props = {
    reaction: ReactionView;
    followHandler: (relation: RelationView) => Promise<void>;
    profileHandler: () => void;
};

export default function LargePanel({ reaction, followHandler, profileHandler }: Props)
{
    const handleRate = () =>
    {
        return toggleRating(johnDoe, reaction.id);
    };

    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={reaction.createdAt} relation={reaction.creator} followHandler={() => followHandler(reaction.creator)} profileHandler={profileHandler} />
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
