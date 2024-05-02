
import type ReactionView from '^/domain/reaction/view/ReactionView';
import type RelationView from '^/domain/relation/view/RelationView';

import Image from '^/webui/components/comic/Image';
import { Column, Panel } from '^/webui/designsystem';

import Comment from '../comment/Comment';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';

export type Props = {
    reaction: ReactionView;
    onFollowClick: (relation: RelationView) => Promise<void>;
    onCreatorClick: (relation: RelationView) => void;
    onRatingClick: (reaction: ReactionView) => Promise<boolean>;
};

export default function LargePanel({ reaction, onFollowClick, onCreatorClick, onRatingClick }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={reaction.createdAt}
                relation={reaction.creator}
                onFollowClick={() => onFollowClick(reaction.creator)}
                onCreatorClick={() => onCreatorClick(reaction.creator)}
            />
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
            <RatingEngagement
                isEngaged={reaction.hasRated}
                count={reaction.ratingCount}
                onClick={() => onRatingClick(reaction)}
            />
        </Column>
    </Panel>;
}
