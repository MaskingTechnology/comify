
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Column, Panel, Row } from '^/webui/designsystem';

import Comment from '^/webui/components/comment/Comment';
import Image from '../comic/Image';
import TimeElapsed from '../relation/TimeElapsed';
import DeleteButton from './DeleteButton';
import EngagementRow from './elementary/EngagementRow';

type Props = {
    readonly reaction: AggregatedReactionData;
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
    readonly onRatingClick: (reaction: AggregatedReactionData) => Promise<boolean>;
    readonly onDeleteClick: (reaction: AggregatedReactionData) => Promise<void>;
    readonly onReactionClick: (reaction: AggregatedReactionData) => void;
};

export default function Component({ reaction, onFollowClick, onCreatorClick, onRatingClick, onReactionClick, onDeleteClick }: Props)
{
    return <Panel padding='medium'>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={reaction.createdAt}
                relation={reaction.creator}
                onFollowClick={() => onFollowClick(reaction.creator)}
                onCreatorClick={() => onCreatorClick(reaction.creator)}
            />
            {
                reaction.comic !== undefined
                    ?
                    <Image comic={reaction.comic} />
                    : null
            }
            {
                reaction.comment !== undefined
                    ?
                    <Comment text={reaction.comment.message} />
                    : null
            }
            <Row alignX='justify'>
                <EngagementRow
                    isRated={reaction.hasRated}
                    ratingCount={reaction.ratingCount}
                    reactionCount={reaction.reactionCount}
                    onRatingClick={() => onRatingClick(reaction)}
                    onReactionClick={() => onReactionClick(reaction)}
                />
                {
                    reaction.creator.self
                        ? <DeleteButton onClick={() => onDeleteClick(reaction)} />
                        : null
                }
            </Row>
        </Column>
    </Panel>;
}
