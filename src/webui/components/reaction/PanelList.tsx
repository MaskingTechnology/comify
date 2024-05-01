
import type ReactionView from '^/domain/reaction/view/ReactionView';
import type RelationView from '^/domain/relation/view/RelationView';

import { Column } from '^/webui/designsystem/module';

import NoResults from '../common/NoResults';
import LargePanel from './LargePanel';

export type Props = {
    reactions: ReactionView[];
    onFollowClick: (relation: RelationView) => Promise<void>;
    onCreatorClick: (relation: RelationView) => void;
    onRatingClick: (reaction: ReactionView) => Promise<boolean>;
};

export default function Component({ reactions, onFollowClick, onCreatorClick, onRatingClick }: Props)
{
    if (reactions.length === 0)
    {
        return <NoResults />;
    }

    return <Column gap='medium' alignX='stretch'>
        {
            reactions.map(reaction =>
                <LargePanel
                    key={reaction.id}
                    reaction={reaction}
                    onFollowClick={onFollowClick}
                    onCreatorClick={onCreatorClick}
                    onRatingClick={onRatingClick}
                />
            )
        }
    </Column>;
}
