
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import Image from '^/webui/components/comic/Image';
import { ClickArea, Column, Panel, Row } from '^/webui/designsystem';

import Comment from '../comment/Comment';
import TimeElapsed from '../relation/TimeElapsed';
import DeleteButton from './DeleteButton';
import EngagementRow from './elementary/EngagementRow';

type Props = {
    readonly reaction: AggregatedReactionData;
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
    readonly onRatingClick: (reaction: AggregatedReactionData) => Promise<boolean>;
    readonly onDeleteClick: (relation: AggregatedReactionData) => Promise<void>;
    readonly onReactionClick: (reaction: AggregatedReactionData) => void;
};

export default function Component({ reaction, onFollowClick, onCreatorClick, onRatingClick, onDeleteClick, onReactionClick }: Props)
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
                reaction.comment !== undefined
                    ?
                    <ClickArea onClick={() => onReactionClick(reaction)} >
                        <Comment text={reaction.comment.message} />
                    </ClickArea>
                    : null
            }
            {
                reaction.comic !== undefined
                    ?
                    <ClickArea onClick={() => onReactionClick(reaction)} >
                        <Image comic={reaction.comic} />
                    </ClickArea>
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
