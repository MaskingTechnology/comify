
import ReactionView from '../../../domain/reaction/view/ReactionView';
import { Column } from '../../designsystem/module';
import NoResults from '../common/NoResults';
import LargePanel from './LargePanel';

export type Props = {
    reactions: ReactionView[];
    followHandler: () => Promise<void>;
    profileHandler: () => void;
};

export default function Component({ reactions, followHandler, profileHandler }: Props)
{
    if (reactions === undefined) return null;

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
                    followHandler={followHandler}
                    profileHandler={profileHandler}
                />
            )
        }
    </Column>;
}
