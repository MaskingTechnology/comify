
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import Image from '^/webui/components/comic/Image';
import { Column, Panel, Row } from '^/webui/designsystem';

import Comment from '../comment/Comment';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';
import DeleteButton from './DeleteButton';

type Props = {
    readonly reaction: AggregatedReactionData;
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
    readonly onRatingClick: (reaction: AggregatedReactionData) => Promise<boolean>;
    readonly onDeleteClick: (relation: AggregatedReactionData) => Promise<void>;
};

export default function Component({ reaction, onFollowClick, onCreatorClick, onRatingClick, onDeleteClick }: Props)
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
                    reaction.creator.self
                        ? <DeleteButton onClick={() => onDeleteClick(reaction)} />
                        : null
                }
            </Row>
        </Column>
    </Panel>;
}
