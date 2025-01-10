
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import Image from '^/webui/components/comic/Image';
import { ClickArea, Column, Panel, Row } from '^/webui/designsystem';

import Comment from '../comment/Comment';
import TimeElapsed from '../relation/TimeElapsed';
import DeleteButton from './DeleteButton';
import EngagementRow from './elementary/EngagementRow';

type Props = {
    readonly reaction: ReactionView;
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onCreatorClick: (relation: RelationView) => void;
    readonly onRatingClick: (reaction: ReactionView) => Promise<boolean>;
    readonly onDeleteClick: (relation: ReactionView) => Promise<void>;
    readonly onReactionClick: (reaction: ReactionView) => void;
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
