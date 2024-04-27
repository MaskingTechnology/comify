
import type CreatorView from '^/domain/creator/view/CreatorView';
import type ReactionView from '^/domain/reaction/view/ReactionView';

import { Column } from '^/webui/designsystem/module';

import NoResults from '../common/NoResults';
import LargePanel from './LargePanel';

export type Props = {
    identity?: CreatorView | undefined;
    reactions: ReactionView[];
    followHandler: () => Promise<void>;
    profileHandler: () => void;
    deleteHandler: (reaction: ReactionView) => Promise<void>;
};

export default function Component({ identity, reactions, followHandler, profileHandler, deleteHandler }: Props)
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
                    identity={identity}
                    reaction={reaction}
                    followHandler={followHandler}
                    profileHandler={profileHandler}
                    deleteHandler={deleteHandler}
                />
            )
        }
    </Column>;
}
