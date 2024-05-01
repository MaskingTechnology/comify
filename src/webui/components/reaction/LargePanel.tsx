
import type ReactionView from '^/domain/reaction/view/ReactionView';
import type RelationView from '^/domain/relation/view/RelationView';

import Image from '^/webui/components/comic/Image';
import { Column, Panel, Row } from '^/webui/designsystem';

import Comment from '../comment/Comment';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';
import Delete from './Delete';

export type Props = {
    reaction: ReactionView;
    onFollowClick: (relation: RelationView) => Promise<void>;
    onCreatorClick: (relation: RelationView) => void;
    onRatingClick: (reaction: ReactionView) => Promise<boolean>;
    onDeleteClick: (relation: ReactionView) => Promise<void>;
};

export default function LargePanel({ reaction, onFollowClick, onCreatorClick, onRatingClick, onDeleteClick }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={reaction.createdAt}
                relation={reaction.relation}
                onFollowClick={() => onFollowClick(reaction.relation)}
                onCreatorClick={() => onCreatorClick(reaction.relation)}
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
            <Row alignX='justify'>
                <RatingEngagement
                    isEngaged={reaction.hasRated}
                    count={reaction.ratingCount}
                    onClick={() => onRatingClick(reaction)}
                />
                {
                    reaction.relation.self
                        ? <Delete onClick={() => onDeleteClick(reaction)} />
                        : null
                }
            </Row>
        </Column>
    </Panel>;
}
