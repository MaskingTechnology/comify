
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Column } from '^/webui/designsystem';

import LargePanel from './LargePanel';

type Props = {
    readonly reactions: AggregatedReactionData[];
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
    readonly onRatingClick: (reaction: AggregatedReactionData) => Promise<boolean>;
    readonly onDeleteClick: (reaction: AggregatedReactionData) => Promise<void>;
    readonly onReactionClick: (reaction: AggregatedReactionData) => void;
};

export default function Component({ reactions, onFollowClick, onCreatorClick, onRatingClick, onDeleteClick, onReactionClick }: Props)
{
    return <Column gap='medium' alignX='stretch'>
        {
            reactions.map(reaction =>
                <LargePanel
                    key={reaction.id}
                    reaction={reaction}
                    onFollowClick={onFollowClick}
                    onCreatorClick={onCreatorClick}
                    onRatingClick={onRatingClick}
                    onDeleteClick={onDeleteClick}
                    onReactionClick={onReactionClick}
                />
            )
        }
    </Column>;
}
