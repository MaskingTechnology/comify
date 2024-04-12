
import ReactionView from '../../../domain/reaction/view/ReactionView';
import { Column } from '../../designsystem/module';
import LargePanel from './LargePanel';

export type Props = {
    reactions?: ReactionView[];
};

export default function Component({ reactions }: Props)
{
    if (reactions === undefined) return null;

    return <Column gap='medium' alignX='stretch'>
        {
            reactions.map(reaction =>
                <LargePanel
                    key={reaction.id}
                    reaction={reaction}
                />
            )
        }
    </Column>;
}
