
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { Column } from '^/webui/designsystem';

import LargePanel from './LargePanel';

type Props = {
    readonly reactions: ReactionView[];
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onCreatorClick: (relation: RelationView) => void;
    readonly onRatingClick: (reaction: ReactionView) => Promise<boolean>;
    readonly onDeleteClick: (reaction: ReactionView) => Promise<void>;
    readonly onReactionClick: (reaction: ReactionView) => void;
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
